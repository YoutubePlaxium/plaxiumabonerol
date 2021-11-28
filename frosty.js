const Discord = require('discord.js')
const client = new Discord.Client()
const { readdirSync } = require('fs');
const { join } = require('path');
const ayarlar = require('./ayarlar.json')

client.commands= new Discord.Collection();

var prefix = ayarlar.prefix
var sahip = ayarlar.sahip

const commandFiles = readdirSync(join(__dirname, "komutlar")).filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
    const command = require(join(__dirname, "komutlar", `${file}`));
    client.commands.set(command.kod, command); // Komutları Ayarlıyoruz.
}

client.on("error", console.error);

client.on('ready', () => {
    client.user.setActivity('')
    console.log('Botumuz Aktif')
});

client.on('message', async msg => {
    if(msg.content == `<@!901888748386660352>`) return msg.channel.send(`> **değistir | Prefix**\n\n> **Sanırım Beni Etiketledin.**\n > prefixim \`${prefix}\``);
  });

client.on("message", async message => {

    if(message.author.bot) return;

    if(message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/);

        const command = args.shift().toLowerCase();

        if(!client.commands.has(command)) return message.channel.send(`Komut dosyamda **${command}** adlı bir komut bulamadım.`);


        try {
            client.commands.get(command).run(client, message, args);

        } catch (error){
            console.error(error);
        }
    }
})

client.on('message', msg => {
    if (msg.content.toLowerCase() === 'sa') {
      msg.channel.send('as');
    }
  });


client.login(ayarlar.token1)
client.login(ayarlar.token2)
client.login(ayarlar.token3)