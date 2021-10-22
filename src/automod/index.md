# Overview

[Dashboard: Automod](https://sentrybot.gg/dashboard/automod)

Sentry's automod feature is very powerful. It allows you to create your own custom rules to evaluate against messages
that are sent in your server.

Each automod rule consists of one or more [conditions](./conditions.md) and one or more [actions](./actions.md) to be
taken if all of the conditions are met.

## Enabled Rules

Only rules that are enabled will be checked. If a rule is disabled, then messages will not be checked against that rule
until you enable it again.

## Only Test New Messages

By default, message rules are checked whenever a new message is sent and when messages are edited. If you don't want
edited messages to be checked against a particular rule, then enable this option. Newly-posted messages will then be
checked, but edited messages will not.

This option is particularly useful for rules that reply with a message based on a text trigger. For example, if you have
a rule with condition [Content Exactly Equals](./conditions.md#content-exactly-equals) "!help" that replies with a message
directing members on how to use a bot, you should probably enable the "only test new messages" option. Otherwise,
mischievous members could edit very old messages to trigger the reply seemingly out of nowhere.
