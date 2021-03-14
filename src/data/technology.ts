import { staticPath } from 'src/utils/$path';

interface Technology {
  name: string;
  logo: string;
}

export const technology: Record<TechnologyName, Technology> = {
  typescript: { name: 'TypeScript', logo: staticPath.ts_logo_png },
  react: { name: 'React', logo: staticPath.react_logo_png },
  nextjs: { name: 'Next.js', logo: staticPath.next_logo_png },
  nodejs: { name: 'Node.js', logo: staticPath.nodejs_logo_png },
  webpack: { name: 'webpack', logo: staticPath.webpack_logo_png },
  javascript: { name: 'JavaScript', logo: staticPath.js_logo_png },
  sass: { name: 'Sass', logo: staticPath.sass_logo_png },
  css: { name: 'CSS', logo: staticPath.css_logo_png },
  html: { name: 'HTML', logo: staticPath.html_logo_png },
  php: { name: 'PHP', logo: staticPath.php_logo_png },
  mysql: { name: 'MySQL', logo: staticPath.mysql_logo_png },
  docker: { name: 'Docker', logo: staticPath.docker_logo_png },
};
