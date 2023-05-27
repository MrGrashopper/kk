import React from 'react'
import {de} from '../locale'
import {TypeAnimation} from 'react-type-animation'
import {lalezar} from '../styles'

interface SectionProps {
    lang: string
    title: string
    description: string
}

const Section = (props: SectionProps) => {
    return (
        <div className="bg-white container mx-auto py-12 px-4">
            <h3 className="text-3xl text-primary text-center">
                <div className={lalezar.className}>{props.title}</div>
            </h3>
            <p className="text-xl mt-3">{props.description}</p>
        </div>
    )
}

export default Section
