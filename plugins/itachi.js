let fetch = require('node-fetch')
     let handler  = async (m, { conn, usedPrefix, command }) => {
    heum = await fetch(`https://api-reysekha.herokuapp.com/api/wallpaper/itachi?apikey=APIKEY`)
    json = await heum.buffer()
   conn.sendButtonImg(m.chat, json, '*Incluso el mรกs fuerte de los oponentes tiene siempre una debilidad*', 'โข๐๐ฎ๐๐ธ๐ผ๐ถ๐ฒ๐ฌ - ๐๐๐ฃ', 'โ ๏ธSIGUIENTEโ ๏ธ', `${usedPrefix + command}`, m, false)
}
handler.command = /^(itachi)$/i

module.exports = handler
