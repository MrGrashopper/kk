import React from 'react'
import {de} from '../locale'
import {TypeAnimation} from 'react-type-animation'
import {permanentMarker} from '../styles'

interface SectionProps {
    lang: string
    title: string
    description: string
}

const Section = (props: SectionProps) => {
    return (
        <div className="bg-white container mx-auto py-12 px-4">
            <h3 className="text-2xl text-primary text-center">
                <div className={permanentMarker.className}>{props.title}</div>
                <p className="text-xl mt-3">{props.description}</p>
            </h3>
        </div>
    )
}

export default Section
