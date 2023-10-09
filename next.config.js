/** @type {import('next').NextConfig} */
module.exports = {
    output: 'export',
    reactStrictMode: true,
    trailingSlash: true,
    env: {
        SECRET_CRYPTO_KEY: process.env.SECRET_CRYPTO_KEY,
        TOKEN_BLACK: process.env.TOKEN_BLACK,
        TOKEN_GREEN_JKD: process.env.TOKEN_GREEN_JKD,
        TOKEN_BLUE_JKD: process.env.TOKEN_BLUE_JKD,
        TOKEN_YELLOW_JKD: process.env.TOKEN_YELLOW_JKD,
        TOKEN_GREEN_SHAOLIN: process.env.TOKEN_GREEN_SHAOLIN,
        TOKEN_BLUE_SHAOLIN: process.env.TOKEN_BLUE_SHAOLIN,
        TOKEN_YELLOW_SHAOLIN: process.env.TOKEN_YELLOW_SHAOLIN
    }
    // i18n: {
    //     // providing the locales supported by your application
    //     // locales: ['en-US', 'de-DE'],
    //     locales: ['de-DE'],
    //     //  default locale used when the non-locale paths are visited
    //     defaultLocale: 'de-DE'
    // }
}
