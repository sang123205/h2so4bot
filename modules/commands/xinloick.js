module.exports.config = {
    name: "xinloick",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "NTKhang fix by Jukie",
    description: "Xin lแปi chแปng yรชu ๐ข๐ฅบ",
    commandCategory: "Tรฌnh yรชu",
    usages: " @tag hoแบทc noprefix: xin lแปi ck iu @tag",
    cooldowns: 5,
    dependencies: {"fs-extra": "","axios": ""}
  }
    module.exports.run = async function ({ api, args, event, client,Users }) {
      function delay(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));};
      const fs = global.nodemodule["fs-extra"];
      const axios = global.nodemodule["axios"];
      var mention = Object.keys(event.mentions)[0];
      if(!mention) return api.sendMessage("Tag ngฦฐแปi bแบกn muแปn xin lแปi", event.threadID);
    var emoji = ["โฅ๏ธ","โค๏ธ","๐","๐","๐","๐","๐ค","๐","๐","๐","๐","๐","๐","๐","๐","๐ ","๐","๐","๐","โ๏ธ","๐","๐","๐"];
    var random_emoji = emoji[Math.floor(Math.random() * emoji.length)];
    let Avatar = (await axios.get( `https://graph.facebook.com/${mention}/picture?width=height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: "arraybuffer" } )).data;
      fs.writeFileSync( __dirname + "/cache/avt.png", Buffer.from(Avatar, "utf-8") );
    let Avatar2 = (await axios.get( `https://graph.facebook.com/${event.senderID}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: "arraybuffer" } )).data;
      fs.writeFileSync( __dirname + "/cache/avt2.png", Buffer.from(Avatar2, "utf-8") );
      
      var imglove = [];
                  imglove.push(fs.createReadStream(__dirname + "/cache/avt.png"));
                  imglove.push(fs.createReadStream(__dirname + "/cache/avt2.png"));
    
  
  var _0x8416=["\x6E\x61\x6D\x65","\x73\x65\x6E\x64\x65\x72\x49\x44","\x67\x65\x74\x44\x61\x74\x61"];var name_1=( await Users[_0x8416[2]](event[_0x8416[1]]))[_0x8416[0]];var name_2=( await Users[_0x8416[2]](mention))[_0x8416[0]]
    
    var arraytag = [];
      arraytag.push({id: event.senderID, tag: name_1});
      arraytag.push({id: mention, tag: name_2});
      var a = function (a) { api.sendMessage(a, event.threadID); }
      a("EM Yรชu Chแปng โค๏ธ");
      await delay(2000);
      a("Em Xin Lแปi Chแปng ๐ฅบ");
      await delay(2000);
      a("Chแปng ฤแปซng Giแบญn Em Nแปฏa Mร  ๐ฅบ๐ฅบ");
      await delay(2000);
      a("Xin Vui Lรฒng ฤแปฃi 5p ฤแป Chแปng Yรชu Hแบฟt Giแบญn Rแปi Nhแบฏn โ๏ธโ๏ธโ๏ธ");
      await delay(2000);
      a("Tha Lแปi Cho Em Nha Chแปng ฦ i ๐ฅบ๐ญ");
      await delay(2000);
      a({body: name_1+" "+"๐"+" "+name_2, mentions: arraytag, attachment: imglove});
      fs.unlinkSync(__dirname+'/cache/avt.png');
      fs.unlinkSync(__dirname+'/cache/avt2.png');
    };
    
  module.exports.handleEvent = async function({ api, args, event, client,Users }) {
    if(!event.body) return;
    const fs = global.nodemodule["fs-extra"];
    const axios = global.nodemodule["axios"];
    function delay(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));};
    let {body} = event;
     body = body.toLowerCase();
    var indexOf = function(value) {return body.indexOf(value) != -1};
    if(indexOf("xin lแปi chแปng") || indexOf("xin lแปi chแปng yรชu") || indexOf("xin lแปi chแปng yรชu") || indexOf("xin lแปi chแปng iu")) {
      var mention = Object.keys(event.mentions)[0];
      if(!mention) return api.sendMessage("Tag ngฦฐแปi bแบกn muแปn xin lแปi", event.threadID);
    var emoji = ["โฅ๏ธ","โค๏ธ","๐","๐","๐","๐","๐ค","๐","๐","๐","๐","๐","๐","๐","๐","๐ ","๐","๐","๐","โ๏ธ","๐","๐","๐"];
    var random_emoji = emoji[Math.floor(Math.random() * emoji.length)];
    let Avatar = (await axios.get( `https://graph.facebook.com/${mention}/picture?height=720&width=720&access_token=170440784240186|bc82258eaaf93ee5b9f577a8d401bfc9`, { responseType: "arraybuffer" } )).data;
      fs.writeFileSync( __dirname + "/cache/avt.png", Buffer.from(Avatar, "utf-8") );
    let Avatar2 = (await axios.get( `https://graph.facebook.com/${event.senderID}/picture?height=720&width=720&access_token=170440784240186|bc82258eaaf93ee5b9f577a8d401bfc9`, { responseType: "arraybuffer" } )).data;
      fs.writeFileSync( __dirname + "/cache/avt2.png", Buffer.from(Avatar2, "utf-8") );
      
      var imglove = [];
    imglove.push(fs.createReadStream(__dirname + "/cache/avt.png"));
    imglove.push(fs.createReadStream(__dirname + "/cache/avt2.png"));
    
  var _0x8416=["\x6E\x61\x6D\x65","\x73\x65\x6E\x64\x65\x72\x49\x44","\x67\x65\x74\x44\x61\x74\x61"];var name_1=( await Users[_0x8416[2]](event[_0x8416[1]]))[_0x8416[0]];var name_2=( await Users[_0x8416[2]](mention))[_0x8416[0]]
    
    
    var arraytag = [];
      arraytag.push({id: event.senderID, tag: name_1});
      arraytag.push({id: mention, tag: name_2});
      var a = function (a) { api.sendMessage(a, event.threadID); }
      a("Em Yรชu Chแปng โค๏ธ");
      await delay(2000);
      a("Em Xin Lแปi Chแปng ๐ฅบ");
      await delay(2000);
      a("Chแปng ฤแปซng Giแบญn Em Nแปฏa Mร  ๐ฅบ๐ฅบ");
      await delay(2000);
      a("Xin Vui Lรฒng ฤแปฃi 5p ฤแป Chแปng Yรชu Hแบฟt Giแบญn Rแปi Nhแบฏn โ๏ธโ๏ธโ๏ธ");
      await delay(2000);
      a("Tha Lแปi Cho Em nha Chแปng ฦ i ๐ฅบ๐ญ");
      await delay(2000);
      a({body: name_1+" "+"๐"+" "+name_2, mentions: arraytag, attachment: imglove});
      fs.unlinkSync(__dirname+'/cache/avt.png');
      fs.unlinkSync(__dirname+'/cache/avt2.png');
    }
  
  }
  