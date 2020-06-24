const { Telegraf } = require('telegraf')
require('dotenv').config()
 
//You must have a .env file with the correct config.
const bot = new Telegraf(process.env.BOT_TOKEN)
bot.start((ctx) => ctx.reply('Welcome!'))
//bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
//bot.on('text', (ctx) => ctx.reply("echo : " + ctx.message.text))
//bot.hears('hi', (ctx) => ctx.reply('Hey there'))

bot.hears("salut", (ctx)=>{
ctx.reply("salut")
}) 

bot.hears("barbut", (ctx)=>{
    ctx.replyWithDice();
})

bot.hears("darts", (ctx)=>{
    ctx.replyWithDice({emoji:"🎯"});
})

bot.hears("basket", (ctx)=>{
    ctx.replyWithDice({emoji:"🏀"});
})

bot.launch()