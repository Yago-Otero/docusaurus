// @ts-check

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TICGAL',
  tagline: 'Local Roots, Global Reach IT',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://docs.tic.gal',
  baseUrl: '/',

  organizationName: 'ticgal',
  projectName: 'TICGAL Documentation',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      es: {
        label: 'Español',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/logos/ticgal_logo.jpeg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'TICGAL',
        logo: {
          alt: 'TICGAL Logo',
          src: 'img/logos/ticgal_logo.jpeg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'TICGAL',
            items: [
              {
                label: 'About Us',
                href: 'https://tic.gal/about-us/',
              },
              {
                label: 'GLPI',
                href: 'https://tic.gal/glpi/',
              },
              {
                label: 'IT Services',
                href: 'https://tic.gal/it-services/',
              },
              {
                label: 'News',
                href: 'https://tic.gal/blog-en/',
              },
            ],
          },
          {
            title: 'Solutions',
            items: [
              {
                label: 'GLPI Plugins',
                href: 'https://tic.gal/glpi/glpi-plugins/',
              },
              {
                label: 'GLPI Integrations',
                href: 'https://tic.gal/glpi/glpi-integrations/',
              },
              {
                label: 'GLPI Mobility Solutions',
                href: 'https://tic.gal/glpi/glpi-mobility-solutions/',
              },
              {
                label: 'GLPI AI Chatbot',
                href: 'https://tic.gal/glpi/uxia-an-ai-chatbot-for-glpi/',
              },
            ],
          },
          {
            title: 'Contact',
            items: [
              {
                label: 'Support',
                href: 'https://xes.ticgal.com',
              },
              {
                label: 'Contact Us',
                href: 'https://tic.gal/contact/',
              },
              {
                label: 'Join the team',
                href: 'https://tic.gal/join-the-team/',
              },
            ],
          },
        ],
        copyright: `© TICGAL 2014–${new Date().getFullYear()} All Rights Reserved.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
