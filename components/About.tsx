/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
function About() {
    return (
        <motion.div
            className='h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl xl:px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-2xl text-gray-500'>About</h3>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
                className='space-y-10'>
                <div className='mx-auto'>
                    <h4 className='text-xl md:text-4xl font-semibold text-center mt-10 -mb-5'>Here a little things about me</h4>
                    <p className='text-sm p-10 -mb-10 md:mx-10 '>
                        Enthusiastic and skilled web developer with expertise in building
                        interactive web applications using
                        modern technologies. Proficient in
                        utilizing React, Nextjs, ReactNative for
                        front-end development, leveraging
                        Tailwind, Figma for sleek and responsive
                        UI designs.
                    </p>
                </div>
                <div className='flex flex-row justify-between mx-auto max-w-4xl'>
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 2 }}
                        className=''>
                        <h4 className='text-xl md:text-4xl font-semibold mb-5 md:mb-10 text-center'>Education</h4>
                        <div className='flex flex-col items-center space-y-2 md:-mt-5 '>
                            <img src='https://klh.edu.in/admissions/img/logo3.png' alt='' className='w-15 h-10' />
                            <p className='text-xs md:text-base'>
                                KL University Hyderabad
                            </p>
                            <p className='text-xs md:text-base'>
                                Btech. Computer Science and Engineering
                            </p>
                            <p className='text-xs md:text-base'>
                                GPA - 9.39
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 2 }}
                        className=''>
                        <h4 className='text-xl md:text-4xl font-semibold'>Certifiactions</h4>
                        <div className='items-center justify-center mx-auto'>
                            <Link href={'https://www.credly.com/badges/21426f9f-dad8-41f5-a93b-bd729d5ba1fb/public_url'} >
                                <img src='https://upload.wikimedia.org/wikipedia/commons/7/79/Red_Hat_Logo_2019.svg' alt='' className='w-28 h-15 ml-4 md:ml-0 mt-5' />
                            </Link>
                            <Link href={'https://www.credly.com/badges/18332bab-e3b0-411e-b971-b2685d418f83/public_url'}>
                                <img src='https://download.logo.wine/logo/Google_Cloud_Platform/Google_Cloud_Platform-Logo.wine.png' alt='' className='w-44 h-30 -mt-5 md:-ml-3' />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </motion.div >
    )
}

export default About
