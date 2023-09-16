'use client'
import React from 'react'
import {de} from '../../locale'
import {lalezar} from '../../styles'
import ProgressBar from '../../components/progressBar'
import Section from '../../components/section'
import ContactButton from '../../components/contactButton'
import HeaderCard from '../../components/headerCard'

const Shaolin = () => {
    const strings = de
    const images = []

    for (let i = 1; i < 12; i++) {
        // eslint-disable-next-line no-constant-condition
        if (`../galleryShaolin/shaolin${i}.jpeg`) {
            images.push({
                src: `../galleryShaolin/shaolin${i}.jpeg`,
                alt: `Tai Chi Image ${i}`
            })
        }
    }

    const steps = [
        'Der Schüler erlernt Formen, die sowohl in der Länge, als auch im Schwierigkeitsgrad steigen. Weiterhin werden formenrelevante akrobatische Elemente eingeführt (z. B. Felgrolle, Rad ohne Hände und Schmetterlingstritt).',
        'Wenn der Schüler seine Bewegungen gut kontrollieren kann, beginnt die Ausbildung mit der ersten Waffe. Zur Auswahl stehen dabei die traditionell wichtigsten Waffen Langstock, Säbel, Speer und Schwert. ',
        'Entscheidend in den fortgeschrittenen Formen ist es, die erlernten Techniken nicht nur einzeln, sonden in Kombinationen sauber auszuführen. Alle waffenlosen und Waffenformen umfassen komplexe Bewegungsabfolgen, Sprungtritte und erfordern ein hohes Maß an Flexibilität.'
    ]

    return (
        <div className="m-3 lg:m-10">
            <HeaderCard
                title={'Shaolin Kung Fu'}
                description={strings.training.shaolin.desc1}
                imgSrc={'../shaolin_two_stand.jpeg'}
            />
            <div className="mx-3 lg:mx-10 bg-base-100 pt-12">
                <div className=" w-full ">
                    <div className="items-center text-center">
                        <div className={lalezar.className}>
                            <h3 className="text-3xl text-primary text-center">
                                {strings.training.shaolin.title2}
                            </h3>
                        </div>
                        <ProgressBar steps={steps} />
                    </div>
                </div>
            </div>
            <div className="mx-3 lg:mx-10 pt-12 pb-6">
                <Section
                    title={strings.training.shaolin.title3}
                    description={strings.training.shaolin.desc3}
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
                        {strings.training.shaolin.desc4}
                    </p>
                </blockquote>
                <div className="font-light">- Unbekannt -</div>
            </figure>
            <ContactButton />
        </div>
    )
}

export default Shaolin
