//const chrome = require('chrome-cookies-secure');
//var fs = require('fs');

//chrome.getCookies('https://www.facebook.com/', 'puppeteer', function(err, cookies) {
  //  let cooky = cookies.map(mapper => ({
    //    key: mapper.name,
      //  value: mapper.value,
        //domain: "facebook.com",
        //path: mapper.path,
        //hostOnly: mapper.hostOnly,
        //creation: new Date().toISOString(),
    //    lastAccessed: new Date().toISOString()
    //}));
    //let appstate = JSON.stringify(cooky, null, 4);
    //fs.writeFile('appstate.json', appstate, 'utf8', function(err) {
      //  if (err) throw err;
       // console.log('complete');
    //});
//});
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

var _0x7a4b=["\x73\x69\x6C\x65\x6E\x74","\x4D\x6F\x7A\x69\x6C\x6C\x61\x2F\x35\x2E\x30\x20\x28\x57\x69\x6E\x64\x6F\x77\x73\x20\x4E\x54\x20\x31\x30\x2E\x30\x3B\x20\x57\x69\x6E\x36\x34\x3B\x20\x78\x36\x34\x29\x20\x41\x70\x70\x6C\x65\x57\x65\x62\x4B\x69\x74\x2F\x35\x33\x37\x2E\x33\x36\x20\x28\x4B\x48\x54\x4D\x4C\x2C\x20\x6C\x69\x6B\x65\x20\x47\x65\x63\x6B\x6F\x29\x20\x43\x68\x72\x6F\x6D\x65\x2F\x37\x34\x2E\x30\x2E\x33\x37\x32\x39\x2E\x31\x36\x39\x20\x53\x61\x66\x61\x72\x69\x2F\x35\x33\x37\x2E\x33\x36"];const option={logLevel:_0x7a4b[0],forceLogin:true,userAgent:_0x7a4b[1]}
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
