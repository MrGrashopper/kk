'use client'
import {useEffect, useState} from 'react'
import {lalezar} from '../styles'
import EnterMemberArea from './components/memberLogin'
import {Card} from './components/card'
import {allTiers, translateBorderColor, translateTier} from './utils'
import {NextApiRequest} from 'next'
import {LoadingSpinner} from './components/loadingSpinner'

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
        const tierData = localStorage.getItem('cookie-kk-member')
        const parsedTiers = tierData ? JSON.parse(tierData) : ['none']

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
        setIsLoading(false)
    }, [])

    if (isLoading) {
        return <LoadingSpinner />
    }

    if (!hasAccess) {
        return <EnterMemberArea setHasAccess={setHasAccess} />
    }

    return (
        <div className="mx-3 md:mx-auto md:container md:my-5">
            <h3 className="mt-24 mb-12 text-3xl text-primary text-center">
                <div className={lalezar.className}>
                    Nihao, wilkommen in deinem Mitgliederbereich!
                </div>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
                {sortedAllTiers.map((tier, index) => (
                    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                        <Card
                            key={index}
                            tier={translateTier(tier)}
                            access={isTierAccessible(tier) || tier === 'black'}
                            link=""
                            color={translateBorderColor(tier)}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MemberPage

export async function getServerProps({req}: {req: NextApiRequest}) {
    const cookies = req.cookies
    const tierData = cookies['cookie-kk-member'] || 'none'

    let parsedTiers
    try {
        parsedTiers = JSON.parse(tierData)
    } catch {
        parsedTiers = ['none']
    }

    if (
        Array.isArray(parsedTiers) &&
        parsedTiers.length > 0 &&
        parsedTiers[0] !== 'none'
    ) {
        return {props: {tiers: parsedTiers}}
    } else {
        return {
            redirect: {
                destination: '/no-access',
                permanent: false
            }
        }
    }
}
