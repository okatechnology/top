import { staticPath } from 'src/lib/$path';

interface Work {
  title: Record<LocaleName, string>;
  image: string;
  finishYear: number;
  finishMonth: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  description: Record<LocaleName, string>;
  usedTechnology: TechnologyName[];
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
    usedTechnology: ['React', 'TypeScript', 'PHP', 'MySQL'],
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
    usedTechnology: ['React', 'TypeScript', 'webpack'],
    repository:
      'https://github.com/okatechnology/website-expression-application-A-final',
    page: 'https://dhu-site.portfolio.oka.technology',
  },
  {
    image: staticPath.work_digicam_extension_png,
    title: {
      en: 'The university portal site expansion',
      ja: '大学ポータルサイト拡張',
    },
    finishYear: 2020,
    finishMonth: 6,
    description: {
      en:
        'The portal site of the university I go to has become very difficult to use since it was new in 2020, so this is an extension that I made with the intention of eliminating that difficulty as much as possible.',
      ja:
        '通っている大学のポータルサイトが2020年になってから新しくなって非常に使いづらくなったため、その使いづらさを少しでも解消しようという思いで作った拡張機能です。',
    },
    usedTechnology: ['TypeScript'],
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
    usedTechnology: ['React', 'TypeScript', 'webpack'],
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
        "This is a CMS system that allows you to post, view, and delete articles. I don't have a site where you can actually try this system, but you can run it in your local environment.",
      ja:
        '記事の投稿、閲覧、削除ができる CMS のシステムです。実際にこのシステムを試すことができるサイトは用意できていないのですが、ローカルの環境で動かすことができます。',
    },
    usedTechnology: ['React', 'TypeScript', 'webpack', 'PHP', 'MySQL'],
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
    usedTechnology: ['HTML', 'CSS', 'Sass', 'TypeScript'],
    repository:
      'https://github.com/okatechnology/web-site-production-practice-exercise-2-last-assignment',
    page: 'https://bmw.portfolio.oka.technology/',
  },
];
