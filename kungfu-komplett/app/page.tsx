'use client'
import React from 'react'
import Hero from './components/hero'
import {de} from './locale'
import Section from './components/section'
import Card from './components/card'

interface Props {
    lang: string
}

const Page = (props: Props) => {
    const strings = props.lang === 'DE' ? de : de
    return (
        <>
            <Hero lang={props.lang} />
            <div className="md:my-5">
                <Section
                    lang={props.lang}
                    title={strings.homepage.section.title}
                    description={strings.homepage.section.description}
                />
            </div>
            <div className="container mx-auto">
                <div className="mx-3 md:mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                            imageSrc={'./shaolin_sword_bg.jpeg'}
                            subTitle={
                                'Lerne, Dich zu bewegen, wie die legendären Shaolinmönche. Ob mit oder ohne Waffen – verbinde Härte und Schnelligkeit zur Perfektion.'
                            }
                            cta={'Weiter'}
                            link={'/training/shaolin'}
                        />
                    </div>
                    <div className="flex justify-center">
                        <Card
                            title={'Tai Chi Chuan'}
                            imageSrc={'./shaolin_sword.jpeg'}
                            subTitle={
                                'Stärke den Körper auf sanfte Art. Beruhige den Geist. Lerne Achtsamkeit. Lass Deine innere Kraft sowie Deine Bewegungen fließen.'
                            }
                            cta={'Weiter'}
                            link={'/training/taichi'}
                        />
                    </div>
                    <div className="flex justify-center">
                        <Card
                            title={'Kindertraining'}
                            imageSrc={'./galleryKids/kids2.jpeg'}
                            subTitle={
                                'Spielerisch körperliche Fitness, Beweglichkeit und Konzentration fördern und Teil einer Gemeinschaft werden.'
                            }
                            cta={'Weiter'}
                            link={'/training/kids'}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page
