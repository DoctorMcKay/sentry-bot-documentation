# Utilities

[Dashboard: Utilities](https://sentrybot.gg/dashboard/utilities)

## Post Message

<RequiredPermissions :channel="['View Channel', 'Send Messages', 'Embed Links']" />

Enables you to post any message you like to any channel in your server. This might be useful for posting your server
rules, since that message will be editable by any moderator using the Sentry dashboard.

See [Message Builder](./messagebuilder.md) for details.

## Edit Message

Enables you to edit any message Sentry has sent in your server.

Paste the link to the message you want to edit into the **Message link** box, then click **Load Message** to open the
[Message Builder](./messagebuilder.md).

To obtain a message link, right-click on the message and choose **Copy Message Link**.

## Mute Role Permissions Setup

<RequiredPermissions :role="['Manage Roles']" />

This tool will automatically configure permissions overwrites for your mute role on all channels in your server. This
will not work as expected if any roles are specifically granted permission to send messages, send messages in threads,
create threads, speak, or request to speak in any channel.

Sentry is unable to modify permission overwrites on any channel which it cannot view or in which it is denied
**Manage Permissions**.

This tool is not available if you are using [Discord Timeouts](./commands.md#discord-timeouts) for mutes.
