/* eslint-disable */
export const pagesPath = {
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

export type PagesPath = typeof pagesPath

export const staticPath = {
  favicon: {
    android_chrome_192x192_png: '/favicon/android-chrome-192x192.png',
    android_chrome_256x256_png: '/favicon/android-chrome-256x256.png',
    apple_touch_icon_png: '/favicon/apple-touch-icon.png',
    browserconfig_xml: '/favicon/browserconfig.xml',
    favicon_16x16_png: '/favicon/favicon-16x16.png',
    favicon_32x32_png: '/favicon/favicon-32x32.png',
    favicon_ico: '/favicon/favicon.ico',
    mstile_150x150_png: '/favicon/mstile-150x150.png',
    safari_pinned_tab_svg: '/favicon/safari-pinned-tab.svg',
    site_webmanifest: '/favicon/site.webmanifest'
  }
} as const

export type StaticPath = typeof staticPath
