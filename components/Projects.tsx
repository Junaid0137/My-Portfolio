/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { motion } from 'framer-motion'
import { ExpandableCardDemo } from './ExpandableCardDemo'
function Projects() {
    const project = [
        {
            name: 'Disney-clone',
            img: 'https://static.wixstatic.com/media/5715ab_b7dbcc762b2a4172aecf06a467a07619~mv2.png',
            des: 'NextJs | JavaScript | Tailwind | Caching',
            link: 'https://disneyhotstar-clone.vercel.app/',
            cnts: () => {
                return (
                    <p>
                        Created a Beautiful UI/UX for my Disney
                        clone using NextJs, Tailwind CSS and
                        Shadcn.
                        <br></br>
                        <br></br>
                        Integrated Cache data with NextJs to
                        optimize Api calls to provide a seamless
                        and fast experience for the users.
                    </p>
                );
            },
        },
        {
            name: 'Amazon-clone',
            img: 'https://static.wixstatic.com/media/5715ab_7b5593095b64499d97091fe3256beadd~mv2.png',
            des: 'ReactJs | WebHooks | FireStore | API | NextJs | NextAuth',
            link: 'https://disneyhotstar-clone.vercel.app/',
            cnts: () => {
                return (
                    <p>
                        This project is a fully functional Amazon clone built using Next.js, NextAuth.js, Tailwind CSS, and Firebase Cloud Firestore. It offers a seamless user experience, including:
                        <br></br>
                        <br></br>
                        Key Features:
                        <br></br>
                        - Robust authentication with NextAuth.js
                        <br></br>
                        - User-friendly shopping cart functionality
                        <br></br>
                        - Cloud Firestore for secure order storage
                        <br></br>
                        - Responsive design powered by Tailwind CSS
                        <br></br>
                        - Seamless integration with Firebase services
                    </p>
                );
            },
        },
        {
            name: 'Uber-clone',
            img: 'https://static.wixstatic.com/media/5715ab_14571ce4974045debb1567228a3a053e~mv2.png',
            des: 'ReactNative | Redux | Google API | ReactNative Navigation',
            link: 'https://disneyhotstar-clone.vercel.app/',
            cnts: () => {
                return (
                    <p>
                        This a Ride Booking App which replicates Uber. Its compatible for both Androd and IOS. Implemented Google Api like<br></br> Distance Matrix Api, Places Api, and Direction Api.
                        <br></br>
                        <br></br>
                        Key Features:
                        <br></br>
                        - Intuitive Interface
                        - Route Optimization
                        - Real-time Navigation
                        - Platform Compatibility
                        - Efficient Navigation
                    </p>
                );
            },
        },
        {
            name: 'Food Delivary App',
            img: 'https://static.wixstatic.com/media/5715ab_859bcde614934cd7bd7e396b018a0e0c~mv2.png',
            des: 'ReactNative | TypeScript | Tailwind | Redux',
            link: 'https://disneyhotstar-clone.vercel.app/',
            cnts: () => {
                return (
                    <p>
                        This is a sleek React Native Food Delivery app designed with a focus on user experience and performance.
                        <br></br>
                        <br></br>
                        Key features include:
                        <br></br>
                        - Sleek Design
                        <br></br>
                        - Seamless Navigation:
                        <br></br>
                        - Dynamic Content
                        <br></br>
                        - Robust State Management using Redux
                        <br></br>
                        - Animated Checkout
                    </p>
                );
            },
        },
    ]
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-[2000px] xl:px-10 justify-evenly mx-auto items-center '>
            <h4 className='absolute top-24 uppercase tracking-[20px] text-2xl text-gray-500'>Projects</h4>
            <div className='relative w-full flex overflow-x-scroll  overflow-y-hidden snap-x snap-mandatory scrollbar scrollbar-none z-20'>
                {project.map((proj, i) => (
                    <div key={i} className='w-full flex-shrink-0 flex flex-col snap-center snap-mandatory space-y-5 items-center justify-center p-20 rounded-lg'>
                        {/* <motion.img
                            initial={{ y: -300, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1.2 }}
                            viewport={{ once: true }}
                            className='w-82 h-52 rounded-lg'
                            src='https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg' alt=''
                        /> */}
                        <motion.div
                            initial={{ y: -100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1.2 }}
                            viewport={{ once: true }}
                        >
                            <ExpandableCardDemo imgs={proj.img} nms={proj.name} des={proj.des} liks={proj.link} cnts={proj.cnts} />
                        </motion.div>
                        <div className='space-y-5 max-w-6xl px-0 md:px-10'>
                            <h4 className='font-semibold text-4xl text-center'>{proj.name}</h4>
                            <p className='text-md text-center'>{proj.des}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className='w-full bg-[#B3BAFF]/10 absolute top-[30%] h-[500px] left-0 -skew-y-12' />
        </motion.div >
    )
}

export default Projects
