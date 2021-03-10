import { SkillsItemProps } from '@molecules/SkillsItem';
import { staticPath } from 'src/lib/$path';

export const skills: SkillsItemProps[] = [
  { name: 'TypeScript', image: staticPath.ts_logo_png },
  { name: 'React', image: staticPath.react_logo_png },
  { name: 'Next.js', image: staticPath.next_logo_png },
  { name: 'Node.js', image: staticPath.nodejs_logo_png },
  { name: 'JavaScript', image: staticPath.js_logo_png },
  { name: 'Sass', image: staticPath.sass_logo_png },
  { name: 'CSS', image: staticPath.css_logo_png },
  { name: 'HTML', image: staticPath.html_logo_png },
  { name: 'PHP', image: staticPath.php_logo_png },
  { name: 'MySQL', image: staticPath.mysql_logo_png },
  { name: 'Docker', image: staticPath.docker_logo_png },
];
