
module.exports.config = {
    name: "hentai",
    version: "1.1.2",
    hasPermssion: 0,
    credits: "Siêu Đáng Yêu",
    description: "mấy thằng sử dụng lệnh dơ vcl",
    commandCategory: "nsfw",
    usages: "[tag]",
    cooldowns: 5,
    dependencies: {
        "axios": "",
        "fs-extra": "",
        "path": ""
    }
};

//mode by siêu đáng yêu(vui lòng giữ credit)
module.exports.run = async function ({ event, api, args }) {
    const { writeFileSync, createReadStream, unlinkSync } = global.nodemodule["fs-extra"];
    const { resolve } = global.nodemodule["path"];
    const axios = global.nodemodule["axios"];
    const { downloadFile } = global.utils;
    const { threadID, senderID, messageID } = event;

    const out = (msg, callback = function () { }) => api.sendMessage(msg, threadID, callback, messageID);    
    const { gnsfw, nsfw } = require("./cache/alime.json");
    var apiUrl;

    if (!gnsfw.hasOwnProperty(args[0]) && !nsfw.hasOwnProperty(args[0])) {
        var nsfwData = Object.keys(nsfw).join(", ");
        var gnsfwData = Object.keys(gnsfw).join(", ");
        return out("=== gnSfw Tag ===\n" + gnsfwData + "\n\n=== Nsfw Tag ===\n" + nsfwData);
    } else {
        if (gnsfw.hasOwnProperty(args[0])) apiUrl = gnsfw[args[0]];
        else if (nsfw.hasOwnProperty(args[0])) apiUrl = nsfw[args[0]];
        const { data: apiData } = await axios.get(apiUrl);
        const url = apiData.data.response.url;
        const ext = url.split(".")[url.split(".").length - 1];
        const path = resolve(__dirname, 'cache', `${args[0]}_${senderID}.${ext}`);
        
        await global.utils.downloadFile(url, path);

        return out({
            attachment: createReadStream(path)
        },  function () { return unlinkSync(path) });        
    }
};