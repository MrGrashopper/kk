'use client'
import React, {useState} from 'react'
import {lalezar} from '../styles'

type text = {
    title: string
    description: string
}
export enum HashtagType {
    FACT = '#FACT',
    STORY = '#STORY',
    INFO = '#GOOD2KNOW'
}

type Props = {
    lang: string
    texts: Array<text>
    hashtag?: HashtagType
}

const CardCollapse = (props: Props) => {
    const [active, setActive] = useState<boolean>(true)
    return (
        <div className="l">
            {props.texts.map(text => {
                return (
                    <div
                        className={
                            active
                                ? 'collapse bg-primary-content rounded-box border border-secondary shadow-xl collapse-open'
                                : 'collapse bg-primary-content rounded-box border border-secondary shadow-xl collapse-close'
                        }
                        onClick={() => {
                            setActive(!active)
                        }}>
                        <input type="checkbox" className="peer" />
                        <div className="collapse-title text-2xl font-medium flex flex-row">
                            <div className="flex-1 flex flex-col lg:flex-row">
                                <div className={lalezar.className}>
                                    <div className="text-primary">
                                        {text.title}
                                    </div>
                                </div>
                            </div>
                            <div className="flex-none font-bold text-base-300">
                                {!active ? '>' : 'v'}
                            </div>
                        </div>
                        <div className="collapse-content">
                            <p className={'mt-3 text-primary text-xl'}>
                                {text.description}
                            </p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default CardCollapse
