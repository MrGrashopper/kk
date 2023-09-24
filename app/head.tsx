'use client'
import {usePathname} from 'next/navigation'
import Head from 'next/head'

type Metadata = {
    title: string
    description: string
}

const MyPage = () => {
    const metadataConfig: Record<string, Metadata> = {
        '/': {
            title: 'Kung Fu Komplett - Berlin',
            description:
                'Willkommen auf der Startseite von Kung Fu Komplett. Hier kannst du effektive Selbstverteidigung, Shaolin Kung Fu und Tai Chi Chuan erlernen.'
        },
        '/training/jkd': {
            title: 'Jeet Kune Do Berlin',
            description:
                'Jeet Kune Do ist kein Stil sondern ein von Bruce Lee entdeckter Weg, auf welchem man mit Hilfe weniger Techniken und Prinzipen seinen eigenen Kampfstil entwickeln kann. Jeet Kune Do versetzt den Verteidiger in die Lage, sich auf der Grundlage gegebener Körpermerkmale (wie Größe, Alter, Geschlecht und Gewicht) optimal zu verteidigen.'
        },
        '/training/shaolin': {
            title: 'Shaolin Kung Fu Berlinplett',
            description:
                'Eine fast 1500 Jahre alte Kampfkunst. Hinsichtlich der Vielfalt reicht keine andere Kampfkunst an Shaolin Kung Fu heran. Es gibt diverse Tierstile sowie verschiedenste Waffenformen. Traditionelle Übungen und moderne Trainingsmethoden ergänzen sich. Schüler finden im Laufe des Trainings heraus, welche Stile und Waffen am besten zu ihnen passen.'
        },
        '/training/taichi': {
            title: 'Tai Chi Chuan Berlin',
            description:
                'Tai Chi Chuan umfasst zwei wesentliche Aspekte: Einerseits Bewegungsmeditation, welche nachgewiesenermaßen der Gesundheitsförderung dient. Andererseits handelt es sich bei Tai Chi Chuan um eine äußerst effektive Kampfkunst. Charakteristisch sind weiche, fließende Bewegungen. Bei der Selbstverteidigung lenkt man die Kraft und Aggression des Angreifers gegen diesen selbst.'
        },
        '/training/kids': {
            title: 'Kung Fu Kindertraining Berlin',
            description:
                'Das Training erfolgt altersgemäß und gleichermaßen fordernd wie fördernd. Optimales Einstiegsalter ist 6 Jahre. Jungen und Mädchen werden zusammen unterrichtet. Die körperliche Leistungsfähigkeit aber auch Willensstärke und Selbstbewusstsein werden mit der Zeit gesteigert. Es werden die Grundlagen des Shaolin-Kung Fu´s sowie der Selbstverteidigung vermittelt'
        },
        '/training/contact': {
            title: 'Trainingszeiten und Kontakt',
            description:
                'Hier findest du unsere Trainingszeiten und Kontakt zu unserem Sportstudio in Berlin-Neukölln. Kontaktiere uns gern via E-Mail.'
        }
    }
    const currentPath = usePathname() || '/'

    const currentMetadata = metadataConfig[currentPath] || metadataConfig['/']

    return (
        <>
            <head>
                <title>{currentMetadata.title}</title>
                <meta
                    name="description"
                    content={currentMetadata.description}
                />
            </head>
        </>
    )
}

export default MyPage
