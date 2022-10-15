// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Naše appetitlich kuchařka',
  tagline: 'Vaříme si, co nám chutná',
  url: 'https://nase-appetitlich-kucharka.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

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
          editUrl:
            'https://github.com/ivankudibal/nase-appetitilich-kucharka/tree/main/packages/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ivankudibal/docusaurus/tree/main/packages/',
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
        title: 'Naše apetitlich kuchařka',
        logo: {
          alt: 'Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Kuchařka',
          },
          
          {
            href: 'https://github.com/ivankudibal/nase-apetitlich-kucharka',
            label: 'GitHub',
            position: 'right',
          },
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
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/nase-apetitlich-kucharka',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/nase-apetitlich-kucharka',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/nase-apetitlich-kucharka',
              },
            ],
          },
          {
            title: 'Více',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/ivankudibal/nase-apetitlich-kucharka',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ivankuidbal, Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  plugins: [require.resolve("@cmfcmf/docusaurus-search-local")],
};

module.exports = config;
