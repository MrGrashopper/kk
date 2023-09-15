'use client'
import React from 'react'
import Hero from './components/hero'
import {de} from './locale'
import Section from './components/section'
import Card from './components/card'
import Team from './components/team'
import ContactButton from './components/contactButton'

const Page = () => {
    const strings = de
    const cardData = [
        {
            title: 'Jeet Kune Do',
            imageSrc: './jkd_fight1.jpeg',
            subTitle:
                'Entwickle Deinen eigenen Kampfstil und sei in der Lage, Dich jederzeit effektiv zu verteidigen.',
            cta: 'Erfahre mehr',
            link: '/training/jkd'
        },
        {
            title: 'Shaolin Kung Fu',
            imageSrc: './shaolin_sword_bg.jpeg',
            subTitle:
                'Lerne, Dich zu bewegen, wie die legendären Shaolinmönche. Verbinde Härte und Schnelligkeit zur Perfektion.',
            cta: 'Erfahre mehr',
            link: '/training/shaolin'
        },
        {
            title: 'Tai Chi Chuan',
            imageSrc: './shaolin_sword.jpeg',
            subTitle:
                'Stärke den Körper auf sanfte Art. Beruhige den Geist. Lerne Achtsamkeit. Lass Deine innere Kraft sowie Deine Bewegungen fließen.',
            cta: 'Erfahre mehr',
            link: '/training/taichi'
        },
        {
            title: 'Kindertraining',
            imageSrc: './galleryKids/kids2.jpeg',
            subTitle:
                'Spielerisch körperliche Fitness, Beweglichkeit und Konzentration fördern und Teil einer Gemeinschaft werden.',
            cta: 'Erfahre mehr',
            link: '/training/kids'
        }
    ]

    return (
        <>
            <Hero />
            <div className="mx-3 md:mx-auto md:container md:my-5">
                <Section
                    title={strings.homepage.section.title}
                    description={strings.homepage.section.description}
                />
            </div>
            <div className="container mx-auto">
                <div className="mx-3 md:mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {cardData.map((card, index) => (
                        <div className="flex justify-center" key={index}>
                            <Card
                                title={card.title}
                                imageSrc={card.imageSrc}
                                subTitle={card.subTitle}
                                cta={card.cta}
                                link={card.link}
                            />
                        </div>
                    ))}
                </div>
                <div className="mx-3 md:mx-auto md:container md:my-5 py-6">
                    <Section
                        title={'Ausbilder'}
                        description={
                            'Für deine optimale Weiterentwicklung im Bereich der Kampfkünste wirst du mit verschiedenen Trainingsmetoden von erfahren Trainern ausgebildet, Trainingsmethodik, Didaktik und Schwerpunkt sind von der Erfahrung des Trainingsleiters unterschiedlich und werden an die sich verändernde Gegebenheiten und Erkentnisse angepasst.'
                        }
                    />
                </div>
                <Team />
                <ContactButton />
            </div>
        </>
    )
}

export default Page
