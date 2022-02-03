---
sidebar: auto
sidebarDepth: 3
---

# Sentry Bot Privacy Policy

We respect your privacy. We've listed all the data we collect here, and the reasons why we need to do so.

## Data You Give Us

For obvious reasons, we collect and store any data you specifically provide to Sentry using this dashboard. This is
necessary to allow Sentry to act in the way you requested it to.

## Message Content

By default, Sentry can read all messages sent by all members in all public channels in your server. This is necessary in
order to make Sentry's automod feature work.

If you enable [logging of message edits and deletions](./settings.md#message-logging), Sentry will collect and store the
full content of all messages sent in channels Sentry has access to (which defaults to all public channels in your
server). **Message content is not logged unless you specifically enable logging of message edits or deletions.**
Message content that is stored for this purpose is encrypted and is permanently deleted 30 days after the message was
sent.

If you wish, you can prevent Sentry from being able to access message contents by adding a permission overwrite on each
channel for the **Sentry Bot** role, and denying the **View Channel** permission. If you do this, then Sentry will not
be able to work in those channels.

## Application Commands

We collect and store some data when specific application (slash) commands are invoked:

### Reports

When [/report](./commands.md#report) is used, we store all data associated with that report, so that we can show it to
you later. This data includes, but is not limited to:

- The ID of the user who submitted the report
- The ID of the user who was reported
- The ID of the channel in which the report was submitted
- The ID of the last message sent in the channel where the report was submitted, at the time of submission
- The reason supplied by the reporter
- The ID of the moderator who marked the report as resolved
- The date and time when the report was submitted or marked as resolved

### Bans

When [/ban](./commands.md#ban) is used (or any other time a user is banned), we store this data, so that we can show it
to you later:

- The ID of the moderator who issued the ban
- The ID of the user who was banned
- The reason supplied by the moderator
- How many days of history were deleted in conjunction with this ban
- The ID of the report that originated the ban, if applicable
- The date and time when the ban was issued

### Mutes

When [/mute](./commands.md#mute) is used, we store this data, so that we can show it to you later and use it for other
purposes such as automod rules:

- The ID of the user that was muted
- The ID of the user that performed the mute, or a reference to the automod rule that caused the mute
- What type of mute it is (role-based or timeout)
- The reason supplied by the moderator or automod rule
- The date and time when the mute was issued
- The date and time when the mute expires
- The date and time when the mute was removed, after it is removed or expired

Also, any time a role is applied to a member temporarily, we store this data, so that we know when to remove the role later:

- The ID of the user to whom the role was applied
- The ID of the role that was applied
- The reason why the role was applied (e.g. a mute)
- The date and time when the role was applied, and the date and time when it expires

*This data is permanently deleted when the temporary role expires*

## Data About Your Server

We collect and store some data about every server Sentry is a member of.

- The server's name
- The server's icon image
- All data pertaining to [roles](https://discord.com/developers/docs/topics/permissions#role-object) in the server
- All data pertaining to [channels](https://discord.com/developers/docs/resources/channel#channel-object) in the
  server (but not messages)
- The list of Discord [features](https://discord.com/developers/docs/resources/guild#guild-object-guild-features) that
  are enabled on your server
- The ID of the user who created the server
- The ID of the user who added Sentry to the server

## Data About Server Members

In order to make [Sticky Roles](./settings.md#sticky-roles) and [Sticky Nicks](./settings.md#sticky-nicks) work, and in
order to display this data using the [/info](./commands.md#info) command when a member has left your server, we collect
and store this data about every member of your server:

- The member's user ID
- The member's custom nickname in your server, if applicable
- The list of roles granted to the member
- A count of how many times the member has joined your server
- The date and time of when the member first joined your server, when they last joined your server, and when they last
  left your server

## Data About Discord Users

We save a copy of the public profile information for every user that Sentry encounters so that user IDs can be resolved
into username and avatars in places like the dashboard's [member search](./membersearch.md).

## Stripe

We use Stripe as our payment processor for premium memberships. We don't send any of the data you give us directly to
Stripe except for your Discord user ID; but any data you give to Stripe on their website is governed by
[Stripe's privacy policy](https://stripe.com/privacy).
