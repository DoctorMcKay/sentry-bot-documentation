# Component Rules

[Dashboard: Automod Component Rules](https://sentrybot.gg/guilds/_/automod/component)

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

## Example

This example will allow members to add or remove the "Self-Selected Role" role.

![Component rule example](https://mckay.media/ttp0v.png)
![Button config example](https://mckay.media/h2a3F.png)
![Message builder example](https://mckay.media/ZkMFr.png)
