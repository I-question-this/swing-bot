const { Events } = require('discord.js');

module.exports = {
	name: Events.MessageCreate,
	once: false,
	execute(message) {
                if (message.content.toLowerCase().includes("pretzel")) {
                console.log(`User ${message.author} said pretzel`)
                // Try to use a custom emoji
                console.log(message.guild.emojis.cache)
                for (const [id, emoji] of message.guild.emojis.cache) {
                        console.log(`Emoji: ${emoji} -> ${typeof emoji}.`)
                        if (typeof emoji !== "undefined") {
                                if (emoji.name.includes("angry_pretzel")) {
                                        message.react(emoji)
                                                .then(console.log)
                                                .catch(console.error)
                                        // End function since we used a custom emoji
                                        return
                                }
                        }
                }
                // Default back to standard emojis
                message.react('😠')
                        .then(console.log)
                        .catch(console.error);
                message.react('🥨')
                        .then(console.log)
                        .catch(console.error);
                }
	},
};