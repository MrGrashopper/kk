import {NextApiRequest, NextApiResponse} from 'next'

type TokenMap = {[key: string]: string}

const tokenToTier: TokenMap = {}

// Initialisierung der Token-Zuordnung
const initializeTokenMap = () => {
    const tokenKeys = [
        'TOKEN_BLACK',
        'TOKEN_GREEN_JKD',
        'TOKEN_BLUE_JKD',
        'TOKEN_YELLOW_JKD',
        'TOKEN_GREEN_SHAOLIN',
        'TOKEN_BLUE_SHAOLIN',
        'TOKEN_YELLOW_SHAOLIN'
    ]

    for (const key of tokenKeys) {
        if (process.env[key]) {
            const tier = key.replace('TOKEN_', '').toLowerCase()
            tokenToTier[process.env[key] as string] = tier
            console.log(`Token für ${tier} ist gesetzt.`)
        } else {
            console.log(`Umweltvariable ${key} ist nicht gesetzt.`)
        }
    }
}

initializeTokenMap()

export default (req: NextApiRequest, res: NextApiResponse) => {
    const tokensString = req.query.tokens as string
    const tokens = tokensString ? tokensString.split(',') : []
    const tiers = tokens
        .map(token => getTierByToken(token.trim()))
        .filter(tier => tier !== 'none')
    console.log('tiers', tiers)
    if (tiers.length > 0) {
        res.status(200).json({tiers})
    } else {
        res.status(401).send('Ungültiger Zugang!')
    }
}

const getTierByToken = (token: string): string => {
    return tokenToTier[token] || 'none'
}
