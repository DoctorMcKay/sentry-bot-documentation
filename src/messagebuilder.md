# Message Builder

## Message Content

For the moment, message content needs to be typed as raw Discord Markdown, but there are future plans for adding the
ability to more easily add channel, user, role, and other tags to messages in the message builder.

Checkout Discord's [Markdown Text 101](https://support.discord.com/hc/en-us/articles/210298617-Markdown-Text-101-Chat-Formatting-Bold-Italic-Underline-)
article for basic information on Discord message formatting.

In addition to basic Markdown formatting, you can use these tag formats:

- `<@110101189269393408>` to tag a user with ID `110101189269393408`
- `<@!110101189269393408>` to tag a user with ID `110101189269393408` **by server nickname**
- `<#281667407200911360>` to tag a channel with ID `281667407200911360`
- `<@&869045105900781618>` to tag a role with ID `869045105900781618`
- `[Link Text](https://example.com)` to make a link to https://example.com with text `Link Text`
- `<:sentry:893724781197807616>` to use a custom emoji **from your server** named `sentry` with ID `893724781197807616`
- `<a:sentry:893724781197807616>` to use an animated custom emoji **from your server** named `sentry` with ID `893724781197807616`
- `<t:1618953630>` to print a localized timestamp for Unix time `1618953630`
    - You can specify the timestamp format by using `<t:1618953630:f>`, replacing `f` with one of these format codes:
        - `t` - Time (5:20 PM)
        - `T` - Time with seconds (5:20:30 PM)
        - `d` - Short date (04/20/2021)
        - `D` - Long date (April 20, 2021)
        - `f` - Short date/time (April 20, 2021 5:20 PM) (default)
        - `F` - Long date/time (Tuesday, April 20, 2021 5:20 PM)
        - `R` - Relative time (6 months ago)

## Allow Mentioning

By default, messages created with the message builder will not be allowed to mention anyone, even if you add a tag that
should otherwise mention a user or role. To enable mentions for a message, choose the types of mentions that you want to
allow.

If you select **Users**, then all users tagged in the message with format `<@110101189269393408>` will be notified.

If you select **Roles**, then all roles tagged in the message with format `<@&869045105900781618>` will be notified.

If you select **@everyone and @here**, then the @everyone and @here tags will mention all channel members and all active
channel members, respectively. No special formatting is required for these mention tags, although you do still need to
include them in the message content; simply enabling them in Allow Mentioning is not enough.

:::tip
When editing an existing Sentry message, you will need to choose again which mention types you want to allow. Allowed
mentions from when a message was initially created do not carry over to edits.
:::

## Embeds

Messages can have up to 10 embeds. All embed fields are optional, although you will need to fill in at least one field
in each embed. The footer time field cannot be the only field you define. If you add at least one embed to a message,
then the message content field is optional.

Some embed fields cannot be filled out unless other fields are first filled out. These dependent fields will be shown
as disabled until you fill out their required field.

Each embed can have up to 25 fields. Each field must have a title and content.
