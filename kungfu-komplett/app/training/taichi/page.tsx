'use client'
import React from 'react'
import {de} from '../../locale'
import {lalezar} from '../../styles'
import ProgressBar from '../../components/progressBar'
import ContactButton from '../../components/contactButton'
import Section from '../../components/section'
import HeaderCard from '../../components/headerCard'

const TaiChi = () => {
    const strings = de
    const images = []

    for (let i = 0; i < 14; i++) {
        // eslint-disable-next-line no-constant-condition
        if (`../galleryTaichi/taichi${i}.jpeg`) {
            images.push({
                src: `../galleryTaichi/taichi${i}.jpeg`,
                alt: `Tai Chi Image ${i}`
            })
        }
    }

    const steps = [
        'Auf  der ersten Stufe werden grundlegende Prinzipien und Techniken vermittelt. Dazu gehören die Zwerchfellatmung genauso wie das aktive Entspannen. Ein sicherer Stand, das Schonen der Gelenke und das ruhige, harmonische Ausführen einfacher Bewegungen werden durch einfache Seidenübungen (Shan Si Gong) geübt. Die Grundlagen der Meditation werden gelegt. Als erste „Form“ erlernt man die in China sehr populäre Ba Duan Jin, eine Bewegungsfolge des Qigong.',
        'In der zweiten Stufe werden die erlernten Techniken verfeinert und ergänzt. Die Atmung wird nun auch bei komplexeren Seidenübungen ungezwungen und Tempo bestimmend eingesetzt. Es erfolgen erste Partnerübungen und die Grundlagen des Tuishu werden vermittelt. Die 24er Bejing-Form (Yang-Stil) kommt aus dem Bereich Taolu dazu, wobei bereits typische Formenelemente erlernt und die Anwendungen erklärt werden. Wer auch den Chen-Stil erlernen oder sich sogar in dieser Richtung spezialisieren möchte, erlernt in dieser Stufe zudem die 13er Chen-Form.',
        'Die dritte Stufe liegt den Schwerpunkt auf Formen und Anwendungen, wobei Elemnte aus den Formen und Techniken Anwendung in der Praxis erprobt werden.'
    ]

    return (
        <div className="m-3 lg:m-10">
            <HeaderCard
                title={'Tai Chi Chuan'}
                description={strings.training.taichi.desc1}
                imgSrc={'../taichi_group_stand.jpeg'}
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
            <div className="mx-3 lg:mx-10 py-12 carousel xl:h-auto rounded-box">
                {images.map((image, i) => {
                    return (
                        <div
                            id={`slide${i}`}
                            className="carousel-item w-5/6 mx-2.5 md:w-1/3">
                            <img src={image.src} alt={image.alt} />
                        </div>
                    )
                })}
            </div>
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
