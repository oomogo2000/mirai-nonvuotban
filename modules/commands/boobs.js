module.exports.config = {
    name: "bb",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Siêu Đáng Yêu",
    description: "Project DN.07.",
    commandCategory: "Hình Ảnh",
    usages: "bb",
    cooldowns: 3,
    dependencies: {
      "request":"",
      "fs-extra":"",
      "axios":""
    }
  };
  
  module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
  const axios = global.nodemodule["axios"];
  const request = global.nodemodule["request"];
  const fs = global.nodemodule["fs-extra"];
    var link = [
        "https://konachan.com/image/03e33c0005c571d4ddb0a16ac4093981/Konachan.com%20-%20335602%20bed%20bell%20blush%20breasts%20brown_eyes%20catgirl%20dark_skin%20gloves%20headband%20maid%20nipples%20no_bra%20open_shirt%20original%20panties%20tail%20underwear%20white_hair.jpg",
        "https://konachan.com/jpeg/80c6dae6bdbd1e9f7033df2f0801be74/Konachan.com%20-%20335483%20blush%20breasts%20couch%20drink%20flowers%20gray_hair%20long_hair%20nipples%20no_bra%20nopan%20original%20purple_eyes%20pussy%20rose%20sora_72-iro%20thighhighs%20uncensored.jpg",
        "https://konachan.com/jpeg/4e8036e792e7438473127b6da68b7508/Konachan.com%20-%20335478%20aqua_eyes%20ass%20blush%20bow%20breasts%20cameltoe%20condom%20long_hair%20maeshimashi%20no_bra%20original%20panties%20ponytail%20rooftop%20shirt_lift%20skirt%20skirt_lift%20underwear.jpg",
        "https://konachan.com/image/942d0448bab73235e73b127bd7315d8a/Konachan.com%20-%20335428%20a.x.%20black_hair%20breasts%20close%20gradient%20long_hair%20necklace%20no_bra%20original%20see_through%20wet.jpg",
        "https://konachan.com/image/3e86405f9d55ede4ff19f26e98594b28/Konachan.com%20-%20335407%20blush%20breasts%20demon%20gray_hair%20horns%20nipples%20no_bra%20nopan%20open_shirt%20original%20parody%20pussy%20skirt%20skirt_lift%20succubus%20tail%20twintails%20uncensored.jpg",
        "https://konachan.com/jpeg/61663d1368d448299dc466e321551981/Konachan.com%20-%20335398%20aliasing%20animal%20aruterra%20azur_lane%20bird%20blue_hair%20breasts%20cleavage%20flowers%20goth-loli%20gray_hair%20group%20headband%20logo%20long_hair%20maid%20no_bra%20red_eyes%20rose.jpg",
        "https://konachan.com/image/ae915363a03d64eb29791234c3a40bc3/Konachan.com%20-%20335385%20bed%20blush%20breasts%20genshin_impact%20gray_hair%20long_hair%20navel%20nipples%20no_bra%20pussy%20shaggy_susu%20spread_legs%20torn_clothes%20uncensored.jpg",
        "https://konachan.com/image/62e5c6cc45cf8c97ac8cd4424da5f427/Konachan.com%20-%20335384%20bed%20blush%20breasts%20genshin_impact%20gray_hair%20long_hair%20navel%20no_bra%20pussy%20see_through%20shaggy_susu%20shenhe_%28genshin_impact%29%20spread_legs%20torn_clothes.jpg",
        "https://konachan.com/jpeg/a395ed5c53160264a928c61e1644daea/Konachan.com%20-%20335371%20blush%20book%20bow%20bra%20breasts%20calendar%20kneehighs%20navel%20nipples%20no_bra%20open_shirt%20original%20panty_pull%20red_eyes%20shirt%20skirt%20underwear%20undressing%20waifu2x.jpg",
        "https://konachan.com/jpeg/efe0b3d97f2f3babc5df855f798c4444/Konachan.com%20-%20335360%20blue_hair%20blush%20breasts%20long_hair%20navel%20nipples%20no_bra%20nopan%20open_shirt%20original%20purple_eyes%20pussy%20shirt%20skirt%20tatsumiya_kagari%20undressing.jpg",
        "https://konachan.com/jpeg/04989df3950647f3b144304ef8e1f39e/Konachan.com%20-%20335350%20anus%20blush%20bow%20breasts%20censored%20couch%20gloves%20gray_hair%20green_eyes%20hololive%20kuroi_suna%20long_hair%20maid%20nipples%20no_bra%20panties%20pussy%20skirt_lift%20underwear.jpg",
        "https://konachan.com/jpeg/25d3f3ed46c58dc0cd323343f26b30e8/Konachan.com%20-%20335341%20armor%20braids%20breast_hold%20breasts%20gloves%20gray_hair%20leaves%20long_hair%20navel%20nipples%20no_bra%20purple_eyes%20pussy%20signed%20skintight%20uncensored%20water%20wsman.jpg",
        "https://konachan.com/image/600ec594d48a5e2902176ccd7e041070/Konachan.com%20-%20335196%20blue_eyes%20blush%20breasts%20censored%20fate_grand_order%20fate_%28series%29%20gray_hair%20long_hair%20navel%20nipples%20no_bra%20nopan%20open_shirt%20penis%20pussy%20rogia%20sex%20wet.jpg",
        "https://konachan.com/jpeg/ff50b0e8f63ff4d117966f36a00df2ec/Konachan.com%20-%20335194%20aqua_eyes%20aqua_hair%20barefoot%20gochuumon_wa_usagi_desu_ka%3F%20gradient%20hoodie%20kafuu_chino%20loli%20long_hair%20naked_shirt%20nipples%20no_bra%20open_shirt%20shironora.jpg",
        "https://konachan.com/image/80038d75687e2ffbc4272f0707782d22/Konachan.com%20-%20335141%202girls%20aliasing%20ass%20breasts%20idolmaster%20lactation%20long_hair%20monobe_%28pixiv3695323%29%20navel%20no_bra%20sakakibara_satomi%20totoki_airi%20twintails%20yuri.jpg",
        "https://konachan.com/image/e216b23d8d6c4fc8b34446d01d54a64a/Konachan.com%20-%20335108%20azur_lane%20bed%20black_hair%20blush%20breast_hold%20breasts%20chinese_dress%20dress%20long_hair%20minawaya%20nipples%20no_bra%20open_shirt%20red_eyes%20stockings%20thighhighs.jpg",
        "https://konachan.com/jpeg/90305276c136b0e459476b28083de939/Konachan.com%20-%20335112%20animal_ears%20anus%20bed%20blonde_hair%20breasts%20catgirl%20censored%20close%20dildo%20masturbation%20nipples%20no_bra%20nopan%20open_shirt%20pussy%20pussy_juice%20red_eyes%20tail.jpg",
        "https://konachan.com/jpeg/d5d02ab0b28a70566134f146e15f85e4/Konachan.com%20-%20334914%20azur_lane%20blue_eyes%20breast_hold%20breasts%20cameltoe%20cherry_blossoms%20flowers%20kimono%20long_hair%20nipples%20no_bra%20nopan%20pussy%20signed%20uncensored%20wsman.jpg",
        "https://konachan.com/image/5cd5dafb2e1304fdca5a38d139dc7099/Konachan.com%20-%20334899%20bed%20blue_eyes%20blush%20breasts%20long_hair%20masami_chie%20nipples%20no_bra%20original%20pink_hair%20pointed_ears%20see_through%20thighhighs.jpg",
        "https://konachan.com/jpeg/aab678d14e9b5ee5736319fa7cc730ec/Konachan.com%20-%20334844%20bed%20cat_smile%20game_console%20garter_belt%20gloves%20headphones%20long_hair%20navel%20no_bra%20original%20panties%20phone%20pupupu%20purple_eyes%20stockings%20underwear.jpg",
        "https://konachan.com/jpeg/22d762f442ce45944c76103db60b2df5/Konachan.com%20-%20334794%20cameltoe%20fan%20flowers%20gray_eyes%20gray_hair%20kamisato_ayaka%20long_hair%20melailai%20no_bra%20panties%20pantyhose%20petals%20ponytail%20signed%20underwear%20watermark.jpg",
        "https://konachan.com/image/af51eeb25c2d8016b601db32ba1c5978/Konachan.com%20-%20334649%20animal_ears%20bell%20blonde_hair%20breasts%20cleavage%20foxgirl%20japanese_clothes%20long_hair%20miko%20no_bra%20original%20red_eyes%20tail%20thighhighs%20wet.jpg",
        "https://konachan.com/image/9efe1ecef089b9690176f3b1706757a5/Konachan.com%20-%20334613%20bell%20blue_eyes%20blush%20cameltoe%20choker%20drink%20fireworks%20gray_hair%20green_eyes%20headband%20long_hair%20no_bra%20panties%20pop_kyun%20underwear%20yue_jin%20yukata.jpg",
        "https://konachan.com/image/197f7943be69f67726dcdd720bd05e1b/Konachan.com%20-%20335630%20blonde_hair%20blue_eyes%20blush%20breasts%20nicoby%20nipples%20panties%20pointed_ears%20princess_connect%21%20sasaki_saren%20sex%20underwear.jpg",
        "https://konachan.com/jpeg/721895d106bc785ebd32ae577f237584/Konachan.com%20-%20335628%20blush%20hamakaze_%28kancolle%29%20isokaze_%28kancolle%29%20kantai_collection%20long_hair%20nicoby%20nipples%20see_through%20short_hair%20urakaze_%28kancolle%29%20wet.jpg",
        "https://konachan.com/image/cd3a02340c9418442337ed1a2739a5fd/Konachan.com%20-%20335400%20bra%20breasts%20brown_hair%20headphones%20long_hair%20nipples%20original%20pon_%28ponidrop%29%20shirt_lift%20thighhighs%20underwear.jpg",
        "https://konachan.com/jpeg/3fcaa93157444a22935785785e3ea16a/Konachan.com%20-%20335287%20bow%20breasts%20brown_hair%20cameltoe%20close%20fang%20jiiwara%20kneehighs%20long_hair%20navel%20nipples%20no_bra%20original%20panties%20shirt_lift%20skirt%20skirt_lift%20underwear.jpg",
        "https://konachan.com/jpeg/1ad9fd0aa8dd2b415bc6988113005c6a/Konachan.com%20-%20335286%20ass%20blue_hair%20breasts%20hololive%20long_hair%20nipples%20pussy%20rei_%28rei%27s_room%29%20thighhighs%20uncensored%20yukihana_lamy.jpg",
        "https://konachan.com/jpeg/e048015c4ae8c9ea2e5749b65d665689/Konachan.com%20-%20335221%20breast_grab%20breasts%20censored%20game_cg%20gloves%20long_hair%20male%20nipples%20no_bra%20nopan%20purple_eyes%20pussy%20pussy_juice%20sex%20skirt_lift%20thighhighs%20twintails.jpg",
        "https://konachan.com/jpeg/dc926753fb43cc5621aeb11ca78b8716/Konachan.com%20-%20335228%20bed%20black_hair%20blush%20breasts%20brown_hair%20close%20game_cg%20long_hair%20male%20nanotaro%20nipples%20otoko_no_ko%20red_eyes%20short_hair%20topless%20yamabuki_yuki.jpg",
        "https://konachan.com/jpeg/503e2c5c8e77cc21b55405b2f037db30/Konachan.com%20-%20335226%20aqua_eyes%20blush%20bra%20breasts%20brown_hair%20censored%20game_cg%20kokonoe_sumire%20long_hair%20navel%20nipples%20panties%20penis%20pussy%20spread_legs%20underwear.jpg",
        "https://konachan.com/image/21de66c3d5189387d133a2b618bd3930/Konachan.com%20-%20335118%20animal_ears%20aqua_eyes%20bath%20bathtub%20blue_hair%20breasts%20horns%20long_hair%20monobe_%28pixiv3695323%29%20nipples%20nude%20seelie_%28vtuber%29%20tail%20water.jpg",
        "https://konachan.com/jpeg/338a8fcbb1e793fe734d2fce61cdf2a5/Konachan.com%20-%20335073%20breasts%20censored%20idolmaster%20idolmaster_cinderella_girls%20nipples%20nurse%20pussy%20rei_%28rei%27s_room%29%20yumemi_riamu.jpg",
        "https://konachan.com/jpeg/e890022750119e4ca1a989849f07deab/Konachan.com%20-%20335053%20anima_%28togashi%29%20breasts%20fire_emblem%20flowers%20green_eyes%20green_hair%20long_hair%20navel%20nipples%20nude%20petals%20pointed_ears%20rhea_%28fire_emblem%29.jpg",
    
        
  
    ];
       var callback = () => api.sendMessage({body:`nipples `,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg"));	
        return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
     };