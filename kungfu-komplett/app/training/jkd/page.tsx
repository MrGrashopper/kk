'use client'
import React from 'react'
import {de} from '../../locale'
import CardCollapse, {HashtagType} from '../../components/cardCollapse'
import {permanentMarker} from '../../styles'
import {motion} from 'framer-motion'
import ProgressBar from '../../components/progressBar'

interface Props {
    lang: string
}

const Page = (props: Props) => {
    const strings = props.lang === 'DE' ? de : de
    const images = []

    for (let i = 0; i < 20; i++) {
        if (`../galleryJKD/JKD${i}.jpeg`) {
            images.push({
                src: `../galleryJKD/JKD${i}.jpeg`,
                alt: `JKD Image ${i}`,
            })
        }
    }

    const text4 = [
        {
            title: strings.training.jkd.title4,
            description: strings.training.jkd.desc4,
        },
    ]

    const motionTitle = (title?: string, text?: string, variant?: boolean) => {
        return (
            <motion.div
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{once: false}}>
                <div className={permanentMarker.className}>
                    <div className={'card-title'}>{title}</div>
                </div>
                {variant && (
                    <ProgressBar
                        steps={[
                            'Basistechniken',
                            'Erste Erfahrung im Kampf',
                            'Fortgeschrittenes Training',
                            'Deinen eigenen Stil etwickeln',
                        ]}
                    />
                )}
                {text && <p className={'text-xl mt-3'}>{text}</p>}
            </motion.div>
        )
    }

    return (
        <div className="m-3 lg:m-10">
            <div className="card lg:card-side shadow-xl">
                <figure>
                    <img src="../jkd_technique_block.jpeg" alt="Album" />
                </figure>
                <div className="card-body">
                    {motionTitle(strings.training.jkd.title1, undefined, true)}
                    <div className="card-actions justify-end"></div>
                </div>
            </div>

            <figure className="mx-auto max-w-screen-md text-center my-10">
                <blockquote>
                    <svg
                        aria-hidden="true"
                        className="w-10 h-10 text-gray-400 dark:text-gray-600"
                        viewBox="0 0 24 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                            fill="currentColor"
                        />
                    </svg>
                    <p className="text-2xl italic font-medium text-gray-900">
                        {strings.training.jkd.desc1}
                    </p>
                </blockquote>
                Shifu O. Gimm
            </figure>

            <div className="carousel h-auto rounded-box my-10">
                {images.map(image => {
                    return (
                        <div className="carousel-item w-5/6 mx-2.5 xl:w-1/3">
                            <img src={image.src} alt={image.alt} />
                        </div>
                    )
                })}
            </div>

            <div className="mb-10">
                <CardCollapse
                    lang={'DE'}
                    texts={text4}
                    hashtag={HashtagType.INFO}
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
                <div className="card lg:card-side bg-base-100 shadow-xl mb-10">
                    <div className="card-body">
                        {motionTitle(
                            strings.training.jkd.title2,
                            strings.training.jkd.desc2
                        )}
                        <div className="card-actions justify-end"></div>
                    </div>
                </div>
                <div className="card lg:card-side bg-base-100 shadow-xl mb-10">
                    <div className="card-body">
                        {motionTitle(
                            strings.training.jkd.title3,
                            strings.training.jkd.desc3
                        )}
                        <div className="card-actions justify-end"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page
