import React from 'react'
import Hero from './Hero'
import {de} from './constants/german'

export enum TLD {
    de = 'de',
    eng = 'eng',
}

const language: string = 'de'
const tld = language === TLD.de ? de : de

const Page = () => {
    return (
        <>
            <Hero strings={tld} />
        </>
    )
}

export default Page
