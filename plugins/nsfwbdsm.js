let fetch = require('node-fetch')
     let handler  = async (m, { conn, usedPrefix, command }) => {
    heum = await fetch(`https://server-api-rey.herokuapp.com/api/nsfw/bdsm?apikey=apirey`)
    json = await heum.buffer()
   conn.sendButtonImg(m.chat, json, '*Disfrutalo!!*', 'â¢ðð®ðð¸ð¼ð¶ð²ð¬ - ððð£', 'ðSIGUIENTEð', `${usedPrefix + command}`, m, false)
}
handler.command = /^(bdsm|nsfwbdsm)$/i
handler.admin = true
module.exports = handler
