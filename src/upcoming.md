# Planned Features

This list is not comprehensive, and unfortunately we cannot guarantee a timeline for any of these upcoming features.
These features are not listed in any particular order.

## Dashboard Automod Configuration

Sentry already has a complex rules-based automod feature, but it's not yet possible to configure it from the dashboard.
This feature is upcoming.

Example screenshot:

![Automod configuration screenshot](https://cdn.discordapp.com/attachments/734910740468858881/884704849286017084/unknown.png)

## Member Vetting

A feature to allow you to vet new server members before they can access your server. Member vetting will add a role you
specify to new members when they complete a task that you specify. Available tasks include:

1. No vetting; auto-grant role to all new members
2. Click an interaction button in a channel (e.g. agree to rules)
3. Complete a CAPTCHA

Example screenshot:

![Member vetting screenshot](https://mckay.media/epImK)

## Muting Departed Members

Using Sticky Roles, this will enable you to use the `/mute` command for users who have already left the server.

## New Conversation Notification

A feature to have Sentry @mention a role or @everyone in specific channels when a new message is posted after a
configurable period of silence. Allows you to be notified of new conversations, without being notified of every single
message. Particularly useful in a staff channel.

## View Previous Bans

A feature to allow you to view and filter previously-issued bans on the dashboard. Will also allow you to view active
[kick-based bans](./commands.md#bot-kick-based-bans).

## View Previous Reports

A feature to allow you to view and filter reports on the dashboard. Enables viewing all prior reports sent or against
specific users at a glance.

## View Previous Mutes

A feature to allow you to view and filter mutes on the dashboard. Enables viewing of all prior mutes issued against
specific users at a glance. Also enables viewing all active mutes.

## Warns

Allows you to pre-configure a list of warn reasons and a number of points to be issued for each reason. You will be
able to configure actions to be automatically taken when members reach a specific number of points. Each warn reason can
also be configured to expire issued points after a specific period of time.

## Multiple Log Channels

Allows you to choose a different channel for each different type of log message.

## Ban Appeals

Allow banned users to appeal their bans through Sentry. Requires enabling sending DMs to banned members.
