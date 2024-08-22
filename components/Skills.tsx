import React from 'react'
import Skill from './Skill'
import { motion } from 'framer-motion'
function Skills() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className='flex flex-col relative text-center md:text-left md:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center mx-auto items-center '>
            <h4 className='absolute top-24 uppercase tracking-[20px] text-2xl text-gray-500'>Skills</h4>
            <div className='grid grid-cols-4 gap-5'>
                <Skill image='https://cdn0.iconfinder.com/data/icons/logos-brands-in-colors/128/react_color-1024.png' directionLeft={true} />
                <Skill image='https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-html-5-1024.png' directionLeft={true} />
                <Skill image='https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-css-3-1024.png' directionLeft={true} />
                <Skill image='https://cdn-icons-png.freepik.com/512/5968/5968292.png?ga=GA1.1.923769207.1723734250' directionLeft={true} />
                <Skill image='https://logotyp.us/file/next.svg' directionLeft={false} />
                <Skill image='https://logotyp.us/file/typescript.svg' directionLeft={false} />
                <Skill image='https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/71-github-1024.png' directionLeft={false} />
                <Skill image='https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-1024.png' directionLeft={false} />
                <Skill image='https://logowik.com/content/uploads/images/tailwind-css3232.logowik.com.webp' directionLeft={true} />
                <Skill image='https://logowik.com/content/uploads/images/python4089.logowik.com.webp' directionLeft={true} />
                <Skill image='https://logowik.com/content/uploads/images/vercel1868.jpg' directionLeft={true} />
                <Skill image='https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_git-512.png' directionLeft={true} />
                <Skill image='https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-18-1024.png' directionLeft={false} />
                <Skill image='https://images-cdn.openxcell.com/wp-content/uploads/2024/07/25082439/reactnative-inner.svg' directionLeft={false} />
            </div>
        </motion.div>
    )
}

export default Skills
