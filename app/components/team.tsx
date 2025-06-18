import {useState} from 'react'
import {lalezar} from '../styles'

const Team = () => {
    const team = [
        {
            name: 'Großmeister Oliver Gimm',
            cv: [
                '1971 in Berlin geboren',
                '1976 - 1988 verschiedene Vereinsportarten',
                '1988 - 1990 Boxen',
                "1989 Berliner Meister im 'Kraft-Vierkampf der Junioren' und Beginn des Kung Fu-Trainings",
                '1994 Trainerprüfung im Jeet Kune Do und Shaolin Kung Fu',
                '1996 Meisterprüfung bei Shifu Dragoslav Radosavljevic',
                '1997-1999 leitender Fitness-Trainer für Männer- und Frauen-Fitness in der Sportschule Koryo',
                '1999 - 2000 Bundeswehr',
                '2001 - 2003 Staatsexamen in Biologie, Sportwissenschaften und Psychologie',
                '2007 - heute Gymnasiallehrer Sport/Bio/Ethik',
                'Deutscher Meister 2002, 2003 und 2004',
                'Internationaler Deutscher Meister 2003 und 2004',
                'Gewinner des Deutschland-Pokals 2003',
                'Weltmeister WKA 2003',
                'Ernennung zum Bundestrainer für Kung Fu und Wushu der WKA im Dezember 2003',
                'Ernennung zum Bundestrainer für Kung Fu, Wushu und Tai Chi des CDK',
                'Meister:',
                'Dragoslav Radosavljevic (Jeet Kune Do)',
                'Chang Shan Jun (Shaolin Kung Fu)',
                'Zhu Tiancai ( Chenjiagou Tai Chi Chuan)',
                'Jennifer Lee (Chenjiagou Tai Chi Jian Ming [Tai Chi Schwert])',
                'Chen Shiyu (Wudang Schwert)'
            ],
            img: 'oli_profile.jpeg'
        },
        {
            name: 'Meister Daniel M.',
            cv: [
                '1987 in Berlin geboren',
                '1998-1999 Judo',
                '2001-2002 Wing Chun',
                'Seit 2003 Schüler in der Sportschule Koryo Berlin bei Shigung Oliver Gimm',
                '2004 Gewonnene Meisterschaften:',
                ' Hessenmeisterschaft',
                ' Deutschlandpokal',
                ' Thüringenmeisterschaft',
                ' Deutsche Meisterschaft',
                " in den Kategorien 'Softstyle' und 'weapons no music' im Jugendbereich",
                '2009 Trainerprüfung',
                '2009 Abitur',
                '2011 Beginn Studium Physikalische Technik/ Medizinphysik',
                '2013 Selbständig als Kampfsport- & Fitnesstrainer',
                '2014 Ernennung zum Meister (Shifu)',
                '2016 Bachelor of Engeneering Physikalische Technik/ Medizinphysik',
                '2017 - 2021 Software Entwickler',
                '2021 - heute Frontend/ App Entwickler'
            ],
            img: 'daniel_profile.jpeg'
        },
        {
            name: 'Trainingsleiterin Inga',
            cv: [
                '1985 in Aachen geboren',
                '1993 - 2003 Handball',
                '2005 Abitur',
                '2008 Halbmarathon',
                '2011 Diplom Psychologie',
                'seit 2013 Kung Fu Shaolin/Jeet Kune Do bei Meister Oliver Gimm',
                'seit 2019 Tai Chi bei Shigung Oliver Gimm',
                '2019 Training bei Meister Chen Shiyu in Wudang'
            ],
            img: 'inga_profile.jpeg'
        },
        {
            name: 'Trainingsleiter Anil',
            cv: [
                '1997 in Berlin geboren',
                '2009 - 2010 Kickboxen an der Koryo Sportschule',
                '2010 -  Wechsel zu Kung Fu',
                '2020 -  Ausbildung abgeschlossen als Biologielaborant',
                '2021 -  Fachgebundene Hochschulreife',
                '2021 -  Student an der FU Berlin',
                '2022 – Leitet mittwochs das Kinder Kung Fu Training'
            ],
            img: 'anil_profile.jpeg'
        }
    ]
    const [activeStates, setActiveStates] = useState(
        Array(team.length).fill(false)
    )

    const toggleState = (index: number) => {
        const newActiveStates = [...activeStates]
        newActiveStates[index] = !newActiveStates[index]
        setActiveStates(newActiveStates)
    }
    return (
        <div className="pb-12">
            <div className="mx-3 md:mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-start gap-6">
                {team.map((member, index) => {
                    return (
                        <div key={member.name} className="card shadow-xl">
                            <img src={member.img} alt={member.name} />
                            <div className="p-6">
                                <div className="collapse">
                                    <input
                                        type="checkbox"
                                        onChange={() => toggleState(index)}
                                    />
                                    <div className="px-0 collapse-title h-5 text-xl font-medium flex items-center">
                                        <span className={lalezar.className}>
                                            {member.name}
                                        </span>
                                        <label className="swap ml-2">
                                            <button className="bg-secondary h-5 w-5 rounded-full text-base-100 flex items-center justify-center">
                                                <span
                                                    style={{
                                                        position: 'relative',
                                                        bottom: '1px'
                                                    }}>
                                                    {activeStates[index]
                                                        ? '-'
                                                        : '+'}
                                                </span>
                                            </button>
                                        </label>
                                    </div>

                                    <div className="collapse-content px-0 mb-5">
                                        {member.cv.map(entry => {
                                            return <p>{entry}</p>
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Team
