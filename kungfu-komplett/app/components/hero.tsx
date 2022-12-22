'use client'
import React, {useEffect, useState} from 'react'
import {de, en} from '../locale'
import {motion, useMotionValue, useTransform} from 'framer-motion'

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
                    <h1 className="text-4xl font-bold text-white drop-shadow-lg shadow-black italic">
                        {strings.homepage.hero.title}
                    </h1>
                    <p className="my-5 font-medium drop-shadow-lg shadow-black">
                        {strings.homepage.hero.description}
                    </p>
                </div>
                <button className="btn btn-secondary border-white/10">
                    {strings.homepage.hero.cta}
                </button>
            </motion.div>
        )
    }
    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage: `url("/shifu_backside.jpeg")`,
                overflow: 'hidden',
            }}>
            <div className="hero-overlay bg-opacity-20"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">{motionTitle()}</div>
            </div>
        </div>
    )
}

export default Hero
