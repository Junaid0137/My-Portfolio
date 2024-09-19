import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/16/solid'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
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
            <h3 className='absolute top-24 uppercase tracking-[20px] text-md md:text-2xl text-gray-500'>Contact</h3>
            <div className='flex flex-col space-y-10 items-center justify-end text-center mt-20 md:mt-0'>
                <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2 }}
                    className='space-y-2'
                >
                    <h3 className='hidden md:inline uppercase text-xl md:text-4xl mt-10' >Lets Talk</h3>
                    <div className='flex flex-col md:flex-row md:space-x-5 space-y-1'>
                        <div className='flex space-x-3 items-center'>
                            <PhoneIcon className='h-7 w-7 text-[#B3BAFF]' />
                            <p>+91 9440315784</p>
                        </div>
                        <div className='flex space-x-3 items-center justify-end'>
                            <EnvelopeIcon className='h-7 w-7 text-[#B3BAFF]' />
                            <p>ameerjunaid08@gmail.com</p>
                        </div>
                        <div className='flex space-x-3 items-center'>
                            <MapPinIcon className='h-7 w-7 text-[#B3BAFF]' />
                            <p>Hyderabad</p>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2 }}
                    className='max-w-sm md:max-w-full p-5 md:p-0'>
                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2'>
                        <div className='flex space-x-2'>
                            <input {...register('name')} placeholder='Name' className='outline-none px-6 py-4 w-40 md:w-1/2 border-b bg-gray-500 rounded-md border-[#242424] transition-all focus:border-[#B3BAFF] focus:text-[#B3BAFF] placeholder-slate-400 hover:border-[#B3BAFF]' type='text' />
                            <input {...register('email')} placeholder='Email' className='outline-none px-6 py-4 w-1/2 border-b bg-gray-500 rounded-md border-[#242424] transition-all focus:border-[#B3BAFF] focus:text-[#B3BAFF] placeholder-slate-400 hover:border-[#B3BAFF]' type='email' />
                        </div>
                        <input {...register('subject')} placeholder='Subject' className='outline-none px-6 py-4 border-b bg-gray-500 rounded-md border-[#242424] transition-all focus:border-[#B3BAFF] focus:text-[#B3BAFF] placeholder-slate-400 hover:border-[#B3BAFF]' type='text' />
                        <textarea {...register('message')} placeholder='Message' className='outline-none px-6 py-4 border-b bg-gray-500 rounded-md border-[#242424] transition-all focus:border-[#B3BAFF] focus:text-[#B3BAFF] placeholder-slate-400 hover:border-[#B3BAFF]' />
                        <button className='bg-[#B3BAFF] py-5 text-black font-bold text-lg rounded-md'>submit</button>
                    </form>
                </motion.div>
            </div>
        </div>
    )
}

export default Contact
