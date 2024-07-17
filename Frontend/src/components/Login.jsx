import React from 'react'
import {Link} from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from 'axios'
import toast from "react-hot-toast";

function Login() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = async (data)=>{
        const userInfo = {
            email: data.email,
            password: data.password
        }

        await axios.post('http://localhost:4001/user/login', userInfo)
        .then((res)=>{
            console.log(res.data)
            if (res.data) {
                toast.success("Loggedin Successfully");
                document.getElementById("my_modal_3").close();
                setTimeout(() => {
                  window.location.reload();
                  localStorage.setItem("Users", JSON.stringify(res.data.user));
                }, 1000);
              }

        }).catch((err)=>{
            if (err.response) {
                console.log(err);
                toast.error("Error: " + err.response.data.message);
                setTimeout(() => {}, 2000);
              }
       })

    };

  return (
    <>
    <div className=''>
      <dialog id="my_modal_3" className="modal">
            <div className="modal-box dark:bg-slate-800 dark:text-white">
                <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <form method='dialog'></form>
                <Link to="/">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById("my_modal_3").close()}>✕</button>
                </Link>
                

                <h3 className="font-bold text-lg">Login</h3>
                <div className='space-y-2 mt-2'>
                    <span>Email</span>
                    <br />
                    <input type="email" className='w-80 px-2 py-1 rounded-md outline-none border' placeholder='Enter Your Email'  {...register("email", { required: true })}/>
                    <br />
                    {errors.email && <span className='text-sm text-red-600'>This field is required</span>}
                </div>
                <div className='space-y-2 mt-6'>
                    <span>Password</span>
                    <br />
                    <input type="password" className='w-80 px-2 py-1 rounded-md outline-none border' placeholder='Enter Your Password'  {...register("password", { required: true })}/>
                    <br />
                    {errors.password && <span className='text-sm text-red-600'>This field is required</span>}
                </div> 
                <div className='flex justify-around mt-4'>
                    <button className='text-white bg-pink-500 px-2 py-1 rounded-md hover:bg-pink-700 duration:300'>Login</button>
                    <div>
                        <p>Not Registered? 
                        <Link to="/signup">
                        <span className='underline text-blue-500 cursor-pointer'>Signup</span>
                        </Link> </p>
                    </div>
                </div>
                </form>
            </div>
        </dialog>
    </div>
    </>
    
  )
}

export default Login
