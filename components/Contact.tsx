import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/16/solid'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

type Inputs = {
    name: string
    email: string
    subject: string
    message: string
}

function Contact() {
    const {
        register,
        handleSubmit,
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        window.location.href = `mailto:ameerjunaid08@gmail.com?subject=${data.subject}&body=Hi, My name is ${data.name}. ${data.message} (${data.email})`
    }
    return (
        <div className='h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl xl:px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-2xl text-gray-500'>Contact</h3>
            <div className='flex flex-col space-y-5 items-center justify-center text-center mt-10'>
                <h3 className='uppercase text-4xl' >Lets Talk</h3>
                <div className='flex space-x-4 items-center'>
                    <PhoneIcon className='h-7 w-7 text-[#B3BAFF]' />
                    <p>+91 9440315784</p>
                </div>
                <div className='flex space-x-4 items-center'>
                    <EnvelopeIcon className='h-7 w-7 text-[#B3BAFF]' />
                    <p>2110030137cse@gmail.com</p>
                </div>
                <div className='flex space-x-4 items-center'>
                    <MapPinIcon className='h-7 w-7 text-[#B3BAFF]' />
                    <p>Hyderabad</p>
                </div>
                <div className='max-w-sm md:max-w-full'>
                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2'>
                        <div className='flex space-x-2'>
                            <input {...register('name')} placeholder='Name' className='outline-none px-6 py-4 w-1/2 border-b bg-gray-500 rounded-md border-[#242424] transition-all focus:border-[#B3BAFF] focus:text-[#B3BAFF] placeholder-slate-400 hover:border-[#B3BAFF]' type='text' />
                            <input {...register('email')} placeholder='Email' className='outline-none px-6 py-4  border-b bg-gray-500 rounded-md border-[#242424] transition-all focus:border-[#B3BAFF] focus:text-[#B3BAFF] placeholder-slate-400 hover:border-[#B3BAFF]' type='email' />
                        </div>
                        <input {...register('subject')} placeholder='Subject' className='outline-none px-6 py-4 border-b bg-gray-500 rounded-md border-[#242424] transition-all focus:border-[#B3BAFF] focus:text-[#B3BAFF] placeholder-slate-400 hover:border-[#B3BAFF]' type='text' />
                        <textarea {...register('message')} placeholder='Message' className='outline-none px-6 py-4 border-b bg-gray-500 rounded-md border-[#242424] transition-all focus:border-[#B3BAFF] focus:text-[#B3BAFF] placeholder-slate-400 hover:border-[#B3BAFF]' />
                        <button className='bg-[#B3BAFF] py-5 text-black font-bold text-lg rounded-md'>submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
