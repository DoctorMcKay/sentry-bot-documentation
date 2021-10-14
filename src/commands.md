# Commands

[Dashboard: Commands](https://sentrybot.gg/dashboard/commands)

By default, Sentry does not register any application commands in your server. You need to install those commands you want
to use.

By default, non-moderation commands can be used by @everyone, and moderation commands cannot be used by anyone. You can
override permissions for each command individually. For moderation commands, you can choose up to 10 roles to allow
access to the command. For non-moderation commands, you can choose up to 10 roles to allow and 10 roles to deny access
to the command. Allowing roles on non-moderation commands has no effect unless you also deny some roles.

Allowed roles will override denied roles. So, for example, if you deny @everyone access to a public command, then only
members who have those roles that you allow can use the command. If you deny a role named "Role X" access to a public
command and allow a "Role Y" role, then those members who have only Role X cannot use the command, but those members
who have both Role X and Role Y *can* use the command.

## Info

**This is a public command.**

**This is a slash command. It is executed by typing /info in the chat box.**

Gets info for a server member, including server nickname, account creation date, server join date, and roles. This
information is available even if the user has left the server.

If no user is specified, then this command will default to returning information about the user who executed it.

If the `quiet` argument is not set to `True`, then this command will reply publicly in the channel where it was executed.

## User Info

**This is a public command.**

**This is a user command. It is executed by right-clicking or tapping on a user's name.**

Same as [/info](#info). Always replies privately.

## Ban

**This is a moderation command.**

**This is a slash command. It is executed by typing /ban in the chat box.**

Bans a user from the server. This command will reply publicly in the channel where it was executed.

## Mute

**This is a moderation command.**

**This is a slash command. It is executed by typing /mute in the chat box.**

This command has subcommands:

- **/mute add**
	- Mutes a user for a [period of time](./index.md#time-periods)
- **/mute remove**
	- Unmutes user who is muted
- **/mute list**
	- Lists all currently active mutes and their remaining time (replies privately)

### Muted Role

Mutes are accomplished by adding a "Muted role" to members who are muted. This role must be configured to deny access to
these permissions on all channels:

- Send Messages
- Send Messages in Threads
- Create Public Threads
- Create Private Threads
- Add Reactions
- Speak (voice)
- Video (voice)

You can use the [Mute Role Permissions Setup](./utilities.md#mute-role-permissions-setup) utility to auto-configure your
muted role on all channels.

## Report

**This is a public command.**

**This is a slash command. It is executed by typing /report in the chat box.**

Allows server members to report other members to server staff for breaking the rules. Each report has a few controls
below it that your server moderators can use:

- **Mark Resolved**
	- Marks the report as resolved and sends a [notification](./settings.md#member-notifications) to the reporter that
	  the report was marked as resolved.
- **Resolve Silently**
	- Marks the report as resolved without sending a notification to the reporter.
- **Get ID**
	- On mobile, it can be difficult to copy the reportee's user ID. This action replies privately with the reportee's
	  user ID for easy copying.
- **More actions...**
	- **Open thread**
		- Opens a private thread between the reporter and the moderator who executes this action, enabling moderators to
		  request additional information from the reporter.
	- **Ban**
		- Bans the reportee and marks the report as resolved. Only users who can access Sentry's **/ban** command can use this action.
		  This action will prompt the user for a ban reason before actually banning the reportee.

### Report Notification Channel

This option must be set. This is the channel where report notifications will be delivered. It is **very important** that
only your server moderators can access this channel. Anyone who has permission to view the channel will be able to act
on reports!

### Mention Role When Report Is Received

On large servers, setting channel notification preferences to "All Messages" does not send push notifications to mobile
devices. You can configure a role here that Sentry will @mention when a new report is received to work around this
limitation.

### Notify Channel When A Reportee Is Banned

You can optionally choose a channel that will be notified when a reported user is banned using the Ban report action.
This option is intended to be set to a public channel, in case you want transparency in your moderation actions. Bans are
always logged to your [server log channel](./settings.md#logging).

Ban notification messages will include the name of the user who was banned, the name of the moderator who issued the ban,
and the reason the moderator chose for the ban.

### Mod Thread Channel

**This is a Sentry Bot premium feature.**

Requires Sentry Bot premium and access to private threads (server boost level 2). If configured, enables the **Open thread**
action in the More Actions menu. Threads will be opened under this channel.

Please make sure that **Create Private Threads** is enabled on the Sentry Bot role in this channel, and that **View Channel**
and **Send Messages in Threads** are enabled on @everyone in this channel. Sentry is unable to add members to private
threads if they cannot view the parent channel.

## Role

**This is a moderation command.**

**This is a slash command. It is executed by typing /role in the chat box.**

This command has subcommands:

- **/role add**
	- Adds a role to a specified member
- **/role remove**
	- Removes a role from a specified member

### Valid Roles

You can optionally choose a list of roles which will be the only roles that can be granted or removed using this command.
Useful if you want to give some moderators the ability to grant a limited subset of roles.
