/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { motion } from 'framer-motion'
type Props = {
    directionLeft?: boolean,
}
function Skill({ directionLeft, image }: Props) {
    return (
        <div className='group relative flex'>
            <motion.div className='group relative flex'
                initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 2 }}
            >
                <img
                    src={image} alt=''
                    className='border border-gray-500 p-2 rounded-full h-14 w-14 md:h-24 md:w-24 object-cover '
                />
                <div className='absolute opacity-0 rounded-full group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-14 w-14 md:h-24 md:w-24'>
                    <div className='flex items-center text-center justify-center h-full'>
                        <p className='font-bold text-2xl opacity-100 text-black'></p>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Skill
