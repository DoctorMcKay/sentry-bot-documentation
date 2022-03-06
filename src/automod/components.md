# Component Rules

[Dashboard: Automod Component Rules](https://sentrybot.gg/guilds/_/automod/component)

[Need some ideas for how to use component rules?](#examples)

Sentry's powerful rules-based automod can also be used when members click buttons or select entries in menus attached to
messages sent by Sentry. This could be used to create a UI for members to pick up roles, or any number of other things.
This way of doing things is much more powerful than a traditional bot's reaction-roles feature, since you can do anything
that automod can do using components. For example, you might create a role that members can self-add but not remove, or
an action to temporarily apply a role.

In order to use this feature, you need to first decide which actions users should be able to take using interaction
components. In the dashboard, create a [component rule](https://sentrybot.gg/guilds/_/automod/component) for each
individual action you want to be possible (for example, if you have 3 roles that you want members to be able to self-
select, then you should create 3 separate component rules each with the ToggleRole action).

Once you've created all the necessary component rules, use the [message builder](../utilities.md#post-message) to have
Sentry post a message containing the components you need to make those rules work.

**At the moment, only button components are available.** Select menu components will be available soon.

## Enabled Rules

Only rules that are enabled will be evaluated. If a rule is disabled and a component tied to that rule is interacted with,
the member who interacted with the component will get back an error message informing them that the action they invoked
is not configured properly, and that they should contact the server's moderators.

## Limits

Each server is limited to 10 automod component rules. This limit can be increased to 100 by upgrading your server to
[Premium](../premium.md). Once you reach your limit, no more rules can be created.

If you subscribe to Premium, create more than 10 rules, and then cancel Premium, these things happen:

- All enabled rules continue to be processed when linked components are interacted with, even if you have more than 10
- You won't be able to create any new rules until you delete enough rules such that you have fewer than 10 (enabled or disabled)
- All rules can be edited without restriction
- All rules can be disabled without restriction
- You won't be able to enable any rules that are disabled if enabling that rule would bring your total number of enabled rules over 10

## Examples

- Create a thread-based ticket system with a button that triggers a [Start Thread](./actions.md#start-thread) action
- Toggle roles on users with a [Toggle Role](./actions.md#toggle-role) action

## Example Screenshots

This example will allow members to add or remove the "Self-Selected Role" role.

![Component rule example](https://mckay.media/ttp0v.png)
![Button config example](https://mckay.media/h2a3F.png)
![Message builder example](https://mckay.media/ZkMFr.png)
