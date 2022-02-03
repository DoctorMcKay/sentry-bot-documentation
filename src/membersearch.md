# Member Search

[Dashboard: Member Search](https://sentrybot.gg/guilds/_/membersearch)

Member Search is a tool designed for helping moderators of public Discord servers to identify and deal with raids. It
enables you to search for members who joined your server in a specific time period and mass-kick or mass-ban the bad actors.

This tool might take a long time to search users on very large servers. It will return both current and past members,
but can only return data about past members who were in your server at a time when Sentry was also present.

Results might be incomplete during the 24 hours following when Sentry was added to your server.

Up to 1000 results will be returned. Results will be divided into pages; you can choose how many users you want to display
per page, up to 500. The select-all checkbox will select all users currently displayed, **not** all users returned by
the search.

## Filters

### Joined Between

Choose a start and end date and time to search for members. This will filter your search to only users who **most recently**
joined your server in this time period. If a member leaves and rejoins your server, this will match against the second
time they joined the server.

### Roles

- **Don't Care**: Does not apply any filtering
- **Has Roles**: Filters results to only return users who have at least one role
- **Has No Roles**: Filters results to only return users who have no roles

### Banned

:::warning
At present, this filter does not check for [kick-based bans](./commands.md#bot-kick-based-bans).
:::

- **Don't Care**: Does not apply any filtering
- **Is Banned**: Filters results to only return users who are currently banned from the server
- **Is Not Banned**: Filters results to only return users who are currently not banned from the server

## Results

Click on the checkbox or anywhere on a row to select it. Click again to deselect.

### User ID

This column displays the matched user's unique Discord User ID. Each Discord account has a unique ID that never changes,
even if the user changes their username and/or discriminator.

This column will also display a 🚫 symbol if the user is already banned from your server. In this case, the user will
also be unselectable since you can't kick or ban a user who is already banned.

### User

Displays the user's avatar and Discord tag (username and discriminator). Also displays a BOT tag if the user is a bot
account.

Click the column heading to sort the table by username, alphabetically.

### Account Created

Displays the date and time when the account was created.

Click the column heading to sort the table by account creation time. By default, results are sorted by account creation
time, oldest first.

### Joined Server

Displays the date and time when the account *most recently* joined your server.

Click the column heading to sort the table by join time.

### Left Server

Displays the date and time when the account *most recently* left your server. If a user leaves and rejoins your server,
this will be a time before their join time. In this case, a ⚠️ symbol will be displayed.

If Sentry has never witnessed this user leaving your server, this field will be blank.

Click the column heading to sort the table by leave time. Accounts that have never left will be treated as having left
first for sorting purposes.

### Roles

Displays the list of roles assigned to this user. If the user has left the server, this displays the roles that Sentry
last saw on them before they left.

Click the column heading to sort the table by number of roles.

### Join Count

Displays the number of times Sentry witnessed the user join your server.

Click the column heading to sort the table by join count.

## Actions

Select one or more user rows to enable actions. When you click an action button, you will be prompted for a reason,
which will be logged in the server's audit log.

Actions cannot be applied to users who are already banned from your server. Actions can be applied to bots, but you will
be notified if you select any bots.

Click the checkbox in the table header to select all users *on the displayed page*.

When you execute an action, a progress bar will appear informing you of the progress of the action. If you close the page,
the mass action will be interrupted.

### Kick

Removes selected users from your server. They will be able to rejoin if they have a valid invite link (even the same
invite they originally used). Has no effect if a user has already left.

### Ban

Bans selected users from your server. No history will be deleted.

If you are using [kick-based bans](./commands.md#bot-kick-based-bans), then this will issue a kick-based ban.

Bans will be logged in your server's audit log and your [log channel](./settings.md#logging). Due to Discord limitations,
bans issued from the Member Search tool will not send notification DMs even if you have
[ban notification DMs](./commands.md#send-dm-to-banned-members) enabled.
