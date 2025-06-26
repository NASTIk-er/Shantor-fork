const fs = require("fs");
module.exports = {
  config:{
  name: "pnx2",
  version: "1.0.1",
  premium: false,  
  prefix: true,
  role: 0,
  author: "𝗦𝗛𝗔𝗡𝗧𝗢", 
  description: "Fun",
  category: "no prefix",
  guide: "😒",
        cooldowns: 5, 
},

onChat: async function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
  const axios = require('axios')
  const NAYAN = ['https://files.catbox.moe/9y20cv.mp4','https://files.catbox.moe/a6qzh9.mp4','https://files.catbox.moe/7y129u.mp4','https://files.catbox.moe/2f16gy.mp4','https://files.catbox.moe/ngcvrh.mp4','https://files.catbox.moe/vqrlbg.mp4','https://files.catbox.moe/n2qe9k.mp4','https://files.catbox.moe/kkgf7l.mp4','https://files.catbox.moe/z5qlny.mp4','https://files.catbox.moe/cn52xm.mp4']
    var rndm = NAYAN[Math.floor(Math.random() * NAYAN.length)];
const media = (
    await axios.get(
      `${rndm}`,
      { responseType: 'stream' }
    )
  ).data;

  if (body.indexOf("🥵")==0 || body.indexOf("💋")==0 || body.indexOf("🫦")==0 || body.indexOf("👅")==0 || body.indexOf("👄")==0 || body.indexOf("🔥")==0 || body.indexOf("💦")==0 || body.indexOf("Hot")==0 || body.indexOf("horny")==0 || body.indexOf("18+")==0) {
    var msg = {
        body: "●❯────────────────❮●\n         -♦𝗦𝗔𝗡𝗧𝗢'𝗦-𝗕𝗔𝗕𝗬♦-         \n●❯────────────────❮●\n•┈✤⋆⃝🥵𝗟𝗨𝗖𝗖𝗔 𝗚𝗨𝗟𝗔 𝗦𝗢𝗥✤'⋆⃝💚😘\n●❯────────────────❮● ",
        attachment: media
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🖤", event.messageID, (err) => {}, true)
    }
  },
  onStart: function({ nayan }) {
  }
                                                  }
