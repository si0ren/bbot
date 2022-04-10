/*
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Other
global.owner = ['6285158060230']
global.premium = ['6285158060230']
global.ownername = 'Pnglaj4l'
global.botname = 'B-BOT'
global.footer = 'Made With ❤ By @dugongkayang_\nBio : https://ln.ki/pnglaj4l'
global.ig = 'https://instagram.com/dugongkayang_'
global.email = 'riychh.20@gmail.com'
global.region = 'Indonesia'
global.sc = 'https://instagram.com/dugongkayang_'
global.myweb = 'https://ln.ki/pnglaj4l'
global.packname = 'Created By B-BOT'
global.author = '@dugongkayang_ on instagram'
global.sessionName = 'session'
global.prefa = ['','!','.','?','/','#','$','%','^','&','*','(',')','{','}',':',';','"','|']
global.sp = '⭔'
global.mess = {
    success: '✓ Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 200
}
global.thumb = fs.readFileSync('./image/bbot.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
