/* eslint-disable */
export const pagesPath = {
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

export type PagesPath = typeof pagesPath

export const staticPath = {
  _DS_Store: '/.DS_Store',
  css_logo_png: '/css_logo.png',
  docker_logo_png: '/docker_logo.png',
  face_svg: '/face.svg',
  face_above_svg: '/face_above.svg',
  face_white_svg: '/face_white.svg',
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
  },
  html_logo_png: '/html_logo.png',
  js_logo_png: '/js_logo.png',
  mysql_logo_png: '/mysql_logo.png',
  next_logo_png: '/next_logo.png',
  nodejs_logo_png: '/nodejs_logo.png',
  php_logo_png: '/php_logo.png',
  react_logo_png: '/react_logo.png',
  sass_logo_png: '/sass_logo.png',
  ts_logo_png: '/ts_logo.png',
  twitterIcon_white_svg: '/twitterIcon_white.svg',
  webpack_logo_png: '/webpack_logo.png',
  work_bmw_png: '/work_bmw.png',
  work_cms_png: '/work_cms.png',
  work_dhu_site_png: '/work_dhu_site.png',
  work_dhufes_png: '/work_dhufes.png',
  work_digicam_extension_png: '/work_digicam_extension.png',
  work_tanabata_png: '/work_tanabata.png'
} as const

export type StaticPath = typeof staticPath
