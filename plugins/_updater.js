/*
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                ＷＨＡＴＳＡＰＰ ＢＯＴ－ＭＤ                                             // 
//                                                                                                      // 
//                                         Ｖ：１．０                                                    // 
//                                                                                                      // 
//                                                                                                      //
//         ██████ ██    ██  ██████  ███    ██ ██    ██ ███████       ██████   ██████  ████████          //
//        ██       ██  ██  ██       ████   ██ ██    ██ ██            ██   ██ ██    ██    ██             //
//        ██        ████   ██   ███ ██ ██  ██ ██    ██ ███████ █████ ██████  ██    ██    ██             //   
//        ██         ██    ██    ██ ██  ██ ██ ██    ██      ██       ██   ██ ██    ██    ██             //  
//         ██████    ██     ██████  ██   ████  ██████  ███████       ██████   ██████     ██             //  
//                                                                                                      //
//                                                                                                      //
//                                                                                                      //
//                                                                                                      //
//                                                                                                      //
//                                                                                                      //
//══════════════════════════════════════════════════════════════════════════════════════════════════════//

*
   * @project_name : CYGNUS-BOTv2
   * @author : CODERXSA
   * @youtube : https://www.youtube.com/@coderxsa
   * @instagram : https://www.instagram.com/coderx.sa
   * @description : My Private build i made public for everone to use and easy hosting.
   * @version : 1.0
   * Donation : https://pay.yoco.com/coderx
   
   * For all my GitHub bots, I typically only check and update them when I have the time. My primary focus is on my main bots.
*
   * Licensed under the  GPL-3.0 License;
* 
   * Created By CODERX.
   * © 2024 CYGNUS-BOTv2.
*/



//══════════════════════════════════════════════════════════════════════════════════════════════════════//

