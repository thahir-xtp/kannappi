const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = <img src="A4edits.jpg"  width="200" height="200"/>
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*My creator is A4 edits*
*Creator number : wa.me/919967413665?text=Hi%20A4%20edits.%20*
*Bot setting video : https://youtu.be/_D4ZYuUSXjs*
*Githublink (Setup)  :    https://github.com/A4edits/sushilan*
*Audio commads :   https://github.com/A4edits/sushilan/tree/master/uploads*
*Sticker commads : https://github.com/A4edits/sushilan/tree/master/uploads*
`}) 

}));
