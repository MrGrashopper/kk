'use client'
import {useEffect, useState} from 'react'
import {lalezar} from '../styles'
import EnterMemberArea from './components/memberLogin'
import {Card} from './components/card'
import {
    allTiers,
    decrypt,
    generateLink,
    translateBorderColor,
    translateTier
} from './utils'
import {LoadingSpinner} from './components/loadingSpinner'
import Head from 'next/head'
import {motion} from 'framer-motion'

const MemberPage = () => {
    const [hasAccess, setHasAccess] = useState(false)
    const [tiers, setTiers] = useState<string[]>(['black'])
    const [isLoading, setIsLoading] = useState(true)

    const isTierAccessible = (tier: string) => {
        if (tier === 'black') return true
        return tiers.includes(tier)
    }

    const accessibleTiers = allTiers.filter(
        tier => isTierAccessible(tier) || tier === 'black'
    )
    const nonAccessibleTiers = allTiers.filter(
        tier => !isTierAccessible(tier) && tier !== 'black'
    )

    const sortedAllTiers = [...accessibleTiers, ...nonAccessibleTiers]

    useEffect(() => {
        const tierDataEncrypted = localStorage.getItem('cookie-kk-member')
        if (tierDataEncrypted) {
            const tierDataDecrypted = decrypt(tierDataEncrypted)
            const parsedTiers = JSON.parse(tierDataDecrypted)
            if (
                Array.isArray(parsedTiers) &&
                parsedTiers.length > 0 &&
                parsedTiers[0] !== 'none'
            ) {
                setHasAccess(true)
                setTiers(parsedTiers)
            } else {
                setTiers(['black'])
            }
        }
        setTimeout(() => {
            setIsLoading(false)
        }, 500)
    }, [])

    if (isLoading) {
        return <LoadingSpinner />
    }

    if (!hasAccess) {
        return <EnterMemberArea setHasAccess={setHasAccess} />
    }

    const calculateValue = (accessibleTiers: string[], allTiers: string[]) => {
        const numAccessible = accessibleTiers.length
        const numTotal = allTiers.length
        const value = (numAccessible / numTotal) * 100
        return Math.round(value)
    }

    const value = calculateValue(accessibleTiers, allTiers)

    return (
        <>
            <Head>
                <meta name="robots" content="noindex" />
            </Head>
            <div className="mx-3 md:mx-auto md:container md:my-5">
                <h3 className="mt-24 mb-6 text-3xl text-primary text-center">
                    <div className={lalezar.className}>
                        Nihao, wilkommen in deinem Mitgliederbereich!
                    </div>
                </h3>
                <p className="text-xl text-center text-primary mb-6">
                    Fortschritt:
                </p>
                <motion.div
                    initial={{opacity: 0, y: '-10%'}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.6}}
                    className="flex flex-col items-center justify-center mb-6">
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: 0.4, delay: 0}}
                        className="radial-progress text-secondary border-2 border-primary"
                        style={
                            {'--value': value.toString()} as React.CSSProperties
                        }>
                        {`${value}%`}
                    </motion.div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
                    {sortedAllTiers.map((tier, index) => (
                        <div
                            key={index}
                            className="w-full md:w-1/2 lg:w-1/3 p-4">
                            <Card
                                tier={translateTier(tier)}
                                access={
                                    isTierAccessible(tier) || tier === 'black'
                                }
                                link={generateLink(tier)}
                                color={translateBorderColor(tier)}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default MemberPage
