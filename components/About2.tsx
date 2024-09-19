import React from 'react'

function About2() {
    return (
        <div className='h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl xl:px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-2xl text-gray-500'>About</h3>
            <div>
                <h4 className='text-xl md:text-4xl font-semibold'>Education</h4>
                <p className='text-base text-xs'>
                    Enthusiastic and skilled web developer with expertise in building
                    interactive web applications using
                    modern technologies. Proficient in
                    utilizing React, Nextjs, ReactNative for
                    front-end development, leveraging
                    Tailwind, Figma for sleek and responsive
                    UI designs.
                </p>
            </div>
            <div>
                <h4 className='text-4xl font-semibold'>Certifiactions</h4>
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
        </div>
    )
}

export default About2
