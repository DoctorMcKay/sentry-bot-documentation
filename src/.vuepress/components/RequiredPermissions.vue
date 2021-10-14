<template>
	<div class="custom-block tip">
		<p v-html="msg" />
	</div>
</template>

<script>
export default {
	props: {
		roleIsEveryone: {
			type: Boolean
		},
		role: {
			type: Array
		},
		channel: {
			type: Array
		},
		channelDescription: {
			type: String
		},
		suffix: {
			type: String
		}
	},
	computed: {
		msg() {
			let output = '';

			if (this.role && this.role.length > 0) {
				output = `${this.buildList(this.role)} must be enabled on ${this.roleIsEveryone ? '@everyone' : 'the Sentry Bot role'}`;
			}

			if (this.channel && this.channel.length > 0) {
				if (output) {
					output += ', and ';
				}

				output += `${this.buildList(this.channel)} must be allowed to ${this.roleIsEveryone ? '@everyone' : 'the Sentry Bot role'} in ${this.channelDescription || 'this channel'}`;
			}

			return output + '.' + (this.suffix ? ` ${this.suffix}` : '');
		}
	},
	methods: {
		buildList(list) {
			switch (list.length) {
				case 0:
					return '';

				case 1:
					return `<strong>${list[0]}</strong>`;

				case 2:
					return list.map(v => `<strong>${v}</strong>`).join(' and ');

				default:
					list = list.map(v => `<strong>${v}</strong>`);
					list[list.length - 1] = `and ${list[list.length - 1]}`;
					return list.join(', ');
			}
		}
	}
}
</script>

<style scoped>

</style>