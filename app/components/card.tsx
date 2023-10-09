import React from 'react'
import {lalezar} from '../styles'
import {MotionButton} from './motionButton'

interface CardProp {
    title: string
    subTitle: string
    imageSrc: string
    cta?: string
    link: string
}

const Card = (props: CardProp) => {
    return (
        <div className="flex justify-center">
            <div className="card bg-base-100 shadow-xl">
                <figure>
                    <img src={props.imageSrc} alt={props.title} />
                </figure>
                <div className="card-body">
                    <div className="text-xl">
                        <h2 className={lalezar.className}>{props.title}</h2>
                    </div>
                    <p>{props.subTitle}</p>
                    <div className="card-actions justify-end mt-5">
                        <MotionButton link={props.link} text={props.cta} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
