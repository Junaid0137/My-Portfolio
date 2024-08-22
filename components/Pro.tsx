/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BorderC from './BorderC';
import Image from 'next/image';
import Link from 'next/link';

function Pro() {
    const [text, count] = useTypewriter({
        words: [
            "<Hi, I am Syed Ameer Junaid/>",
            "<Passionate FrontEnd Developer/>",
            "<Love Coding/>",
        ],
        loop: true,
        delaySpeed: 3000,
    });

    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BorderC />
            <img className='h-32 w-32 object-cover rounded-full' src='https://static.wixstatic.com/media/5715ab_aa4659d3a57448159e4db3abce4f41c7~mv2.jpg' alt='randd' />
            <div>
                <h2 className='text-sm uppercase text-gray-500 pb-6 tracking-[15px]'>FrontEnd Developer</h2>
                <h1 className='text-4xl lg:text-5xl font-semibold px-10'>
                    <span >{text}</span>
                    <Cursor cursorColor='#B3BAFF' />
                </h1>
            </div>
            <div className='z-30'>
                <Link href="#about">
                    <button className='px-6 py-2 border border-[#333333] text-gray-500 uppercase text-xs rounded-full tracking-widest transition-all hover:border-[#B3BAFF] hover:text-[#B3BAFF]' >About</button>
                </Link>
                <Link href="#skills">
                    <button className='px-6 py-2 border border-[#333333] text-gray-500 uppercase text-xs rounded-full tracking-widest transition-all hover:border-[#B3BAFF] hover:text-[#B3BAFF]'>Skills</button>
                </Link>
                <Link href="#projects">
                    <button className='px-6 py-2 border border-[#333333] text-gray-500 uppercase text-xs rounded-full tracking-widest transition-all hover:border-[#B3BAFF] hover:text-[#B3BAFF]'>Projects</button>
                </Link>
            </div>
        </div>
    )
}

export default Pro
