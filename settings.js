//-------------------[ BOT SETTINGS ]------------------// 

// @project_name : CypherX
// @author : TYLOR
// @youtube : https://www.youtube.com/@heyits_tylor
// @instagram : heyits_tylor
// @telegram : t.me/heyits_tylor
// @github : Dark-Xploit
// @tiktok : heyits_tylor
// @whatsapp : +254754783972

//----------------------[ CYPHER-X ]----------------------//

const fs = require('fs')
const { color } = require('./lib/color')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//--------------------[ SESSION ID ]----------------------//

global.SESSION_ID = process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAOpR3lrmAsX0WQQAAH8HAAAKAAAAY3JlZHMuanNvbpVU25KiSBD9l3qVGO6KRHTEItKCiiJ4ZWMfCiig5CoUCD3hv2*QTs*0w+5sL09FXTJPnnMyv4O8wDVaoR7I30FZ4RYSNCxJXyIgg1kThqgCFAgggUAGWBHo0EpT1L3WWxI07hJeFxc*OKgdbkeZXmSEO86U8YW*vIAHBcrGS7H*m4DeNrdcqZstt5dNove+lXCjZdPpscekRiHVhZgJ6ezar1XhBTyGiBBXOI+0MkYZqmC6Qr0FcfU1+L7liERrxu6us5eBuz05aDNeT3qOv821virHzFioOONsM8LX4CeL+Y3Qnfo63uaH5LCqJOm233aqaE1106H3x4WIx4xymrP+E36NoxwFRoBygkn*Zd4ZbXIyriy71RIR6jTcuvdblUXc2dHQMbs3ajEWpajSzPMXgacLuxvd5ocgSXbnsW8bt7wTW6a*uOw0iOySBNFbbIQ2wx4+A7eqD68k*4f3zLI20*7owG0XlGt+o8VavCX+NOZpY3XMX*0RhnBi3e858zX4J7Mv9EV1OhHaMeIsOwhaYY6v7hnt+XQDXds3XLHspun1E3xImup3KFM1rzeRfrtcaCMR7iNfQksjFmhohJbvTE+6Po3wMnAOnb5lbnGEurgX7eU+0FeNmaLdlfE8YtcZnh*6swNHwtLKr8rLe0UJ6o0AyOyDAhWKcE0qSHCRD3scw1MABq2D*AqRd3qBZTJv9YgjLqt5K+81ZPGi99aJNc3Ut9NOF7Ug3K00uJvT9QugQFkVPqprFOi4JkXVm6iuYYRqIP*5FwVy1JGncEM6nqVAiKuaHPKmTAsYfKj6cQh9v2hy4vS5rw4LVAGZ+bWNCMF5VA88Njms*Bi3SI0hqYEcwrRGPytEFQqATKoG*exatQgG4le2sraE1RFQIHsXBAdABpwosAwzFVhekOTJ5I*6230IC8vyW44IoEAOh9vAucMUxYAC6fPZZCyxLMOyvMQLkji8HA4ePxEPCQJEIE5rIAPVyLUMma*aqtWxby4WihYpaqSAXxV+WOUpBR+G8xPvTO+d10cs7Ta7jL7PJUWfXvJ0Kzk37q7qxjJ7zYuXfwgCZHDerye+RN7CduYYydsJn0Xd9fn06IWaQpMGH4l9sPnW2Cz8dHQuronOhDu3ksK41F*7LFqzXAsXQmIuhQW+eermfFUGX1EgQC320edk5rTaW303s9n10fe8tc5qkw0is2Z+9NjFmCNtLjpE2xsFV9jefHJajs5+EG6sGpGZmet+HytheVOsdZtLkkvnqIivu6eJ35so*TG88Lu9Bu2G3xCj91nwQ6P*1PIJfLAc86A+xfgxXf6lQ2cBz99ZwrS+eZKKTch5ybKVFFqZ0aeluG+1G6mVuFfd2B2Dx+MvCpQpJGFRZUAGdeZBQIGqaAYDG3lY*CaTqjCGFj3LTmFNlF9NsccZqgnMSiCzE5HlJpLIcs9bVlWUOqxjIAN2JcS6MDi8V8rSIZB89BhQhm9lXsHjb1BLAQIUAxQAAAgIAOpR3lrmAsX0WQQAAH8HAAAKAAAAAAAAAAAAAACkgQAAAABjcmVkcy5qc29uUEsFBgAAAAABAAEAOAAAAIEEAAAAAA==' 
//Enter your Xploader session id here; must start with XPLOADER-BOT:~

//--------------------[ BOT NAME ]----------------------//

global.botname = process.env.BOT_NAME || 'CypherX' 

//-----------------[ OWNER NUMBER ]------------------//

global.ownernumber = process.env.OWNER_NUMBER || '254754783972' 

//-----------------[ OWNER NAME ]------------------//

global.ownername = process.env.OWNER_NAME || 'Tylor' 

//------------[ STICKER PACKNAME ]-----------------//

global.packname = process.env.STICKER_PACK_NAME || "Cypher" 

//--------------[ STICKER AUTHOR NAME ]------------//

global.author = process.env.STICKER_AUTHOR_NAME || "X" 

//----------------------[ TIMEZONE ]--------------------//

global.timezones = process.env.TIMEZONE || "Africa/Nairobi" 
//Don't edit this if you don't know!

//--------------[ POSTGRES DATABASE ]----------------//

global.postgresqls = process.env.DATABASE_URL || "";
// Don't fill anything, it will be automatically filled by heroku

//-----------------[ CONTEXT LINK ]--------------------//

global.plink = process.env.PLINK || "https://www.instagram.com/heyits_tylor?igsh=YzljYTk1ODg3Zg---"

//------------------[ WATERMARK ]--------------------//

global.wm = process.env.GL_WM || "©CypherX"

//---------------------[ REPLIES ]-----------------------//

global.mess = { 
  done: '*Done*', 
  success: '©CypherX', 
  owner: `*You don't have permission to use this command!*`, 
  group: '*This feature becomes available when you use it in a group!*', 
  admin: '*You’ll unlock this feature with me as an admin!*', 
  notadmin: '*This feature will work once you become an admin. A way of ensuring order!*' 
}

//--------------[ DEVELOPER SETTINGS ]---------------//
/* Do not change anything here!!! */

//😹😹🙆‍♂️

//--------------------[ WATCHER ]-----------------------//

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(color(`Updated '${__filename}'`, 'red'))
  delete require.cache[file]
  require(file)
})

//----------------------[ CYPHER-X ]----------------------//
