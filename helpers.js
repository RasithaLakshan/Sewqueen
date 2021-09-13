/* Codded by @Rasitha Lakshan

Telegram: t.me/Rasitha Lakshan
Facebook: https://www.facebook.com/ravindu.manoj.79

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Whats bot - Rasitha Lakshan

*/

function successfullMessage(msg) {
    return "🇱🇰 *Sew Queen👑*:  ```" + msg + "```"
}
function errorMessage(msg) {
    return "🥴 *Sew Queen👑*:  ```" + msg + "```"
}
function infoMessage(msg) {
    return "❄ *Sew Queen👑*:  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}
