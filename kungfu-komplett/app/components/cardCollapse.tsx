import React from 'react'
import {de} from '../locale'

type text = {
    title: string
    description: string
}
export enum HashtagType {
    FACT = '#FACT',
    STORY = '#STORY',
    INFO = '#GOOD2KNOW',
}

interface Props {
    lang: string
    texts: Array<text>
    hashtag?: HashtagType
}

const CardCollapse = (props: Props) => {
    const strings = props.lang === 'DE' ? de : de

    return (
        <div className="l">
            {props.texts.map(text => {
                return (
                    <div className="collapse border border-base-300 bg-base-100 rounded-box">
                        <input type="checkbox" className="peer" />
                        <div className="collapse-title text-xl font-medium">
                            {props.hashtag && (
                                <span className="font-bold text-secondary">
                                    {props.hashtag}&nbsp;
                                </span>
                            )}
                            {text.title}
                        </div>
                        <div className="collapse-content">
                            <p className={'mt-3'}>{text.description}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default CardCollapse
