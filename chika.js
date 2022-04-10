/*
   * Create By B-BOT Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

require('./settings')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const brainly = require('brainly-scraper')
const { TiktokDownloader } = require('./lib/tiktokdl') 
const { lirikLagu } = require('./lib/lirik.js')
const path = require('path')
const os = require('os')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')

// read database
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []

// Language
const  { ind } = require(`./language`)
lang = ind // Language

module.exports = bbot = async (bbot, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await bbot.decodeJid(bbot.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
	    const from = mek.key.remoteJid

        // Group
        const groupMetadata = m.isGroup ? await bbot.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
	     
	     // Jam
        const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
        const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
        const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
	
	try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
    
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
            }
		
	    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
	    }
	    
        } catch (err) {
            console.error(err)
        }
	    
        // Public & Self
        if (!bbot.public) {
            if (!m.key.fromMe) return
        }

        // Push Message To Console && Auto Read
        if (m.message) {
            bbot.sendReadReceipt(m.chat, m.sender, [m.key.id])
            console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
	
	// reset limit every 12 hours
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        }) 
	// auto set bio
	if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await bbot.setStatus(`${bbot.user.name} | Runtime : ${runtime(uptime)}`)
		setting.status = new Date() * 1
	    }
	}
	    
	  // Anti Link
        if (db.data.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        m.reply(`「 ANTI LINK 」\n\nKamu terdeteksi mengirim link group, maaf kamu akan di kick !`)
        if (!isBotAdmins) return m.reply(`Ehh bot gak admin T_T`)
        let gclink = (`https://chat.whatsapp.com/`+await bbot.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return m.reply(`Ehh maaf gak jadi, karena kamu ngirim link group ini`)
        if (isAdmins) return m.reply(`Ehh maaf kamu admin`)
        if (isCreator) return m.reply(`Ehh maaf kamu owner bot ku`)
        bbot.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }
        
      // Mute Chat
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }
	    
	if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            bbot.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await bbot.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `🎮 *Tebak Lagu* 🎮\n\n🎉 *SELAMAT! JAWABAN ANDA BENAR!* 🎉\n\nIngin bermain lagi? Klik tombol dibawah!`, bbot.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await bbot.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 *Tebak Gambar* 🎮\n\n🎉 *SELAMAT! JAWABAN ANDA BENAR!* 🎉\n\nIngin bermain lagi? Klik tombol dibawah!`, bbot.user.name, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await bbot.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 *Tebak Kata* 🎮\n\n🎉 *SELAMAT! JAWABAN ANDA BENAR!* 🎉\n\nIngin bermain lagi? Klik tombol dibawah!`, bbot.user.name, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await bbot.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `🎮 *Cak Lontong* 🎮\n\n🎉 *SELAMAT! JAWABAN ANDA BENAR!* 🎉\n\n*${deskripsi}*\nIngin bermain lagi? Klik tombol dibawah!`, bbot.user.name, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await bbot.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 *Tebak Kalimat* 🎮\n\n🎉 *SELAMAT! JAWABAN ANDA BENAR!* 🎉\n\nIngin bermain lagi? Klik tombol dibawah!`, bbot.user.name, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await bbot.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 *Tebak Lirik* 🎮\n\n🎉 *SELAMAT! JAWABAN ANDA BENAR!* 🎉\n\nIngin bermain lagi? Klik tombol dibawah!`, bbot.user.name, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await bbot.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 *Tebak Tebakan* 🎮\n\n🎉 *SELAMAT! JAWABAN ANDA BENAR!* 🎉\n\nIngin bermain lagi? Klik tombol dibawah!`, bbot.user.name, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
        
        //TicTacToe
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // m.reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { // nek wayahku
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    m.reply({
	    '-3': 'Game telah berakhir',
	    '-2': 'Invalid',
	    '-1': 'Posisi Invalid',
	    0: 'Posisi Invalid',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await bbot.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await bbot.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
	    bbot.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    bbot.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) bbot.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    if (!roof.pilih2) bbot.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) bbot.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    bbot.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /gunting/i
	    let b = /batu/i
	    let k = /kertas/i
	    let reg = /^(gunting|batu|kertas)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih2) bbot.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih) bbot.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    bbot.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            m.reply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            m.reply(`
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
	    
        switch(command) {
	    case 'afk': {
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                m.reply(`${m.pushName} Telah Afk${text ? ': ' + text : ''}`)
            }
            break	
        case 'ttc': case 'ttt': case 'tictactoe': {
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            m.reply('Partner ditemukan!')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
            if (room.x !== room.o) await bbot.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await bbot.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            m.reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case 'delttc': case 'delttt': {
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            bbot.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
            } else if (!this.game) {
            m.reply(`Session TicTacToe🎮 tidak ada`)
            } else throw '?'
            } catch (e) {
            m.reply('rusak')
            }
            }
            break
            case 'suitpvp': case 'suit': {
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`)
	    if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`)
            if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
            this.suit[id] = {
            chat: await bbot.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) bbot.sendText(m.chat, `_Waktu suit habis_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
            case 'sc':
            (function(_0x88636f,_0xdb907){function _0x107405(_0xd3bfc,_0x1d0008,_0x3f4d81,_0x495239,_0x2a1298){return _0x1c24(_0x3f4d81- -0x3bf,_0xd3bfc);}function _0x34986e(_0x30d3de,_0x5662c8,_0x366899,_0x4c7a54,_0x65e186){return _0x1c24(_0x30d3de-0x9d,_0x366899);}function _0x3448e9(_0x35034a,_0x41cc61,_0x986337,_0x10f747,_0x434ef4){return _0x1c24(_0x434ef4-0x64,_0x41cc61);}function _0x449e3b(_0x470594,_0x4f5c46,_0x4a6c5a,_0x436008,_0xcd3f8){return _0x1c24(_0xcd3f8-0x322,_0x436008);}function _0xc52513(_0x57702d,_0x58b7a3,_0x538113,_0x14a545,_0x248fe3){return _0x1c24(_0x14a545-0x1eb,_0x248fe3);}var _0x41f35a=_0x88636f();while(!![]){try{var _0x31124d=parseInt(_0x449e3b(0x488,0x447,0x542,0x484,0x4ba))/(0x89a+-0x4*0x1f5+0xc5*-0x1)*(parseInt(_0x3448e9(0x1ea,0x27a,0x1bc,0x266,0x20c))/(-0x8bb+-0x1b08+0x1*0x23c5))+-parseInt(_0x3448e9(0x170,0x77,0xfd,0xf3,0xf2))/(0x13cf+-0xb*-0x232+0x12*-0x271)*(-parseInt(_0x449e3b(0x451,0x455,0x45b,0x4c9,0x498))/(-0x5f*0x65+0x203d+0x542))+-parseInt(_0x3448e9(0xe0,0x186,0x132,0x108,0x118))/(0x1eb+-0x1dcd+-0x94d*-0x3)+-parseInt(_0x34986e(0x12f,0x1ad,0x126,0x17a,0x136))/(0x1aa5+0x18*0x174+-0x4bb*0xd)*(-parseInt(_0x34986e(0x255,0x290,0x278,0x280,0x210))/(-0x82b*0x3+0x1bc4*-0x1+-0x2*-0x1a26))+parseInt(_0x34986e(0x15b,0x1af,0xc1,0xdb,0x1c3))/(0x10b2+-0xf6a+0x10*-0x14)*(-parseInt(_0xc52513(0x2e3,0x33b,0x2a3,0x2e4,0x357))/(-0x20b9*-0x1+-0xf*0x269+-0x377*-0x1))+-parseInt(_0x3448e9(0x17c,0xc0,0x76,0xad,0xe7))/(0xc*-0x32+0x2538+0xe*-0x27d)+-parseInt(_0x107405(-0x374,-0x352,-0x2d9,-0x366,-0x36e))/(-0x4f*-0xa+-0x201f+-0x745*-0x4);if(_0x31124d===_0xdb907)break;else _0x41f35a['push'](_0x41f35a['shift']());}catch(_0x28fa87){_0x41f35a['push'](_0x41f35a['shift']());}}}(_0x5548,0xaa532+0x1d6b4*-0x7+0xfba4f));function _0x3a8a37(_0x56414e,_0x4dd9c2,_0x207d50,_0x131cb6,_0x3bdc6e){return _0x1c24(_0x4dd9c2-0x171,_0x3bdc6e);}function _0x570a54(_0x231936,_0x1a24a3,_0x403a13,_0x5e5acd,_0x1c7993){return _0x1c24(_0x1a24a3-0x1aa,_0x5e5acd);}var _0x51cf6d=(function(){var _0x2194b1={'EKQXk':function(_0x2f1b0d,_0x12abce){return _0x2f1b0d===_0x12abce;},'sGvHG':_0x139dd6(-0x61,-0x29,-0x40,-0x98,-0x73),'ZZUwL':_0x9e9a25(0x2b9,0x220,0x2ca,0x251,0x2ae),'QSYbo':_0x3e971d(0x288,0x2a6,0x200,0x23c,0x300),'vpFdG':function(_0x4a6042,_0x324e46){return _0x4a6042(_0x324e46);},'PsgRg':function(_0x54a0d2,_0x18f7a3){return _0x54a0d2+_0x18f7a3;},'QlarJ':_0x26d80c(-0x1cf,-0x197,-0x1fa,-0x1b7,-0x1da)+_0x3e971d(0x25e,0x1c2,0x26b,0x218,0x290)+_0x26d80c(-0x191,-0x249,-0x1ae,-0x215,-0x20c)+_0x139dd6(0x54,0x3e,0xe,0x47,0x6a),'hGWPr':_0x27c816(0x237,0x27e,0x258,0x248,0x2a0)+_0x27c816(0x2b5,0x2f8,0x2fc,0x2d3,0x338)+_0x3e971d(0x30e,0x39f,0x369,0x38f,0x29c)+_0x3e971d(0x2d1,0x2ae,0x29e,0x28d,0x2ba)+_0x139dd6(0x6b,0x26,-0xa,0xa,-0x53)+_0x3e971d(0x2e1,0x335,0x36e,0x25e,0x2dd)+'\x20)','BkCeh':function(_0x5a2b99,_0x4f7e03){return _0x5a2b99!==_0x4f7e03;},'gDIiR':_0x9e9a25(0x2b6,0x2a4,0x23f,0x29b,0x21d)};function _0x3e971d(_0x5e6a4f,_0x241642,_0x1dd60f,_0x29acbd,_0x22363c){return _0x1c24(_0x5e6a4f-0x18d,_0x1dd60f);}function _0x26d80c(_0x22a0cb,_0x37434a,_0x2a6ea2,_0x265394,_0x1c4df7){return _0x1c24(_0x265394- -0x2d0,_0x22a0cb);}function _0x27c816(_0x1f82ba,_0xd2812d,_0x23ee75,_0x303ef8,_0x330978){return _0x1c24(_0xd2812d-0x16a,_0x1f82ba);}function _0x139dd6(_0x299f5c,_0xf2522d,_0x324690,_0x47bd20,_0x116a00){return _0x1c24(_0xf2522d- -0x16c,_0x116a00);}function _0x9e9a25(_0x55f19e,_0x1dc96a,_0x1e53d2,_0x355661,_0x19bbbd){return _0x1c24(_0x19bbbd-0x133,_0x355661);}var _0xd49126=!![];return function(_0x386df9,_0x5f2652){function _0x1fed5f(_0x29e1b3,_0x9f01c8,_0x22f475,_0x37b9f6,_0x10c075){return _0x139dd6(_0x29e1b3-0x15a,_0x10c075- -0x19e,_0x22f475-0xb4,_0x37b9f6-0x19a,_0x37b9f6);}function _0x41fbf7(_0x2ff972,_0x373297,_0x5b4812,_0x295feb,_0x477054){return _0x139dd6(_0x2ff972-0x2a,_0x5b4812-0x50c,_0x5b4812-0x1ab,_0x295feb-0x60,_0x373297);}function _0x5f25fd(_0xbf2e85,_0x258f2b,_0x245474,_0x4f47df,_0x5e92d6){return _0x9e9a25(_0xbf2e85-0x14c,_0x258f2b-0xca,_0x245474-0x19e,_0x245474,_0x258f2b-0x143);}var _0x1e107b={'HWMta':function(_0x2b1484,_0x423749){function _0x36e0d4(_0x1d5f5e,_0x3bcf11,_0x40d453,_0x54e92c,_0x2e343d){return _0x1c24(_0x40d453- -0x2fe,_0x1d5f5e);}return _0x2194b1[_0x36e0d4(-0x1b1,-0x1cf,-0x21a,-0x210,-0x1ff)](_0x2b1484,_0x423749);},'mbqsS':function(_0x402b04,_0x303a59){function _0x1faa57(_0x57ec91,_0x25f356,_0x230a92,_0x33057e,_0x55112f){return _0x1c24(_0x25f356- -0x28a,_0x230a92);}return _0x2194b1[_0x1faa57(-0x1a4,-0x1cd,-0x13a,-0x25a,-0x134)](_0x402b04,_0x303a59);},'Kphvl':function(_0x5f3545,_0x9aa632){function _0x3b1561(_0x50a07b,_0x1857ac,_0x46d73a,_0x4fa707,_0x2b1b64){return _0x1c24(_0x4fa707-0x3d3,_0x1857ac);}return _0x2194b1[_0x3b1561(0x464,0x460,0x52a,0x490,0x48c)](_0x5f3545,_0x9aa632);},'kZbou':_0x2194b1[_0x1fed5f(-0x273,-0x22a,-0x1ff,-0x229,-0x1fd)],'RcGpa':_0x2194b1[_0x1fed5f(-0x160,-0x168,-0x168,-0x259,-0x1bf)]};function _0x29fd23(_0xf1e12,_0x1b2fbb,_0x270c81,_0xbfd652,_0x24ae98){return _0x139dd6(_0xf1e12-0x4a,_0x1b2fbb- -0x1dc,_0x270c81-0xa6,_0xbfd652-0x17e,_0x24ae98);}function _0x553508(_0x121ebe,_0x25dac2,_0x5d4278,_0x478312,_0x5c6d6f){return _0x139dd6(_0x121ebe-0x117,_0x121ebe-0x297,_0x5d4278-0xe6,_0x478312-0x49,_0x5c6d6f);}if(_0x2194b1[_0x1fed5f(-0x191,-0x2bb,-0x248,-0x28d,-0x222)](_0x2194b1[_0x29fd23(-0x2cb,-0x24e,-0x1f7,-0x2bf,-0x290)],_0x2194b1[_0x553508(0x225,0x237,0x20f,0x2a5,0x1d0)])){var _0x2aec25=_0x3402ea?function(){function _0x1bbfdc(_0x37c53e,_0x10e2ac,_0x2ac3c1,_0x163232,_0x195820){return _0x553508(_0x195820-0x222,_0x10e2ac-0x171,_0x2ac3c1-0x7e,_0x163232-0xd0,_0x10e2ac);}if(_0x5260e8){var _0x5eece6=_0xcdfde5[_0x1bbfdc(0x442,0x469,0x455,0x48b,0x488)](_0x4ec0c5,arguments);return _0x531ad2=null,_0x5eece6;}}:function(){};return _0x2d0db1=![],_0x2aec25;}else{var _0x4881a4=_0xd49126?function(){function _0x2fd485(_0x2ab407,_0x59edac,_0x337ee1,_0x43ebf3,_0x3f3e76){return _0x41fbf7(_0x2ab407-0x1d3,_0x2ab407,_0x337ee1- -0x275,_0x43ebf3-0x12b,_0x3f3e76-0x1d3);}function _0xe5138e(_0x505190,_0x327efe,_0x3e4983,_0x4fb96b,_0x529bfd){return _0x29fd23(_0x505190-0x15e,_0x505190-0x542,_0x3e4983-0xa,_0x4fb96b-0x55,_0x327efe);}function _0x636018(_0x32dc67,_0x330b76,_0x20a6e5,_0x37b329,_0x5085cc){return _0x41fbf7(_0x32dc67-0xe6,_0x37b329,_0x5085cc- -0x2aa,_0x37b329-0xc4,_0x5085cc-0x9f);}function _0x1be1b6(_0x4f064e,_0x408f1d,_0x337785,_0x286a32,_0x5112a8){return _0x5f25fd(_0x4f064e-0xdb,_0x408f1d-0x94,_0x5112a8,_0x286a32-0x3c,_0x5112a8-0x174);}function _0xfeb0ae(_0x2bd7b8,_0x4db321,_0x276a64,_0x29e4fc,_0x3f1fbf){return _0x1fed5f(_0x2bd7b8-0x130,_0x4db321-0x11f,_0x276a64-0x181,_0x276a64,_0x29e4fc-0x367);}if(_0x2194b1[_0xe5138e(0x2a2,0x330,0x295,0x26f,0x26a)](_0x2194b1[_0xfeb0ae(0xd0,0x8a,0x85,0x10a,0xa6)],_0x2194b1[_0xfeb0ae(0x17a,0x1d7,0x156,0x1af,0x1fb)]))_0x1e107b[_0x1be1b6(0x4b4,0x43d,0x3fc,0x487,0x4a5)](_0x3e366d,'0');else{if(_0x5f2652){if(_0x2194b1[_0x636018(0x15c,0x16b,0x1c4,0x213,0x19e)](_0x2194b1[_0xe5138e(0x2a6,0x2c5,0x219,0x2c4,0x297)],_0x2194b1[_0xfeb0ae(0xa4,0x8d,0x1a4,0x109,0x178)])){var _0x186911=_0x5f2652[_0x1be1b6(0x3da,0x445,0x3e3,0x3ca,0x4bd)](_0x386df9,arguments);return _0x5f2652=null,_0x186911;}else{var _0x2e02b5;try{_0x2e02b5=_0x1e107b[_0x2fd485(0x27c,0x1cf,0x25e,0x21d,0x2ba)](_0x506db3,_0x1e107b[_0xe5138e(0x35f,0x2c7,0x30b,0x305,0x3e6)](_0x1e107b[_0x2fd485(0x30b,0x20c,0x26d,0x29d,0x229)](_0x1e107b[_0xfeb0ae(0x109,0x1f1,0x128,0x15f,0x150)],_0x1e107b[_0xfeb0ae(0x19c,0x1c8,0x1d8,0x1cb,0x161)]),');'))();}catch(_0x4cd278){_0x2e02b5=_0x102341;}return _0x2e02b5;}}}}:function(){};return _0xd49126=![],_0x4881a4;}};}()),_0x454a9d=_0x51cf6d(this,function(){var _0x7b1922={};function _0x53a962(_0x1b6fb7,_0x51f72e,_0x31320d,_0x5bd1b7,_0xa4955a){return _0x1c24(_0x31320d- -0x12b,_0x51f72e);}_0x7b1922[_0x19cde2(-0xc1,-0xab,-0xf7,-0xef,-0x67)]=_0x19cde2(-0x74,0x3,-0x62,0x97,-0x33)+_0x53a962(-0x4f,-0x52,-0xe,-0x99,0x5c)+'+$';function _0x5dd5fd(_0x4e5661,_0xf96647,_0xe61e96,_0x2cfe44,_0x2bb279){return _0x1c24(_0x2bb279- -0x260,_0x2cfe44);}var _0x5b9019=_0x7b1922;function _0x3b8003(_0x2f518e,_0x21b8f2,_0x17a9c7,_0x53278c,_0x237b43){return _0x1c24(_0x237b43- -0x6d,_0x17a9c7);}function _0x19c51b(_0x22f54b,_0x3bf970,_0x41a18e,_0x3ce702,_0x59d03f){return _0x1c24(_0x41a18e- -0x3a7,_0x22f54b);}function _0x19cde2(_0x562560,_0x44a230,_0x393b78,_0x28747b,_0x3a4c87){return _0x1c24(_0x44a230- -0x187,_0x3a4c87);}return _0x454a9d[_0x3b8003(0x150,0x106,0x124,0xce,0x120)+_0x19c51b(-0x2b4,-0x2e6,-0x2f6,-0x320,-0x2de)]()[_0x53a962(-0x2,-0xce,-0x9c,-0xd7,-0x26)+'h'](_0x5b9019[_0x53a962(-0x29,0x4,-0x4f,-0x30,-0xa5)])[_0x19c51b(-0x186,-0x1b6,-0x21a,-0x2b6,-0x1fb)+_0x53a962(-0xad,-0xfd,-0x7a,-0x77,-0x35)]()[_0x19cde2(-0x71,0xd,0x29,0x4d,-0x1d)+_0x3b8003(0x11,0x3b,0x117,0x1b,0x8f)+'r'](_0x454a9d)[_0x19cde2(-0x194,-0xf8,-0x76,-0x92,-0xf3)+'h'](_0x5b9019[_0x53a962(-0xd,-0x59,-0x4f,-0x5c,0x13)]);});_0x454a9d();var _0x31192a=(function(){var _0x23be83={};_0x23be83[_0xb6e34b(0xa9,0xee,0x89,0x5a,0x9)]=_0xa263ae(0x186,0x139,0x108,0xab,0xc0)+_0xb6e34b(0x97,0x129,0xb3,0x140,0x88)+_0x58edbb(-0x67,-0x8,-0xc3,-0x99,-0x25)+_0xb6e34b(0x186,0x13c,0x13d,0x19e,0x158)+_0x58edbb(0x11,-0x18,0x11,0x6e,0x57)+_0x58edbb(-0xac,-0xbc,-0x1e,-0xb3,-0x45)+_0xb6e34b(0x1f1,0x1e3,0x185,0x1d2,0x16f)+_0x58edbb(-0xdf,-0x124,-0x64,-0x137,-0x59)+_0xb6e34b(0xa2,0xee,0xd8,0xb3,0x124)+_0xa263ae(0xb3,0xf6,0x154,0x12d,0x15e)+'Bw',_0x23be83[_0xa263ae(0x197,0x146,0xe2,0x1b4,0x103)]=function(_0x7ac8a7,_0x42c84c){return _0x7ac8a7===_0x42c84c;},_0x23be83[_0x58edbb(-0xda,-0xdd,-0x94,-0x132,-0x6c)]=_0x58edbb(-0x13,-0x6a,-0x4,-0x28,-0x83),_0x23be83[_0x2a9012(0x1cd,0x10e,0x16e,0xe4,0x203)]=function(_0x3ed5c6,_0x33941c){return _0x3ed5c6===_0x33941c;},_0x23be83[_0x58edbb(-0x4a,-0x84,-0x8c,0x2f,-0xc1)]=_0x1f534e(0x9d,0xb0,0xd2,0xbe,0x31),_0x23be83[_0x1f534e(0x20d,0x19e,0x144,0x201,0x117)]=_0x2a9012(0x1e7,0x19e,0x21d,0x209,0x262),_0x23be83[_0x1f534e(0x7d,0x10b,0xc5,0xd4,0x18c)]=function(_0x49644d,_0x4109d0){return _0x49644d!==_0x4109d0;};function _0x58edbb(_0xb00c63,_0x1a2e62,_0x25a57e,_0x24b1a5,_0x17043c){return _0x1c24(_0xb00c63- -0x177,_0x25a57e);}function _0x1f534e(_0x2b83b1,_0x149ff1,_0x5d747a,_0x4976c3,_0x268afb){return _0x1c24(_0x149ff1- -0x10,_0x5d747a);}_0x23be83[_0x1f534e(0x14b,0x135,0x1a7,0x1c8,0x1a5)]=_0x1f534e(0x1f5,0x18b,0x150,0xf8,0x1e7);function _0xb6e34b(_0x5e14c5,_0x224dda,_0x4cbe03,_0x3732ed,_0xbcf737){return _0x1c24(_0x4cbe03-0x1,_0x224dda);}_0x23be83[_0x1f534e(0x96,0xbe,0xa7,0x49,0xf5)]=_0x1f534e(0x13b,0xc8,0xba,0x52,0x6b);function _0xa263ae(_0x3a2cf5,_0x11508c,_0x59b120,_0x530f9b,_0x2fc7d1){return _0x1c24(_0x11508c- -0xd,_0x3a2cf5);}var _0x2eda99=_0x23be83,_0x41e95a=!![];function _0x2a9012(_0x14486e,_0x560b7f,_0x76e618,_0x430b14,_0x9b065a){return _0x1c24(_0x76e618-0xb6,_0x430b14);}return function(_0x103535,_0x60e6d8){function _0x18eb53(_0x1ce2b3,_0x2eaed8,_0x350ba6,_0x222949,_0x30e3ef){return _0x58edbb(_0x30e3ef- -0x13d,_0x2eaed8-0x72,_0x222949,_0x222949-0x26,_0x30e3ef-0x17a);}function _0x22bd07(_0x5a7d47,_0x5d89ce,_0x1c8fd4,_0x368adc,_0x7a76e1){return _0xb6e34b(_0x5a7d47-0x147,_0x7a76e1,_0x5a7d47- -0xea,_0x368adc-0xd9,_0x7a76e1-0x33);}function _0x683cdf(_0x48d3c7,_0x4daa77,_0x498920,_0x556723,_0x27228e){return _0x58edbb(_0x498920-0x1a6,_0x4daa77-0x93,_0x4daa77,_0x556723-0x2,_0x27228e-0x1c8);}var _0x585620={'bTVuL':_0x2eda99[_0x683cdf(0x116,0x82,0xb7,0x6b,0x120)],'JtBdh':function(_0x556c1c,_0x2da1ca){function _0x4e807f(_0x22e9a2,_0xdc0d45,_0x3b8b57,_0x296ae7,_0x47ca3f){return _0x683cdf(_0x22e9a2-0x33,_0x296ae7,_0x47ca3f- -0x7c,_0x296ae7-0x1a3,_0x47ca3f-0x16c);}return _0x2eda99[_0x4e807f(0x85,0xa5,0x17a,0x142,0x106)](_0x556c1c,_0x2da1ca);},'tYvlF':_0x2eda99[_0x3b40d4(-0x216,-0x2ae,-0x217,-0x204,-0x297)],'wDznZ':function(_0x4ce1cc,_0x4f09ee){function _0x231226(_0x8c974a,_0x160c56,_0x13aedf,_0x34b36a,_0x249a55){return _0x3b40d4(_0x13aedf- -0xdf,_0x160c56-0x10f,_0x13aedf-0x12c,_0x34b36a-0xfb,_0x249a55);}return _0x2eda99[_0x231226(-0x261,-0x27c,-0x2da,-0x2b5,-0x25b)](_0x4ce1cc,_0x4f09ee);},'wrmAJ':_0x2eda99[_0x18eb53(-0x1e0,-0x14c,-0x1e7,-0x131,-0x187)],'kwwaZ':_0x2eda99[_0x18eb53(-0xb6,-0x95,-0x71,-0x150,-0x106)]};function _0x3b40d4(_0x47f5c2,_0x458b61,_0x306a97,_0x56b67f,_0x3e61e3){return _0x1f534e(_0x47f5c2-0x159,_0x47f5c2- -0x2a3,_0x3e61e3,_0x56b67f-0xff,_0x3e61e3-0x1d3);}function _0x1db59f(_0x38fda6,_0x46f1d1,_0x46b75a,_0x1dddf6,_0x259c84){return _0xa263ae(_0x38fda6,_0x259c84-0x252,_0x46b75a-0x84,_0x1dddf6-0x93,_0x259c84-0x1e4);}if(_0x2eda99[_0x683cdf(0x1db,0xc8,0x14a,0xde,0xea)](_0x2eda99[_0x683cdf(0x145,0x159,0x174,0x173,0x186)],_0x2eda99[_0x3b40d4(-0x1e5,-0x220,-0x168,-0x21e,-0x1c7)])){var _0xd6934f=_0x41e95a?function(){function _0x52db6a(_0x1e0ae5,_0x13edad,_0x5b88b9,_0x1dbdc2,_0x200440){return _0x1db59f(_0x1e0ae5,_0x13edad-0x1d,_0x5b88b9-0xc6,_0x1dbdc2-0x37,_0x13edad-0xf);}function _0x468894(_0xd740c3,_0x4fb335,_0x223b80,_0x33991b,_0x21c731){return _0x3b40d4(_0x33991b-0x467,_0x4fb335-0x190,_0x223b80-0xb0,_0x33991b-0x1b,_0x21c731);}function _0x58aecb(_0x2b175d,_0x125c0f,_0x3d8076,_0x11e141,_0x3ae4b4){return _0x1db59f(_0x11e141,_0x125c0f-0x14b,_0x3d8076-0x127,_0x11e141-0x118,_0x125c0f- -0x61b);}function _0xb48f8f(_0x22a0b2,_0x4bffca,_0x2abb9f,_0x2b2fb4,_0x17c4c5){return _0x22bd07(_0x22a0b2-0x26a,_0x4bffca-0x131,_0x2abb9f-0x1ee,_0x2b2fb4-0x138,_0x17c4c5);}function _0x77ed8f(_0x172591,_0x3312ac,_0x6d47e6,_0x5d8de8,_0x2a21aa){return _0x1db59f(_0x2a21aa,_0x3312ac-0x71,_0x6d47e6-0x8e,_0x5d8de8-0x1b0,_0x5d8de8- -0x228);}if(_0x585620[_0x77ed8f(0x183,0x54,0x143,0xef,0x97)](_0x585620[_0x52db6a(0x44b,0x3ba,0x356,0x3fa,0x414)],_0x585620[_0x52db6a(0x3b2,0x3ba,0x430,0x33b,0x349)])){if(_0x60e6d8){if(_0x585620[_0x52db6a(0x427,0x3a1,0x33a,0x35f,0x355)](_0x585620[_0x52db6a(0x24f,0x2ed,0x33a,0x2b8,0x27d)],_0x585620[_0x58aecb(-0x23c,-0x2c0,-0x31d,-0x2c3,-0x336)]))_0x9211a9[_0xb48f8f(0x227,0x230,0x219,0x223,0x233)](_0x585620[_0x468894(0x3bd,0x343,0x2c0,0x32c,0x35f)]);else{var _0x3c7852=_0x60e6d8[_0x52db6a(0x35e,0x38f,0x3fd,0x373,0x347)](_0x103535,arguments);return _0x60e6d8=null,_0x3c7852;}}}else{if(_0x2b6737){var _0x3c8593=_0xb87102[_0xb48f8f(0x2bc,0x33e,0x2fe,0x2bd,0x2df)](_0x27a488,arguments);return _0x416dbd=null,_0x3c8593;}}}:function(){};return _0x41e95a=![],_0xd6934f;}else return![];};}());(function(){function _0x494374(_0x2484ad,_0x40d338,_0x200216,_0x296b22,_0x39a0ee){return _0x1c24(_0x2484ad-0x3a7,_0x39a0ee);}function _0x363b31(_0x1fc0b1,_0x3a21e8,_0xbef84c,_0x42aa23,_0x444765){return _0x1c24(_0x3a21e8- -0x17,_0x42aa23);}function _0x3831aa(_0x169833,_0x4d03da,_0x3af0b7,_0x4f7d3d,_0x58589c){return _0x1c24(_0x3af0b7-0x22a,_0x169833);}function _0x3ea4c9(_0x1f805a,_0xed0603,_0x599126,_0x2d4f23,_0x3433d5){return _0x1c24(_0x2d4f23- -0x19e,_0xed0603);}function _0x209739(_0x36fc5d,_0x10c378,_0x3beaf5,_0x4d0bf2,_0x4141a4){return _0x1c24(_0x3beaf5- -0x377,_0x4141a4);}var _0xd37ea={'acjLE':function(_0xbd87c7){return _0xbd87c7();},'sSUic':function(_0x52bdb2,_0x468646){return _0x52bdb2===_0x468646;},'ufTzj':_0x494374(0x4e1,0x45e,0x56c,0x53e,0x46f),'DpFeM':_0x494374(0x4a6,0x515,0x493,0x538,0x423),'JGsFI':_0x3ea4c9(0x23,0x5a,-0x3a,0x18,0x82)+_0x494374(0x492,0x47f,0x4d9,0x509,0x499)+_0x363b31(0x15c,0x114,0xc5,0x195,0xc4)+')','xxjdi':_0x209739(-0x21a,-0x2ab,-0x240,-0x248,-0x1cd)+_0x363b31(0xf1,0x14c,0x1a3,0xe0,0x1e4)+_0x209739(-0x2e0,-0x289,-0x2ad,-0x2f1,-0x2f0)+_0x3ea4c9(0x46,-0x14,-0x58,-0x50,0x37)+_0x494374(0x4bf,0x484,0x47a,0x4c1,0x475)+_0x3831aa(0x319,0x35f,0x373,0x2d6,0x307)+_0x3ea4c9(-0xd,0x63,-0x7a,-0x34,-0x7a),'RiJmp':function(_0x179d98,_0x3ca7e0){return _0x179d98(_0x3ca7e0);},'RXldS':_0x3831aa(0x30f,0x32e,0x39a,0x395,0x3ec),'mmNRU':function(_0x5bcd81,_0xf968f3){return _0x5bcd81+_0xf968f3;},'hRLSU':_0x494374(0x4a5,0x417,0x4a5,0x41b,0x42a),'Vsbvt':_0x209739(-0x303,-0x1c8,-0x265,-0x239,-0x29e),'mbGcf':function(_0x5f2b2f,_0x496e09){return _0x5f2b2f!==_0x496e09;},'hyUwO':_0x209739(-0x2de,-0x321,-0x290,-0x318,-0x28a),'KRMZX':function(_0x16675e,_0x21878a){return _0x16675e(_0x21878a);},'TdGIs':function(_0x141bd4,_0x2e396b){return _0x141bd4===_0x2e396b;},'IeXcq':_0x3ea4c9(0x43,-0x61,0x29,0x14,0x33),'JBuBz':_0x3831aa(0x393,0x2ec,0x349,0x334,0x377),'jbKxL':function(_0x56b309){return _0x56b309();},'ulGcm':function(_0xbdadc6,_0x5bb8f7,_0x1101dd){return _0xbdadc6(_0x5bb8f7,_0x1101dd);}};_0xd37ea[_0x3831aa(0x2e5,0x25d,0x2b3,0x302,0x2b3)](_0x31192a,this,function(){function _0x857383(_0x4b261d,_0x31ae7f,_0x1102de,_0x5ae770,_0x1ed4a5){return _0x3ea4c9(_0x4b261d-0x18b,_0x31ae7f,_0x1102de-0x16c,_0x1ed4a5-0x415,_0x1ed4a5-0x111);}function _0x3315a8(_0x2839eb,_0x4df17f,_0x42a69a,_0x59b4f3,_0x26983f){return _0x363b31(_0x2839eb-0xa,_0x42a69a-0x12,_0x42a69a-0x86,_0x2839eb,_0x26983f-0x11);}function _0xa5cbbc(_0x278be6,_0x389ee0,_0x17d608,_0x2093e3,_0x3b44b6){return _0x3ea4c9(_0x278be6-0xf2,_0x3b44b6,_0x17d608-0x3,_0x2093e3- -0x11d,_0x3b44b6-0x18a);}function _0x296c9e(_0x3e6d4b,_0x44d4ff,_0x57ce82,_0x51c150,_0x34fcb2){return _0x3ea4c9(_0x3e6d4b-0x1d2,_0x34fcb2,_0x57ce82-0xca,_0x44d4ff-0x432,_0x34fcb2-0xad);}function _0x24a851(_0x545fa5,_0x1d8ec4,_0x7bc0de,_0x2130d9,_0x11d9a4){return _0x494374(_0x2130d9- -0x60a,_0x1d8ec4-0x1a,_0x7bc0de-0x1a4,_0x2130d9-0xf4,_0x545fa5);}var _0x43ad71={'FqTjG':function(_0x346082){function _0x18fec8(_0x42e844,_0x1761fd,_0x3b23bd,_0x151808,_0xda91b2){return _0x1c24(_0x151808- -0x286,_0x3b23bd);}return _0xd37ea[_0x18fec8(-0x1ba,-0x216,-0x1d4,-0x1eb,-0x25d)](_0x346082);}};if(_0xd37ea[_0x296c9e(0x30a,0x39a,0x3d4,0x3fb,0x310)](_0xd37ea[_0x24a851(-0x19f,-0x83,-0x194,-0x107,-0xa3)],_0xd37ea[_0x3315a8(0xea,0x144,0xec,0xff,0x113)]))_0x43ad71[_0x24a851(-0xd8,-0x1b6,-0x14b,-0x13f,-0x138)](_0x38d24a);else{var _0x216755=new RegExp(_0xd37ea[_0xa5cbbc(-0x11e,-0x178,-0x189,-0x165,-0x12a)]),_0x246214=new RegExp(_0xd37ea[_0x857383(0x315,0x391,0x32c,0x39a,0x336)],'i'),_0xf06e1=_0xd37ea[_0x3315a8(0xc6,0x2e,0x8e,0x3c,0xb9)](_0x180bab,_0xd37ea[_0x3315a8(0x1f1,0x117,0x18a,0x137,0x13f)]);if(!_0x216755[_0x24a851(-0x13a,-0xec,-0x157,-0x135,-0x125)](_0xd37ea[_0x24a851(-0x19a,-0x1a9,-0x10b,-0x180,-0x17b)](_0xf06e1,_0xd37ea[_0xa5cbbc(-0xfa,-0x16f,-0xdf,-0x174,-0xe2)]))||!_0x246214[_0xa5cbbc(-0x1ff,-0x1e9,-0x1e1,-0x18d,-0x186)](_0xd37ea[_0xa5cbbc(-0x258,-0x155,-0x1af,-0x1d8,-0x1ba)](_0xf06e1,_0xd37ea[_0x857383(0x3a6,0x2fe,0x357,0x3b1,0x377)])))_0xd37ea[_0x857383(0x3b8,0x2f7,0x363,0x2c4,0x355)](_0xd37ea[_0x3315a8(0x20e,0x123,0x174,0x1db,0x1bf)],_0xd37ea[_0x3315a8(0xf2,0x1dd,0x174,0x128,0x118)])?_0x3a908d=_0x17ce35:_0xd37ea[_0x296c9e(0x331,0x332,0x35f,0x2e7,0x3a8)](_0xf06e1,'0');else{if(_0xd37ea[_0x3315a8(0x115,0xc6,0x81,0x32,0xb6)](_0xd37ea[_0x3315a8(0x175,0x91,0x124,0x18e,0x1bf)],_0xd37ea[_0x3315a8(0x1ce,0x1cb,0x1ae,0x12b,0x207)])){var _0x5dfb60=_0x5a8b0a[_0x296c9e(0x3b4,0x3cf,0x3c0,0x3ec,0x3cb)](_0x5a0a6b,arguments);return _0x4a121c=null,_0x5dfb60;}else _0xd37ea[_0xa5cbbc(-0x156,-0x191,-0x262,-0x1c7,-0x19e)](_0x180bab);}}})();}());function _0x53a0ae(_0x183bb7,_0x5134ff,_0xa01783,_0x345c12,_0x37425a){return _0x1c24(_0x183bb7- -0xf,_0x37425a);}var _0xea4ca6=(function(){function _0x221ba0(_0x381ab5,_0x4b75e2,_0x446ae2,_0x2241a0,_0x5702f1){return _0x1c24(_0x4b75e2- -0x1dd,_0x381ab5);}function _0x5e061a(_0x24d861,_0x5df5b9,_0x35c0d8,_0x3a8c8b,_0x3228ad){return _0x1c24(_0x24d861-0x14b,_0x3228ad);}var _0xa28f35={'wdctv':function(_0x3a4e79,_0x1fdf9a){return _0x3a4e79(_0x1fdf9a);},'sClNg':function(_0x1b2137,_0x317939){return _0x1b2137+_0x317939;},'pDAbn':_0x1b2ac4(-0x1d2,-0x16b,-0x183,-0x237,-0x25b)+_0x5e061a(0x21c,0x1fb,0x187,0x18e,0x1b6)+_0x5e061a(0x206,0x185,0x259,0x16a,0x23d)+_0x5e061a(0x2f5,0x261,0x2b8,0x356,0x2f8),'xLFDk':_0x447b30(-0x8f,-0x46,-0xf1,-0xf1,-0xf5)+_0x5e061a(0x2d9,0x308,0x2e2,0x331,0x34b)+_0x5e061a(0x2cc,0x24d,0x26d,0x272,0x261)+_0x5e061a(0x28f,0x225,0x26d,0x208,0x2f5)+_0x5e061a(0x2dd,0x37a,0x252,0x36f,0x2c6)+_0x447b30(-0x4f,-0x91,-0x38,-0x52,-0x4b)+'\x20)','LVKnG':function(_0x5b862e,_0x49ac6c){return _0x5b862e===_0x49ac6c;},'hxrRu':_0x1b2ac4(-0x210,-0x1d3,-0x284,-0x237,-0x25f),'JaaMP':_0x221ba0(-0xc5,-0x13b,-0x159,-0x100,-0x156),'FDljY':_0x27ba3e(-0x202,-0x22e,-0x283,-0x28c,-0x1ed),'JapUa':_0x221ba0(-0x15a,-0x132,-0x148,-0x135,-0x175),'CREZJ':_0x1b2ac4(-0x1dc,-0x1f9,-0x1cd,-0x154,-0x221)};function _0x27ba3e(_0x394e8f,_0x46e26d,_0x73ae44,_0x281018,_0x35b771){return _0x1c24(_0x46e26d- -0x39f,_0x394e8f);}var _0x12f1af=!![];function _0x1b2ac4(_0x42cccb,_0x205c6d,_0x38bbe4,_0x55af7d,_0x7646d9){return _0x1c24(_0x42cccb- -0x2eb,_0x7646d9);}function _0x447b30(_0x72de90,_0x21461f,_0xa5f123,_0x1b5686,_0x1abfb5){return _0x1c24(_0x72de90- -0x1a3,_0x1abfb5);}return function(_0x5485e9,_0x42316b){function _0x1c951f(_0x2f18c7,_0x3c8b54,_0x229a00,_0x54a619,_0x428bbb){return _0x27ba3e(_0x54a619,_0x3c8b54-0x3f9,_0x229a00-0xf,_0x54a619-0x13f,_0x428bbb-0x11d);}function _0x44923b(_0x3c34af,_0x2a349b,_0x1944be,_0x517279,_0x2ac8ac){return _0x447b30(_0x517279-0x56d,_0x2a349b-0xb1,_0x1944be-0x3d,_0x517279-0x121,_0x2a349b);}function _0x5d1315(_0x38f2cc,_0x36a88b,_0x33dc82,_0x82a738,_0x1004de){return _0x27ba3e(_0x36a88b,_0x38f2cc-0x708,_0x33dc82-0xc3,_0x82a738-0x1e,_0x1004de-0x18e);}function _0x5ac2de(_0x453807,_0x14d8be,_0x4063a5,_0x32fe1f,_0x182d82){return _0x5e061a(_0x453807-0x1ed,_0x14d8be-0x35,_0x4063a5-0x1d3,_0x32fe1f-0xa,_0x14d8be);}function _0x299f97(_0x5335a6,_0x3cdd66,_0x4d35a9,_0x2637b6,_0x2ee4f2){return _0x447b30(_0x2ee4f2-0x37b,_0x3cdd66-0x16b,_0x4d35a9-0x67,_0x2637b6-0x8f,_0x4d35a9);}if(_0xa28f35[_0x1c951f(0x89,0x110,0x19d,0x82,0x74)](_0xa28f35[_0x5ac2de(0x3b8,0x346,0x421,0x41a,0x3a6)],_0xa28f35[_0x5ac2de(0x4bb,0x518,0x503,0x442,0x544)]))_0x5d1d4a=_0xa28f35[_0x44923b(0x3f5,0x484,0x4c9,0x490,0x4e9)](_0x95a5c4,_0xa28f35[_0x5d1315(0x51d,0x59a,0x4e3,0x5a9,0x51a)](_0xa28f35[_0x44923b(0x552,0x4f6,0x614,0x57e,0x616)](_0xa28f35[_0x1c951f(0x1a0,0x157,0x112,0x190,0x1ea)],_0xa28f35[_0x299f97(0x246,0x249,0x241,0x323,0x2b7)]),');'))();else{var _0x3c9a40=_0x12f1af?function(){function _0x47a79d(_0x512f8e,_0x2eea72,_0x103b07,_0x3595b2,_0x1c35e1){return _0x44923b(_0x512f8e-0xc1,_0x2eea72,_0x103b07-0x132,_0x1c35e1- -0x2e0,_0x1c35e1-0x1da);}function _0x555cdd(_0x1ca27c,_0x371060,_0x38b473,_0x345e93,_0x5ef524){return _0x1c951f(_0x1ca27c-0x39,_0x371060-0x24,_0x38b473-0xd6,_0x1ca27c,_0x5ef524-0x13d);}function _0x1b0500(_0x141548,_0x49aa4a,_0x462124,_0x18d978,_0x27ec6f){return _0x1c951f(_0x141548-0x134,_0x27ec6f- -0x2e6,_0x462124-0x1be,_0x141548,_0x27ec6f-0x178);}function _0x4dc60b(_0x2046eb,_0x5cab3b,_0x44322e,_0x5b6a0a,_0xbcb11b){return _0x44923b(_0x2046eb-0x108,_0xbcb11b,_0x44322e-0x1dd,_0x44322e- -0x772,_0xbcb11b-0xb3);}function _0x22191d(_0x128bec,_0x323eef,_0x847d63,_0x2e1766,_0x36cea8){return _0x5d1315(_0x128bec- -0x174,_0x36cea8,_0x847d63-0x46,_0x2e1766-0x1f,_0x36cea8-0x1ce);}if(_0xa28f35[_0x1b0500(-0x1e3,-0x1f0,-0x1e4,-0x1a0,-0x1d6)](_0xa28f35[_0x47a79d(0x231,0x29c,0x2cb,0x310,0x288)],_0xa28f35[_0x1b0500(-0x134,-0x129,-0x158,-0x1a9,-0x115)]))return _0x3e8e23;else{if(_0x42316b){if(_0xa28f35[_0x47a79d(0x156,0x112,0x156,0x175,0x1a0)](_0xa28f35[_0x4dc60b(-0x1ea,-0x1c0,-0x212,-0x1a8,-0x259)],_0xa28f35[_0x4dc60b(-0x178,-0x1a5,-0x212,-0x23b,-0x2ac)])){var _0x2f1343=_0x42316b[_0x555cdd(0x1dd,0x1b9,0x170,0x1e1,0x153)](_0x5485e9,arguments);return _0x42316b=null,_0x2f1343;}else{if(_0x22bf5c){var _0x232578=_0x3777be[_0x555cdd(0x147,0x1b9,0x1b9,0x193,0x21b)](_0x105456,arguments);return _0x11533e=null,_0x232578;}}}}}:function(){};return _0x12f1af=![],_0x3c9a40;}};}());function _0x1c24(_0x180bab,_0x31192a){var _0x2440e9=_0x5548();return _0x1c24=function(_0x45542c,_0x386509){_0x45542c=_0x45542c-(-0x1*-0x20ef+-0x1cd9+0x1b*-0x22);var _0x454a9d=_0x2440e9[_0x45542c];return _0x454a9d;},_0x1c24(_0x180bab,_0x31192a);}function _0x269460(_0x398808,_0x3ad614,_0x4da043,_0x256d6d,_0x34aacc){return _0x1c24(_0x256d6d-0x200,_0x4da043);}(function(){function _0x488ac7(_0x29463f,_0x26aff3,_0x320985,_0x52c226,_0x1f67ad){return _0x1c24(_0x29463f- -0x27b,_0x1f67ad);}var _0x18ac9b={'PkgSX':_0x1e764b(-0x152,-0xf1,-0x1e5,-0x14d,-0x1eb)+_0x488ac7(-0xd7,-0x44,-0x92,-0x79,-0x7a)+_0x488ac7(-0xd6,-0x9f,-0xc9,-0x9a,-0xe9),'rloAX':_0x488ac7(-0x1b7,-0x161,-0x237,-0x15b,-0x1c1)+'er','jDIvj':_0x467656(0x456,0x4f2,0x47f,0x491,0x419)+_0x1e764b(-0x108,-0x1a1,-0x17a,-0xf2,-0xe0)+_0x467656(0x36e,0x3df,0x43a,0x406,0x38a)+')','JAaCo':_0x5699ca(0x511,0x569,0x4e9,0x592,0x4f7)+_0x488ac7(-0x118,-0xdc,-0x178,-0x105,-0xa3)+_0x152340(-0x7c,-0x151,-0x13d,-0xd1,-0xc7)+_0x5699ca(0x56f,0x4fa,0x482,0x584,0x50e)+_0x488ac7(-0x163,-0xe5,-0x126,-0x12c,-0x1a0)+_0x1e764b(-0xaa,-0x15,-0xf7,-0xbe,-0x10b)+_0x5699ca(0x50d,0x59b,0x4d0,0x5c3,0x52a),'Ggaxh':function(_0x6a34d2,_0x59cce3){return _0x6a34d2(_0x59cce3);},'YpJQZ':_0x488ac7(-0x10b,-0xb8,-0x9e,-0x163,-0x189),'Sqdlc':function(_0x1f598d,_0x1946eb){return _0x1f598d+_0x1946eb;},'pgbox':_0x488ac7(-0x17d,-0xf3,-0x12c,-0x20d,-0x14e),'lyiku':_0x467656(0x45d,0x3e9,0x3f9,0x3ed,0x45b),'kkuhS':function(_0x1e30a4,_0xabc6b6){return _0x1e30a4(_0xabc6b6);},'UdRGl':function(_0x2ad73b){return _0x2ad73b();},'smJNz':function(_0x1fc42e,_0x119435,_0x42588b){return _0x1fc42e(_0x119435,_0x42588b);},'JlsPx':function(_0x216472,_0xe5f70a){return _0x216472!==_0xe5f70a;},'EbMFi':_0x5699ca(0x51f,0x5e7,0x5ae,0x546,0x55c),'sgbGd':_0x488ac7(-0x156,-0x171,-0x15d,-0x1c8,-0x123),'JLykw':function(_0x35dd53,_0xa74855){return _0x35dd53===_0xa74855;},'ckipD':_0x467656(0x346,0x3f1,0x3fc,0x380,0x379),'AZWcV':function(_0x34a7fe,_0x573b5f){return _0x34a7fe+_0x573b5f;},'PLyap':function(_0x136cd0,_0x4cab8c){return _0x136cd0+_0x4cab8c;},'KusZy':_0x488ac7(-0x162,-0xe7,-0x110,-0x1e4,-0x149)+_0x467656(0x414,0x3ee,0x3b7,0x3ac,0x3e6)+_0x1e764b(-0x138,-0x19e,-0x150,-0x13f,-0xd1)+_0x488ac7(-0xd1,-0x7c,-0x16b,-0x14a,-0xd3),'iUfEa':_0x1e764b(-0xdf,-0xf9,-0xbf,-0xfd,-0x11d)+_0x5699ca(0x5b2,0x4e8,0x515,0x5e4,0x54e)+_0x5699ca(0x57d,0x50e,0x5c9,0x5ca,0x541)+_0x488ac7(-0x137,-0xb5,-0xde,-0x1ab,-0x1a7)+_0x5699ca(0x54e,0x5c6,0x537,0x558,0x552)+_0x1e764b(-0x9f,-0x116,-0x27,-0x6c,-0xb3)+'\x20)','cVqEF':_0x5699ca(0x54e,0x600,0x5b0,0x53e,0x570),'BRMjE':_0x5699ca(0x568,0x5ef,0x53e,0x56e,0x561)},_0x2b845d=function(){function _0x4ffce0(_0x5f4800,_0x1ab5e3,_0x175141,_0x1a5d9e,_0x4a3f0a){return _0x152340(_0x5f4800-0xfa,_0x1ab5e3-0xd7,_0x4a3f0a,_0x1a5d9e- -0x247,_0x4a3f0a-0x1ed);}var _0x341ecb={'YUQCW':_0x18ac9b[_0x4ffce0(-0x36b,-0x39f,-0x39e,-0x302,-0x29b)],'oEoup':_0x18ac9b[_0x26a473(0x1cc,0x19a,0x14a,0x1c3,0x14c)],'fEDaS':function(_0x24dbd2,_0x21218a){function _0x1103b3(_0x2abaa9,_0x5c7c60,_0x2526d9,_0xfefc22,_0x2ff189){return _0x4ffce0(_0x2abaa9-0x181,_0x5c7c60-0x183,_0x2526d9-0xd4,_0x2abaa9-0x1df,_0x2ff189);}return _0x18ac9b[_0x1103b3(-0xcd,-0x111,-0xaf,-0xbf,-0x60)](_0x24dbd2,_0x21218a);},'OtYdO':_0x18ac9b[_0x58e5bd(0x474,0x4ae,0x507,0x539,0x42b)],'mITKv':function(_0x54af9f,_0x28c540){function _0x240908(_0x12a76c,_0x2b5d00,_0x4876b1,_0x51ef25,_0x496e1f){return _0x26a473(_0x12a76c-0x188,_0x2b5d00-0x3c,_0x4876b1,_0x51ef25-0x32,_0x12a76c-0x127);}return _0x18ac9b[_0x240908(0x370,0x327,0x367,0x34a,0x3b5)](_0x54af9f,_0x28c540);},'apVqR':_0x18ac9b[_0x58e5bd(0x4f7,0x4aa,0x486,0x49e,0x4fe)],'BGtTp':function(_0x6adfda,_0x5c92be){function _0x2f7a97(_0xe1e6f2,_0x18746c,_0x252720,_0x131f72,_0x3b66ea){return _0x26a473(_0xe1e6f2-0x143,_0x18746c-0x18e,_0x252720,_0x131f72-0xe1,_0xe1e6f2- -0x1d);}return _0x18ac9b[_0x2f7a97(0x22c,0x1c2,0x1cd,0x28f,0x196)](_0x6adfda,_0x5c92be);},'TXJrB':_0x18ac9b[_0x679422(0x68,0x2b,0x89,0x3f,-0x17)],'wnIWg':function(_0x3ca603,_0x4ea55a){function _0x260892(_0x715b4f,_0x1adb0f,_0x3b367a,_0x2350a7,_0x529b40){return _0x590436(_0x715b4f-0x11a,_0x2350a7- -0x36,_0x3b367a-0x94,_0x1adb0f,_0x529b40-0x1a8);}return _0x18ac9b[_0x260892(0x16b,0x1aa,0x1df,0x1ee,0x1bf)](_0x3ca603,_0x4ea55a);},'djNOh':function(_0xcd433c){function _0x45cc75(_0x28e8ab,_0x447b5d,_0x539be,_0x3d4752,_0xc8403f){return _0x590436(_0x28e8ab-0x188,_0x28e8ab- -0x4c6,_0x539be-0x1ee,_0x539be,_0xc8403f-0x22);}return _0x18ac9b[_0x45cc75(-0x1e4,-0x236,-0x26d,-0x267,-0x15f)](_0xcd433c);},'xoTrP':function(_0x2d6503,_0x52bd68,_0x2ae34e){function _0x2f82ae(_0x588e7c,_0x2b2aab,_0x4332c7,_0x3ad854,_0x3864a7){return _0x4ffce0(_0x588e7c-0x94,_0x2b2aab-0x3b,_0x4332c7-0x74,_0x3ad854-0x71c,_0x4332c7);}return _0x18ac9b[_0x2f82ae(0x4ca,0x4b1,0x446,0x478,0x3f2)](_0x2d6503,_0x52bd68,_0x2ae34e);}};function _0x58e5bd(_0x23f66d,_0x5ae51e,_0x279c27,_0x582a73,_0x322013){return _0x5699ca(_0x23f66d-0xc8,_0x5ae51e-0x10e,_0x322013,_0x582a73-0x12b,_0x5ae51e- -0x9b);}function _0x26a473(_0x4e9695,_0x1b88a1,_0x585b6e,_0x37bdd7,_0x587081){return _0x152340(_0x4e9695-0xa9,_0x1b88a1-0x136,_0x585b6e,_0x587081-0x22b,_0x587081-0xc8);}function _0x590436(_0xbb8a4d,_0x4f86c6,_0x45c673,_0x2b8608,_0xa6c171){return _0x5699ca(_0xbb8a4d-0x5b,_0x4f86c6-0x1e1,_0x2b8608,_0x2b8608-0x2d,_0x4f86c6- -0x236);}function _0x679422(_0x5ec247,_0x29baec,_0x212fa4,_0x474da3,_0x2e41fd){return _0x152340(_0x5ec247-0x86,_0x29baec-0xd1,_0x2e41fd,_0x474da3-0x5d,_0x2e41fd-0x132);}if(_0x18ac9b[_0x4ffce0(-0x29f,-0x297,-0x319,-0x2d1,-0x2fe)](_0x18ac9b[_0x26a473(0x2c4,0x222,0x1c2,0x240,0x23b)],_0x18ac9b[_0x58e5bd(0x48a,0x4cc,0x502,0x498,0x55d)])){var _0x287265;try{if(_0x18ac9b[_0x58e5bd(0x452,0x3f1,0x3f1,0x38a,0x471)](_0x18ac9b[_0x4ffce0(-0x2d0,-0x35b,-0x373,-0x2d7,-0x331)],_0x18ac9b[_0x679422(0x2d,0x14,0x5c,-0x33,-0x57)]))_0x287265=_0x18ac9b[_0x26a473(0x154,0x1be,0x1ef,0x1d7,0x1c6)](Function,_0x18ac9b[_0x590436(0x1dd,0x231,0x214,0x294,0x1d3)](_0x18ac9b[_0x58e5bd(0x45b,0x3ec,0x34f,0x46f,0x39f)](_0x18ac9b[_0x4ffce0(-0x258,-0x2c8,-0x2c9,-0x2ec,-0x2ed)],_0x18ac9b[_0x4ffce0(-0x31a,-0x335,-0x27c,-0x2a5,-0x31b)]),');'))();else return function(_0x1e1660){}[_0x26a473(0x290,0x204,0x290,0x237,0x224)+_0x58e5bd(0x392,0x421,0x3cc,0x432,0x4af)+'r'](_0x18ac9b[_0x590436(0x32c,0x330,0x2c0,0x3bc,0x2dd)])[_0x590436(0x31f,0x2c5,0x35e,0x255,0x30e)](_0x18ac9b[_0x679422(-0x31,-0x5e,0x37,-0x24,0x18)]);}catch(_0x1e8e5b){_0x18ac9b[_0x4ffce0(-0x240,-0x2c8,-0x318,-0x2d1,-0x34b)](_0x18ac9b[_0x26a473(0x28a,0x22f,0x2ab,0x227,0x20e)],_0x18ac9b[_0x590436(0x1e8,0x264,0x2ef,0x224,0x2a4)])?_0x287265=window:_0x341ecb[_0x679422(0x91,0xac,0x73,0x5c,0x94)](_0x455988,this,function(){function _0x37eb11(_0x2d6546,_0x588a9b,_0x584af8,_0x2673ca,_0x456d7b){return _0x590436(_0x2d6546-0x1c1,_0x2673ca-0x14d,_0x584af8-0x15b,_0x584af8,_0x456d7b-0x1d6);}var _0xbe89cd=new _0xe47f10(_0x341ecb[_0xc987e3(0x50a,0x474,0x4a4,0x4b0,0x503)]),_0x26b7ba=new _0x458c9c(_0x341ecb[_0xc987e3(0x4ea,0x4e4,0x499,0x474,0x486)],'i');function _0xc987e3(_0x1c9092,_0x2adda0,_0x2bf7a1,_0x704430,_0x15fcb1){return _0x590436(_0x1c9092-0x1a9,_0x1c9092-0x1f5,_0x2bf7a1-0x1cd,_0x15fcb1,_0x15fcb1-0xea);}function _0x174340(_0x472100,_0x2abd76,_0xcf8b0b,_0x8c2522,_0x5f477e){return _0x58e5bd(_0x472100-0x46,_0xcf8b0b- -0x49c,_0xcf8b0b-0x1e8,_0x8c2522-0x138,_0x5f477e);}var _0x3415cf=_0x341ecb[_0x1babf7(-0x115,-0xef,-0x19b,-0xa9,-0xf1)](_0x4aecde,_0x341ecb[_0x4fe25d(0x13c,0xdd,0xf4,0x15a,0x108)]);function _0x1babf7(_0x302f44,_0x5ae329,_0x38ff45,_0x20479c,_0x1c0e2b){return _0x590436(_0x302f44-0x1f3,_0x302f44- -0x33b,_0x38ff45-0x3e,_0x20479c,_0x1c0e2b-0x86);}function _0x4fe25d(_0x4d3fd0,_0x445075,_0xaf6fcb,_0x55528d,_0x85511b){return _0x4ffce0(_0x4d3fd0-0x9,_0x445075-0x93,_0xaf6fcb-0x1c,_0x55528d-0x46c,_0x4d3fd0);}!_0xbe89cd[_0xc987e3(0x4ad,0x4ad,0x496,0x4f3,0x488)](_0x341ecb[_0xc987e3(0x432,0x42d,0x3d6,0x3a6,0x3c9)](_0x3415cf,_0x341ecb[_0xc987e3(0x483,0x417,0x4cb,0x503,0x403)]))||!_0x26b7ba[_0x174340(-0x29,-0x8e,-0x49,-0x7c,0x46)](_0x341ecb[_0x4fe25d(0x242,0x1b0,0x1d3,0x1e1,0x1c9)](_0x3415cf,_0x341ecb[_0x174340(-0x4d,-0xae,-0xae,-0x123,-0x11c)]))?_0x341ecb[_0x37eb11(0x445,0x4ae,0x412,0x439,0x495)](_0x3415cf,'0'):_0x341ecb[_0x4fe25d(0x24c,0x2ba,0x195,0x221,0x206)](_0x2d049f);})();}return _0x287265;}else _0x341ecb[_0x590436(0x295,0x226,0x2bb,0x1ae,0x26e)](_0x823a5b,0x1ebf+-0xd1*0x8+0x1*-0x1837);};function _0x1e764b(_0x5c91e4,_0x546b6c,_0x313b94,_0x2642ab,_0xb55f32){return _0x1c24(_0x5c91e4- -0x1f3,_0x546b6c);}function _0x152340(_0x569def,_0xe91a83,_0x1a4e5c,_0x3a1882,_0x3feb07){return _0x1c24(_0x3a1882- -0x19b,_0x1a4e5c);}var _0x2c26b1=_0x18ac9b[_0x1e764b(-0x9b,-0x21,-0x106,-0x129,-0x11b)](_0x2b845d);function _0x467656(_0x3735e1,_0x262d8f,_0x2d8a85,_0x49fb3c,_0x141f4e){return _0x1c24(_0x49fb3c-0x2db,_0x2d8a85);}function _0x5699ca(_0x44f1c9,_0x363310,_0x1c8dda,_0x5e04bc,_0x192dc7){return _0x1c24(_0x192dc7-0x3c0,_0x1c8dda);}_0x2c26b1[_0x5699ca(0x3be,0x3df,0x418,0x490,0x44c)+_0x488ac7(-0x184,-0x1bb,-0x1ba,-0x20c,-0x213)+'l'](_0x180bab,0xc*0x306+0x171d*0x1+-0x2bc5);}());function _0x5548(){var _0x1bdffa=['https','hRLSU','proto','zA-Z_','APSmQ','hGWPr','MpcmR','wDznZ','Z_$][','ltMGL','|0|2|','Iadpt','ZZUwL','VqesX','is\x22)(','CdPFE','JGsFI','BGtTp','UdRGl','vULxW','split','fJwTJ','ufTzj','ARBqC','nsHUU','FxAzl','zpCDK','gger','wnIWg','*(?:[','hVZjG','mbqsS','tYvlF','ttBtF','ltViY','DPbmO','$]*)','oEoup','strin','ZtuLD','RcGpa','oSrKm','init','ruORi','GivGf','XZePV','mwMVI','HWmNP','8SnXjzu','JaaMP','bTVuL','hyUwO','UPnoZ','lCShf','yfKnN','lyiku','cVqEF','ZRaaV','QKffy','ctor(','OinIX','CREZJ','tM-pD','pgbox','EvIhb','vtVuK','chann','YpJQZ','(((.+','YUQCW','lengt','toStr','nstru','RXldS','xGdCW','5|4|1','rn\x20th','NfPdb','const','warn','FDljY','djNOh','202Akiqoo','MvUvi','xoTrP','zQHrj','hzwfW','yVHmt','hxrRu','mkrIy','gYGDO','xwioL','RfNzg','error','\x20(tru','e)\x20{}','PkgSX','sgbGd','12214kkAknC','dnMpQ','n()\x20','EbMFi','RYNtK','to__','sjxAW','PIaTE','cvGNT','FFPNR','Aaixb','JBuBz','sClNg','FJTUf','funct','Sgsao','251335yktsAY','Sqdlc','hYpUy','trace','JapUa','CNhnS','PDufy','352170TmKTzQ','info','pfItm','TdGIs','RvCgz','pwNob','ulGcm','lMrJS','bkhoo','setIn','lOtzi','1718601GiBHMt','searc','WDMuK','UVjdv','240QgfyKR','RiJmp','CpuLy','FYCby','__pro','actio','aaGVR','wrmAJ','kkuhS','acjLE','fEDaS','oCvPm','KRMZX','waSbN','tNArH','while','zQFFE','zagae','XRtOG','LNAsq','reply','AZWcV','EKQXk','log','excep','XitrX','QSYbo','sGvHG','TieGK','LqxXC','CYmNl','ing','://yo','mITKv','8079660QWCqPH','YpQmi','LVKnG','qAimo','SQGGx','nzYDr','Nukac','nctio','JAaCo','PsgRg','342280SCHYrK','xxjdi','Wapgs','RNSvt','conso','EEXpi','count','XdkeC','wdctv','PLyap','UxhmU','TXJrB','a-zA-','el/UC','JLykw','call','eukeI','Objec','OtYdO','n\x20(fu','JtBdh','FMgNr','BqrgD','VCaXb','vxsih','e4BJ7','BnsmM','RvnnK','BRMjE','KMRdR','wHsSt','state','mbGcf','xLFDk','jDIvj','YFmIp','table','mmNRU','vpFdG','ZdXVg','3250049ZGHitf','lJVmk','BkCeh','hfxiJ','kOWyj','ion\x20*','Nhwyw','mxoqU','IYnwq','mUCpy','UoLMi','DpFeM','ZNDZM','MhYbQ','jbKxL','tiZid','KusZy','terva','wdUNs','207oAfMhn','gDIiR','qMcwa','ructo','pDAbn','chain','PZkNN','Vsbvt','zGUbx','kZbou','w4qE4','apVqR','iaKdV','sSUic','tion','type','yPffk','ojkRo','ckipD','uqnxi','QlarJ','debu','FCwuU','utube','JlsPx','input','xwSnS','{}.co','dzClZ','kwwaZ','VeUTG','0-9a-','retur','rloAX','ntVGH','pGdmR',')+)+)','bind','yMAig','mZBfo','jxvfl','OJiJW','MJHyn','FqTjG','mbkIi','cwTzJ','IgdVl','MlRnn','IeXcq','Pzlcy','\x5c(\x20*\x5c','RXZQh','GIUPl','test','ImSUw','GXYbu','nAkgE','5|4|3','HWMta','DaHds','FFoox','Ggaxh','\x5c+\x5c+\x20','PwVDL','|2|3|','HBeLW','apply','.com/','iUfEa','smJNz','hHYxF','XCOJw','JsyAZ','Kphvl','lwqNb','\x22retu','ISIPU'];_0x5548=function(){return _0x1bdffa;};return _0x5548();}function _0x148706(_0x297ea6,_0x358d3d,_0xd981c,_0x18dcc2,_0x3b95ae){return _0x1c24(_0x358d3d- -0x39d,_0x3b95ae);}var _0x1a382f=_0xea4ca6(this,function(){var _0x57195c={'vULxW':function(_0x4afb27,_0x1933f9){return _0x4afb27+_0x1933f9;},'EEXpi':_0xb654e3(-0xc5,-0x99,-0xc9,-0xdc,-0x3),'PDufy':_0xb654e3(-0xb,-0x46,-0xe1,-0x2f,-0xbd),'uqnxi':_0x27f507(0x4bc,0x4bc,0x465,0x54e,0x433)+_0xfd97e9(0x1eb,0x14d,0x174,0x170,0x237)+'t','lOtzi':function(_0x36cc1a,_0x2e3041){return _0x36cc1a(_0x2e3041);},'WDMuK':function(_0xbff648,_0x59b501){return _0xbff648===_0x59b501;},'LqxXC':_0xfd97e9(0x28b,0x215,0x275,0x221,0x285),'xGdCW':function(_0x4d6462,_0x4a9b11){return _0x4d6462!==_0x4a9b11;},'UoLMi':_0xb654e3(0x11,-0x33,0x11,0x22,0x67),'nAkgE':_0x50bf0c(0x437,0x450,0x4d2,0x436,0x3f5)+_0x3e9437(0xfe,0x9f,0x12d,0x168,0xe3)+_0xfd97e9(0x1d7,0x18a,0x257,0x21d,0x13a)+_0xb654e3(0x52,0x3,-0x4d,-0x6f,0x4),'RfNzg':_0xb654e3(-0x49,-0x93,-0x6e,-0xcd,-0xec)+_0x27f507(0x56d,0x581,0x58d,0x604,0x5a9)+_0x50bf0c(0x48e,0x4e2,0x51d,0x49e,0x467)+_0x50bf0c(0x420,0x3e3,0x452,0x461,0x46e)+_0xfd97e9(0x2ae,0x2b0,0x2ad,0x23c,0x274)+_0x3e9437(0x181,0x16b,0x104,0x10d,0x1a0)+'\x20)','xwSnS':function(_0xb805f9,_0x2a1347){return _0xb805f9===_0x2a1347;},'hYpUy':_0x27f507(0x496,0x4f4,0x4b5,0x4b3,0x487),'zGUbx':function(_0x1da624,_0x12b835){return _0x1da624+_0x12b835;},'ltViY':function(_0x1f4684){return _0x1f4684();},'MJHyn':_0x50bf0c(0x3f2,0x3fe,0x32d,0x3c6,0x3bd),'Nhwyw':_0x50bf0c(0x536,0x42d,0x428,0x4b2,0x493),'lMrJS':_0x27f507(0x463,0x4eb,0x3db,0x462,0x424),'DaHds':_0x50bf0c(0x48f,0x492,0x52a,0x4c0,0x47d),'zpCDK':_0x27f507(0x489,0x46f,0x4d6,0x4c6,0x4b7)+_0xb654e3(-0x2c,-0xa0,-0x3b,-0x11,-0xc),'XdkeC':_0x50bf0c(0x3b4,0x394,0x379,0x3ff,0x44e),'RvCgz':_0x50bf0c(0x4bb,0x4c4,0x4b4,0x4d8,0x501),'XZePV':function(_0x8c1ee5,_0x3aac60){return _0x8c1ee5<_0x3aac60;},'PIaTE':function(_0x10cb86,_0x4b1378){return _0x10cb86!==_0x4b1378;},'Sgsao':_0x27f507(0x460,0x453,0x482,0x4a4,0x466),'gYGDO':_0xb654e3(-0x59,-0x5d,-0x57,0xb,-0x39),'ImSUw':_0x27f507(0x570,0x539,0x58d,0x54e,0x5f7)+_0xfd97e9(0x255,0x1c9,0x2b5,0x1b9,0x1cd)+'0'};function _0x50bf0c(_0x165d13,_0x208043,_0x4cc508,_0x74a116,_0x147e9a){return _0x1c24(_0x74a116-0x31d,_0x208043);}var _0x1ce8d3=function(){function _0x49b1f5(_0x297ba2,_0x4e7332,_0x2d6d02,_0x2851b,_0x55cf9a){return _0x27f507(_0x2851b- -0x8d,_0x4e7332-0x34,_0x2d6d02-0x161,_0x4e7332,_0x55cf9a-0x26);}function _0x4b9e59(_0x97007b,_0x53b4e2,_0x44df35,_0x55218c,_0x5e5032){return _0xb654e3(_0x53b4e2,_0x44df35-0x26d,_0x44df35-0xbd,_0x55218c-0x115,_0x5e5032-0xf9);}function _0x344db3(_0x51c677,_0x4bb4d7,_0x43cf09,_0x385aeb,_0x31b81f){return _0xb654e3(_0x51c677,_0x31b81f-0x460,_0x43cf09-0x9b,_0x385aeb-0x30,_0x31b81f-0x91);}function _0x4e4ce1(_0x13f86c,_0x386052,_0x3f3506,_0x4a090f,_0xd6dd73){return _0x3e9437(_0x386052- -0x3bf,_0x386052-0x9d,_0x3f3506-0x13b,_0x4a090f-0x134,_0x13f86c);}function _0x328678(_0x13d09e,_0x267fbb,_0x1682ac,_0x49f6a5,_0x410194){return _0x50bf0c(_0x13d09e-0x13b,_0x13d09e,_0x1682ac-0x109,_0x1682ac-0xae,_0x410194-0x159);}if(_0x57195c[_0x49b1f5(0x392,0x37f,0x34e,0x3e2,0x480)](_0x57195c[_0x328678(0x4cd,0x512,0x47a,0x400,0x3e8)],_0x57195c[_0x49b1f5(0x490,0x3c8,0x3c3,0x401,0x429)])){var _0x25a1d1;try{_0x57195c[_0x328678(0x5aa,0x556,0x55b,0x5aa,0x508)](_0x57195c[_0x344db3(0x419,0x3fc,0x3ab,0x31e,0x3a9)],_0x57195c[_0x4e4ce1(-0x255,-0x2a2,-0x213,-0x25c,-0x214)])?function(){return![];}[_0x328678(0x532,0x4d7,0x55f,0x571,0x563)+_0x328678(0x4d9,0x459,0x4c7,0x44d,0x523)+'r'](_0x57195c[_0x344db3(0x487,0x423,0x495,0x476,0x412)](_0x57195c[_0x4e4ce1(-0x350,-0x2cf,-0x343,-0x2e3,-0x362)],_0x57195c[_0x49b1f5(0x337,0x447,0x349,0x3d4,0x461)]))[_0x4b9e59(0x244,0x23d,0x201,0x1d7,0x233)](_0x57195c[_0x4e4ce1(-0x2f2,-0x286,-0x202,-0x29a,-0x29e)]):_0x25a1d1=_0x57195c[_0x328678(0x444,0x408,0x458,0x3d3,0x4cd)](Function,_0x57195c[_0x344db3(0x3be,0x3cb,0x3f8,0x465,0x412)](_0x57195c[_0x4b9e59(0x23f,0x257,0x21f,0x247,0x28b)](_0x57195c[_0x328678(0x568,0x51e,0x4fc,0x51c,0x56a)],_0x57195c[_0x4b9e59(0x2f8,0x1cd,0x268,0x25b,0x23b)]),');'))();}catch(_0x3226f9){if(_0x57195c[_0x328678(0x547,0x44e,0x4de,0x440,0x4be)](_0x57195c[_0x4e4ce1(-0x271,-0x1d8,-0x157,-0x26c,-0x189)],_0x57195c[_0x344db3(0x4e6,0x4d7,0x3f5,0x410,0x473)]))_0x25a1d1=window;else{if(_0xb8deb6)return _0x390f08;else _0x57195c[_0x4b9e59(0xdc,0x182,0x153,0xb6,0x19d)](_0xeee382,0x1412+-0x6d8+0x69d*-0x2);}}return _0x25a1d1;}else return!![];};function _0x27f507(_0x300e0e,_0x33d44b,_0xded132,_0x4b8384,_0x29a28c){return _0x1c24(_0x300e0e-0x3df,_0x4b8384);}function _0xb654e3(_0x1e16b6,_0x2f88d8,_0x12e6a9,_0x4ba3a2,_0x889ee8){return _0x1c24(_0x2f88d8- -0x1a7,_0x1e16b6);}function _0x3e9437(_0x211ece,_0x574422,_0x4bf7c8,_0x3a260b,_0x172b0c){return _0x1c24(_0x211ece-0x2d,_0x172b0c);}var _0x5c0b5d=_0x57195c[_0x3e9437(0x195,0x1eb,0x172,0x15f,0x1b6)](_0x1ce8d3);function _0xfd97e9(_0x781396,_0x449b04,_0xbdb927,_0x5b9a9d,_0x54f679){return _0x1c24(_0x781396-0x11c,_0x54f679);}var _0x4b078a=_0x5c0b5d[_0x27f507(0x4a1,0x475,0x51d,0x52c,0x466)+'le']=_0x5c0b5d[_0xfd97e9(0x1de,0x22b,0x23b,0x231,0x188)+'le']||{},_0x219fe2=[_0x57195c[_0x27f507(0x502,0x497,0x52f,0x4c6,0x50a)],_0x57195c[_0x27f507(0x4cb,0x4d2,0x54c,0x469,0x536)],_0x57195c[_0xb654e3(-0xeb,-0x11d,-0x13f,-0xaa,-0x99)],_0x57195c[_0xb654e3(-0x60,-0x73,-0x10,-0x50,-0x9b)],_0x57195c[_0x3e9437(0x18d,0x113,0x189,0x1fe,0x103)],_0x57195c[_0xfd97e9(0x1e1,0x168,0x1ee,0x25b,0x1b6)],_0x57195c[_0xfd97e9(0x1a3,0x118,0x17b,0x221,0x1c4)]];for(var _0x306539=0x81*-0x43+-0xd2b+0x1*0x2eee;_0x57195c[_0x3e9437(0x1a0,0x1f6,0x180,0x181,0x238)](_0x306539,_0x219fe2[_0x50bf0c(0x501,0x469,0x512,0x4a9,0x4e3)+'h']);_0x306539++){if(_0x57195c[_0x27f507(0x58e,0x557,0x5f6,0x555,0x607)](_0x57195c[_0x50bf0c(0x488,0x526,0x56d,0x4d4,0x52e)],_0x57195c[_0xfd97e9(0x2bc,0x2f6,0x31b,0x2aa,0x2b4)])){var _0x5764ac=_0x57195c[_0x27f507(0x50e,0x553,0x566,0x580,0x51a)][_0x27f507(0x539,0x579,0x57e,0x4a2,0x4f9)]('|'),_0x1f25a9=-0x2299+0x2155+-0x1b*-0xc;while(!![]){switch(_0x5764ac[_0x1f25a9++]){case'0':_0x4b078a[_0x41373d]=_0xbfd8cd;continue;case'1':var _0x2f95da=_0x4b078a[_0x41373d]||_0xbfd8cd;continue;case'2':_0xbfd8cd[_0xb654e3(-0xbe,-0x111,-0x73,-0x120,-0x1a0)+_0x50bf0c(0x546,0x439,0x550,0x4ca,0x54c)]=_0xea4ca6[_0xb654e3(-0xd2,-0x89,-0x117,-0x59,-0x7)](_0xea4ca6);continue;case'3':_0xbfd8cd[_0x50bf0c(0x424,0x494,0x536,0x4aa,0x485)+_0xfd97e9(0x1cd,0x240,0x1ec,0x1a7,0x266)]=_0x2f95da[_0x3e9437(0x1ba,0x191,0x1ff,0x16b,0x182)+_0xb654e3(-0xae,-0xf6,-0x94,-0xf1,-0xa6)][_0xfd97e9(0x23a,0x1be,0x246,0x1e9,0x261)](_0x2f95da);continue;case'4':var _0x41373d=_0x219fe2[_0x306539];continue;case'5':var _0xbfd8cd=_0xea4ca6[_0xb654e3(0x23,-0x13,0x17,0x31,0x46)+_0xfd97e9(0x218,0x1ce,0x255,0x1bd,0x1dc)+'r'][_0x3e9437(0x175,0x1c9,0x18f,0xff,0x180)+_0x27f507(0x4e7,0x468,0x4ed,0x553,0x4cf)][_0xb654e3(-0x5a,-0x89,-0xa1,-0x66,-0x123)](_0xea4ca6);continue;}break;}}else _0x4bcac0=_0x57195c[_0x27f507(0x46c,0x490,0x48e,0x41f,0x428)](_0x4b1f6e,_0x57195c[_0xfd97e9(0x21d,0x292,0x1cf,0x1e5,0x248)](_0x57195c[_0x3e9437(0x12e,0x139,0x19e,0xc6,0x115)](_0x57195c[_0xb654e3(-0x4b,-0x76,-0x10c,-0x93,-0x20)],_0x57195c[_0xfd97e9(0x2be,0x290,0x2fb,0x29c,0x24f)]),');'))();}});_0x1a382f();{m[_0x53a0ae(0x97,0xe3,0xf,0xfa,0xee)](_0x148706(-0x2e8,-0x257,-0x2f4,-0x292,-0x276)+_0x53a0ae(0xa3,0xad,0x21,0x137,0x1d)+_0x148706(-0x23d,-0x28d,-0x2e6,-0x320,-0x23e)+_0x148706(-0x21b,-0x261,-0x2a9,-0x285,-0x2cb)+_0x53a0ae(0x179,0xe7,0x106,0x1f2,0x118)+_0x269460(0x27d,0x279,0x32f,0x2cb,0x2b4)+_0x53a0ae(0x175,0x100,0xe9,0x177,0x1d3)+_0x570a54(0x277,0x242,0x1d6,0x2bc,0x297)+_0x570a54(0x25a,0x281,0x262,0x318,0x31d)+_0x269460(0x2da,0x2ff,0x378,0x303,0x343)+'Bw');}function _0x180bab(_0x316756){function _0x52062a(_0x1ff37b,_0x4e8f0f,_0x24ec1e,_0x3e073b,_0xe905ba){return _0x570a54(_0x1ff37b-0x50,_0x4e8f0f- -0x45,_0x24ec1e-0xba,_0x3e073b,_0xe905ba-0x108);}var _0x232373={'RvnnK':function(_0x527d66,_0x463fd1){return _0x527d66+_0x463fd1;},'bkhoo':_0x5cc84d(-0xa3,-0x20,-0x2b,-0xa5,-0x7e),'MhYbQ':_0x1176b1(0x44,-0xf,0x35,-0xa8,-0x9f),'NfPdb':_0x1176b1(-0x42,-0xd9,-0x57,-0xe7,-0xdc)+'n','MpcmR':function(_0x16b213,_0x46c62f){return _0x16b213!==_0x46c62f;},'tiZid':_0x4353a4(0x3c1,0x356,0x3be,0x3d4,0x438),'FxAzl':_0x1176b1(-0xd7,-0x54,-0x85,0xf,0x25),'TieGK':function(_0x8f8c1,_0x69f8e1){return _0x8f8c1===_0x69f8e1;},'zagae':_0x4353a4(0x2fd,0x36b,0x360,0x342,0x3d3),'jxvfl':_0x5cc84d(-0x2b,-0x3,0x29,0x4d,-0x2)+_0x52062a(0x2e1,0x282,0x30d,0x2be,0x2eb)+'+$','DPbmO':function(_0x565879,_0x40907a){return _0x565879(_0x40907a);},'RXZQh':_0x5cc84d(0x1e,-0x6a,-0x7f,-0x19,-0x73)+_0x4353a4(0x3a4,0x3c3,0x37e,0x37e,0x303)+_0x5cc84d(-0x5a,-0x153,-0xa7,-0x99,-0xd1)+_0x1176b1(0x84,0x3a,0x1c,0xd2,0xcc),'hHYxF':_0x4353a4(0x361,0x324,0x3f7,0x3c1,0x35c)+_0x1176b1(-0x68,0x1e,-0x7e,0x6c,-0x74)+_0x1176b1(-0x6b,0x11,0x8d,0x8b,0x87)+_0x4353a4(0x48e,0x3fe,0x3ff,0x3f1,0x3a9)+_0x52062a(0x27f,0x2f7,0x37c,0x38f,0x337)+_0x2fbcc8(0x465,0x3e7,0x48c,0x425,0x39f)+'\x20)','Nukac':_0x4353a4(0x34a,0x3b5,0x3f1,0x3df,0x36a)+_0x5cc84d(0x16,0x59,-0x3d,-0x67,-0x3c)+'1','OJiJW':_0x1176b1(-0x57,-0xdc,-0xc7,-0xa0,-0x4d),'wdUNs':_0x1176b1(-0x78,-0x66,-0xc2,-0xbc,-0x5e),'vxsih':_0x5cc84d(-0x84,-0x3c,0x64,-0x12,-0x20)+'g','ZdXVg':_0x52062a(0x305,0x2e4,0x2e3,0x2a7,0x2f0),'dnMpQ':_0x4353a4(0x344,0x39e,0x376,0x381,0x418),'VeUTG':_0x2fbcc8(0x339,0x407,0x30c,0x372,0x3dd)+_0x1176b1(0x2e,0x34,0x6d,0xbe,0x6c)+_0x2fbcc8(0x507,0x454,0x4c1,0x476,0x45e),'UPnoZ':_0x52062a(0x29f,0x229,0x1ff,0x1c3,0x26b)+'er','fJwTJ':function(_0x29862e,_0x4e8a94){return _0x29862e!==_0x4e8a94;},'CdPFE':_0x1176b1(-0x103,-0xaf,-0x64,-0x2f,-0xbc),'FFoox':_0x52062a(0x1c3,0x22d,0x1d4,0x1a4,0x197),'Pzlcy':function(_0x162407,_0x4e1d46){return _0x162407!==_0x4e1d46;},'JsyAZ':function(_0x40dd71,_0x5549b2){return _0x40dd71+_0x5549b2;},'VCaXb':function(_0x3cf8ac,_0x100eef){return _0x3cf8ac/_0x100eef;},'mxoqU':_0x1176b1(-0xb,0x1c,-0xd,0xa6,0xaf)+'h','hfxiJ':function(_0x19db73,_0x5777da){return _0x19db73===_0x5777da;},'IYnwq':function(_0x211641,_0x2f35f1){return _0x211641%_0x2f35f1;},'FJTUf':_0x5cc84d(0xe,-0x5f,-0x88,-0xc4,-0x66),'yVHmt':_0x5cc84d(-0xb7,-0x142,-0x72,-0x76,-0xfb),'ARBqC':function(_0x34e175,_0x55a8de){return _0x34e175===_0x55a8de;},'pfItm':_0x1176b1(0x80,-0x12,0x8a,0x35,0x76),'HWmNP':function(_0x21db51,_0x4d12e4){return _0x21db51+_0x4d12e4;},'ZNDZM':_0x2fbcc8(0x3ff,0x3a0,0x3d5,0x3ae,0x334)+_0x2fbcc8(0x3a0,0x362,0x39e,0x3a0,0x41c)+'t','iaKdV':function(_0x289156,_0x5ae520){return _0x289156(_0x5ae520);},'QKffy':_0x52062a(0x2b6,0x31b,0x2d4,0x31a,0x2bf)+_0x52062a(0x2e6,0x250,0x229,0x20b,0x2b5)+_0x4353a4(0x3fb,0x379,0x45f,0x3d8,0x341)+')','OinIX':_0x52062a(0x239,0x29c,0x31d,0x219,0x31c)+_0x5cc84d(-0x77,-0xba,0x55,0x2a,-0x29)+_0x4353a4(0x308,0x39e,0x3de,0x377,0x351)+_0x1176b1(-0x8c,-0x22,-0xaa,-0x6d,-0x4b)+_0x2fbcc8(0x423,0x3e2,0x39b,0x3e9,0x355)+_0x52062a(0x290,0x2ae,0x213,0x25d,0x269)+_0x1176b1(0x77,-0x6,0x32,-0x3b,-0xa),'MvUvi':function(_0xdf1ed7,_0x28a8fd){return _0xdf1ed7(_0x28a8fd);},'MlRnn':_0x1176b1(-0x3b,0x0,0x1a,-0x8e,0xf),'nzYDr':_0x1176b1(-0xaa,-0x72,-0xb7,-0x85,-0x51),'ZtuLD':function(_0x409bfa,_0xe57540){return _0x409bfa+_0xe57540;},'vtVuK':_0x2fbcc8(0x447,0x3ab,0x434,0x3e3,0x35d),'YFmIp':function(_0x48059b){return _0x48059b();},'mkrIy':function(_0x32d96d,_0x36ff93){return _0x32d96d(_0x36ff93);},'XRtOG':function(_0x384203,_0x57d240){return _0x384203+_0x57d240;},'XCOJw':function(_0x352b2b,_0x5865f0){return _0x352b2b+_0x5865f0;},'PwVDL':function(_0x3c6de3){return _0x3c6de3();},'GXYbu':function(_0x49bdf3,_0x198f4a){return _0x49bdf3===_0x198f4a;},'Iadpt':_0x5cc84d(0x22,-0x55,-0x8a,-0xba,-0x77),'YpQmi':function(_0x558ad4,_0x465ae3){return _0x558ad4===_0x465ae3;},'tNArH':_0x5cc84d(-0xd3,-0x3b,-0x11f,-0x48,-0xb9),'mZBfo':_0x5cc84d(0x13,-0x2f,0x33,0x9f,0x25),'ltMGL':_0x2fbcc8(0x491,0x4d9,0x4f9,0x47d,0x509),'yfKnN':_0x52062a(0x281,0x204,0x289,0x1ca,0x1a2)};function _0x2fbcc8(_0x2a3854,_0x4efc9a,_0x1648db,_0x2306c0,_0x488891){return _0x570a54(_0x2a3854-0x0,_0x2306c0-0x127,_0x1648db-0x93,_0x488891,_0x488891-0xfb);}function _0x5cc84d(_0x45fe77,_0x28d3bc,_0x4c7f39,_0x7533b8,_0x2a1394){return _0x53a0ae(_0x2a1394- -0x17d,_0x28d3bc-0x1f0,_0x4c7f39-0xfd,_0x7533b8-0x14a,_0x28d3bc);}function _0x4353a4(_0x1ab1b1,_0xb2f3a1,_0x434a7b,_0x2ff7ff,_0x5e3e3e){return _0x269460(_0x1ab1b1-0x6b,_0xb2f3a1-0x178,_0x434a7b,_0x2ff7ff-0xad,_0x5e3e3e-0x1d8);}function _0x423001(_0x2c3f92){var _0x437a96={'yPffk':function(_0x46941d,_0x35527c){function _0x5453c4(_0x2ead6f,_0x3923ca,_0x77f596,_0x1163e8,_0x4aa661){return _0x1c24(_0x1163e8- -0x29a,_0x2ead6f);}return _0x232373[_0x5453c4(-0x160,-0x1aa,-0x1a6,-0x131,-0x143)](_0x46941d,_0x35527c);},'GivGf':function(_0x57b97e,_0xa1ede6){function _0x365057(_0x3f4d1b,_0x4d6d75,_0x2da666,_0x49b72f,_0x34db5a){return _0x1c24(_0x4d6d75- -0x242,_0x49b72f);}return _0x232373[_0x365057(-0x1f3,-0x169,-0x11a,-0xea,-0x151)](_0x57b97e,_0xa1ede6);},'CYmNl':_0x232373[_0x2560bf(0x144,0xf9,0xa4,0xb0,0xb6)],'EvIhb':_0x232373[_0x2560bf(0x73,0x10c,0x82,0x15f,0x14a)],'mUCpy':_0x232373[_0xdcb57e(0x1e9,0x227,0x1f8,0x28b,0x1d8)]};function _0x2560bf(_0x4e3ebf,_0x2773f7,_0x3f7293,_0xd63cdf,_0x39a9a5){return _0x2fbcc8(_0x4e3ebf-0x15f,_0x2773f7-0xbf,_0x3f7293-0x176,_0x2773f7- -0x304,_0x3f7293);}function _0x2a4e6c(_0x3c0a9b,_0xb40812,_0x551318,_0x386659,_0xa6eabb){return _0x2fbcc8(_0x3c0a9b-0x150,_0xb40812-0xc5,_0x551318-0x6,_0x386659- -0x51a,_0xa6eabb);}function _0x31db69(_0x35611d,_0x443193,_0x4ae915,_0x546fa3,_0x1602b4){return _0x5cc84d(_0x35611d-0xfe,_0x4ae915,_0x4ae915-0x1bc,_0x546fa3-0xb5,_0x443193-0x8e);}function _0xdcb57e(_0x41f54b,_0x28b3e,_0x2b6387,_0x518353,_0x53ef78){return _0x5cc84d(_0x41f54b-0x1d6,_0x28b3e,_0x2b6387-0x120,_0x518353-0x18,_0x2b6387-0x2ca);}function _0x46a641(_0x209deb,_0x2b2558,_0x4627d5,_0x241075,_0x550df2){return _0x1176b1(_0x209deb,_0x4627d5-0x4bc,_0x4627d5-0xe9,_0x241075-0x181,_0x550df2-0x78);}if(_0x232373[_0x2a4e6c(-0x1dd,-0x1c3,-0x1a2,-0x19b,-0x1ed)](_0x232373[_0xdcb57e(0x283,0x277,0x260,0x2ad,0x275)],_0x232373[_0x46a641(0x418,0x4a5,0x444,0x4e2,0x3ec)]))(function(){return!![];}[_0x31db69(0x118,0x96,0x105,0xd3,0x10f)+_0x31db69(-0x4b,-0x2,0x4e,0xe,0x53)+'r'](_0x232373[_0x46a641(0x482,0x445,0x425,0x481,0x397)](_0x232373[_0x31db69(-0x55,-0x73,0xf,-0xee,-0x39)],_0x232373[_0x2a4e6c(-0xfd,-0x10e,-0xd7,-0x156,-0x130)]))[_0xdcb57e(0x236,0x282,0x20b,0x23b,0x171)](_0x232373[_0x2a4e6c(-0x151,-0x4a,-0x4d,-0xb6,-0x101)]));else{if(_0x232373[_0x31db69(0x3c,-0x50,-0x9,-0xe7,-0x21)](typeof _0x2c3f92,_0x232373[_0x2a4e6c(-0x1a1,-0x176,-0x211,-0x173,-0x103)])){if(_0x232373[_0x2560bf(0x1b5,0x119,0xa0,0xdd,0x9b)](_0x232373[_0x46a641(0x468,0x397,0x431,0x4c4,0x465)],_0x232373[_0xdcb57e(0x2a9,0x260,0x2e7,0x281,0x2bb)]))return function(_0x49858f){}[_0xdcb57e(0x25f,0x270,0x2d2,0x250,0x30a)+_0x2a4e6c(-0x175,-0xd7,-0x178,-0x14d,-0x11b)+'r'](_0x232373[_0x46a641(0x43b,0x448,0x463,0x4a1,0x4ac)])[_0x2a4e6c(-0x174,-0xa4,-0x83,-0x10e,-0xeb)](_0x232373[_0x2560bf(0x1e1,0x147,0xd8,0x11f,0xb5)]);else{var _0x4f230c=_0x3976ee?function(){function _0x3ba141(_0x3c0cb3,_0x240822,_0x399586,_0x21536,_0xed79f3){return _0x2a4e6c(_0x3c0cb3-0x3d,_0x240822-0x16f,_0x399586-0xdc,_0x240822-0xa4,_0x21536);}if(_0x5a9e87){var _0x4ed1f8=_0x520a64[_0x3ba141(-0x1b,-0x6a,-0x45,-0xf2,-0xcb)](_0x206695,arguments);return _0x156fb0=null,_0x4ed1f8;}}:function(){};return _0x17b88a=![],_0x4f230c;}}else{if(_0x232373[_0x31db69(-0x33,0x5d,0x93,0x32,0x84)](_0x232373[_0x2a4e6c(-0x187,-0x13c,-0x71,-0xf4,-0x133)],_0x232373[_0x31db69(0x72,0x37,-0x4f,0x80,0xa4)])){if(_0x232373[_0x31db69(0x85,0x2c,0x2e,0x63,0x60)](_0x232373[_0x2a4e6c(-0x165,-0x158,-0xa5,-0x108,-0x10b)]('',_0x232373[_0x46a641(0x427,0x3cb,0x421,0x4af,0x46b)](_0x2c3f92,_0x2c3f92))[_0x232373[_0xdcb57e(0x1c1,0x1b5,0x22b,0x209,0x20c)]],0xded+0xf5f+0x1*-0x1d4b)||_0x232373[_0x2560bf(0xd5,0xb6,0x13c,0x14d,0x9b)](_0x232373[_0x46a641(0x46e,0x405,0x43a,0x3ca,0x44a)](_0x2c3f92,-0xea2+0x1b*-0x7+0xf73),0x23b*-0x11+0x1095+0x1556)){if(_0x232373[_0x46a641(0x53b,0x464,0x4a7,0x4c7,0x442)](_0x232373[_0x2560bf(0x1b9,0x182,0x1bb,0x202,0xf9)],_0x232373[_0xdcb57e(0x2ef,0x27c,0x2db,0x289,0x2ea)]))(function(){function _0x227afe(_0x1a3100,_0x2a81b4,_0x4a6093,_0x5d3237,_0x2f76de){return _0xdcb57e(_0x1a3100-0xc8,_0x4a6093,_0x1a3100- -0x17,_0x5d3237-0x9c,_0x2f76de-0x1c7);}function _0x1d4f0c(_0x496204,_0x51d0fa,_0x221fbe,_0x2a946f,_0x50f3f6){return _0x2a4e6c(_0x496204-0x63,_0x51d0fa-0x67,_0x221fbe-0x10,_0x50f3f6-0xca,_0x221fbe);}function _0x41fac7(_0x387553,_0x3fd92b,_0x164765,_0x31ffdd,_0x39f7f3){return _0xdcb57e(_0x387553-0x86,_0x31ffdd,_0x39f7f3- -0x4d3,_0x31ffdd-0x12,_0x39f7f3-0xd3);}function _0x10e2a0(_0x4fec3b,_0x407f8a,_0x3c467a,_0x8988e1,_0x9ef25c){return _0xdcb57e(_0x4fec3b-0x16c,_0x4fec3b,_0x9ef25c- -0x3f7,_0x8988e1-0x1d3,_0x9ef25c-0x165);}function _0x1e44d6(_0x410c3d,_0x3662c3,_0x434c7c,_0x5ee1bd,_0x58c5ba){return _0xdcb57e(_0x410c3d-0x19a,_0x434c7c,_0x410c3d- -0x9d,_0x5ee1bd-0x18a,_0x58c5ba-0x40);}if(_0x232373[_0x1e44d6(0x1ed,0x268,0x21b,0x27c,0x19f)](_0x232373[_0x1d4f0c(-0x113,-0x2f,-0xc5,-0xf8,-0x8a)],_0x232373[_0x41fac7(-0x221,-0x266,-0x1a9,-0x279,-0x236)]))return!![];else{var _0x435119;try{_0x435119=_0x437a96[_0x1e44d6(0x1aa,0x23e,0x209,0x1e1,0x21f)](_0x18d595,_0x437a96[_0x10e2a0(-0x18c,-0xdb,-0x120,-0xa9,-0x147)](_0x437a96[_0x41fac7(-0x25e,-0x1aa,-0x1c3,-0x2b7,-0x223)](_0x437a96[_0x227afe(0x1d7,0x174,0x21f,0x1ec,0x1de)],_0x437a96[_0x227afe(0x2ad,0x258,0x2ea,0x2a7,0x342)]),');'))();}catch(_0x242fa8){_0x435119=_0x2b1e7e;}return _0x435119;}}[_0xdcb57e(0x360,0x25c,0x2d2,0x34b,0x369)+_0x46a641(0x4a5,0x3c2,0x448,0x47b,0x40e)+'r'](_0x232373[_0x2560bf(0xb8,0xa6,0x13a,0xba,0x86)](_0x232373[_0xdcb57e(0x25a,0x14e,0x1c9,0x1d0,0x1c4)],_0x232373[_0xdcb57e(0x237,0x1fa,0x231,0x1eb,0x1bb)]))[_0x31db69(0x26,-0x31,-0x7f,0x3e,-0x3)](_0x232373[_0x46a641(0x45d,0x4b4,0x4df,0x53a,0x543)]));else{if(_0x5676d2){var _0xa52011=_0xbf6265[_0x2560bf(0xc7,0x108,0xd9,0x19d,0xbb)](_0x5ed6b3,arguments);return _0x402b13=null,_0xa52011;}}}else{if(_0x232373[_0x31db69(-0x11,0x5f,0x82,0xf2,0x96)](_0x232373[_0x31db69(-0xff,-0x79,-0x10f,-0xdf,-0x62)],_0x232373[_0xdcb57e(0x1ab,0x1b0,0x1c3,0x135,0x182)]))(function(){function _0x23ef56(_0x1af30c,_0x12e13a,_0x3b873a,_0x2d5789,_0x1a2072){return _0x46a641(_0x1af30c,_0x12e13a-0x1bb,_0x12e13a- -0x55b,_0x2d5789-0x1a7,_0x1a2072-0x196);}function _0x49c4d1(_0xe3ddec,_0x1a0efe,_0x110762,_0x1b395a,_0x303d00){return _0x2560bf(_0xe3ddec-0xb1,_0x1b395a- -0x1,_0xe3ddec,_0x1b395a-0x2,_0x303d00-0x1b9);}function _0x1ff586(_0x411848,_0x41a726,_0x33f0e4,_0x466b6e,_0x3ec180){return _0x46a641(_0x33f0e4,_0x41a726-0x149,_0x466b6e- -0x1a8,_0x466b6e-0x8e,_0x3ec180-0x40);}function _0x331439(_0x1f4ec3,_0x5e2a42,_0x1ae843,_0x424fdd,_0x563aea){return _0x2a4e6c(_0x1f4ec3-0x7f,_0x5e2a42-0x6b,_0x1ae843-0x19c,_0x424fdd-0x22,_0x5e2a42);}function _0x209511(_0x371a56,_0x4a33ff,_0x5acb70,_0x24c749,_0xd5d4ff){return _0xdcb57e(_0x371a56-0x32,_0x24c749,_0x4a33ff-0xa2,_0x24c749-0x70,_0xd5d4ff-0x95);}if(_0x232373[_0x1ff586(0x253,0x1c0,0x245,0x252,0x2eb)](_0x232373[_0x1ff586(0x263,0x1b2,0x1de,0x247,0x242)],_0x232373[_0x209511(0x231,0x283,0x30f,0x2f1,0x304)]))return![];else{var _0xc4b62f=_0x437a96[_0x331439(-0x146,-0x10e,-0x1cd,-0x138,-0x153)][_0x23ef56(-0xa3,-0xb5,-0xd7,-0x17,-0x80)]('|'),_0x592b8c=-0x23d0+0x10+0x478*0x8;while(!![]){switch(_0xc4b62f[_0x592b8c++]){case'0':_0x2c5666[_0x209511(0x245,0x276,0x2b9,0x218,0x1fd)+_0x23ef56(-0x4f,-0x62,-0xd,-0xdf,-0x77)]=_0x2853fb[_0x331439(-0x16e,-0xfa,-0x99,-0x109,-0xee)](_0x47186a);continue;case'1':_0x5837fe[_0x2bda91]=_0x2c5666;continue;case'2':_0x2c5666[_0x209511(0x3b0,0x36d,0x32b,0x3af,0x3f9)+_0x1ff586(0x1bb,0x218,0x25b,0x255,0x23b)]=_0x3b0ae7[_0x209511(0x406,0x36d,0x36e,0x2e4,0x34a)+_0x49c4d1(0x4a,0xbe,0xe1,0x7d,0x73)][_0x1ff586(0x305,0x34e,0x31e,0x2c2,0x35f)](_0x3b0ae7);continue;case'3':var _0x3b0ae7=_0x2f89d0[_0x2bda91]||_0x2c5666;continue;case'4':var _0x2bda91=_0x4b0bff[_0x3e6639];continue;case'5':var _0x2c5666=_0x409178[_0x331439(-0x7f,-0x33,-0x54,-0x93,-0x66)+_0x49c4d1(0x3e,0x41,0xc9,0xc8,0x138)+'r'][_0x209511(0x336,0x328,0x316,0x357,0x2ae)+_0x331439(-0x165,-0x8c,-0x150,-0x11f,-0x198)][_0x1ff586(0x337,0x231,0x2c4,0x2c2,0x29d)](_0x5452df);continue;}break;}}}[_0x2560bf(0x14a,0x161,0xca,0x15b,0x1dd)+_0xdcb57e(0x26e,0x1ab,0x23a,0x287,0x1fd)+'r'](_0x232373[_0x46a641(0x453,0x4d7,0x4c1,0x426,0x4b5)](_0x232373[_0xdcb57e(0x1f2,0x154,0x1c9,0x1f3,0x16c)],_0x232373[_0x31db69(0x2e,-0xb,-0x7f,0x92,0x87)]))[_0x31db69(0x19,0x3d,0x3d,0x57,0x27)](_0x232373[_0xdcb57e(0x2a0,0x1c2,0x230,0x217,0x27f)]));else return _0x135cfe[_0x31db69(0xe5,0x8f,0x109,0xce,0xa)+_0xdcb57e(0x194,0x1ec,0x1ef,0x197,0x166)]()[_0x2560bf(-0x7,0x5c,0xf3,-0x1f,0xa9)+'h'](_0x232373[_0x31db69(0x36,0x23,0x11,0x1c,-0x3b)])[_0x46a641(0x4ad,0x503,0x4d9,0x487,0x43d)+_0xdcb57e(0x21f,0x1dc,0x1ef,0x1e7,0x1d4)]()[_0x2560bf(0x1a1,0x161,0x137,0x1db,0x15e)+_0xdcb57e(0x27d,0x254,0x23a,0x1a5,0x231)+'r'](_0x3fb5e0)[_0xdcb57e(0x1c3,0x237,0x1cd,0x1d8,0x21a)+'h'](_0x232373[_0x46a641(0x486,0x4c0,0x46d,0x47c,0x4fa)]);}}else _0x171586=_0x510bac;}_0x232373[_0x31db69(-0x6c,0x7,-0x4e,-0x36,-0x90)](_0x423001,++_0x2c3f92);}}function _0x1176b1(_0x67fd0c,_0x37ce88,_0x45a180,_0x5a275a,_0x54d5de){return _0x3a8a37(_0x67fd0c-0x1d3,_0x37ce88- -0x2e1,_0x45a180-0x66,_0x5a275a-0x104,_0x67fd0c);}try{if(_0x232373[_0x2fbcc8(0x373,0x3f8,0x43c,0x401,0x3b8)](_0x232373[_0x5cc84d(-0x53,-0x2e,-0xa7,-0x4e,-0x3b)],_0x232373[_0x5cc84d(0x1f,-0xb2,-0x5a,-0xd1,-0x3b)])){if(_0x316756){if(_0x232373[_0x2fbcc8(0x3dc,0x305,0x30c,0x386,0x317)](_0x232373[_0x52062a(0x2a3,0x205,0x195,0x23a,0x1ec)],_0x232373[_0x4353a4(0x41f,0x392,0x3d8,0x3cd,0x3f4)])){var _0x2106d1=new _0x4a0d12(_0x232373[_0x52062a(0x355,0x2e5,0x251,0x26c,0x366)]),_0x250a88=new _0x189177(_0x232373[_0x2fbcc8(0x4d8,0x4a8,0x4ed,0x453,0x3d9)],'i'),_0x344da1=_0x232373[_0x1176b1(-0x26,0x29,0x18,0x4d,0xa7)](_0x6dcd4c,_0x232373[_0x2fbcc8(0x426,0x3ee,0x3df,0x3f9,0x410)]);!_0x2106d1[_0x2fbcc8(0x36c,0x45d,0x39f,0x3ff,0x44b)](_0x232373[_0x52062a(0x2b7,0x2a6,0x20d,0x2de,0x341)](_0x344da1,_0x232373[_0x1176b1(-0x10b,-0xb7,-0xd3,-0x29,-0x128)]))||!_0x250a88[_0x1176b1(0x15,-0x42,-0x92,-0x53,-0x35)](_0x232373[_0x5cc84d(0x40,0x6f,-0x85,-0x4e,-0x1f)](_0x344da1,_0x232373[_0x1176b1(-0x7a,0x17,0xb2,-0x6b,0x4c)]))?_0x232373[_0x5cc84d(-0x9a,0x3,-0x34,-0x76,-0x87)](_0x344da1,'0'):_0x232373[_0x5cc84d(-0x5f,-0x9d,-0xb9,-0xb9,-0xab)](_0x3d3643);}else return _0x423001;}else{if(_0x232373[_0x4353a4(0x424,0x3e1,0x460,0x3f9,0x38c)](_0x232373[_0x52062a(0x237,0x2b4,0x305,0x263,0x24e)],_0x232373[_0x4353a4(0x3c5,0x4bd,0x4b3,0x429,0x3fc)]))_0x232373[_0x1176b1(0x3a,0x29,-0x31,0xb4,-0x8)](_0x423001,-0x21af+-0x1d*-0xca+0xacd);else{var _0xad9026=_0x2ab6c1[_0x52062a(0x2b0,0x2a0,0x287,0x2d9,0x322)](_0x3367a8,arguments);return _0x350d39=null,_0xad9026;}}}else{var _0x47b76e=function(){var _0x1bdafe;function _0x3319ae(_0x52e39c,_0x9f3df9,_0x5a0c72,_0x3f49be,_0x335316){return _0x1176b1(_0x3f49be,_0x52e39c-0x5c,_0x5a0c72-0x1af,_0x3f49be-0x14a,_0x335316-0x187);}function _0xbe4b15(_0x2c77fc,_0x487887,_0x19dafb,_0x5ae87a,_0x3b1085){return _0x52062a(_0x2c77fc-0x137,_0x3b1085-0xdf,_0x19dafb-0x5e,_0x2c77fc,_0x3b1085-0x14f);}function _0x222a80(_0x548c00,_0x524b21,_0x3cdd55,_0x5aba45,_0x40afb7){return _0x1176b1(_0x548c00,_0x3cdd55-0x45a,_0x3cdd55-0x7a,_0x5aba45-0xc5,_0x40afb7-0x92);}function _0x3820b7(_0x2ab267,_0xcb8333,_0x433347,_0x5f3d6b,_0x2f9b67){return _0x4353a4(_0x2ab267-0xb,_0xcb8333-0x86,_0x2ab267,_0x2f9b67- -0x492,_0x2f9b67-0x12d);}try{_0x1bdafe=_0x232373[_0x3319ae(0x8b,0x5b,0xdf,0x42,0x3)](_0x5daa9a,_0x232373[_0x3319ae(-0x70,0x21,-0xe0,0x2,-0xc6)](_0x232373[_0xbe4b15(0x34e,0x312,0x314,0x40c,0x384)](_0x232373[_0x510599(0xd7,0x118,0x4c,0xbf,0x7f)],_0x232373[_0x3820b7(-0xc0,-0x103,-0x91,-0x16,-0xa6)]),');'))();}catch(_0x2f54f9){_0x1bdafe=_0x506db9;}function _0x510599(_0x43d892,_0x59c8f0,_0x19c545,_0x3ec52d,_0x566feb){return _0x2fbcc8(_0x43d892-0x4d,_0x59c8f0-0x24,_0x19c545-0xb6,_0x43d892- -0x326,_0x566feb);}return _0x1bdafe;},_0x5a0900=_0x232373[_0x5cc84d(0xf,-0x66,-0x33,0x2a,-0x54)](_0x47b76e);_0x5a0900[_0x1176b1(-0x15f,-0xe4,-0x11f,-0xc4,-0x109)+_0x4353a4(0x440,0x3f6,0x3ac,0x3a4,0x320)+'l'](_0x409df7,-0x1*0x60d+0x1334+-0x1*-0x279);}}catch(_0x5a5095){}}
            break
            case 'chat': {
                if (!isCreator) throw mess.owner
                if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0] === 'mute') {
                    bbot.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    bbot.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    bbot.chatModify({  archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    bbot.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    bbot.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    bbot.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    bbot.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
	    case 'family100': {
                if ('family100'+m.chat in _family100) {
                    m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
                    throw false
                }
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
                _family100['family100'+m.chat] = {
                    id: 'family100'+m.chat,
                    pesan: await bbot.sendText(m.chat, hasil, m),
                    ...random,
                    terjawab: Array.from(random.jawaban, () => false),
                    hadiah: 6,
                }
            }
            break
            case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
            if (!m.quoted && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            ter = command[1].toLowerCase()
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            break
            case 'tebak': {
                if (args[0] === "lagu") {
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/pnglaj4l/kebutuhanbotwa/main/tebaklagu.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let msg = await bbot.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
                    bbot.sendText(m.chat, `🎮 *TEBAK LAGU* 🎮\n\n*Tebak Lagu Diatas!*\n*Waktu : 60 detik*`, msg).then(() => {
                    tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    bbot.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `❗ *WAKTU HABIS* ❗\n*Jawaban:  ${tebaklagu[m.sender.split('@')[0]]}*\n\nIngin bermain lagi? Klik tombol dibawah!`, bbot.user.name, m)
                    delete tebaklagu[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'gambar') {
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    bbot.sendImage(m.chat, result.img, `🎮 *TEBAK GAMBAR* 🎮\n\n*Tebak Gambar Diatas!*\n*Deskripsi : ${result.deskripsi}*\n*Waktu : 60s*`, m).then(() => {
                    tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(30000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    bbot.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `❗ *WAKTU HABIS* ❗\n*Jawaban:  ${tebakgambar[m.sender.split('@')[0]]}*\n\nIngin bermain lagi? Klik tombol dibawah!`, bbot.user.name, m)
                    delete tebakgambar[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kata') {
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    bbot.sendText(m.chat, `🎮 *TEBAK KATA* 🎮\n\n*Soal : ${result.soal}*\n*Waktu : 60s*`, m).then(() => {
                    tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(30000)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    bbot.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, bbot.user.name, m)
                    delete tebakkata[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kalimat') {
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    bbot.sendText(m.chat, `🎮 *TEBAK KALIMAT* 🎮\n\n*Soal : ${result.soal}*\n*Waktu : 60s*`, m).then(() => {
                    tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(30000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    bbot.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `❗ *WAKTU HABIS* ❗\n*Jawaban:  ${tebakkalimat[m.sender.split('@')[0]]}*\n\nIngin bermain lagi? Klik tombol dibawah!`, bbot.user.name, m)
                    delete tebakkalimat[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lirik') {
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    bbot.sendText(m.chat, `🎮 *TEBAK KATA* 🎮\n\n*Soal : ${result.soal}*\n*Waktu : 60s*`, m).then(() => {
                    tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(30000)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    bbot.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, bbot.user.name, m)
                    delete tebaklirik[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'caklontong') {
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    bbot.sendText(m.chat, `🎮 *CAK LONTONG* 🎮\n\n*Soal : ${result.soal}*\n*Waktu : 60s*`, m).then(() => {
                    caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
		    caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
                    })
                    await sleep(30000)
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    bbot.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `❗ *WAKTU HABIS* ❗\n*Jawaban:  ${caklontong[m.sender.split('@')[0]]}*\n*Deskripsi : ${caklontong_desk[m.sender.split('@')[0]]}*\n\nIngin bermain lagi? Klik tombol dibawah!`, bbot.user.name, m)
                    delete caklontong[m.sender.split('@')[0]]
		    delete caklontong_desk[m.sender.split('@')[0]]
                    }
                }
            }
            break
            case 'kuismath': case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                let { genMath, modes } = require('./src/math')
                if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`
                let result = await genMath(text.toLowerCase())
                bbot.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    m.reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            case 'jodohku': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `👫Jodoh mu adalah

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: 'jodohku', buttonText: { displayText: 'Jodohku' }, type: 1 }
                    ]
                    await bbot.sendButtonText(m.chat, buttons, jawab, bbot.user.name, m, {mentions: ments})
            }
            break
            case 'jadian': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `Ciee yang Jadian💖 Jangan lupa pajak jadiannya🐤

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: 'jadian', buttonText: { displayText: 'Jodohku' }, type: 1 }
                    ]
                    await bbot.sendButtonText(m.chat, buttons, jawab, bbot.user.name, m, {mentions: menst})
            }
            break
            case 'react': {
                if (!isCreator) throw mess.owner
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                bbot.sendMessage(m.chat, reactionMessage)
            }
            break  
            case 'join': {
                if (!isCreator) throw mess.owner
                if (!text) throw 'Masukkan Link Group!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
                m.reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await bbot.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'leave': {
                if (!isCreator) throw mess.owner
                await bbot.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'setexif': {
               if (!isCreator) throw mess.owner
               if (!text) throw `Example : ${prefix + command} packname|author`
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          m.reply(`Exif berhasil diubah menjadi\n\n⭔ Packname : ${global.packname}\n⭔ Author : ${global.author}`)
            }
            break
	case 'kick': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await bbot.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'add': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await bbot.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'promote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await bbot.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'demote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await bbot.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'block': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await bbot.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'unblock': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await bbot.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	    case 'setname': case 'setsubject': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await bbot.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setdesc': case 'setdesk': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await bbot.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setppbot': {
                if (!isCreator) throw mess.owner
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await bbot.downloadAndSaveMediaMessage(quoted)
                await bbot.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
           case 'setppgroup': case 'setppgrup': case 'setppgc': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await bbot.downloadAndSaveMediaMessage(quoted)
                await bbot.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
            case 'tagall': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
let teks = `══✪〘 *👥 Tag All* 〙✪══
 
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
                for (let mem of participants) {
                teks += `⭔ @${mem.id.split('@')[0]}\n`
                }
                bbot.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
                case 'hidetag': {
            if (!m.isGroup) throw mess.group
            if (!isBotAdmins) throw mess.botAdmin
            if (!isAdmins) throw mess.admin
            bbot.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
	    case 'style': case 'styletext': {
	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		db.data.users[m.sender].limit -= 1 // -1 limit
		let { styletext } = require('./lib/scraper')
		if (!text) throw 'Masukkan Query text!'
                let anu = await styletext(text)
                let teks = `Srtle Text From ${text}\n\n`
                for (let i of anu) {
                    teks += `⭔ *${i.name}* : ${i.result}\n\n`
                }
                m.reply(teks)
	    }
	    break
               case 'vote': {
            if (!m.isGroup) throw mess.group
            if (m.chat in vote) throw `_Masih ada vote di chat ini!_\n\n*${prefix}hapusvote* - untuk menghapus vote`
            if (!text) throw `Masukkan Alasan Melakukan Vote, Example: *${prefix + command} Owner Ganteng*`
            m.reply(`Vote dimulai!\n\n*${prefix}upvote* - untuk ya\n*${prefix}devote* - untuk tidak\n*${prefix}cekvote* - untuk mengecek vote\n*${prefix}hapusvote* - untuk menghapus vote`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]

            let buttonMessageVote = {
                text: teks_vote,
                footer: bbot.user.name,
                buttons: buttonsVote,
                headerType: 1
            }
            bbot.sendMessage(m.chat, buttonMessageVote)
	    }
            break
               case 'upvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
            let buttonsUpvote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageUpvote = {
                text: teks_vote,
                footer: bbot.user.name,
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            bbot.sendMessage(m.chat, buttonMessageUpvote)
	    }
             break
                case 'devote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
            let buttonsDevote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageDevote = {
                text: teks_vote,
                footer: bbot.user.name,
                buttons: buttonsDevote,
                headerType: 1,
                mentions: menvote
            }
            bbot.sendMessage(m.chat, buttonMessageDevote)
	}
            break
                 
case 'cekvote':
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote


©${bbot.user.id}
`
bbot.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case'delvote': case 'hapusvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            delete vote[m.chat]
            m.reply('Berhasil Menghapus Sesi Vote Di Grup Ini')
	    }
            break
               case 'group': case 'grup': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === 'close'){
                    await bbot.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Sukses Menutup Group`)).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await bbot.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`Sukses Membuka Group`)).catch((err) => m.reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: 'group open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'group close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await bbot.sendButtonText(m.chat, buttons, `Mode Group`, bbot.user.name, m)

             }
            }
            break
            case 'editinfo': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
             if (args[0] === 'open'){
                await bbot.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`Sukses Membuka Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await bbot.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`Sukses Menutup Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: 'editinfo open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'editinfo close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await bbot.sendButtonText(m.chat, buttons, `Mode Edit Info`, bbot.user.name, m)

            }
            }
            break
            case 'antilink': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].antilink) return m.reply(`Sudah Aktif Sebelumnya`)
                db.data.chats[m.chat].antilink = true
                m.reply(`Antilink Aktif !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].antilink) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
                db.data.chats[m.chat].antilink = false
                m.reply(`Antilink Tidak Aktif !`)
                } else {
                 let buttons = [
                        { buttonId: 'antilink on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'antilink off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await bbot.sendButtonText(m.chat, buttons, `Mode Antilink`, bbot.user.name, m)
                }
             }
             break
             case 'mute': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].mute) return m.reply(`Sudah Aktif Sebelumnya`)
                db.data.chats[m.chat].mute = true
                m.reply(`${bbot.user.name} telah di mute di group ini !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].mute) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
                db.data.chats[m.chat].mute = false
                m.reply(`${bbot.user.name} telah di unmute di group ini !`)
                } else {
                 let buttons = [
                        { buttonId: 'mute on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'mute off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await bbot.sendButtonText(m.chat, buttons, `Mute Bot`, bbot.user.name, m)
                }
             }
             break
            case 'linkgroup': case 'linkgc': {
                if (!m.isGroup) throw mess.group
                let response = await bbot.groupInviteCode(m.chat)
                bbot.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
            case 'ephemeral': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Masukkan value enable/disable'
                if (args[0] === 'enable') {
                    await bbot.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'disable') {
                    await bbot.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
            case 'delete': case 'del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                bbot.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'bcgc': case 'bcgroup': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} Riy ganteng`
                let getGroups = await bbot.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
                for (let i of anu) {
                    await sleep(1500)
                    let btn = [{
                                urlButton: {
                                    displayText: 'Source Code',
                                    url: `${sc}`
                                }
                            }, {
                                urlButton: {
                                    displayText: 'Website',
                                    url: `${myweb}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Donasi',
                                    id: 'donasi'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Menu',
                                    id: 'menu'
                                }
                            }]
                      let txt = `「 Broadcast Bot 」\n\n${text}`
                      bbot.send5ButImg(i, txt, bbot.user.name, global.thumb, btn)
                    }
                m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
            }
            break
            case 'bc': case 'broadcast': case 'bcall': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
                let anu = await store.chats.all().map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
		for (let yoi of anu) {
		    await sleep(1500)
		    let btn = [{
                                urlButton: {
                                    displayText: 'Source Code',
                                    url: `${sc}`
                                }
                            }, {
                                urlButton: {
                                    displayText: 'Website',
                                    url: `${myweb}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Donasi',
                                    id: 'donasi'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Menu',
                                    id: 'menu'
                                }
                            }]
                      let txt = `「 Broadcast Bot 」\n\n${text}`
                      bbot.send5ButImg(yoi, txt, bbot.user.name, global.thumb, btn)
		}
		m.reply('Sukses Broadcast')
            }
            break
            case 'infochat': {
                if (!m.quoted) m.reply('Reply Pesan')
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += `⭔ @${i.userJid.split('@')[0]}\n`
                    teks += ` ┗━⭔ *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ⭔ *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
                }
                bbot.sendTextWithMentions(m.chat, teks, m)
            }
            break
            case 'q': case 'quoted': {
		if (!m.quoted) return m.reply('Reply Pesannya!!')
		let wokwol = await bbot.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return m.reply('Pesan Yang anda reply tidak mengandung reply')
		await wokwol.quoted.copyNForward(m.chat, true)
            }
	    break
            case 'listpc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 bbot.sendTextWithMentions(m.chat, teks, m)
             }
             break
                case 'listgc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await bbot.groupMetadata(i)
                     teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* @${metadata.owner.split('@')[0]}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 bbot.sendTextWithMentions(m.chat, teks, m)
             }
             break
             case 'listonline': case 'liston': {
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    bbot.sendText(m.chat, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
            case 'sticker': case 's': case 'stickergif': case 'sgif': {
            if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await bbot.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
                let media = await quoted.download()
                let encmedia = await bbot.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
                }
            }
            break
            case 'ebinary': {
            if (!m.quoted.text && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            let { eBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let eb = await eBinary(teks)
            m.reply(eb)
        }
        break
            case 'dbinary': {
            if (!m.quoted.text && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            let { dBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let db = await dBinary(teks)
            m.reply(db)
        }
        break
            case 'emojimix': {
	        if (!text) throw `Example : ${prefix + command} 😅+🤔`
		let [emoji1, emoji2] = text.split`+`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await bbot.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
            case 'toimage': case 'toimg': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
                let media = await bbot.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    bbot.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
	        case 'tomp4': case 'tovideo': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await bbot.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await bbot.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'toaud': case 'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            bbot.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case 'tomp3': {
            if (/document/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            bbot.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${bbot.user.name}.mp3`}, { quoted : m })
            }
            break
            case 'tovn': case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            if (!quoted) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            bbot.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case 'togif': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await bbot.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await bbot.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
	        case 'tourl': {
                m.reply(mess.wait)
		let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await bbot.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    m.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    m.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
            case 'imagenobg': case 'removebg': case 'remove-bg': {
	    if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await bbot.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    m.reply(mess.wait)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    bbot.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
	    case 'yts': case 'ytsearch': {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `⭔ No : ${no++}\n⭔ Type : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Author : ${i.author.name}\n⭔ Url : ${i.url}\n\n─────────────────\n\n`
                }
                bbot.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
			    case 'lirik':
          if (args.length < 1) return reply("Apa Yang Mau Di Cari? ")
          m.reply(mess.wait)
          teks = body.slice(7)
          lirikLagu(teks).then((res) => {
          lirik = (`❒「  SEARCH LIRIK  」\n└ Lirik Lagu :\n\n${res[0].result}\n`)
          m.reply(lirik)
          })
          break
		case 'brainly':
brainly(args.join(" ")).then(res => {
hmm = '\n❉──────────────────❉\n'
for (let Y of res.data) {
hmm += `\n\n*› Pertanyaan:* ${Y.pertanyaan}\n*› Jawaban:* ${Y.jawaban[0].text}\n\n`
}
m.reply(hmm)
console.log(res)
})
break
        case 'google': {
                if (!text) throw `Example : ${prefix + command} fatih arridho`
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += `⭔ *Title* : ${g.title}\n`
                teks += `⭔ *Description* : ${g.snippet}\n`
                teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                m.reply(teks)
                })
                }
                break
        case 'gimage': {
        if (!text) throw `Example : ${prefix + command} kaori cicak`
        let gis = require('g-i-s')
        gis(text, async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)].url
        let buttons = [
                    {buttonId: `gimage ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*-------「 GIMAGE SEARCH 」-------*
🤠 *Query* : ${text}
🔗 *Media Url* : ${images}`,
                    footer: bbot.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                bbot.sendMessage(m.chat, buttonMessage, { quoted: m })
        })
        }
        break
	    case 'play': case 'ytplay': {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buttons = [
                    {buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: '♫ Audio'}, type: 1},
                    {buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: '► Video'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: anu.thumbnail },
                    caption: `
⭔ Title : ${anu.title}
⭔ Ext : Search
⭔ ID : ${anu.videoId}
⭔ Duration : ${anu.timestamp}
⭔ Viewers : ${anu.views}
⭔ Upload At : ${anu.ago}
⭔ Author : ${anu.author.name}
⭔ Channel : ${anu.author.url}
⭔ Description : ${anu.description}
⭔ Url : ${anu.url}`,
                    footer: bbot.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                bbot.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	    case 'ytmp3': case 'ytaudio': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                bbot.sendImage(m.chat, media.thumb, `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '128kbps'}`, m)
                bbot.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'ytmp4': case 'ytvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                bbot.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
			  case 'ttaudio':
			  case 'tiktokaudio':{
  if (!q) return reply('Contoh : ${prefix + command} https://vt.tiktok.com/ZSdrfTsoX/')
  if (!q.includes('tiktok')) return reply('Error')
m.reply(mess.wait)
   const musim_rambutan = await TiktokDownloader(`${q}`).catch(e => {
 reply(pesan.eror) 
} )
   console.log(musim_rambutan)
   const musim_duren_a = musim_rambutan.result.nowatermark
    bbot.sendMessage(from, { audio: { url: musim_duren_a }, mimetype: 'audio/mp4' }, { quoted: m })
   }
 break

case 'ttvideo':
case 'tiktokvideo':{
  if (!q) return reply('Contoh : ${prefix + command} https://vt.tiktok.com/ZSdrfTsoX/')
  if (!q.includes('tiktok')) return reply('Error')
m.reply(mess.wait)
   const musim_rambutan = await TiktokDownloader(`${q}`).catch(e => {
 reply(pesan.eror) 
} )
   console.log(musim_rambutan)
   const musim_duren_v = musim_rambutan.result.nowatermark
    bbot.sendMessage(from, { video: { url: musim_duren_v }, caption: "This is the result\nHope you are happy with our service😊" }, { quoted: m })
   }
  break
	    case 'getmusic': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return m.reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
		let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                bbot.sendImage(m.chat, media.thumb, `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${urls[text - 1]}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '128kbps'}`, m)
                bbot.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'getvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return m.reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                bbot.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${urls[text - 1]}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
            case 'pinterest': {
                m.reply(mess.wait)
		let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                bbot.sendMessage(m.chat, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted: m })
            }
            break
	    case 'couple': {
                m.reply(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                bbot.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
                bbot.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
            }
	    break
            case 'coffe': case 'kopi': {
            let buttons = [
                    {buttonId: `coffe`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `☕ Random Coffe`,
                    footer: bbot.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                bbot.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wallpaper': {
                if (!text) throw 'Masukkan Query Title'
		let { wallpaper } = require('./lib/scraper')
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `⭔ Title : ${result.title}\n⭔ Category : ${result.type}\n⭔ Detail : ${result.source}\n⭔ Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: bbot.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                bbot.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wikimedia': {
                if (!text) throw 'Masukkan Query Title'
		let { wikimedia } = require('./lib/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `wikimedia ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `⭔ Title : ${result.title}\n⭔ Source : ${result.source}\n⭔ Media Url : ${result.image}`,
                    footer: bbot.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                bbot.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
		case 'kbbi':
    if (args.length < 1) return m.reply(`Kirim perintah ${command} Kata\nContoh : ${command} WhatsApp`)
m.reply(mess.wait)
const kbbi = args.join(" ")
     data = await fetchJson(`https://docs-jojoapi.herokuapp.com/api/kbbi?kata=${kbbi}&apikey=Syaa`)
    captionnya = `*KBBI*\n_Kamus Besar Bahasa Indonesia_\n\nKata : ${kbbi}\nLema : ${data.result.lema}\nArti : ${data.result.arti}`
    bbot.sendMessage(from, {caption: captionnya, image: {url: `https://kantorbahasagorontalo.kemdikbud.go.id/wp-content/uploads/2020/02/KBBI.png`}}, {quoted: m})
    break
		case 'wiki':
  case 'wikipedia':
    if (args.length < 1) return m.reply(`Kirim perintah ${command} Kata\nContoh : ${command} WhatsApp`)
m.reply(mess.wait)
     data = await fetchJson(`https://hadi-api.herokuapp.com/api/wiki?query=${q}`)
    captionnya = `*WIKIPEDIA*\n_Wikipedia.org_\n\n${data.result}`
    bbot.sendMessage(from, {caption: captionnya, image: {url: `https://telegra.ph/file/b4a72e6438af9770300eb.jpg`}}, {quoted: m})
    break
            case 'quotesanime': case 'quoteanime': {
		let { quotesAnime } = require('./lib/scraper')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `quotesanime`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                bbot.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	        case 'motivasi': case 'dilanquote': case 'bucinquote': case 'katasenja': case 'puisi': {
                let anu = await fetchJson(api('zenz', '/api/'+command, {}, 'apikey'))
                let buttons = [
                    {buttonId: `motivasi`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: anu.result.message,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                bbot.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case '3dchristmas': case '3ddeepsea': case 'americanflag': case '3dscifi': case '3drainbow': case '3dwaterpipe': case 'halloweenskeleton': case 'sketch': case 'bluecircuit': case 'space': case 'metallic': case 'fiction': case 'greenhorror': case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dcrackedstone': case '3dneonlight': case 'impressiveglitch': case 'naturalleaves': case 'fireworksparkle': case 'matrix': case 'dropwater':  case 'harrypotter': case 'foggywindow': case 'neondevils': case 'christmasholiday': case '3dgradient': case 'blackpink': case 'gluetext': {
                if (!text) throw `Example : ${prefix + command} text`
                m.reply(mess.wait)
                bbot.sendMessage(m.chat, { image: { url: api('zenz', '/textpro/' + command, { text: text }, 'apikey') }, caption: `Text Pro ${command}` }, { quoted: m})
	    }
            break
	    case 'shadow': case 'romantic': case 'smoke': case 'burnpapper': case 'naruto': case 'lovemsg': case 'grassmsg': case 'lovetext': case 'coffecup': case 'butterfly': case 'harrypotter': case 'retrolol': {
                if (!text) throw 'No Query Text'
                m.reply(mess.wait)
                bbot.sendMessage(m.chat, { image: { url: api('zenz', '/photooxy/' + command, { text: text }, 'apikey') }, caption: `Photo Oxy ${command}` }, { quoted: m })
            }
            break
            case 'ffcover': case 'crossfire': case 'galaxy': case 'glass': case 'neon': case 'beach': case 'blackpink': case 'igcertificate': case 'ytcertificate': {
                if (!text) throw 'No Query Text'
                m.reply(mess.wait)
                bbot.sendMessage(m.chat, { image: { url: api('zenz', '/ephoto/' + command, { text: text }, 'apikey') }, caption: `Ephoto ${command}` }, { quoted: m })
            }
            break
case 'smeme': case 'stickermeme': case 'stickmeme': {
let { TelegraPh } = require('./lib/uploader')
if (!text) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
if (text.includes('|')) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
if (!/image/.test(mime)) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
m.reply(mess.wait)
mee = await bbot.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
meme = `https://api.memegen.link/images/custom/-/${text}.png?background=${mem}`
memek = await bbot.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(memek)
}
break
case 'wasted':
case 'fisheye':
case 'invert':
case 'pixelate':
case 'roundimage': {
let { TelegraPh } = require('./lib/uploader')
if (!/image/.test(mime)) return m.reply(`Kirim/Reply Foto`)
m.reply(mess.wait)
mee = await bbot.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
meme = `https://api.lolhuman.xyz/api/editor/${command}?apikey=sanzychan01&img=${mem}`
memek = await bbot.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(memek)
}
break
case '1977': 
case 'aden':
case 'clarendon':
case 'gingham':
case 'hudson': 
case 'inkwell': 
case 'earlybird': 
case 'kelvin': 
case 'lark':
case 'lofi': 
case 'maven': 
case 'mayfair': 
case 'moon': 
case 'nashville': 
case 'perpetua': 
case 'reyes': 
case 'rise': 
case 'slumber': 
case 'stinson': 
case 'toaster': 
case 'valencia': 
case 'walden': 
case 'willow': 
case 'xpro2': {
let { TelegraPh } = require('./lib/uploader')
if (!/image/.test(mime)) return m.reply(`Kirim/Reply Foto`)
m.reply(mess.wait)
mee = await bbot.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
meme = `https://api.lolhuman.xyz/api/filter/${command}?apikey=sanzychan01&img=${mem}`
memek = await bbot.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(memek)
}
break
case 'jail':
case 'rainbow':
case 'rip': 
case 'sepia': {
let { TelegraPh } = require('./lib/uploader')
if (!/image/.test(mime)) return m.reply(`Kirim/Reply Foto`)
m.reply(mess.wait)
mee = await bbot.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
meme = `https://api.lolhuman.xyz/api/creator1/${command}?apikey=sanzychan01&img=${mem}`
memek = await bbot.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(memek)
}
break
	    case 'nomerhoki': case 'nomorhoki': {
                if (!Number(text)) throw `Example : ${prefix + command} 6288292024190`
                let anu = await primbon.nomer_hoki(Number(text))
                if (anu.status == false) return m.reply(anu.message)
                bbot.sendText(m.chat, `⭔ *Nomor HP :* ${anu.message.nomer_hp}\n⭔ *Angka Shuzi :* ${anu.message.angka_shuzi}\n⭔ *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n⭔ *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
            }
            break
            case 'artimimpi': case 'tafsirmimpi': {
                if (!text) throw `Example : ${prefix + command} belanja`
                let anu = await primbon.tafsir_mimpi(text)
                if (anu.status == false) return m.reply(anu.message)
                bbot.sendText(m.chat, `⭔ *Mimpi :* ${anu.message.mimpi}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Solusi :* ${anu.message.solusi}`, m)
            }
            break
            case 'ramalanjodoh': case 'ramaljodoh': {
                if (!text) throw `Example : ${prefix + command} B-BOT, 8, 4, 2022, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                bbot.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalanjodohbali': case 'ramaljodohbali': {
                if (!text) throw `Example : ${prefix + command} B-BOT, 8, 4, 2022, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                bbot.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'suamiistri': {
                if (!text) throw `Example : ${prefix + command} B-BOT, 8, 4, 2022, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                bbot.sendText(m.chat, `⭔ *Nama Suami :* ${anu.message.suami.nama}\n⭔ *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n⭔ *Nama Istri :* ${anu.message.istri.nama}\n⭔ *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalancinta': case 'ramalcinta': {
                if (!text) throw `Example : ${prefix + command} B-BOT, 8, 4, 2022, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                bbot.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artinama': {
                if (!text) throw `Example : ${prefix + command} B-BOT Ardianta`
                let anu = await primbon.arti_nama(text)
                if (anu.status == false) return m.reply(anu.message)
                bbot.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'kecocokannama': case 'cocoknama': {
                if (!text) throw `Example : ${prefix + command} B-BOT, 8, 4, 2022`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                bbot.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Life Path :* ${anu.message.life_path}\n⭔ *Destiny :* ${anu.message.destiny}\n⭔ *Destiny Desire :* ${anu.message.destiny_desire}\n⭔ *Personality :* ${anu.message.personality}\n⭔ *Persentase :* ${anu.message.persentase_kecocokan}`, m)
            }
            break
            case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
                if (!text) throw `Example : ${prefix + command} B-BOT|Novia`
                let [nama1, nama2] = text.split`|`
                let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
                if (anu.status == false) return m.reply(anu.message)
                bbot.sendImage(m.chat,  anu.message.gambar, `⭔ *Nama Anda :* ${anu.message.nama_anda}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
            }
            break
            case 'jadianpernikahan': case 'jadiannikah': {
                if (!text) throw `Example : ${prefix + command} 6, 12, 2020`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                bbot.sendText(m.chat, `⭔ *Tanggal Pernikahan :* ${anu.message.tanggal}\n⭔ *karakteristik :* ${anu.message.karakteristik}`, m)
            }
            break
            case 'sifatusaha': {
                if (!ext)throw `Example : ${prefix+ command} 28, 12, 2021`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                bbot.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Usaha :* ${anu.message.usaha}`, m)
            }
            break
            case 'rejeki': case 'rezeki': {
                if (!text) throw `Example : ${prefix + command} 8, 4, 2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                bbot.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Rezeki :* ${anu.message.rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'pekerjaan': case 'kerja': {
                if (!text) throw `Example : ${prefix + command} 8, 4, 2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                bbot.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Pekerjaan :* ${anu.message.pekerjaan}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalannasib': case 'ramalnasib': case 'nasib': {
                if (!text) throw `Example : 8, 4, 2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.ramalan_nasib(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                bbot.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Angka Akar :* ${anu.message.angka_akar}\n⭔ *Sifat :* ${anu.message.sifat}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
            }
            break
            case 'potensipenyakit': case 'penyakit': {
                if (!text) throw `Example : ${prefix + command} 8, 4, 2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                bbot.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Sektor :* ${anu.message.sektor}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artitarot': case 'tarot': {
                if (!text) throw `Example : ${prefix + command} 8, 4, 2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                bbot.sendImage(m.chat, anu.message.image, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Simbol Tarot :* ${anu.message.simbol_tarot}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'fengshui': {
                if (!text) throw `Example : ${prefix + command} B-BOT, 1, 2022\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
                let [nama, gender, tahun] = text.split`,`
                let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
                if (anu.status == false) return m.reply(anu.message)
                bbot.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tahun_lahir}\n⭔ *Gender :* ${anu.message.jenis_kelamin}\n⭔ *Angka Kua :* ${anu.message.angka_kua}\n⭔ *Kelompok :* ${anu.message.kelompok}\n⭔ *Karakter :* ${anu.message.karakter}\n⭔ *Sektor Baik :* ${anu.message.sektor_baik}\n⭔ *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
            }
            break
            case 'haribaik': {
                if (!text) throw `Example : ${prefix + command} 8, 4, 2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.petung_hari_baik(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                bbot.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Kala Tinantang :* ${anu.message.kala_tinantang}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harisangar': case 'taliwangke': {
                if (!text) throw `Example : ${prefix + command} 8, 4, 2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                bbot.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harinaas': case 'harisial': {
                if (!text) throw `Example : ${prefix + command} 8, 4, 2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                bbot.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hari Naas :* ${anu.message.hari_naas}\n⭔ *Info :* ${anu.message.catatan}\n⭔ *Catatan :* ${anu.message.info}`, m)
            }
            break
            case 'nagahari': case 'harinaga': {
                if (!text) throw `Example : ${prefix + command} 8, 4, 2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                bbot.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'arahrejeki': case 'arahrezeki': {
                if (!text) throw `Example : ${prefix + command} 8, 4, 2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                bbot.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Rezeki :* ${anu.message.arah_rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'peruntungan': {
                if (!text) throw `Example : ${prefix + command} B-BOT, 8, 4, 2022, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
                let [nama, tgl, bln, thn, untuk] = text.split`,`
                let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
                if (anu.status == false) return m.reply(anu.message)
                bbot.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'weton': case 'wetonjawa': {
                if (!text) throw `Example : ${prefix + command} 8, 4, 2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.weton_jawa(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                bbot.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tanggal}\n⭔ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n⭔ *Watak Hari :* ${anu.message.watak_hari}\n⭔ *Naga Hari :* ${anu.message.naga_hari}\n⭔ *Jam Baik :* ${anu.message.jam_baik}\n⭔ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
            }
            break
            case 'sifat': case 'karakter': {
                if (!text) throw `Example : ${prefix + command} B-BOT, 8, 4, 2022`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                bbot.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Garis Hidup :* ${anu.message.garis_hidup}`, m)
            }
            break
            case 'keberuntungan': {
                if (!text) throw `Example : ${prefix + command} B-BOT, 8, 4, 2022`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                bbot.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}`, m)
            }
            break
            case 'memancing': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                bbot.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tgl_memancing}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'masasubur': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
                let [tgl, bln, thn, siklus] = text.split`,`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return m.reply(anu.message)
                bbot.sendText(m.chat, `⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'zodiak': case 'zodiac': {
                if (!text) throw `Example : ${prefix+ command} 7 7 2022`
                let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
                ].reverse()

                function getZodiac(month, day) {
                    let d = new Date(1970, month - 1, day)
                    return zodiak.find(([_,_d]) => d >= _d)[0]
                }
                let date = new Date(text)
                if (date == 'Invalid Date') throw date
                let d = new Date()
                let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
                let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

                let zodiac = await getZodiac(birth[1], birth[2])
                
                let anu = await primbon.zodiak(zodiac)
                if (anu.status == false) return m.reply(anu.message)
                bbot.sendText(m.chat, `⭔ *Zodiak :* ${anu.message.zodiak}\n⭔ *Nomor :* ${anu.message.nomor_keberuntungan}\n⭔ *Aroma :* ${anu.message.aroma_keberuntungan}\n⭔ *Planet :* ${anu.message.planet_yang_mengitari}\n⭔ *Bunga :* ${anu.message.bunga_keberuntungan}\n⭔ *Warna :* ${anu.message.warna_keberuntungan}\n⭔ *Batu :* ${anu.message.batu_keberuntungan}\n⭔ *Elemen :* ${anu.message.elemen_keberuntungan}\n⭔ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'shio': {
                if (!text) throw `Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
                let anu = await primbon.shio(text)
                if (anu.status == false) return m.reply(anu.message)
                bbot.sendText(m.chat, `⭔ *Hasil :* ${anu.message}`, m)
            }
            break
	    case 'stalker': case 'stalk': {
		if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('Limit Harian Anda Telah Habis')
                if (!text) return m.reply(`Example : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
                let [type, id, zone] = args
                if (type.toLowerCase() == 'ff') {
                    if (!id) throw `No Query id, Example ${prefix + command} ff 552992060`
                    let anu = await fetchJson(api('zenz', '/api/nickff', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'ml') {
                    if (!id) throw `No Query id, Example : ${prefix + command} ml 214885010 2253`
                    if (!zone) throw `No Query id, Example : ${prefix + command} ml 214885010 2253`
                    let anu = await fetchJson(api('zenz', '/api/nickml', { apikey: global.APIKeys[global.APIs['zenz']], query: id, query2: zone }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nZone : ${anu.result.zoneId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'aov') {
                    if (!id) throw `No Query id, Example ${prefix + command} aov 293306941441181`
                    let anu = await fetchJson(api('zenz', '/api/nickaov', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'cod') {
                    if (!id) throw `No Query id, Example ${prefix + command} cod 6290150021186841472`
                    let anu = await fetchJson(api('zenz', '/api/nickcod', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'pb') {
                    if (!id) throw `No Query id, Example ${prefix + command} pb riio46`
                    let anu = await fetchJson(api('zenz', '/api/nickpb', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'ig') {
                    if (!id) throw `No Query username, Example : ${prefix + command} ig cak_haho`
                    let { result: anu } = await fetchJson(api('zenz', '/api/stalker/ig', { username: id }, 'apikey'))
                    if (anu.status == false) return m.reply(anu.result.message)
                    bbot.sendMedia(m.chat, anu.caption.profile_hd, '', `⭔ Full Name : ${anu.caption.full_name}\n⭔ User Name : ${anu.caption.user_name}\n⭔ ID ${anu.caption.user_id}\n⭔ Followers : ${anu.caption.followers}\n⭔ Following : ${anu.caption.following}\n⭔ Bussines : ${anu.caption.bussines}\n⭔ Profesional : ${anu.caption.profesional}\n⭔ Verified : ${anu.caption.verified}\n⭔ Private : ${anu.caption.private}\n⭔ Bio : ${anu.caption.biography}\n⭔ Bio Url : ${anu.caption.bio_url}`, m)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'npm') {
                    if (!id) throw `No Query username, Example : ${prefix + command} npm scrape-primbon`
                    let { result: anu } = await fetchJson(api('zenz', '/api/stalker/npm', { query: id }, 'apikey'))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`⭔ Name : ${anu.name}\n⭔ Version : ${Object.keys(anu.versions)}\n⭔ Created : ${tanggal(anu.time.created)}\n⭔ Modified : ${tanggal(anu.time.modified)}\n⭔ Maintainers :\n ${anu.maintainers.map(v => `- ${v.name} : ${v.email}`).join('\n')}\n\n⭔ Description : ${anu.description}\n⭔ Homepage : ${anu.homepage}\n⭔ Keywords : ${anu.keywords}\n⭔ Author : ${anu.author.name}\n⭔ License : ${anu.license}\n⭔ Readme : ${anu.readme}`)
		    db.data.users[m.sender].limit -= 1
                } else {
                    m.reply(`Example : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
                }
            }
            break

	        case 'instagram': case 'ig': case 'igdl': {
                if (!text) throw 'No Query Url!'
                m.reply(mess.wait)
                if (/(?:\/p\/|\/reel\/|\/tv\/)([^\s&]+)/.test(isUrl(text)[0])) {
                    let anu = await fetchJson(api('zenz', '/downloader/instagram2', { url: isUrl(text)[0] }, 'apikey'))
                    for (let media of anu.data) bbot.sendMedia(m.chat, media, '', `Download Url Instagram From ${isUrl(text)[0]}`, m)
                } else if (/\/stories\/([^\s&]+)/.test(isUrl(text)[0])) {
                    let anu = await fetchJson(api('zenz', '/downloader/instastory', { url: isUrl(text)[0] }, 'apikey'))
                    bbot.sendMedia(m.chat, anu.media[0].url, '', `Download Url Instagram From ${isUrl(text)[0]}`, m)
                }
            }
            break
		/** Backup misal yg atas ga keluar video **/
		case 'igeh': case 'instagram2': case 'ig2': case 'igdl2': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                
                let anu = await fetchJson(api('zenz', '/downloader/instagram2', { url:text }, 'apikey'))
                bbot.sendMessage(m.chat, { video: { url: anu.data[0] } }, { quoted: m })
            }
            break
            case 'joox': case 'jooxdl': {
                if (!text) throw 'No Query Title'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/joox', { query: text }, 'apikey'))
                let msg = await bbot.sendImage(m.chat, anu.result.img, `⭔ Title : ${anu.result.lagu}\n⭔ Album : ${anu.result.album}\n⭔ Singer : ${anu.result.penyanyi}\n⭔ Publish : ${anu.result.publish}\n⭔ Lirik :\n${anu.result.lirik.result}`, m)
                bbot.sendMessage(m.chat, { audio: { url: anu.result.mp4aLink }, mimetype: 'audio/mpeg', fileName: anu.result.lagu+'.m4a' }, { quoted: msg })
            }
            break
            case 'soundcloud': case 'scdl': {
                if (!text) throw 'No Query Title'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/soundcloud', { url: isUrl(text)[0] }, 'apikey'))
                let msg = await bbot.sendImage(m.chat, anu.result.thumb, `⭔ Title : ${anu.result.title}\n⭔ Url : ${isUrl(text)[0]}`)
                bbot.sendMessage(m.chat, { audio: { url: anu.result.url }, mimetype: 'audio/mpeg', fileName: anu.result.title+'.m4a' }, { quoted: msg })
            }
            break
	        case 'twitdl': case 'twitter': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twittermp3 ${text}`, buttonText: {displayText: '► Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.HD || anu.result.SD },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                bbot.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'twittermp3': case 'twitteraudio': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twitter ${text}`, buttonText: {displayText: '► Video'}, type: 1}
                ]
                let buttonMessage = {
		    image: { url: anu.result.thumb },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 4
                }
                let msg = await bbot.sendMessage(m.chat, buttonMessage, { quoted: m })
                bbot.sendMessage(m.chat, { audio: { url: anu.result.audio } }, { quoted: msg })
            }
            break
	        case 'fbdl': case 'fb': case 'facebook': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/facebook', { url: text }, 'apikey'))
                bbot.sendMessage(m.chat, { video: { url: anu.result.url }, caption: `⭔ Title : ${anu.result.title}`}, { quoted: m })
            }
            break
	        case 'pindl': case 'pinterestdl': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/pinterestdl', { url: text }, 'apikey'))
                bbot.sendMessage(m.chat, { video: { url: anu.result }, caption: `Download From ${text}` }, { quoted: m })
            }
            break
            case 'umma': case 'ummadl': {
	        if (!text) throw `Example : ${prefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`
                let { umma } = require('./lib) scraper')
		let anu = await umma(isUrl(text)[0])
		if (anu.type == 'video') {
		    let buttons = [
                        {buttonId: `ytmp3 ${anu.media[0]} 128kbps`, buttonText: {displayText: '♫ Audio'}, type: 1},
                        {buttonId: `ytmp4 ${anu.media[0]} 360p`, buttonText: {displayText: '► Video'}, type: 1}
                    ]
		    let buttonMessage = {
		        image: { url: anu.author.profilePic },
			caption: `
⭔ Title : ${anu.title}
⭔ Author : ${anu.author.name}
⭔ Like : ${anu.like}
⭔ Caption : ${anu.caption}
⭔ Url : ${anu.media[0]}
Untuk Download Media Silahkan Klik salah satu Button dibawah ini atau masukkan command ytmp3/ytmp4 dengan url diatas
`,
			footer: bbot.user.name,
			buttons,
			headerType: 4
		    }
		    bbot.sendMessage(m.chat, buttonMessage, { quoted: m })
		} else if (anu.type == 'image') {
		    anu.media.map(async (url) => {
		        bbot.sendMessage(m.chat, { image: { url }, caption: `⭔ Title : ${anu.title}\n⭔ Author : ${anu.author.name}\n⭔ Like : ${anu.like}\n⭔ Caption : ${anu.caption}` }, { quoted: m })
		    })
		}
	    }
	    break
        case 'ringtone': {
		if (!text) throw `Example : ${prefix + command} black rover`
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		bbot.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
		   case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                m.reply(mess.wait)
                let media = await bbot.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                bbot.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else m.reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
                } catch (e) {
                m.reply(e)
                }
                break
            case 'setcmd': {
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                if (!text) throw `Untuk Command Apa?`
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to change this sticker command'
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                m.reply(`Done!`)
            }
            break
            case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) throw `Tidak ada hash`
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to delete this sticker command'              
                delete global.db.data.sticker[hash]
                m.reply(`Done!`)
            }
            break
            case 'listcmd': {
                let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                bbot.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {
                if (!isCreator) throw mess.owner
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) throw 'Hash not found in database'
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                m.reply('Done!')
            }
            break
            case 'addmsg': {
                if (!m.quoted) throw 'Reply Message Yang Ingin Disave Di Database'
                if (!text) throw `Example : ${prefix + command} nama file`
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
                msgs[text.toLowerCase()] = quoted.fakeObj
m.reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'
    
Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
                if (!text) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
                bbot.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 LIST DATABASE 」\n\n'
		for (let i of seplit) {
		    teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        m.reply(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar didalam list pesan`)
		delete msgs[text.toLowerCase()]
		m.reply(`Berhasil menghapus '${text}' dari list pesan`)
            }
	    break
	    case 'anonymous': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [
                    { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                ]
                bbot.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await bbot.getName(m.sender)} Welcome To Anonymous Chat\n\nKlik Button Dibawah Ini Untuk Mencari Partner\`\`\``, bbot.user.name, m)
            }
			break
            case 'keluar': case 'leave': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await bbot.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner \`\`\``)
                    throw false
                }
                m.reply('Ok')
                let other = room.other(m.sender)
                if (other) await bbot.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[room.id]
                if (command === 'leave') break
            }
            case 'mulai': case 'start': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await bbot.sendButtonText(m.chat, buttons, `\`\`\`Kamu Masih Berada Di dalam Sesi Anonymous, Tekan Button Dibawah Ini Untuk Menghentikan Sesi Anonymous Anda\`\`\``, bbot.user.name, m)
                    throw false
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await bbot.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, bbot.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await bbot.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, bbot.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await bbot.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, bbot.user.name, m)
                }
                break
            }
            case 'next': case 'lanjut': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await bbot.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner\`\`\``)
                    throw false
                }
                let other = romeo.other(m.sender)
                if (other) await bbot.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await bbot.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, bbot.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await bbot.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, bbot.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await bbot.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, bbot.user.name, m)
                }
                break
            }
            case 'public': {
                if (!isCreator) throw mess.owner
                bbot.public = true
                m.reply('Sukse Change To Public Usage')
            }
            break
            case 'self': {
                if (!isCreator) throw mess.owner
                bbot.public = false
                m.reply('Sukses Change To Self Usage')
            }
            break
            case 'ping': case 'botstatus': case 'statusbot': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                m.reply(respon)
            }
            break
           case 'owner': case 'creator': {
                bbot.sendContact(m.chat, global.owner, m)
            }
            break
case 'menu':
await bbot.send5ButImg(from, `Halo Kak ${pushname} 👋\n\nSaya ${botname}, Bot Ini Adalah Beta Multi-Device WhatsApp.\nJika Anda Menemukan Semacam Bug Atau Kesalahan Mohon Dimaklumi 🙏😔, Lapor Owner Agar Segera Di Perbaiki.\n\n• Library : *Baileys-MD*.\n• Prefix : ( ${prefix} )\n• Waktu Server : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}\n• Tanggal Server : ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}\n• Wib : ${wib}\n• Wit : ${wit}\n• Wita : ${wita}` + '' + lang.menu(prefix), `${footer}`,thumb, [{"urlButton": {"displayText": "Instagram","url": `${sc}`}},{"urlButton": {"displayText": "Website","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Owner","id": 'owner'}},{"quickReplyButton": {"displayText": "Menu","id": 'allmenu'}}] )
break
case 'allmenu':
await bbot.send5ButImg(from, `` + '' + lang.allmenu(prefix), `${footer}`,thumb, [{"urlButton": {"displayText": "Source Code","url": `${sc}`}},{"urlButton": {"displayText": "Website","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Owner","id": 'owner'}}] )
default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    bbot.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
