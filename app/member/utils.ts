import crypto from 'crypto'

type TokenMap = {[key: string]: string}

type EnvType = {[key: string]: string | undefined} & {
    NEXT_PUBLIC_TOKEN_BLACK: string | undefined
    NEXT_PUBLIC_TOKEN_GREEN_JKD: string | undefined
    NEXT_PUBLIC_TOKEN_BLUE_JKD: string | undefined
    NEXT_PUBLIC_TOKEN_YELLOW_JKD: string | undefined
    NEXT_PUBLIC_TOKEN_GREEN_SHAOLIN: string | undefined
    NEXT_PUBLIC_TOKEN_BLUE_SHAOLIN: string | undefined
    NEXT_PUBLIC_TOKEN_YELLOW_SHAOLIN: string | undefined
}

export const allTiers = [
    'black',
    'green_jkd',
    'blue_jkd',
    'yellow_jkd',
    'green_shaolin',
    'blue_shaolin',
    'yellow_shaolin'
]

export const colorOrder = ['black', 'green', 'blue', 'yellow']

export const sortTiersByColor = (tierA: string, tierB: string) => {
    const getPriority = (tier: string) => {
        const color = tier.split('_')[0] // Extrahiert die Farbe aus dem String
        return colorOrder.indexOf(color)
    }

    const priorityA = getPriority(tierA)
    const priorityB = getPriority(tierB)

    return priorityA - priorityB
}

export const translateTier = (tier: string) => {
    switch (tier) {
        case 'black':
            return 'schwarz'
        case 'green_jkd':
            return 'grün JKD'
        case 'blue_jkd':
            return 'blau JKD'
        case 'yellow_jkd':
            return 'gelb JKD'
        case 'green_shaolin':
            return 'grün shaolin'
        case 'blue_shaolin':
            return 'blau shaolin'
        case 'yellow_shaolin':
            return 'gelb shaolin'
        default:
            return 'schwarz'
    }
}

export const translateBorderColor = (tier: string) => {
    switch (tier) {
        case 'black':
            return 'border-black'
        case 'green_jkd':
        case 'green_shaolin':
            return 'border-green'
        case 'blue_jkd':
        case 'blue_shaolin':
            return 'border-blue'
        case 'yellow_jkd':
        case 'yellow_shaolin':
            return 'border-yellow'
        default:
            return 'border-black'
    }
}

export const setEncryptedCookie = (cookieName: string, tiers: string[]) => {
    const encryptedTiers = encrypt(JSON.stringify(tiers))
    localStorage.setItem(cookieName, encryptedTiers)
}

export const encrypt = (text: string) => {
    const cipher = crypto.createCipher(
        'aes-256-cbc',
        'Your 32 char secret here'
    )
    let encrypted = cipher.update(text, 'utf8', 'hex')
    encrypted += cipher.final('hex')
    return encrypted
}

export const decrypt = (text: string) => {
    const decipher = crypto.createDecipher(
        'aes-256-cbc',
        'Your 32 char secret here'
    )
    let decrypted = decipher.update(text, 'hex', 'utf8')
    decrypted += decipher.final('utf8')
    return decrypted
}

export const generateLink = (tier: string) => {
    const formattedTier = tier.replace('_', '-')
    return `/member/programs/${formattedTier}`
}

const tokenToTier: TokenMap = {}

const env: EnvType = {
    NEXT_PUBLIC_TOKEN_BLACK: process.env.NEXT_PUBLIC_TOKEN_BLACK,
    NEXT_PUBLIC_TOKEN_GREEN_JKD: process.env.NEXT_PUBLIC_TOKEN_GREEN_JKD,
    NEXT_PUBLIC_TOKEN_BLUE_JKD: process.env.NEXT_PUBLIC_TOKEN_BLUE_JKD,
    NEXT_PUBLIC_TOKEN_YELLOW_JKD: process.env.NEXT_PUBLIC_TOKEN_YELLOW_JKD,
    NEXT_PUBLIC_TOKEN_GREEN_SHAOLIN:
        process.env.NEXT_PUBLIC_TOKEN_GREEN_SHAOLIN,
    NEXT_PUBLIC_TOKEN_BLUE_SHAOLIN: process.env.NEXT_PUBLIC_TOKEN_BLUE_SHAOLIN,
    NEXT_PUBLIC_TOKEN_YELLOW_SHAOLIN:
        process.env.NEXT_PUBLIC_TOKEN_YELLOW_SHAOLIN
}

export const initializeTokenMap = () => {
    const tokenMappings = {
        NEXT_PUBLIC_TOKEN_BLACK: 'black',
        NEXT_PUBLIC_TOKEN_GREEN_JKD: 'green_jkd',
        NEXT_PUBLIC_TOKEN_BLUE_JKD: 'blue_jkd',
        NEXT_PUBLIC_TOKEN_YELLOW_JKD: 'yellow_jkd',
        NEXT_PUBLIC_TOKEN_GREEN_SHAOLIN: 'green_shaolin',
        NEXT_PUBLIC_TOKEN_BLUE_SHAOLIN: 'blue_shaolin',
        NEXT_PUBLIC_TOKEN_YELLOW_SHAOLIN: 'yellow_shaolin'
    }

    for (const [key, tier] of Object.entries(tokenMappings)) {
        const token = env[key]
        if (token) {
            tokenToTier[token] = tier
            //console.log(`Token für ${tier} ist gesetzt.`)
        } else {
            //console.log(`Umweltvariable ${key} ist nicht gesetzt.`)
        }
    }
}

export const getTiers = (tokensString: string) => {
    const tokens = tokensString ? tokensString.split(',') : []
    const tiers = tokens
        .map(token => getTierByToken(token.trim()))
        .filter(tier => tier !== 'none')
    if (tiers.length > 0) {
        return {status: 200, tiers}
    } else {
        return {status: 401, message: 'Ungültiger Zugang #F2'}
    }
}

const getTierByToken = (token: string): string => {
    console.log(tokenToTier[token])
    return tokenToTier[token] || 'none'
}

export const removeTokenFromUrl = () => {
    const url = new URL(window.location.toString())
    url.searchParams.delete('token')
    window.history.replaceState({}, document.title, url.toString())
}

export const getTiersFromLocalStorage = (): string[] | null => {
    const tierDataEncrypted = localStorage.getItem('cookie-kk-member')
    if (tierDataEncrypted) {
        const tierDataDecrypted = decrypt(tierDataEncrypted)
        const parsedTiers = JSON.parse(tierDataDecrypted)
        if (
            Array.isArray(parsedTiers) &&
            parsedTiers.length > 0 &&
            parsedTiers[0] !== 'none'
        ) {
            return parsedTiers
        }
    }
    return null
}

export const isTierAccessible = (tier: string): boolean => {
    const tierDataEncrypted = localStorage.getItem('cookie-kk-member')
    if (!tierDataEncrypted) return false

    try {
        const tierDataDecrypted = decrypt(tierDataEncrypted)
        const parsedTiers: string[] = JSON.parse(tierDataDecrypted)
        return parsedTiers.includes(tier)
    } catch (error) {
        console.error(
            'Fehler beim Entschlüsseln oder Parsen des Cookies:',
            error
        )
        return false
    }
}
