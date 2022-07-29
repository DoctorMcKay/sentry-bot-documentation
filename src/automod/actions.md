# Actions

If all conditions in an automod rule pass, then Sentry will take all of the configured actions for that rule. Actions
are not executed in any particular order.

**By default, nobody is immune to any automod rules.** However, some actions are considered to be moderation actions
and these actions will not be taken on any members who have a higher role than the Sentry Bot role. See
[Role Hierarchy](../index.md#permissions-and-hierarchy) for more information.

Some actions optionally support entering an audit log reason. If configured, this reason will be displayed in the server's
audit log and in any [log channel](../settings.md#logging) message that might be generated.

## Delete Message

<RequiredPermissions :role="['Manage Messages']" />

Deletes the message that triggered the rule. This is a moderation action and will respect role hierarchy.

## Mute Member

<RequiredPermissions :role="['Manage Roles']" />

[Mutes](../commands.md#mute) the member who sent the message that triggered the rule. This is a moderation action and
will respect role hierarchy.

You must have a [muted role](../commands.md#muted-role) set up to use this action.

### Duration

The time in seconds for this mute to last.

### Reason

Optionally, you can provide a reason for the mute. This reason will be displayed to the muted member.

### Suppress Notification to Muted Member

Check this box if you want to prevent Sentry from [notifying](../settings.md#member-notifications) the member that they
have been muted.

## React

<RequiredPermissions :channel="['View Channel', 'Add Reactions', 'Read Message History']" />

Adds an emoji reaction to the message that triggered this rule.

### Emoji

Select an emoji for the reaction. This may be either a Unicode emoji or a custom emoji from your server.

## Reply Privately

Privately sends a customizable message to the member who sent the message that triggered this rule. This message will
be sent via DM or private thread, depending on your [notification mode](../settings.md#member-notifications).

This action is otherwise identical to [Send Message](#send-message).

## Reply With Channel Message

Publicly sends a customizable message in the channel where the message was sent that triggered this rule.

This action is otherwise identical to [Send Message](#send-message).

### Tag Originating Message in Reply

Check this box if you want Sentry to tag the message that triggered this rule in its reply. This is equivalent to using
the "Reply" function in the Discord client. If not checked, then this is sent as a normal, distinct message.

### Send Channel Message Privately to Triggering Member

Check this box if you want Sentry to reply to the interacting member using an
[ephemeral message](https://support.discord.com/hc/en-us/articles/1500000580222-Ephemeral-Messages-FAQ).
This option is only available for automod component rules.

## Report

Reports the message that triggered this rule into your configured
[report notification channel](../commands.md#report-notification-channel).

If you have configured your reports to [mention a role](../commands.md#mention-role-when-report-is-received), the
mention notification will include the name of the automod rule that was triggered.

### Report Notification Channel

For convenience, you can configure your server's report notification channel directly from the automod rule editor, but
please note that this channel selector affects all reports submitted in your server. That is, **changing the channel in
the automod rule editor will also change the [channel configured for the /report command](../commands.md#report-notification-channel)**.
In other words, this channel selector is a clone of the /report command's channel selector, and updates the same setting.
It is not possible to configure a separate report notification channel for automod rules.

## Send Message

Publicly sends a customizable message in any channel of your choice.

### Embed the Trigger Message

Check this box if you want Sentry to add the content of the message that triggered this rule as an embed underneath the
message that it sends with this action. This embed will include some extra information about the user that authored the
message, such as their account creation date and time and when they joined the server.

The embed will also include a button which, when pressed, will privately reply to you with the user's ID. The author's
user ID is already available in the footer of the embed, but the button makes it easier to copy the ID on mobile.

### Delete This Reply Shortly After It's Sent

Check this box if you want Sentry to automatically delete the message that it sends via this action approximately 10
seconds after it's sent. This is useful for giving the entire channel context as to why a message was deleted (for example)
without permanently cluttering the channel.

### Message Placeholder Tokens

You can use these tokens in your message's content or embeds. They will automatically be replaced with the appropriate
value.

| Token | Replacement | Info |
| ----- | ----------- | ---- |
| %GUILD_ID% | The ID of your server | |
| %CHANNEL_ID% | The ID of the channel where the trigger message was sent | |
| %MESSAGE_ID% | The ID of the message that triggered this rule | |
| %MESSAGE_LINK% | The URL of the message that triggered this rule | Same as **Copy Message Link** in the Discord client |
| %USER_ID% | The ID of the user that sent the message that triggered this rule | If you want to tag them, use `<@%USER_ID%>`. If you also want to mention them, enable Users in Allow mentioning box. |
| %USER_NAME% | The username of the user that sent the message that triggered this rule | |
| %USER_NAME_ESCAPED% | The escaped username of the user | For example, **\*Bob\*** becomes **\\\*Bob\\\***. It would display as **\*Bob\*** in a message. |
| %USER_NICKNAME% | The server-specific nickname of the user, or their username if no nickname is set | |
| %USER_NICKNAME_ESCAPED% | The escaped nickname of the user | |
| %USER_TAG% | The user's Discord tag as plain text | For example, **Bob#1234** |
| %USER_TAG_ESCAPED% | The escaped Discord tag | |

## Start Thread

Starts a new thread and adds the member who authored the message that triggered this rule.

### Thread Name

Choose a name for the thread. You can use [placeholder tokens](#message-placeholder-tokens) in the thread name.

### Parent Channel

<RequiredPermissions :channel="['Create Public Threads', 'Create Private Threads', 'Send Messages In Threads', 'Manage Threads']" />

:::warning
If you leave this blank and the trigger message is sent in a non-text channel (e.g. a thread or a voice channel's text
chat), then this action will fail.
:::

Choose a channel that should contain the new thread. If left blank, Sentry will use the channel where the original message
was sent.

### Thread Auto Archive After

Choose a time after which the thread should automatically be archived if no message is sent in it. Some options require
an appropriate server boost level. If the chosen option is not available, then Sentry will automatically choose the longest
available option.

### Add Roles To Thread

If you want to add all members with a given role to the thread automatically, choose those roles here. All members who
have at least one of the selected roles will be added. Sentry accomplishes this by sending a message in the thread with
a role mention for each configured role, which is immediately deleted.

### Reuse An Old Automod-Created Thread Created For The Same User In The Same Channel

If checked, when this action is triggered Sentry will attempt to reuse an old thread that it previously created via automod.
A thread is reused if all of these conditions are true:

- The old thread is in the same channel as the channel the new thread would be created in
- The old thread was created in response to an automod action triggered by the same user who triggered the current action
- The old thread's privacy state is the same as the new thread
- The old thread was created by an automod action that had the reuse option enabled

If all four conditions are met, then instead of creating a new thread, Sentry will unarchive the old thread (if it's
archived) and will proceed with the old thread. If an old thread is reused, then its settings are kept, and these settings
are ignored for this action:

- Thread Name
- Thread Auto Archive After
- Non-Moderators Can Add Other Non-Moderators To This Thread

All other normal Start Thread procedure is followed, including adding the user to the thread if they previously left it,
adding roles via **Add Roles To Thread**, and sending a message (even if that message is identical) to the one preivously
sent in this thread. Sentry will also remove itself from the thread if **Sentry Should Send a Message In The Thread**
is enabled.

### Private Thread

<BoostFeatureRequired feature="private threads" level="2" />

Check this box if you want the created thread to be private. If private threads are not available in the server, then
this action will do nothing and will log its failure to your server's [log channel](../settings.md#logging).

### Non-Moderators Can Add Other Non-Moderators To This Thread

Uncheck this box if you don't want to allow members without the **Manage Threads** permission to add other members who lack
**Manage Threads** permission to this thread by @mentioning them. This option is unavailable for public threads (as
everyone who can see the thread's parent channel can always view the thread).

### Sentry Should Remove Itself From The Thread After All Members Are Added

Check this box if you want Sentry to automatically remove itself from the thread after it has added all applicable
members.

### Sentry Should Send a Message In The Thread

Check this box if you want Sentry to send a message in the thread after it's created. Once checked, a
[message builder](../messagebuilder.md) will appear.

## Toggle Role

Toggles a role on the member who sent the message that triggered this rule.

### Select A Role

Choose the role that you want Sentry to toggle, add, or remove.

### Behavior

- Toggle: If the member doesn't already have the role, then it will be added. If the member does already have the role, then it will be removed.
- Add role: If the member doesn't already have the role, then it will be added. If the member does already have the role, then this action does nothing.
- Remove role: If the member already has the role, then it will be removed. If the member doesn't already have the role, then this action does nothing.

### Add Role Temporarily

Check this box if you want Sentry to automatically remove the role from the member after a prescribed time has elapsed.
Once checked, a box will appear for you to enter the time after which you want Sentry to remove the role.

If the behavior of this action is Toggle and Sentry removes the role because the member already had the role when the
rule was triggered, then this option has no effect.

### Respect Role Hierarchy

Check this box if you want Sentry to respect role hierarchy for this action. If enabled, then Sentry will not add or
remove roles on members whose highest role is higher than the Sentry Bot role.

Regardless of this option, Sentry will never add or remove a role on anyone if that role is higher than the Sentry Bot
role in the [role hierarchy](../index.md#permissions-and-hierarchy).
