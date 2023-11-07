const { Events } = require('discord.js');

module.exports = {
	name: Events.MessageCreate,
	once: false,
	execute(message) {
        if (message.content.toLowerCase().includes("pretzel")) {
            console.log("User ${message.author} said pretzel")
            // https://old.discordjs.dev/#/docs/discord.js/14.13.0/class/Message?scrollTo=react
            message.react('😠')
                .then(console.log)
                .catch(console.error);
        }
	},
};