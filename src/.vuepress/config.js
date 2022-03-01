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
		['meta', {name: 'theme-color', content: '#d6680e'}],
		['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
		['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}],
		['link', {rel: 'icon', type: 'image/png', sizes: '32x32', href: '/img/icons/favicon-32x32.png'}],
		['link', {rel: 'icon', type: 'image/png', sizes: '16x16', href: '/img/icons/favicon-16x16.png'}],
		['link', {rel: 'apple-touch-icon', sizes: '180x180', href: '/img/icons/apple-touch-icon-180x180.png'}],
		['script', {src: '/js/fix-scroll-to-hash.js'}]
	],

	/**
	 * Theme configuration, here is the default theme configuration for VuePress.
	 *
	 * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
	 */
	themeConfig: {
		logo: '/img/logo-dark.png',
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
			},
			{
				text: 'Support',
				link: 'https://discord.gg/J4egjkKXTY'
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
						'membersearch',
						'commands',
						'messagebuilder',
						'premium',
						'upcoming'
					]
				},
				{
					title: 'Automod',
					collapsable: false,
					children: [
						'automod/',
						'automod/components',
						'automod/conditions',
						'automod/actions',
						'automod/examples'
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
