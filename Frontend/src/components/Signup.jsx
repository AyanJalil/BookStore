import React from 'react'
import { Link, useLocation, useNavigate} from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form"
import axios from 'axios'
import toast from "react-hot-toast";

function Signup() {
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = async (data)=>{
    
        const userInfo = {
            fullname: data.fullname,
            email: data.email,
            password: data.password
        }

       await axios.post('http://localhost:4001/user/signup', userInfo)
       .then((res)=>{
            console.log(res.data)
            if(res.data){
                toast.success("signup sucessfully");
                navigate(from, { replace: true });
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            }
        
         localStorage.setItem("Users", JSON.stringify(res.data.user));   

       }).catch((err)=>{
            if(err.response){
                console.log(err);
                toast.error(err.response.data.message);
            }
       })
    };

  return (
    <>
    <div className="flex justify-center items-center h-screen">
    <div className="w-[600px]">
            <div className="modal-box dark:bg-slate-800 dark:text-white">
                <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <Link to="/">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </Link>
                
                

                <h3 className="font-bold text-lg">Signup</h3>
                <div className='space-y-2 mt-2'>
                    <span>Name</span>
                    <br />
                    <input type="text" className='w-80 px-2 py-1 rounded-md outline-none border' placeholder='Enter Your Full Name' {...register("fullname", { required: true })}/>
                    <br />
                    {errors.fullname && <span className='text-sm text-red-600'>This field is required</span>}
                </div>

                <div className='space-y-2 mt-2'>
                    <span>Email</span>
                    <br />
                    <input type="email" className='w-80 px-2 py-1 rounded-md outline-none border' placeholder='Enter Your Email' {...register("email", { required: true })}/>
                    <br />
                    {errors.email && <span className='text-sm text-red-600'>This field is required</span>}
                </div>
                <div className='space-y-2 mt-2'>
                    <span>Password</span>
                    <br />
                    <input type="password" className='w-80 px-2 py-1 rounded-md outline-none border' placeholder='Enter Your Password' {...register("password", { required: true })}/>
                    <br />
                    {errors.password && <span className='text-sm text-red-600'>This field is required</span>}
                </div> 
                <div className='flex justify-around mt-2'>
                    <button className='text-white bg-pink-500 px-2 py-1 rounded-md hover:bg-pink-700 duration:300'>Signup</button>
                    <p>Have Account? 
                    <button onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                    }>
                    <span className='underline text-blue-500 cursor-pointer'>Login</span>
                    </button> </p>
                    <Login/>
                </div>

                </form>
               
            </div>
        </div>
    </div>
    </>
  )
}

export default Signup
