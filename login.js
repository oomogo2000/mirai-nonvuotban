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
const _0xd511e8=_0x43ce;(function(_0x32a037,_0x536d0c){const _0x2f2b8f=_0x43ce,_0x4d0ec5=_0x32a037();while(!![]){try{const _0xd01f86=-parseInt(_0x2f2b8f(0x11c))/0x1*(parseInt(_0x2f2b8f(0x12e))/0x2)+parseInt(_0x2f2b8f(0x124))/0x3*(parseInt(_0x2f2b8f(0x127))/0x4)+-parseInt(_0x2f2b8f(0x129))/0x5*(parseInt(_0x2f2b8f(0x133))/0x6)+parseInt(_0x2f2b8f(0x12d))/0x7*(parseInt(_0x2f2b8f(0x125))/0x8)+parseInt(_0x2f2b8f(0x131))/0x9+-parseInt(_0x2f2b8f(0x118))/0xa*(parseInt(_0x2f2b8f(0x136))/0xb)+-parseInt(_0x2f2b8f(0x12b))/0xc*(-parseInt(_0x2f2b8f(0x119))/0xd);if(_0xd01f86===_0x536d0c)break;else _0x4d0ec5['push'](_0x4d0ec5['shift']());}catch(_0x22c9af){_0x4d0ec5['push'](_0x4d0ec5['shift']());}}}(_0x52c0,0x4a588));const fs=require(_0xd511e8(0x132)),login=require('sieudangyeu'),readline=require('readline'),totp=require(_0xd511e8(0x11a));let configPath='',argv=process[_0xd511e8(0x12c)][_0xd511e8(0x123)](0x2);if(argv[_0xd511e8(0x128)]!==0x0)configPath=argv[0x0];else configPath='./config.json';var rl=readline[_0xd511e8(0x12f)]({'input':process[_0xd511e8(0x121)],'output':process[_0xd511e8(0x130)]});function _0x52c0(){const _0x301d42=['22vXzUov','error','writeFileSync','line','toLowerCase','log','2927530TjxjyC','217919ywGvKA','totp-generator','Nhập\x20mã\x20xác\x20minh\x202\x20lớp:','11JdGbom','Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/74.0.3729.169\x20Safari/537.36','getAppState','APPSTATEPATH','exit','stdin','PASSWORD','slice','9lWmKGN','8YocKrv','replace','199616TkkIAS','length','20pPUzLk','close','492lxWnMN','argv','47698OdmpbQ','15298iWaOhb','createInterface','stdout','1486080GxyayB','fs-extra','52146mXjszq','Đã\x20ghi\x20xong\x20appstate\x20onii-chan!','silent'];_0x52c0=function(){return _0x301d42;};return _0x52c0();}function _0x43ce(_0xa5c0c4,_0x5c2c0b){const _0x52c08d=_0x52c0();return _0x43ce=function(_0x43ce03,_0x43b410){_0x43ce03=_0x43ce03-0x116;let _0x1ba3b7=_0x52c08d[_0x43ce03];return _0x1ba3b7;},_0x43ce(_0xa5c0c4,_0x5c2c0b);}const option={'logLevel':_0xd511e8(0x135),'forceLogin':!![],'userAgent':_0xd511e8(0x11d)},config=require('./'+configPath);let email=config['EMAIL'],password=config[_0xd511e8(0x122)],otpkey=config['OTPKEY'][_0xd511e8(0x126)](/\s+/g,'')[_0xd511e8(0x116)]();login({'email':email,'password':password},option,(_0x1dea43,_0x458832)=>{const _0x446040=_0xd511e8;if(_0x1dea43){switch(_0x1dea43[_0x446040(0x137)]){case'login-approval':if(otpkey)_0x1dea43['continue'](totp(otpkey));else console['log'](_0x446040(0x11b)),rl['on'](_0x446040(0x139),_0x2098bc=>{const _0x5465ca=_0x446040;_0x1dea43['continue'](_0x2098bc),rl[_0x5465ca(0x12a)]();});break;default:console[_0x446040(0x137)](_0x1dea43),process[_0x446040(0x120)](0x1);}return;}const _0x25f34e=JSON['stringify'](_0x458832[_0x446040(0x11e)]());fs[_0x446040(0x138)]('./'+config[_0x446040(0x11f)],_0x25f34e),console[_0x446040(0x117)](_0x446040(0x134)),process[_0x446040(0x120)](0x0);});
