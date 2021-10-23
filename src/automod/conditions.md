# Conditions

Each condition can be inverted by enabling the "Pass only if condition is not true" checkbox. If this option is checked,
then after the condition is evaluated, its result will be flipped; a pass becomes a fail and a fail becomes a pass.

For example, if you configure an [In Channel](#in-channel) condition with a private staff channel and enable the
"pass only if condition is not true" option, then the rule will only pass for messages sent in channels besides your
private staff channel, effectively disabling the rule for that channel.

## Contains Attachment

This condition passes if the message it's testing contains at least one uploaded file. Linked images that are
automatically embedded by Discord are not considered to be attachments.

## Contains Discord Invite

This condition passes if the message it's testing contains at least one Discord invite link.

## Contains Link

This condition passes if the message it's testing contains at least one link to any destination.

## Contains Media

This condition passes if the message it's testing contains at least one media embed. This includes uploaded images/videos
and links to supported images/videos that are automatically embedded by Discord.

Because Discord edits in embedded media after messages are sent, this condition may not pass or fail for 10-20 seconds.

This condition passes immediately if:

- The message contains an uploaded image or video
- The message contains linked media that was recently linked and thus is already in Discord's embed cache

This condition fails immediately if:

- The message contains no uploaded images or videos, and contains no links

If none of these conditions are true, then the message will be re-tested in 10-20 seconds and checked for Discord media
embeds.

## Contains Substring

This condition passes if the message it's testing contains at least one of the configured substrings. You must configure
at least one substring to search for.

### Case Sensitive

Check this box if you want substring searching to be case-sensitive (i.e. the matched string in the message must match
the capitalization of the substring you entered).

### Check Embeds In Addition to Message Content

Check this box if you also want to check embeds (i.e. the title of linked videos, the headline of linked articles).

### Ignore Punctuation in Both Substrings and Message Content

Check this box if you want the text search to ignore punctuation characters such as spaces and symbols. Beware that this
may have undesired results. For example, if you create a rule to find attempted `@here` mentions and you enable this
option, then the `@` character will be ignored and this condition will pass against all messages that contain the word
"here" (or "w**here**").

## Content Exactly Equals

This condition passes if the message it's testing exactly equals one of the configured strings (excluding leading or
trailing whitespace).

### Case Sensitive

Check this box if you want message matching to be case-sensitive (i.e. the matched string in the message must match
the capitalization of the string you entered).

## In Channel

This condition passes if the message it's testing was sent in one of the configured channels.

## Member Has Role

This condition passes if the message it's testing was sent by a member who has one of the configured roles.

This condition is useful for making moderators immune to automod rules by enabling the match only if condition is not true option.
