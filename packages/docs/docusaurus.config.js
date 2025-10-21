/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'JANI Ecosystem',
  tagline: 'AI-Powered Conservation Finance',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'JaniToken',
  projectName: 'jani-ecosystem',
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/JaniToken/jani-ecosystem/edit/main/packages/docs/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
