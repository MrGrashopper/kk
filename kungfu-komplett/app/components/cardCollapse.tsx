'use client'
import React, {useState} from 'react'
import {de} from '../locale'
import {permanentMarker} from '../styles'

type text = {
    title: string
    description: string
}
export enum HashtagType {
    FACT = '#FACT',
    STORY = '#STORY',
    INFO = '#GOOD2KNOW'
}

interface Props {
    lang: string
    texts: Array<text>
    hashtag?: HashtagType
}

const CardCollapse = (props: Props) => {
    const strings = props.lang === 'DE' ? de : de
    const [active, setActive] = useState<boolean>(false)
    return (
        <div className="l">
            {props.texts.map(text => {
                return (
                    <div
                        className="collapse bg-accent rounded-box"
                        onClick={() => {
                            setActive(!active)
                        }}
                    >
                        <input type="checkbox" className="peer" />
                        <div className="collapse-title text-xl font-medium flex flex-row">
                            <div className="flex-1 flex flex-col lg:flex-row">
                                <div className={permanentMarker.className}>
                                    <div className="text-white">
                                        {text.title}
                                    </div>
                                </div>
                            </div>
                            <div className="flex-none font-bold text-base-300">
                                {!active ? '>' : 'v'}
                            </div>
                        </div>
                        <div className="collapse-content">
                            <p className={'mt-3 text-white text-xl'}>
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
