# Commands

[Dashboard: Commands](https://sentrybot.gg/guilds/_/commands)

By default, Sentry does not register any application commands in your server. You need to install those commands you
want to use.

By default, non-moderation commands can be used by @everyone, and moderation commands cannot be used by anyone. You can
override permissions for each command individually. For moderation commands, you can choose up to 10 roles to allow
access to the command. For non-moderation commands, you can choose up to 10 roles to allow and 10 roles to deny access
to the command. Allowing roles on non-moderation commands has no effect unless you also deny some roles.

Allowed roles will override denied roles. So, for example, if you deny @everyone access to a public command, then only
members who have those roles that you allow can use the command. If you deny a role named "Role X" access to a public
command and allow a "Role Y" role, then those members who have only Role X cannot use the command, but those members who
have both Role X and Role Y *can* use the command.

## Info

**This is a public command.**

**This is a slash command. It is executed by typing /info in the chat box.**

Gets info for a server member, including server nickname, account creation date, server join date, and roles. This
information is available even if the user has left the server.

If no user is specified, then this command will default to returning information about the user who executed it.

If the `quiet` argument is not set to `True`, then this command will reply publicly in the channel where it was
executed.

## User Info

**This is a public command.**

**This is a user command. It is executed by right-clicking or tapping on a user's name.**

Same as [/info](#info). Always replies privately.

## Ban

<RequiredPermissions :role="['Ban Members']" />

**This is a moderation command.**

**This is a slash command. It is executed by typing /ban in the chat box.**

This command has subcommands:

- **/ban add**
	- Bans a user from the server
- **/ban remove**
	- Unbans a user from the server

This command will reply publicly in the channel where it was executed.

### Ban Mode

#### Discord Native Bans

**Default.** Sentry will ban members using the normal Discord ban system. Discord bans are by user account and by IP.

#### Bot Kick-Based Bans

<RequiredPermissions :role="['Kick Members', 'Ban Members']" />

Sentry will enforce bans by kicking banned members whenever they join the server. These bans are not by IP. This feature
is intended for use in servers where members are likely to share IPs regularly (e.g. a school-based server).

If Sentry is experiencing an outage when a banned member joins, then they will be allowed to join the server. Sentry
will kick them the first time they send a message, interact with Sentry, or change their profile (name or avatar) once
Sentry becomes available again.

:::warning
Sentry will not upgrade bans issued by Discord's native ban option to kick-based bans. If you want all issued
bans to be kick-based, then you should remove the **Ban Members** permission from your moderator roles.
:::

:::warning
Sentry must still have **Ban Members** permission, even if you choose to use kick-based bans. When a
kick-based ban is issued, Sentry will issue a traditional ban to remove the member from the server, which will then be
immediately removed. This behavior is required to enable message purging.
:::

### Send DM to Banned Members

If enabled, Sentry will send a DM to members that are banned using Sentry just before the ban is issued. You can choose
whether Sentry will inform the member of the reason why they were banned.

If using kick-based bans and this option is enabled, then Sentry will send a DM every time a kick-based banned member
joins.

## Mute

<RequiredPermissions :role="['Manage Roles']" />

**This is a moderation command.**

**This is a slash command. It is executed by typing /mute in the chat box.**

This command has subcommands:

- **/mute add**
	- Mutes a user for a [period of time](./index.md#time-periods)
- **/mute remove**
	- Unmutes a user who is muted
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

#### Discord Timeouts

Optionally, you can choose to have mutes enforced using Discord's [timeout feature](https://dis.gd/timeout). To enable
this option, choose **( Use Discord timeouts )** for your muted role.

Please note that Discord timeouts are more limited compared to a role-based mute:

- Discord timeouts can only be 28 days long
- It's not possible to allow users to access specific channels when in a timeout
- It's not possible to list users that are currently in a timeout

Please note that if you were previously using a muted role and switch to Discord timeouts, existing mutes will still
expire normally, but they will become impossible to remove them using Sentry's `/mute remove` command. You can still
manually remove the role.

## Report

**This is a public command.**

**This command is available as both a slash command and a message command.** The slash command variant is executed by
typing /report in the chat box. The message command variant is executed by selecting "Report" from the "Apps" menu when
right-clicking or selecting [...] on a chat message. Both variants share the same configuration options; the options are
duplicated between the two cards in the Sentry dashboard in case you want to use one version of the command and not the
other. Please note that due to Discord limitations, user and message commands are not yet available on mobile and
attachments cannot be collected via message commands.

When the Report message command is invoked, a modal dialog will pop up prompting the user to enter a reason for their
report.

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
    - [**Open thread**](#mod-thread-channel)
        - Opens a private thread between the reporter and the moderator who executes this action, enabling moderators to
          request additional information from the reporter.
    - **Ban**
        - Bans the reportee and marks the report as resolved. Only members who can access Sentry's [/ban](#ban) command
          can use this action. This action will prompt the member for a ban reason before actually banning the reportee.

:::warning
Some features may not work properly if Sentry lacks access to view the channel in which a report was sent.
:::

### Report Notification Channel

<RequiredPermissions :channel="['View Channel', 'Send Messages', 'Embed Links']" />

This option must be set. This is the channel where report notifications will be delivered. It is **very important** that
only your server moderators can access this channel. Anyone who has permission to view the channel will be able to act
on reports!

Report notifications include a "Jump to context" link which jumps to the last message sent in the channel at the time
the /report command was used, or jumps to the specific message that was reported if the Report message command was used.

### Mention Role When Report Is Received

On large servers, setting channel notification preferences to "All Messages" does not send push notifications to mobile
devices. You can configure a role here that Sentry will @mention when a new report is received to work around this
limitation.

### Notify Channel When A Reportee Is Banned

<RequiredPermissions :channel="['View Channel', 'Send Messages']" />

You can optionally choose a channel that will be notified when a reported user is banned using the Ban report action.
This option is intended to be set to a public channel, in case you want transparency in your moderation actions. Bans
are always logged to your [server log channel](./settings.md#logging).

Ban notification messages will include the name of the user who was banned, the name of the moderator who issued the
ban, and the reason the moderator chose for the ban.

### Automatically Resolve Reports When A Reportee Is Banned Outside Of The Report System

If a member is reported and subsequently banned using Sentry's /ban command or Discord's built-in ban system, you can
choose for any outstanding reports to be automatically resolved.

- **Don't automatically resolve**
    - Do nothing when a member is banned and keep outstanding reports against them open
- **Resolve silently**
    - Resolve all open reports against a member when they're banned, but don't notify the reporters
- **Resolve and notify reporters** (default)
    - Resolve all open reports against a member when they're banned, and also [notify the reporters](./settings.md#member-notifications)
    - Reports older than 24 hours will be resolved silently

Reports will always be automatically resolved and notify the reporter when the **Ban** option is selected in the
**More actions...** menu under a report. Additionally, this feature will also automatically resolve any reports that are
under 1 hour old regardless of the value of this option.

### Mod Thread Channel

<PremiumFeature />
<BoostFeatureRequired feature="private threads" level="2" />
<RequiredPermissions :channel="['View Channel', 'Create Private Threads', 'Send Messages in Threads', 'Embed Links']" />
<RequiredPermissions :channel="['Send Messages in Threads']" role-is-everyone suffix="Sentry is unable to add members to private threads if they cannot view the parent channel." />

If configured, enables the **Open thread** action in the More Actions menu. Threads will be opened under this channel.

## Role

<RequiredPermissions :role="['Manage Roles']" />

**This is a moderation command.**

**This is a slash command. It is executed by typing /role in the chat box.**

This command has subcommands:

- **/role add**
	- Adds a role to a specified member
- **/role remove**
	- Removes a role from a specified member

### Valid Roles

You can optionally choose a list of roles which will be the only roles that can be granted or removed using this
command. Useful if you want to give some moderators the ability to grant a limited subset of roles.

## Purge

<RequiredPermissions :role="['Manage Messages']" />

**This is a moderation command.**

**This is a slash command. It is executed by typing /purge in the chat box.**

Deletes some number of messages from the current channel at once. This command cannot delete any messages older than 2
weeks, or older than the previous 500 messages in the channel.

The only required argument is `limit`. This should be a number from 1-200, and is the maximum number of messages that
Sentry will purge. If Sentry can't find enough messages to delete, then Sentry will delete as many as it can find.

All other arguments are optional and will restrict which messages Sentry will delete. If you don't provide any
additional arguments besides `limit`, then Sentry will delete all messages in the channel, newest first, up to your
limit.

- contains-substring: Only messages containing the provided substring will be deleted. String matching is
  case-insensitive, but punctuation is not ignored as in the Contains Substring automod condition.
- user-type: Only messages sent by the specified user type (humans or bots) will be deleted.
- from-user: Only messages sent by the speciifed user will be deleted.
- with-mentions: Only messages that contain at least one user, role, or @everyone mention will be deleted. You can also
  choose "without mentions", which will only delete messages that do not contain a mention.
- with-files: Only messages that contain at least one uploaded file will be deleted. You can also choose "without files"
  , which will only delete messages that do not contain an uploaded file.
- with-links: Only messages that contain at least one link will be deleted. You can also choose "without links", which
  will only delete messages that have message content but do not contain links.
- with-embeds: Only messages that contain embedded content (e.g. a Tweet or a linked image) will be deleted. You can
  also choose "without embeds", which will only delete messages that do not contain embedded content. Uploaded files do
  not qualify as embedded content.

It is possible to create a series of arguments that are contradictory. For
example, `from-user: @Sentry, user-type: humans`
will not match any messages because Sentry is a bot, not a human.
