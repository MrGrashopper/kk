'use client'
import React, {useEffect} from 'react'
import Hero from './components/hero'
import {de} from './locale'
import Section from './components/section'
import Card from './components/card'
import {redirect} from 'next/navigation'

interface Props {
    lang: string
}

const Page = (props: Props) => {
    return (
        <>
            <Hero lang={props.lang} />
            <Section lang={props.lang} />
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="flex justify-center">
                        <Card
                            title={'Jeet Kune Do'}
                            imageSrc={'./jkd_fight1.jpeg'}
                            subTitle={
                                'Entwickle Deinen eigenen Kampfstil und sei in der Lage, Dich jederzeit effektiv zu verteidigen.'
                            }
                            cta={'Weiter'}
                            link={'/training/jkd'}
                        />
                    </div>
                    <div className="flex justify-center">
                        <Card
                            title={'Shaolin Kung Fu'}
                            imageSrc={'./shaolin_sword.jpeg'}
                            subTitle={
                                'Lerne, Dich zu bewegen, wie die legendären Shaolinmönche. Ob mit oder ohne Waffen – verbinde Härte und Schnelligkeit zur Perfektion.'
                            }
                            cta={'Weiter'}
                            link={'/training/jkd'}
                        />
                    </div>
                    <div className="flex justify-center">
                        <Card
                            title={'Tai Chi Chuan'}
                            imageSrc={'./taichi_group_form.jpeg'}
                            subTitle={
                                'Lerne, Dich zu bewegen, wie die legendären Shaolinmönche. Ob mit oder ohne Waffen – verbinde Härte und Schnelligkeit zur Perfektion.'
                            }
                            cta={'Weiter'}
                            link={'/training/jkd'}
                        />
                    </div>
                    <div className="flex justify-center">
                        <Card
                            title={'Kindertraining'}
                            imageSrc={'./shifu_closeup.jpeg'}
                            subTitle={'Früh übt sich was..'}
                            cta={'Weiter'}
                            link={'/training/jkd'}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page
