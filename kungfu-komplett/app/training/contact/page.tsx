import React from 'react'
import Timetable from '../../components/timetable'
import {de} from '../../locale'
import Link from 'next/link'
import {lalezar} from '../../styles'
import {MotionButton} from '../../components/motionButton'

const Contact = () => {
    const strings = de
    return (
        <div className="m-3 lg:m-10">
            <div className={lalezar.className}>
                <h1 className="text-3xl text-primary text-center pt-12">
                    Trainingszeiten
                </h1>
            </div>
            <Timetable />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-6 lg:px-12">
                <div className="stats stats-vertical lg:stats-horizontal shadow-xl">
                    <div className="stat lg:flex lg:flex-col lg:justify-start">
                        <div className="stat-title">
                            <b>{strings.homepage.section2.title}</b>
                        </div>
                        <div className="stat-value text-2xl">
                            Koryo Gym: <br />
                            Next Gerneration
                        </div>
                        <div className="stat-desc text-base">
                            {strings.homepage.section2.description}
                        </div>
                    </div>

                    <div className="">
                        <div className="stat-figure text-secondary h-full">
                            <a
                                target="_blank"
                                href="https://www.google.com/maps/place/Koryo+GYM+Berlin/@52.4840749,13.4315428,17z/data=!4m12!1m6!3m5!1s0x47a84fbab7fa81cb:0xf119814cce665bc9!2sKoryo+GYM+Berlin!8m2!3d52.4840749!4d13.4341186!3m4!1s0x47a84fbab7fa81cb:0xf119814cce665bc9!8m2!3d52.4840749!4d13.4341186"
                                className="h-full">
                                <img
                                    src="/map.png"
                                    alt="map"
                                    className="w-full h-full object-cover"
                                />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card w-full bg-accent text-neutral-content shadow-xl">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Los geht's!</h2>
                        <p className="mb-5">{strings.contact.ask}</p>
                        <div className="card-actions justify-end">
                            <MotionButton
                                text=" E-MAIL SENDEN"
                                link="mailto:o_gimm@gmx.net"
                            />
                            <MotionButton
                                inverse
                                text=" Koryo Website"
                                link="http://www.koryo-berlin.de"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
