# Utilities

[Dashboard: Utilities](https://sentrybot.gg/dashboard/utilities)

## Mute Role Permissions Setup

<RequiredPermissions :role="['Manage Roles']" />

This tool will automatically configure permissions overwrites for your mute role on all channels in your server. This
will not work as expected if any roles are specifically granted permission to send messages, send messages in threads,
create threads, speak, or request to speak in any channel.

Sentry is unable to modify permission overwrites on any channel which it cannot view or in which it is denied
**Manage Permissions**.
