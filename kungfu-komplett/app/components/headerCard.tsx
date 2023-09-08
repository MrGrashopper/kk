import React from 'react'
import {lalezar} from '../styles'
import ContactButton from './contactButton'

interface CardProps {
    lang: string
    title: string
    description: string
    imgSrc: string
}

const headerCard = ({lang, title, description, imgSrc}: CardProps) => {
    return (
        <div className="card lg:card-side mb-12 bg-base-100 shadow-xl">
            <figure className="lg:w-4/6">
                <img src={imgSrc} alt="Album" />
            </figure>
            <div className="card-body lg:w-1/4">
                <div className="bg-white mx-auto py-12">
                    <h1 className="text-3xl text-primary text-center">
                        <div className={lalezar.className}>{title}</div>
                    </h1>
                    <p className="text-xl mt-6">{description}</p>
                </div>
                <ContactButton />
            </div>
        </div>
    )
}

export default headerCard
