// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Naše appetitlich kuchařka',
  tagline: 'Vaříme si, co nám chutná',
  url: 'https://ivankudibal.github.io',
  baseUrl: '/nase-appetitlich-kucharka/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  trailingSlash: true,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ivankudibal', // Usually your GitHub org/user name.
  projectName: 'nase-appetitlich-kucharka', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'cs',
    locales: ['cs'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // https://github.com/ivankudibal/nase-appetitlich-kucharka/edit/main/docs/recepty/jemne-kruti-kari.md
          editUrl:
            'https://github.com/ivankudibal/nase-appetitlich-kucharka/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ivankudibal/nase-appetitlich-kucharka/tree/main/packages/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'N. A. K.',
        logo: {
          alt: 'Logo',
          src: 'img/logo.svg',
        },
        items: [
          /*
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Kuchařka',
          },*/
      /*    
          {
            href: 'https://github.com/ivankudibal/nase-appetitlich-kucharka',
            label: 'GitHub',
            position: 'right',
          },
      */
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Kuchařka',
            items: [
              {
                label: 'Recepty',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              /*{
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/nase-appetitlich-kucharka',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/nase-appetitlich-kucharka',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/nase-appetitlich-kucharka',
              },*/
            ],
          },
          {
            title: 'Více',
            items: [
              /*{
                label: 'Blog',
                to: '/blog',
              },*/
              {
                label: 'GitHub',
                href: 'https://github.com/ivankudibal/nase-appetitlich-kucharka',
              },
            ],
          },
        ],
        copyright: `Made by ivankudibal, 2022 - ${new Date().getFullYear()}  Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  //plugins: [require.resolve("@cmfcmf/docusaurus-search-local")],
  themes: [
    // ... Your other themes.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        language: ["en"],
        // ```
      },
    ],
  ],
};

module.exports = config;
