import React from 'react'
import {de} from './constants/german'
import {Inter, Permanent_Marker} from '@next/font/google'

const inter = Inter()
const permanentMarker = Permanent_Marker({weight: '400'})

interface HeroProps {
    strings: any
}

const Hero = (props: HeroProps) => {
    const strings = props.strings
    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage: `url("/bg.jpg")`,
                overflow: 'hidden',
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <div className="mb-5 text-3xl font-bold text-white">
                        <h1 className={permanentMarker.className}>
                            {strings.homepage.hero.title.first.toUpperCase()}
                        </h1>
                    </div>
                    <p className="mb-5 font-semibold text-md">
                        {strings.homepage.hero.description}
                    </p>
                    <button className="btn btn-primary">
                        {strings.homepage.hero.cta}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Hero
