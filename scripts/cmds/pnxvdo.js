module.exports = {
  config: {
    name: "pnxvdo",
    version: "1",
    author: "Badhon",
    category: "horny",
    role: "all user",
    usePrefix: true,
    forAdminUsePrefix: false,
    cooldown: 20
  },
  
  onStart: async function({ event, message, usersData, args, getLang, role, api }) {
    try {
      // Add waiting reaction
      api.setMessageReaction("👀", event.messageID, (err) => {}, true);
      
      // List of video URLs
      const videos = [
        "https://files.catbox.moe/8xs5v6.mp4",
        "https://files.catbox.moe/rlbhw8.mp4",
        "https://files.catbox.moe/4i06z1.mp4",
        "https://files.catbox.moe/s229ox.mp4",
        "https://files.catbox.moe/eqz3cc.mp4",
        "https://files.catbox.moe/faosm4.mp4",
        "https://files.catbox.moe/5cvgxp.mp4",
        "https://files.catbox.moe/drdj1j.mp4",
        "https://files.catbox.moe/ecs0qv.mp4",
        "https://files.catbox.moe/hdj7jh.mp4",
        "https://files.catbox.moe/5fs4fr.mp4",
        "https://files.catbox.moe/p5b90x.mp4",
        "https://files.catbox.moe/yeagdv.mp4",
        "https://files.catbox.moe/qelfrh.mp4"
      ];
      
      // Select a random video
      const randomVideo = videos[Math.floor(Math.random() * videos.length)];
      
      // Form message
      const form = {
        body: "「 HERE IS YOUR HORNY VIDEO, 🥵 」",
        attachment: await global.utils.getStreamFromURL(randomVideo)
      };
      
      // Send the message
      await message.reply(form);
      
      // Add success reaction
      api.setMessageReaction("✅", event.messageID, (err) => {}, true);
      
    } catch (error) {
      console.error("Error in cornyvid command:", error);
      message.reply("An error occurred while processing your request.");
    }
  },
  
  onChat: async function({ event, message, usersData, args, getLang, role, api }) {
    // This allows admin to use the command without prefix
    if (role === 1 || role === 2) { // Assuming 1 and 2 are admin roles
      const command = event.body.toLowerCase();
      if (command === "cornyvid") {
        this.onStart({ event, message, usersData, args, getLang, role, api });
      }
    }
  }
};
