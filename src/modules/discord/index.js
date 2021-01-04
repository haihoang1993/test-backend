const Discord = require("discord.js");
const client = new Discord.Client();
// const client = new Discord.Client({
//     cacheGuilds: true,
//     cacheChannels: false,
//     cacheOverwrites: false,
//     cacheRoles: false,
//     cacheEmojis: false,
//     cachePresences: false
// });

client.on("ready", async () => {
    console.log("client ready");
    let guid = client.guilds.cache.get('791185271932059648');
    // let guid = await client.guilds.fetch('791185271932059648')
    // const count = guid.memberCount;
    console.log(guid)
    // client.guilds.cache.forEach(guild => {
    //     console.log('log:',guild)
    // })
});

client.on("message", message => {
    console.log('messgae:',message);
    if (message.content === "?!ping") {
        message.reply("pong");
    }
});

client.login("NzkzNTI3MzQwNjQ2OTI0Mjkw.X-tj7Q.icjTCtguVP53kPdaPpDaMxE_0VA").catch((err)=>{
    console.log('error')
});