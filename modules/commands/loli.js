module.exports.config = {
	name: "loli",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Bố Thịnh",
	description: "Ảnh Loli cho mấy thằng ấu dâm",
	commandCategory: "Hình Ảnh",
	usages: "loli",
	cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://www.api-adreno.tk/loli').then(res => {
	let ext = res.data.data.response.url.substring(res.data.data.response.url.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
						body: `Ảnh loli lồn to cực múp`,
						attachment: fs.createReadStream(__dirname + `/cache/wall.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/wall.${ext}`), event.messageID);
				};
				request(res.data.data.response.url).pipe(fs.createWriteStream(__dirname + `/cache/wall.${ext}`)).on("close", callback);
			})
}