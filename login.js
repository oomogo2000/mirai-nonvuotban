/*Để có thể sử dụng được bản đang bị comments yêu cầu:
- Máy đã tải và sử dụng Python2
- Vì là lấy cookies trên chrome nên replit không thể sử dụng được
- Khi sử dụng bản 1 yêu cầu comments lại bản 2 */

/*
const chrome = require('chrome-cookies-secure');
var fs = require('fs');
chrome.getCookies('https://www.facebook.com/', 'puppeteer', function(err, cookies) {
    let cooky = cookies.map(mapper => ({
        key: mapper.name,
        value: mapper.value,
        domain: "facebook.com",
        path: mapper.path,
        hostOnly: mapper.hostOnly,
        creation: new Date().toISOString(),
        lastAccessed: new Date().toISOString()
    }));
    let appstate = JSON.stringify(cooky, null, 4);
    fs.writeFile('appstate.json', appstate, 'utf8', function(err) {
        if (err) throw err;
        console.log('complete');
    });
});
*/
const fs = require("fs-extra");
const login = require("sieudangyeu");
const readline = require("readline");
const totp = require("totp-generator");

let configPath = "";
let argv = process.argv.slice(2);
if (argv.length !== 0) configPath = argv[0];
else configPath = "./config.json";

var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const option = {
	logLevel: "silent",
	forceLogin: true,
	userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/96.0.4664.53 Mobile/15E148 Safari/604.1	"
};
const config = require(`./${configPath}`);
let email = config.EMAIL;
let password = config.PASSWORD;
let otpkey = config.OTPKEY.replace(/\s+/g, '').toLowerCase();

login({ email, password }, option, (err, api) => {
	if (err) {
		switch (err.error) {
			case "login-approval":
				if (otpkey) err.continue(totp(otpkey));
				else {
					console.log("Nhập mã xác minh 2 lớp:");
					rl.on("line", line => {
						err.continue(line);
						rl.close();
					});
				}
				break;
			default:
			console.error(err);
			process.exit(1);
		}
		return;
	}
	const json = JSON.stringify(api.getAppState());
	fs.writeFileSync(`./${config.APPSTATEPATH}`, json);
	console.log("Đã ghi xong appstate!");
	process.exit(0);
});
