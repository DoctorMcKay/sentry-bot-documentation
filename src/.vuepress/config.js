module.exports = {
	/**
	 * Ref：https://v1.vuepress.vuejs.org/config/#title
	 */
	title: 'Sentry Bot Documentation',
	/**
	 * Ref：https://v1.vuepress.vuejs.org/config/#description
	 */
	description: 'Reference information for using Sentry Bot',

	/**
	 * Extra tags to be injected to the page HTML `<head>`
	 *
	 * ref：https://v1.vuepress.vuejs.org/config/#head
	 */
	head: [
		['meta', {name: 'theme-color', content: '#3eaf7c'}],
		['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
		['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}],
		['script', {src: '/js/fix-scroll-to-hash.js'}]
	],

	/**
	 * Theme configuration, here is the default theme configuration for VuePress.
	 *
	 * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
	 */
	themeConfig: {
		logo: '/img/logo.png',
		repo: 'DoctorMcKay/sentry-bot-documentation',
		editLinks: true,
		docsDir: 'src',
		editLinkText: 'Edit this page',
		lastUpdated: true,
		smoothScroll: true,
		nav: [
			{
				text: 'Privacy Policy',
				link: '/privacy.md'
			},
			{
				text: 'Dashboard',
				link: 'https://sentrybot.gg'
			}
		],
		sidebar: {
			'/': [
				{
					title: 'Documentation',
					collapsable: false,
					children: [
						'',
						'settings',
						'utilities',
						'commands'
					]
				}
			]
		}
	},

	/**
	 * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
	 */
	plugins: [
		//'@vuepress/plugin-back-to-top',
		//'@vuepress/plugin-medium-zoom'
	]
}
