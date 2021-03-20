export const locales = ['ja', 'en'] as const;
declare global {
  type LocaleName = typeof locales[number];
  type ContactName = 'twitter' | 'instagram' | 'facebook' | 'mail' | 'github';
  type TechnologyName =
    | 'react'
    | 'typescript'
    | 'php'
    | 'mysql'
    | 'webpack'
    | 'docker'
    | 'nextjs'
    | 'nodejs'
    | 'javascript'
    | 'sass'
    | 'css'
    | 'html';
  type Month = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}
