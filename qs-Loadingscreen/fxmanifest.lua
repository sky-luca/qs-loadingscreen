fx_version 'cerulean'
game 'gta5'

author 'qs-scripts.com | Luca'
description 'Custom Loading Screen for FiveM'
version '1.0.0'


client_script 'client.lua'
server_script 'server.lua'


files {
    'ui/index.html',
    'ui/styles.css',
    'ui/script.js'
}


loadscreen 'ui/index.html'
