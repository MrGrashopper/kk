'use client'
import React from 'react'
import ProgressBar from '../../components/progressBar'
import {de} from '../../locale'
import Section from '..//../components/section'
import {lalezar} from '../../styles'
import ContactButton from '../../components/contactButton'
import HeaderCard from '../../components/headerCard'
import {Carousel} from '../../components/carousel'

const JKD = () => {
    const strings = de
    const images = []
    const steps = [
        'In der ersten Stufe lernt der Schüler Grundtechniken wie Schläge, Tritte, Blocks und Fallübungen sowie Grundstellungen und einfache Bewegungskombinationen.',
        'Der Schüler festigt Basistechniken und erlernt Angriffs- und Verteidigungskombinationen, die in kampfnahen Situationen und Freikampf angewendet werden. ',
        'In der dritten Stufe werden Verteidigungstechniken aus dem Wing Chun und Tai Chi Chuan integriert. Zudem wird das Repertoire an Hebeltechniken sowie Würfen erweitert und in die Grundlagen des Waffen- und Bodenkampfes eingeführt.',
        'In der vierten Stufe erprobt der Schüler verschiedene Techniken in der Anwendung. Dabei erfährt er welche Techniken und Taktiken für ihn geeignet sind. Er muss sich gegen mehrere Angreifer (auch bei Verwendung von Hieb-und Stichwaffen) wehren können.'
    ]

    for (let i = 0; i < 18; i++) {
        // eslint-disable-next-line no-constant-condition
        if (`../galleryJKD/JKD${i}.jpeg`) {
            images.push({
                src: `../galleryJKD/JKD${i}.jpeg`,
                alt: `JKD Image ${i}`
            })
        }
    }

    return (
        <div className="m-3 lg:m-10">
            <HeaderCard
                title={'Jeet Kune Do'}
                description={strings.training.jkd.desc5}
                imgSrc={'../jkd_technique_block.jpeg'}
            />
            <div className="mx-3 lg:mx-10 bg-base-100 pt-12">
                <div className=" w-full ">
                    <div className="items-center text-center">
                        <div className={lalezar.className}>
                            <h3 className="text-3xl text-primary text-center">
                                {strings.training.jkd.title4}
                            </h3>
                        </div>
                        <ProgressBar steps={steps} />
                    </div>
                </div>
            </div>
            <div className="mx-3 lg:mx-10 pt-12 pb-6">
                <Section
                    title={strings.training.jkd.title3}
                    description={strings.training.jkd.desc3}
                />
            </div>
            <Carousel images={images} />
            <figure className="mx-auto max-w-screen-md items-center text-center py-12">
                <blockquote>
                    <svg
                        aria-hidden="true"
                        className="w-10 h-10 text-gray-400 dark:text-gray-600"
                        viewBox="0 0 24 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                            fill="#ff002c"
                        />
                    </svg>
                    <p className="text-2xl italic font-medium text-gray-900">
                        {strings.training.jkd.desc2}
                    </p>
                </blockquote>
                <div className="font-light">- Bruce Lee -</div>
            </figure>
            <ContactButton />
        </div>
    )
}

export default JKD
