import React from 'react'
import {de} from '../locale'
import {TypeAnimation} from 'react-type-animation'
import {lalezar} from '../styles'
import ContactButton from './contactButton'

interface SectionProps {
    lang: string
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
