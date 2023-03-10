import React from 'react'
import Timetable from '../../components/timetable'
import Section from '../../components/section'
import {de} from '../../locale'

interface Props {
    lang: string
}

const Page = (props: Props) => {
    const strings = props.lang === 'DE' ? de : de
    return (
        <div className="m-3 lg:m-10">
            <Section
                lang={props.lang}
                title={strings.homepage.section2.title}
                description={strings.homepage.section2.description}
            />
            <Timetable />
            <div className="grid grid-cols-1 md:grid-cols-1 mt-10">
                <div className="avatar justify-center md:mt-10">
                    <div className="w-96 rounded-xl border border-base-300">
                        <a
                            target="_blank"
                            href="https://www.google.com/maps/place/Koryo+GYM+Berlin/@52.4840749,13.4315428,17z/data=!4m12!1m6!3m5!1s0x47a84fbab7fa81cb:0xf119814cce665bc9!2sKoryo+GYM+Berlin!8m2!3d52.4840749!4d13.4341186!3m4!1s0x47a84fbab7fa81cb:0xf119814cce665bc9!8m2!3d52.4840749!4d13.4341186"
                        >
                            <img src="/map.png" alt="map" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page
