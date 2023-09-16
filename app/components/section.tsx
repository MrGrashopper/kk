import React from 'react'
import {lalezar} from '../styles'

interface SectionProps {
    title: string
    description: string
}

const Section = (props: SectionProps) => {
    return (
        <div className="bg-white mx-auto py-12">
            <h3 className="text-3xl text-primary text-center">
                <div className={lalezar.className}>{props.title}</div>
            </h3>
            <p className="text-xl mt-6">{props.description}</p>
        </div>
    )
}

export default Section
