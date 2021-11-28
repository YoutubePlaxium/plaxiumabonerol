const { MessageEmbed, GuildPreview } = require('discord.js')
module.exports = {
    kod: "a",
    async run (client, message, args) {
        var rolid = message.mentions.roles.first()
        var kisi = message.mentions.members.first()

        if(!message.member.hasPermission("MANAGE_ROLES"))
           return message.reply('Üzgünüm Bu Komutu Kullanamazsınız.')
        if(!kisi) return message.reply('Kişi Etiketlemediniz')

        const embed = new MessageEmbed()
        .setTitle('Plaxium')
        .addField('Abone Rolünü Başarıyla Verdim.')
        .addField('**Plaxium Bot** Abone Rol Komutu')
        .setThumbnail('https://i.hizliresim.com/dlfjizd.gif')
        .setFooter(message.author.tag)
        .setTimestamp()
        var rolid = '912305190626013184'
        kisi.roles.add(rolid)
        var aboneyid = '912679817198047242'
        message.channel.send(embed)
        var rolid = '912305190626013184'
        kisi.roles.add(rolid)
        var aboneyid = '912679817198047242'
        message.roles.find ["abone","ABONE","Abone"]
        if (!message) member.has.aboneyid ,send.EmbedMessage
    }
}
  