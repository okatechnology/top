export const locales = ['ja', 'en'] as const;
declare global {
  type LocaleName = typeof locales[number];
  type ContactName = 'twitter' | 'instagram' | 'facebook' | 'mail' | 'github';
  type TechnologyName =
    | 'React'
    | 'TypeScript'
    | 'PHP'
    | 'MySQL'
    | 'webpack'
    | 'Docker'
    | 'Next.js'
    | 'Node.js'
    | 'JavaScript'
    | 'Sass'
    | 'CSS'
    | 'HTML';
}
