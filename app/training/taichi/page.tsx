'use client'
import React from 'react'
import {de} from '../../locale'
import {lalezar} from '../../styles'
import ProgressBar from '../../components/progressBar'
import ContactButton from '../../components/contactButton'
import Section from '../../components/section'
import HeaderCard from '../../components/headerCard'
import {Carousel} from '../../components/carousel'
import Head from 'next/head'

const TaiChi = () => {
    const strings = de
    const images = []

    for (let i = 0; i < 14; i++) {
        // eslint-disable-next-line no-constant-condition
        if (`/galleryTaichi/taichi${i}.jpeg`) {
            images.push({
                src: `/galleryTaichi/taichi${i}.jpeg`,
                alt: `Tai Chi Image ${i}`
            })
        }
    }

    const steps = [
        'Auf  der ersten Stufe werden grundlegende Prinzipien und Techniken vermittelt. Dazu gehören die Zwerchfellatmung genauso wie das aktive Entspannen. Ein sicherer Stand, das Schonen der Gelenke und das ruhige, harmonische Ausführen einfacher Bewegungen werden durch sogenannte Seidenübungen (Shan Si Gong) erlernt.',
        'In der zweiten Stufe werden Techniken verfeinert und ergänzt. Es erfolgen erste Partnerübungen und die Grundlagen des Tuishu (Stoßende Hände) werden vermittelt. Populäre Tai Chi Formen können erlernt werden.',
        'Die dritte Stufe liegt den Schwerpunkt auf Formen und Anwendungen, wobei Elemente aus den Formen in der Praxis erprobt werden. Spezialisierungen können in den Stilen Chen, Yang und Wudang erfolgen.'
    ]

    return (
        <div className="m-3 lg:m-10">
            <Head>
                <title>Tai Chi Chuan Berlin</title>
                <meta
                    name="description"
                    content="Tai Chi Chuan umfasst zwei wesentliche Aspekte: Einerseits Bewegungsmeditation, welche nachgewiesenermaßen der Gesundheitsförderung dient."
                />
                <meta
                    name="keywords"
                    content="Tai Chi, Tai Chi Berlin Neukölln, Chi Gong Berlin"
                />
            </Head>
            <HeaderCard
                title={'Tai Chi Chuan'}
                description={strings.training.taichi.desc1}
                imgSrc={'/taichi_group_stand.jpeg'}
            />
            <div className="mx-3 lg:mx-10 bg-base-100 pt-12">
                <div className=" w-full ">
                    <div className="items-center text-center">
                        <div className={lalezar.className}>
                            <h3 className="text-3xl text-primary text-center">
                                {strings.training.taichi.title2}
                            </h3>
                        </div>
                        <ProgressBar steps={steps} />
                    </div>
                </div>
            </div>
            <div className="mx-3 lg:mx-10 pb-6">
                <Section
                    title={strings.training.taichi.title3}
                    description={strings.training.taichi.desc3}
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
                        {strings.training.taichi.desc5}
                    </p>
                </blockquote>
                <div className="font-light">- Yang Chengfu -</div>
            </figure>
            <ContactButton />
        </div>
    )
}

export default TaiChi
