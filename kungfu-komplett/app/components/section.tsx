import React from 'react'
import {de} from '../locale'
import {TypeAnimation} from 'react-type-animation'
import {permanentMarker} from '../styles'

interface SectionProps {
    lang: string
}

const Section = (props: SectionProps) => {
    const strings = props.lang === 'DE' ? de : de
    return (
        <div className="bg-white container mx-auto py-12 px-4">
            <h3 className="text-2xl text-primary text-center">
                <div className={permanentMarker.className}>
                    {strings.homepage.section.title}
                </div>
                <p className="text-xl mt-3">
                    {strings.homepage.section.description}
                </p>
            </h3>
        </div>
    )
}

export default Section
