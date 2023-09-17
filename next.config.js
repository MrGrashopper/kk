/** @type {import('next').NextConfig} */
module.exports = {
    //  output: 'export',
    reactStrictMode: true,
    experimental: {
        appDir: true
    },
    i18n: {
        // providing the locales supported by your application
        // locales: ['en-US', 'de-DE'],
        locales: ['de-DE'],
        //  default locale used when the non-locale paths are visited
        defaultLocale: 'de-DE'
    }
}
