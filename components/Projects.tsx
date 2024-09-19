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
            name: 'Food Delivary App',
            img: 'https://static.wixstatic.com/media/5715ab_2c57a6af481146879d5c67867e2aa242~mv2.png',
            des: 'ReactNative | TypeScript | Tailwind | Redux',
            link: 'https://github.com/Junaid0137/Food-Delivery-App',
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
        {
            name: 'Uber-clone',
            img: 'https://static.wixstatic.com/media/5715ab_14571ce4974045debb1567228a3a053e~mv2.png',
            des: 'ReactNative | Redux | Google API | ReactNative Navigation',
            link: 'https://github.com/Junaid0137/ReactNative-UberClone',
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
            name: 'News App',
            img: 'https://static.wixstatic.com/media/5715ab_1fb8b86c3108434bb44c56b9233135f5~mv2.png',
            des: 'NextJs | TypeScript | Tailwind | GNews API',
            link: 'https://acowale-test.vercel.app/',
            cnts: () => {
                return (
                    <p>
                        I developed a news aggregation website using Next.js, Tailwind CSS, TypeScript, and the GNews API.
                        <br></br>
                        <br></br>
                        The site features a responsive design, category filtering, and a search functionality that allows users to find specific news articles quickly.
                        <br></br>
                        <br></br>
                        It dynamically fetches the latest headlines in various categories, ensuring seamless performance and a clean, user-friendly interface.
                        <br></br>
                        <br></br>
                        Tailwind CSS was used for styling, while Next.js powers the routing and server-side rendering for optimal performance.
                        <br></br>
                        <br></br>
                    </p>
                );
            },
        },
        {
            name: 'Collaborative Notes',
            img: 'https://static.wixstatic.com/media/5715ab_c265b334f92d4949bb726148dfa52013~mv2.png',
            des: 'NextJs | TypeScript | LiveBlocks | Tailwind | ShadCn | CloudFlare | OpenAI | Clerk',
            link: 'https://collaborative-notes.vercel.app/',
            cnts: () => {
                return (
                    <p>
                        I Developed Collaborative Notes App, a real-time collaboration platform featuring live cursors and rich text editing using Liveblocks.
                        <br></br>
                        <br></br>
                        The app integrates Next.js server and client components, Cloudflare AI Models for chat-to-document translation, and Firebase Firestore for document storage.
                        <br></br>
                        <br></br>
                        Clerk ensures seamless authentication, while ShadCN and Tailwind CSS power the sleek, user-friendly UI.
                        <br></br>
                        <br></br>
                        Built with TypeScript for robust error handling, the app includes elegant dialog prompts and toast notifications, and is deployed via Vercel.
                        <br></br>
                        <br></br>
                    </p>
                );
            },
        },
        {
            name: 'Amazon-clone',
            img: 'https://static.wixstatic.com/media/5715ab_7b5593095b64499d97091fe3256beadd~mv2.png',
            des: 'ReactJs | WebHooks | FireStore | API | NextJs | NextAuth',
            link: 'https://amazon-clone-ashen-ten.vercel.app/',
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
                            <h4 className='font-semibold text-xl md:text-4xl text-center'>{proj.name}</h4>
                            <p className='text-sm md:text-md text-center'>{proj.des}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className='w-full bg-[#B3BAFF]/10 absolute top-[30%] h-[500px] left-0 -skew-y-12' />
        </motion.div >
    )
}

export default Projects
