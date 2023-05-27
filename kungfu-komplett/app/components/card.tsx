import React from 'react'
import Link from 'next/link'
import {lalezar} from '../styles'

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
                    <div className="card-actions justify-end">
                        <button className="btn btn-secondary">
                            <Link href={props.link}>{props.cta}</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
