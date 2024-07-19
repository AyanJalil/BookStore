import React from 'react'
import { useForm } from "react-hook-form";


function ContactMid() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 pt-28'>
        <div className='flex justify-center items-center'>
            <form action="" onSubmit={handleSubmit(onSubmit)} className='w-[500px] text-xl space-y-4'>
                <h3 className='text-4xl text-bold'>Contact</h3>
                <div>
                    <span>Name</span>
                    <br />
                    <input className='border outline-none px-2 py-1 rounded-md mt-2 w-96' type="text" placeholder='Enter Your Name' {...register("text", { required: true })} />
                    <br />
                    {errors.text && <span className='text-sm text-red-600'>This field is required</span>}
                </div>
                <div>
                    <span>Email</span>
                    <br />
                    <input className='border outline-none px-2 py-1 rounded-md mt-2 w-96' type="email" placeholder='Enter Your Email' {...register("email", { required: true })} />
                    <br />
                    {errors.email && <span className='text-sm text-red-600'>This field is required</span>}
                </div>
                <div>
                    <span>Message</span>
                    <br />
                    <textarea className='border outline-none px-2 py-1 rounded-md mt-2 w-96' name="" id="" rows={5} placeholder='Enter Your Message' {...register("textarea", { required: true })}></textarea>
                    <br />
                    {errors.textarea && <span className='text-sm text-red-600'>This field is required</span>}
                </div>
                <div>
                    <input className='px-2 py-1 text-sm text-white bg-blue-500 rounded-md cursor-pointer hover:bg-blue-700 duration:300' type="submit" value={'submit'}/>
                </div>

            </form>
        </div>
    </div>
    </>
  )
}

export default ContactMid
