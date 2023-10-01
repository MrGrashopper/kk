'use client'
import React from 'react'
import Hero from './components/hero'
import {de} from './locale'
import Section from './components/section'
import Card from './components/card'
import Team from './components/team'
import ContactButton from './components/contactButton'
import Head from 'next/head'

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
                'Bewege Dich wie die legendären Shaolinmönche. Verbinde Härte und Schnelligkeit zur Perfektion.',
            cta: 'Erfahre mehr',
            link: '/training/shaolin'
        },
        {
            title: 'Tai Chi Chuan',
            imageSrc: './taichi_sword.jpeg',
            subTitle:
                'Trainiere Körper und Geist auf sanfte Art mit fließenden Bewegungen. Schöpfe Kraft aus deinem Inneren.',
            cta: 'Erfahre mehr',
            link: '/training/taichi'
        },
        {
            title: 'Kindertraining',
            imageSrc: './galleryKids/kids2.jpeg',
            subTitle:
                'Auf meist spielerische Art werden Fitness, Disziplin und Selbstbewusstsein geschult. Miteinander, nicht gegeneinander.',
            cta: 'Erfahre mehr',
            link: '/training/kids'
        }
    ]

    return (
        <>
            <Head>
                <title>
                    Jeet Kune Do, Shaolin Kung Fu und Tai Chi Cuan in Berlin
                </title>
                <meta
                    name="description"
                    content="Lerne im Jeet Kune Do die für Dich beste Art der Selbstverteidigung. Trainiere traditionelles Shaolin Kung Fu mit und ohne Waffen. Verbinde Bewegungsmeditation und Kampfkunst im Tai Chi Chuan. Lege deinen eigenen Schwerpunkt fest."
                />
                <meta
                    name="keywords"
                    content="Jeet Kune Do, Selbstverteidigung Berlin, Martial Arts Berlin, Bruce Lee, Shaolin Kung Fu Berlin, Tai Chi Chuan Berlin, Neukölln"
                />
            </Head>
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
                            'Für Deine optimale Entwicklung im Bereich der Kampfkünste stehen Dir verschiedene Trainer zur Verfügung. Im Laufe der Jahre hat sich jeder Trainer auf verschiedene Bereiche spezialisiert, was Dir ein abwechslungsreiches und individuelles Training ermöglicht. '
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
