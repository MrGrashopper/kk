'use client'
import React from 'react'
import {de} from '../locale'
import {motion} from 'framer-motion'
import Link from 'next/link'
import {lalezar} from '../styles'
import {MotionButton} from './motionButton'

const Hero = () => {
    const strings = de

    const motionTitle = () => {
        return (
            <div className="mb-10">
                <h1 className="text-5xl font-bold text-white drop-shadow-lg shadow-black">
                    <div className={lalezar.className}>
                        {strings.homepage.hero.title}
                    </div>
                </h1>
                <p className="my-2.5 font-medium drop-shadow-lg shadow-black mb-5">
                    {strings.homepage.hero.description}
                </p>
                <MotionButton
                    link="/training/contact"
                    text={strings.homepage.hero.cta}
                />
            </div>
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
