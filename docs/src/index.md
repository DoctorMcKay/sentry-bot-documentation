# Home

[Support Server](https://discord.gg/zgmZZga56G)

Sentry is a moderation bot for Discord. This site documents its features and how to use it most effectively.

## Configuring Sentry

All Sentry configuration must be done from the [dashboard](https://sentrybot.gg). For security and convenience purposes,
there are no commands directly in Discord that you can use to configure Sentry.

## Permissions and Hierarchy

The only permissions checked by the bot are enforcement of Discord's role hierarchy, and permissions for application
commands that you configure in the Sentry dashboard.

Here are the rules for role hierarchy:

- A member can never target another member whose highest role is higher than or equal to their own highest role
	- A member can therefore never target themselves, as their own highest role is equal to their own highest role
- The bot will never allow a member to be targeted whose highest role is higher than the Sentry Bot role
	- This is true even if the bot has been assigned another, higher role
	- This means that the bot could theoretically be given the same role as your moderators, but moderators could be
	  made immune to targeting by the bot if you drag the bot's integration role below the moderator role.
- Role hierarchy rules are not applied to non-moderation commands, for example /info
- Naturally, the bot cannot perform an action it does not have role permission to take
	- For example, the /ban command won't work if none of the bot's assigned roles have the Ban Members permission
	- Permissions are not required on the user executing the slash command
	- For example, a user with access to the /ban command can use it even if none of their own roles have Ban Members (
	  and honestly, that's the way you should set things up since using the native Discord ban function has absolutely
	  no logging attached to it at all).
	- You can control who can use slash commands on the Commands page of the dashboard
