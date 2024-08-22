import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from "framer-motion"
import Link from 'next/link'
import { FloatingDockDemo } from './FloatingDockDemo'
function Header() {
    return (
        <header className='sticky top-0 flex justify-between max-w-7xl mx-auto p-5 z-20 xl:items-center'>
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 1.5,
                }}
            >
                <FloatingDockDemo />
            </motion.div>
            <motion.div
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: 0.5,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 1.5,
                }}
                className='flex items-center pr-5'>
                <Link href={'#contact'} className='-mt-1'>
                    <SocialIcon
                        className='cursor-pointer mb-5'
                        network='email'
                        bgColor='transparent'
                        fgColor='gray'
                    />
                    <p className='uppercase hidden md:inline-flex text-gray-600'>Get in touch</p>
                </Link>
            </motion.div>
        </header>
    )
}

export default Header
