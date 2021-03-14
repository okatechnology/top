import { staticPath } from 'src/utils/$path';

export interface Work {
  title: Record<LocaleName, string>;
  image: string;
  finishYear: number;
  finishMonth: Month;
  description: Record<LocaleName, string>;
  technologyUsed: TechnologyName[];
  repository: `https://${string}`;
  page?: `https://${string}`;
}

export const works: readonly Work[] = [
  {
    image: staticPath.work_tanabata_png,
    title: {
      en: 'Online Tanabata',
      ja: 'オンライン七夕',
    },
    finishYear: 2020,
    finishMonth: 7,
    description: {
      en:
        'Due to the coronavirus that prevailed in 2020, it became impossible to see realistic bamboo grass and strips, so this site was created with the concept of making a wish online instead. We actually made it public and had many acquaintances post it.',
      ja:
        '2020年に流行したコロナウイルスの影響でリアルな笹と短冊を見ることができなくなってしまったため、代わりにオンラインで願い事をしようというコンセプトで制作したサイトです。実際に公開し、知り合いなどに多く投稿していただきました。',
    },
    technologyUsed: ['react', 'typescript', 'php', 'mysql'],
    repository: 'https://github.com/okatechnology/tanabata2020',
    page: 'https://oka.technology/tanabata/',
  },
  {
    image: staticPath.work_dhu_site_png,
    title: {
      en: 'The university website',
      ja: '大学紹介サイト',
    },
    finishYear: 2020,
    finishMonth: 6,
    description: {
      en:
        'This is a university introduction site created in one of the university classes. I usually mainly do coding and system design, but for this site, I did it myself from the design. When viewed on a wide display such as a PC, the whole is 2 columns, and the mechanism that the image displayed on the left changes according to the scroll position is devised.',
      ja:
        '大学の授業の一つで作った大学の紹介サイトです。自分は普段は基本的にコーディングやシステムの設計を主に行っていますが、このサイトに関してはデザインから自分で行いました。PC などの横幅が広いディスプレイで見た時に全体が2カラムになっており、スクロールの位置に合わせて左に表示される画像が変わっていく仕組みが工夫した点です。',
    },
    technologyUsed: ['react', 'typescript', 'webpack'],
    repository:
      'https://github.com/okatechnology/website-expression-application-A-final',
    page: 'https://dhu-site.portfolio.oka.technology',
  },
  {
    image: staticPath.work_digicam_extension_png,
    title: {
      en: 'An extension of the portal site of the university ',
      ja: '大学ポータルサイト拡張',
    },
    finishYear: 2020,
    finishMonth: 6,
    description: {
      en:
        'The portal site of the university I go to has been renewed in 2020 and it has become very difficult to use, and it is an extension that I made to solve it.',
      ja:
        '私が通っている大学のポータルサイトが2020年になってからリニューアルされて非常に使いづらくなり、それを解消するべく作った拡張機能です。',
    },
    technologyUsed: ['typescript'],
    repository: 'https://github.com/okatechnology/digicam-extension',
    page:
      'https://chrome.google.com/webstore/detail/%E3%83%87%E3%82%B8%E3%82%AD%E3%83%A3%E3%83%B3%E6%8B%A1%E5%BC%B5/piopdpjbobenebejjhonjhnaeecmiopa',
  },
  {
    image: staticPath.work_dhufes_png,
    title: {
      en:
        'Web application of information on the venue of the university school festival (for smartphones)',
      ja: '大学の学園祭の会場案内用 Web アプリ (スマートフォン向け)',
    },
    finishYear: 2019,
    finishMonth: 11,
    description: {
      en:
        'This is a web application for smartphones used at university festivals. This was produced in collaboration with other people at the university. I have devised ways to improve the visibility of information and operability when moving.',
      ja:
        '大学の学園祭で会場で使うスマホ向けの Web アプリケーションです。こちらは大学の他の人と共同で制作を行いました。情報の見やすさや動かした時の操作感を良くすることを工夫しました。',
    },
    technologyUsed: ['react', 'typescript', 'webpack'],
    repository: 'https://github.com/okatechnology/dhfes2019',
    page: 'https://dhfes.com/app/',
  },
  {
    image: staticPath.work_cms_png,
    title: {
      en: 'CMS',
      ja: 'CMS',
    },
    finishYear: 2019,
    finishMonth: 9,
    description: {
      en:
        'This is a CMS system that allows you to post, view, and delete articles. You can clone it from GitHub and run it in your local environment.',
      ja:
        '記事の投稿、閲覧、削除ができる CMS のシステムです。GitHub から Clone して、ローカルの環境で動かすことができます。',
    },
    technologyUsed: ['react', 'typescript', 'webpack', 'php', 'mysql'],
    repository: 'https://github.com/okatechnology/cms',
  },
  {
    image: staticPath.work_bmw_png,
    title: {
      en: 'BMW introduction site',
      ja: 'BMW 紹介サイト',
    },
    finishYear: 2019,
    finishMonth: 6,
    description: {
      en:
        'This is an introduction site for BMW. I stuck to the design in which the image moves according to scrolling (it only works on a PC due to the specifications of the smartphone browser), and the animation when the menu on the upper right is clicked.',
      ja:
        'BMW の紹介サイトです。スクロールに合わせて画像が動くデザインや(スマホのブラウザーの仕様の関係で PC のみでしか動作しないです)、右上のメニューをクリックした際のアニメーションなどにこだわりました。',
    },
    technologyUsed: ['html', 'css', 'sass', 'typescript'],
    repository:
      'https://github.com/okatechnology/web-site-production-practice-exercise-2-last-assignment',
    page: 'https://bmw.portfolio.oka.technology/',
  },
];
