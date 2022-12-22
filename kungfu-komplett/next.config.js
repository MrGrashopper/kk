/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    experimental: {
        appDir: true,
    },
    i18n: {
        // providing the locales supported by your application
        locales: ['en-US', 'de-DE'],
        //  default locale used when the non-locale paths are visited
        defaultLocale: 'de-DE',
    },
}
