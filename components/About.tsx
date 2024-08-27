/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { motion } from 'framer-motion'
function About() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl xl:px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-2xl text-gray-500'>About</h3>
            <motion.img
                initial={{
                    opacity: 0,
                    x: -100
                }}
                whileInView={{ x: 0, opacity: 1, }}
                transition={{ duration: 1.2 }}
                className=' -mb-20 ml-4 flex-shrink-0 h-56 w-56 rounded-full object-cover md:h-95 md:w-64 md:rounded-lg md:mb-0 xl:h-42 xl:w-42' src='https://camo.githubusercontent.com/1c0c559fc557049d4cd797f1ca922d2971f2d435c47f31e008376be7066e387c/68747470733a2f2f692e67697068792e636f6d2f3369794b484d494b6735565747367148556d2e77656270' alt=''
            />
            <div className='space-y-10 px-10'>
                <h4 className='text-4xl font-semibold'>Here a little things about me</h4>
                <p className='text-base'>
                    Enthusiastic and skilled web developer with expertise in building
                    interactive web applications using
                    modern technologies. Proficient in
                    utilizing React, Nextjs, ReactNative for
                    front-end development, leveraging
                    Tailwind, Figma for sleek and responsive
                    UI designs.
                </p>
            </div>
        </motion.div>
    )
}

export default About
