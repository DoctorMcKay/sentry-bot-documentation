# Settings

[Dashboard: Settings](https://sentrybot.gg/guilds/_/settings)

## Logging

<RequiredPermissions channel-description="your log channel" :channel="['View Channel', 'Send Messages', 'Embed Links', 'Attach Files']" />

Sentry can log all actions it takes to a logging channel. It's recommended that you create a dedicated private channel
specifically for Sentry logging. Make sure that only your staff/moderators and Sentry can access it.

You can optionally configure Sentry to @mention a specific role when a configuration error is detected, for example if
Sentry is missing a role permission to take an action.

## Message Logging

Sentry can log when members edit or delete their messages to your server logging channel. If you set this to anything
except "Don't log edits or deletions", then Sentry will store the contents of all messages sent in all channels it can
access.

Message content is encrypted at rest, and is automatically deleted 30 days after the message is sent.

Message content is not stored unless you enable this setting, so any messages sent while this setting is disabled will
not be logged if they are edited or deleted, even if you enable this setting later.

## Sticky Roles

<RequiredPermissions :role="['Manage Roles']" />

Sentry can automatically reassign roles to users when they leave and rejoin your server. If you are using roles to
restrict server features (e.g. [mutes](./commands.md#mute)), then it would be a very good idea to enable sticky roles.

Regardless of whether this option is enabled or not, Sentry will always track roles for your server members as long as
it is in your server, so you can enable this feature at any time and all previous server members will be affected.

These are the possible options for this setting:

- **Disabled** (default)
	- Sentry will not apply any roles when members join
- **Only roles on the whitelist**
	- Sentry will only reapply roles that you specify in a whitelist
- **All roles except those on the blacklist**
	- Sentry will reapply all roles except those you specify in a blacklist
- **All roles**
	- Sentry will reapply all roles

:::tip
Sentry will not reapply any roles that are higher in the [role hierarchy](./index.md#permissions-and-hierarchy)
than its own Sentry Bot role.
:::

## Sticky Nicks

<RequiredPermissions :role="['Manage Nicknames']" />

Sentry can automatically reassign nicknames to users when they leave and rejoin your server. Nicknames will be reassigned
regardless of whether they were set by the user themselves, or by a server moderator.

Regardless of whether this option is enabled or not, Sentry will always track nicknames for your server members as long as
it is in your server, so you can enable this feature at any time and all previous server members will be affected.

This setting is off by default.

## Member Notifications

<PremiumFeature />

Sentry occasionally needs to directly notify your server members of various events. For example, Sentry notifies members
when their reports are marked resolved or when they are muted or unmuted.

By default, these notifications are sent via DM. Sentry cannot DM members if they have disabled direct messages from
server members in their privacy settings.

You can change Sentry's notification mode to Private Threads to enable Sentry to send member notifications via private
threads. Sentry will create a new private thread for each unique member that it notifies in your server.

:::tip
If you enable this feature and your server loses access to private threads, Sentry will continue to use already-existing
threads to notify members. Any members who don't already have a notification thread created will receive a DM instead.
:::

:::tip
If you enable this feature and your server loses Sentry Bot premium, Sentry will send all notifications via DM.
:::

### Thread Channel

<RequiredPermissions :channel="['View Channel', 'Create Private Threads', 'Send Messages in Threads', 'Embed Links']" />
<RequiredPermissions :channel="['View Channel']" role-is-everyone suffix="Sentry is unable to add members to private threads if they cannot view the parent channel." />

Choose a channel, and Sentry will create private notification threads underneath it. While it's not required, it's
recommended that you disable **Send Messages in Threads** permission for @everyone (with an overwrite to enable it for
Sentry Bot) in this channel, so members don't get confused and think they are messaging a moderator.

### Thread Name

Choose a name for the private threads Sentry creates for member notifications.

### Thread Auto-Archive Duration

Choose a duration after which member notification threads archive after the most recent notification. Once a thread is
archived, it will disappear from the member's channel list. Members can access their archived notification threads from
the Threads UI in Discord, but this UI is not readily apparent and members likely won't know how to find it. Therefore,
a value of 24 hours is recommended.
