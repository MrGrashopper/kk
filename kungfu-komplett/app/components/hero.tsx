'use client'
import React from 'react'
import {de, en} from '../locale'
import {motion} from 'framer-motion'
import Link from 'next/link'
import {lalezar} from '../styles'

interface HeroProps {
    lang: string
}

const Hero = (props: HeroProps) => {
    const strings = props.lang === 'DE' ? de : de

    const motionTitle = () => {
        return (
            <motion.div
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{once: false}}>
                <div className="mb-10">
                    <h1 className="text-5xl font-bold text-white drop-shadow-lg shadow-black">
                        <div className={lalezar.className}>
                            {strings.homepage.hero.title}
                        </div>
                    </h1>
                    <p className="my-2.5 font-medium drop-shadow-lg shadow-black">
                        {strings.homepage.hero.description}
                    </p>
                </div>
                <Link href="/training/contact">
                    <button className="btn btn-secondary border-white/10">
                        {strings.homepage.hero.cta}
                    </button>
                </Link>
            </motion.div>
        )
    }
    return (
        <div
            className="hero h-[80vh]"
            style={{
                backgroundImage: `url("/hero_image.jpeg")`,
                overflow: 'hidden'
            }}>
            <div className="hero-overlay bg-opacity-30"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">{motionTitle()}</div>
            </div>
        </div>
    )
}

export default Hero
