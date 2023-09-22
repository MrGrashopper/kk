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

const Kids = () => {
    const strings = de
    const images = []

    for (let i = 1; i < 12; i++) {
        // eslint-disable-next-line no-constant-condition
        if (`../galleryKids/kids${i}.jpeg`) {
            images.push({
                src: `../galleryKids/kids${i}.jpeg`,
                alt: `kids training Image ${i}`
            })
        }
    }

    const steps = [
        'Das Training erfolgt altersgemäß und gleichermaßen fordernd wie fördernd. Optimales Einstiegsalter ist 6 Jahre. Jungen und Mädchen werden zusammen unterrichtet. Die körperliche Leistungsfähigkeit aber auch Willensstärke und Selbstbewusstsein werden mit der Zeit gesteigert. Es werden die Grundlagen des Shaolin-Kung Fu´s sowie der Selbstverteidigung vermittelt.',
        'Zu Beginn ist das Training häufig spielerisch. Es werden einfache Schlag-, Tritt- und Falltechniken sowie traditionelle Grundstellungen erlernt. Durch Partnerübungen lernen die Kinder den verantwortungsbewussten und respektvollen Umgang miteinander. Gekämpft wird auf diesem Einstiegsniveau nicht.',
        'Die nächste Stufe des Trainings beinhaltet das Erlernen von einfachen Selbstverteidigungskombinationen. Dazu gehören nun auch leicht zu erlernende Wurf- und Hebeltechniken sowie deren Abwehr. Im Bereich Shaolin Kung Fu werden komplexere Bewegungsabfolgen vermittelt. Das angemessene Verhalten in Notsituationen und eine realistische Einschätzung der eigenen Fähigkeiten werden ebenfalls geschult.',
        'Auf der folgenden Stufe werden leichte Kampfübungen mit wechselnden Partnern durchgeführt. Die Kinder sollen durch Anwendungen erproben, welche Techniken ihnen liegen und welche nicht. Nur, was sicher beherrscht wird, kann im Notfall effektiv angewendet werden. Im Shaolin Kung Fu werden nun traditionelle Formen erlernt, wozu zum Beispiel Tierformen gehören. Je nach Könnensstand und Reifegrad der Kinder können auch die ersten Erfahrungen mit dem Langstock, dem Säbel oder dem Schwert gesammelt werden'
    ]

    return (
        <div className="m-3 lg:m-10">
            <Head>
                <title>Kung Fu für Kinder in Berlin</title>
                <meta
                    name="description"
                    content="Das Training erfolgt altersgemäß und gleichermaßen fordernd wie fördernd. Optimales Einstiegsalter ist 6 Jahre."
                />
                <meta
                    name="keywords"
                    content="Kung Fu für Kinder, Kinder Kampfsport Berlin"
                />
            </Head>
            <HeaderCard
                title={'Kindertraining'}
                description={strings.training.kids.desc1}
                imgSrc={'../galleryKids/kids1.jpeg'}
            />
            <div className="mx-3 lg:mx-10 bg-base-100 pt-12">
                <div className=" w-full ">
                    <div className="items-center text-center">
                        <div className={lalezar.className}>
                            <h3 className="text-3xl text-primary text-center">
                                {strings.training.kids.title2}
                            </h3>
                        </div>
                        <ProgressBar steps={steps} />
                    </div>
                </div>
            </div>
            <div className="mx-3 lg:mx-10 pt-12 pb-6">
                <Section
                    title={strings.training.kids.title3}
                    description={strings.training.kids.desc2}
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
                        {
                            'Das Training macht total Spaß und ganz viele Freunde gefunden'
                        }
                    </p>
                </blockquote>
                <div className="font-light">- Lea -</div>
            </figure>
            <ContactButton />
        </div>
    )
}

export default Kids
