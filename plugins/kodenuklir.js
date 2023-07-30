import fetch from 'node-fetch'
import { apivisit } from './kanghit.js'

let handler = async (m, { conn }) => {
let res = await fetch('https://raw.githubusercontent.com/hamzzcleys/Random-Image/main/kodenuklir.txt')
let txt = await res.text()
await conn.reply(m.chat, `*Hai kak ${conn.getName(m.sender)}, hallo*
${txt}
*CODE INI SEBAGAI CONTOH MASIH BANYAK LAGI*
`.trim(), m)
await apivisit
}
handler.help = ['kodenuklir','kodehentai']
handler.tags = ['info']
handler.command = /^(kodenuklir|kodehentai|k)$/i
export default handler