function _0x285d(){const _0x3fff3f=['Build\x20started...','3NNbOSP','CODERX','2781976GgQvrD','main','heroku-client','1705270XuFNvi','log','reset','total','\x20\x0a*UPDATE\x20RUNNING*\x0a\x09','main..origin/main','```*Successfully\x20updated.\x20Now\x20You\x20Have\x20Latest\x20Version\x20Installed!*','3143eJOuxV','749876uJtBDp','2353373QkQWnH','1155530oNkwBn','replace','sync','checkupdate','reply','syncgit','Heroku\x20remote\x20adding\x20error','chat','../lib/scraper','tools','174Eyjngo','error','HEROKU_API_KEY','sendMessage','pull','update','Can\x27t\x20Update,\x20Request\x20Denied!','10zvOlTu','bot','env','addRemote','HEROKU_APP_NAME','start','\x0a\x0aCommand:\x20update','heroku','/apps/','ERROR!','VERSION','hard','*RANITA\x20IS\x20RUNNING\x20ON\x20LATEST\x0aPATCHES\x0aFIXESUPGRADES*','../lib','6GJihwi','HEROKU\x20:\x20checking\x20for\x20auto\x20update!','simple-git','UPDATED\x20YOUR\x20DEPLOYEMENT','jid','Shows\x20repo\x27s\x20refreshed\x20commits.','\x20IS\x20ON\x20IT\x27S\x20LATEST\x20VERSION','push','fetch','2671695DjxZbF'];_0x285d=function(){return _0x3fff3f;};return _0x285d();}const _0x2d6cd7=_0x33ca;(function(_0x4c09bb,_0x578d62){const _0x139ed9=_0x33ca,_0x526143=_0x4c09bb();while(!![]){try{const _0x3524ae=-parseInt(_0x139ed9(0x192))/0x1*(parseInt(_0x139ed9(0x19f))/0x2)+-parseInt(_0x139ed9(0x186))/0x3*(-parseInt(_0x139ed9(0x193))/0x4)+parseInt(_0x139ed9(0x195))/0x5*(-parseInt(_0x139ed9(0x17b))/0x6)+parseInt(_0x139ed9(0x18b))/0x7+parseInt(_0x139ed9(0x188))/0x8+-parseInt(_0x139ed9(0x184))/0x9*(parseInt(_0x139ed9(0x1a6))/0xa)+parseInt(_0x139ed9(0x194))/0xb;if(_0x3524ae===_0x578d62)break;else _0x526143['push'](_0x526143['shift']());}catch(_0x2030c2){_0x526143['push'](_0x526143['shift']());}}}(_0x285d,0x2eb87));const DB=require(_0x2d6cd7(0x19d)),{Config,smd}=require(_0x2d6cd7(0x17a)),simpleGit=require('simple-git'),git=simpleGit();function _0x33ca(_0xa2e209,_0x479cf2){const _0x285d18=_0x285d();return _0x33ca=function(_0x33ca4e,_0x345928){_0x33ca4e=_0x33ca4e-0x176;let _0x5b4a86=_0x285d18[_0x33ca4e];return _0x5b4a86;},_0x33ca(_0xa2e209,_0x479cf2);}try{const Heroku=require(_0x2d6cd7(0x18a));async function updateHerokuApp(){const _0x82fb32=_0x2d6cd7;try{const _0x1e8983=new Heroku({'token':process['env'][_0x82fb32(0x1a1)]});await git[_0x82fb32(0x183)]();const _0x2a654a=await git[_0x82fb32(0x18c)]([_0x82fb32(0x190)]);if(_0x2a654a[_0x82fb32(0x18e)]===0x0)return Config['botname']+_0x82fb32(0x181);else{console[_0x82fb32(0x18c)]('Update\x20Detected,\x20trying\x20to\x20update\x20your\x20bot!');const _0x3d0cfa=await _0x1e8983['get'](_0x82fb32(0x1ae)+process[_0x82fb32(0x1a8)][_0x82fb32(0x1aa)]),_0x342b50=_0x3d0cfa['git_url'][_0x82fb32(0x196)]('https://','https://api:'+process['env'][_0x82fb32(0x1a1)]+'@');try{await git[_0x82fb32(0x1a9)](_0x82fb32(0x1ad),_0x342b50);}catch(_0x175182){print(_0x82fb32(0x19b),_0x175182);}return await git[_0x82fb32(0x182)]('heroku',_0x82fb32(0x189)),'Bot\x20updated.\x20Restarting.';}}catch(_0x3a4813){return print(_0x3a4813),_0x82fb32(0x1a5);}}smd({'pattern':_0x2d6cd7(0x198),'desc':_0x2d6cd7(0x180),'category':'tools','fromMe':!![],'react':'🍂','filename':__filename,'use':process[_0x2d6cd7(0x1a8)][_0x2d6cd7(0x1a1)]?'[\x20start\x20]':''},async(_0x4e9837,_0x4cf090)=>{const _0x576330=_0x2d6cd7;try{let _0x38af29=await DB[_0x576330(0x19a)]();if(_0x38af29[_0x576330(0x18e)]===0x0)return await _0x4e9837[_0x576330(0x199)](_0x576330(0x179));let _0x2f8fa9=await DB['sync']();await _0x4e9837[_0x576330(0x1a7)][_0x576330(0x1a2)](_0x4e9837[_0x576330(0x19c)],{'text':_0x2f8fa9['replace'](/SuhailTechIMd/,_0x576330(0x187))},{'quoted':_0x4e9837});if(_0x4cf090==_0x576330(0x1ab)&&process[_0x576330(0x1a8)][_0x576330(0x1aa)]&&process['env'][_0x576330(0x1a1)]){_0x4e9837[_0x576330(0x199)](_0x576330(0x185));const _0x5495c9=await updateHerokuApp();return await _0x4e9837[_0x576330(0x199)](_0x5495c9);}}catch(_0x74f051){_0x4e9837['error'](_0x74f051+_0x576330(0x1ac),_0x74f051,_0x576330(0x176));}}),smd({'pattern':_0x2d6cd7(0x1a4),'desc':process[_0x2d6cd7(0x1a8)][_0x2d6cd7(0x1a1)]?'*UPDATE\x20SUCCESS*':_0x2d6cd7(0x17e),'fromMe':!![],'category':_0x2d6cd7(0x19e),'filename':__filename},async _0x42589f=>{const _0x1e7f9b=_0x2d6cd7;try{let _0x600b9c=await DB[_0x1e7f9b(0x19a)]();if(_0x600b9c[_0x1e7f9b(0x18e)]===0x0)return await _0x42589f[_0x1e7f9b(0x199)]('*'+Config[_0x1e7f9b(0x177)]+'\x20IS\x20Updating*');let _0x54e05a=await DB[_0x1e7f9b(0x197)](),_0x42dea5=_0x1e7f9b(0x18f)+_0x54e05a+'*';await _0x42589f[_0x1e7f9b(0x1a7)][_0x1e7f9b(0x1a2)](_0x42589f[_0x1e7f9b(0x17f)],{'text':_0x42dea5}),await require(_0x1e7f9b(0x17d))()[_0x1e7f9b(0x18d)](_0x1e7f9b(0x178),['HEAD']),await require(_0x1e7f9b(0x17d))()[_0x1e7f9b(0x1a3)](),await _0x42589f[_0x1e7f9b(0x199)](process[_0x1e7f9b(0x1a8)][_0x1e7f9b(0x1aa)]&&process[_0x1e7f9b(0x1a8)][_0x1e7f9b(0x1a1)]?'*`BOT\x20UPDATED`*\x0a*RESTART\x20YOUR\x20BOT\x20FOR\x20UPDATE\x20TO\x20TAKE\x20EFFECT*':_0x1e7f9b(0x191));}catch(_0x3c3ec3){_0x42589f[_0x1e7f9b(0x1a0)](_0x3c3ec3+'\x0a\x0aCommand:\x20updatenow',_0x3c3ec3,_0x1e7f9b(0x176));}}),process[_0x2d6cd7(0x1a8)][_0x2d6cd7(0x1a1)]&&(print(_0x2d6cd7(0x17c)),updateHerokuApp());}catch(_0x12a92a){}