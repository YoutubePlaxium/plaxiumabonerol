module.exports = {
    kod: "yardım",
    async run (client, message, args) {
        const { MessageEmbed, DiscordAPIError } = require('discord.js')
        const embed = new MessageEmbed()
        .setTitle('YARDIM KOMUTU')
        .addField(' ')
        .setDescription('Komutlarım:\n **abone**')
        .addField('Frosty Codes')
        .setColor('RANDOM')
        .setThumbnail('https://i.hizliresim.com/dlfjizd.gif')
        .setImage('')
        .setFooter(message.author.tag)
        .setTimestamp()
        message.channel.send(embed)
    }
  }
  