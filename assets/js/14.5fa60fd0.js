(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{389:function(e,r,t){"use strict";t.r(r);var o=t(46),n=Object(o.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"home"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#home"}},[e._v("#")]),e._v(" Home")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://discord.gg/zgmZZga56G",target:"_blank",rel:"noopener noreferrer"}},[e._v("Support Server"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("Sentry is a moderation bot for Discord. This site documents its features and how to use it most effectively.")]),e._v(" "),t("h2",{attrs:{id:"configuring-sentry"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configuring-sentry"}},[e._v("#")]),e._v(" Configuring Sentry")]),e._v(" "),t("p",[e._v("All Sentry configuration must be done from the "),t("a",{attrs:{href:"https://sentrybot.gg",target:"_blank",rel:"noopener noreferrer"}},[e._v("dashboard"),t("OutboundLink")],1),e._v(". For security and convenience purposes,\nthere are no commands directly in Discord that you can use to configure Sentry.")]),e._v(" "),t("h2",{attrs:{id:"permissions-and-hierarchy"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#permissions-and-hierarchy"}},[e._v("#")]),e._v(" Permissions and Hierarchy")]),e._v(" "),t("p",[e._v("The only permissions checked by the bot are enforcement of Discord's role hierarchy, and permissions for application\ncommands that you configure in the Sentry dashboard.")]),e._v(" "),t("p",[e._v("Here are the rules for role hierarchy:")]),e._v(" "),t("ul",[t("li",[e._v("A member can never target another member whose highest role is higher than or equal to their own highest role\n"),t("ul",[t("li",[e._v("A member can therefore never target themselves, as their own highest role is equal to their own highest role")])])]),e._v(" "),t("li",[e._v("The bot will never allow a member to be targeted whose highest role is higher than the Sentry Bot role\n"),t("ul",[t("li",[e._v("This is true even if the bot has been assigned another, higher role")]),e._v(" "),t("li",[e._v("This means that the bot could theoretically be given the same role as your moderators, but moderators could be\nmade immune to targeting by the bot if you drag the bot's integration role below the moderator role.")])])]),e._v(" "),t("li",[e._v("Role hierarchy rules are not applied to non-moderation commands, for example /info")]),e._v(" "),t("li",[e._v("Naturally, the bot cannot perform an action it does not have role permission to take\n"),t("ul",[t("li",[e._v("For example, the /ban command won't work if none of the bot's assigned roles have the Ban Members permission")]),e._v(" "),t("li",[e._v("Permissions are not required on the member executing the slash command")]),e._v(" "),t("li",[e._v("For example, a member with access to the /ban command can use it even if none of their own roles have Ban Members")]),e._v(" "),t("li",[e._v("You can control who can use slash commands on the Commands page of the dashboard")])])])]),e._v(" "),t("h2",{attrs:{id:"time-periods"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#time-periods"}},[e._v("#")]),e._v(" Time Periods")]),e._v(" "),t("p",[e._v("Some Sentry commands require a time period. Time periods are specified in format 1w2d3h4m5s (which would mean 1 week,\n2 days, 3 hours, 4 minutes, 5 seconds).")])])}),[],!1,null,null,null);r.default=n.exports}}]);