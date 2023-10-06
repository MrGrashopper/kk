export const allTiers = [
    'black',
    'green_jkd',
    'blue_jkd',
    'yellow_jkd',
    'green_shaolin',
    'blue_shaolin',
    'yellow_shaolin'
]

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
