import {useState} from 'react'
import {lalezar} from '../styles'

const Team = () => {
    const team = [
        {
            name: 'Shigung Oliver Gimm',
            cv: [
                '1971 in Berlin geboren',
                'mit 5 Jahren im ersten Sportverein (Schwimmen)',
                '1981 Wechsel zum Wasserball und Leichtathletik',
                'ab 1986 außerdem Kraftsport',
                '1988 - 1990 Boxen',
                "1989 Berliner Meister im 'Kraft-Vierkampf der Junioren' und Beginn des Kung Fu-Trainings",
                '1991 Wechsel zur Sportschule Koryo',
                '1992 Abitur',
                '1994 Trainerprüfung im Jeet Kune Do und Süd-Shaolin',
                '1996 Großmeisterprüfung bei Sifu Dragoslav Radosavljevic',
                '1997-1999 leitender Fitness-Trainer für Männer- und Frauen-Fitness in der Sportschule Koryo',
                '1999 - 2000 Bundeswehr',
                '2001 1. Staatsexamen in Sportwissenschaften (Schwerpunkte: Sportmedizin, Sportpsychologie, Trainingslehre)',
                '2002 Staatsexamen in Erziehungswissenschaften und Psychologie',
                '2003 Staatsexamen in Biologie',
                '2006 2. Staatsexamen in Biologie und Sport',
                '2007 - heute Gymnasiallehrer Sport/Bio/Ethik',
                'Deutscher Meister 2002',
                'Deutscher Meister 2003',
                'Deutscher Meister 2004',
                'Internationaler Deutscher Meister 2003',
                'Internationaler Deutscher Meister 2004',
                'Gewinner des Deutschland-Pokals 2003',
                'Weltmeister 2003',
                'Ernennung zum Bundestrainer für Kung Fu und Wushu der WKA im Dezember 2003',
                'Ernennung zum Bundestrainer für Kung Fu, Wushu und Tai Chi des CDK',
                '2005 Austritt aus der WKA und dem CDK',
                'Meister:',
                'Dragoslav Radosavljevic (Jeet Kune Do)',
                'Chang Shan Jun (Shaolin Kung Fu)',
                'Zhu Tiancai ( Chenjiagou Tai Chi Chuan)',
                'Jennifer Lee (Chenjiagou Tai Chi Jian Ming [Tai Chi Schwert])'
            ],
            img: 'gimm_tai_chi_sword.jpeg'
        },
        {
            name: 'Shifu Daniel Mikolai',
            cv: [
                '1987 in Berlin geboren',
                '1998-1999 Judo',
                '2001-2002 Wing Chun',
                'Seit 2003 Schüler in der Sportschule Koryo Berlin bei Shifu Oliver Gimm',
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
            img: 'gimm_tai_chi_sword.jpeg'
        },
        {
            name: 'Shije Inga',
            cv: [
                '1987 in Berlin geboren',
                '1998-1999 Judo',
                '2001-2002 Wing Chun',
                'Seit 2003 Schüler in der Sportschule Koryo Berlin bei Shifu Oliver Gimm',
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
            img: 'gimm_tai_chi_sword.jpeg'
        },
        {
            name: 'Shihing Ano',
            cv: [
                '1987 in Berlin geboren',
                '1998-1999 Judo',
                '2001-2002 Wing Chun',
                'Seit 2003 Schüler in der Sportschule Koryo Berlin bei Shifu Oliver Gimm',
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
            img: 'gimm_tai_chi_sword.jpeg'
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
            <div className="mx-3 md:mx-auto grid grid-cols-1 md:grid-cols-4 items-start gap-6">
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
                                    <div className="px-0 collapse-title text-xl font-medium flex items-center">
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

                                    <div className="collapse-content px-0">
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
