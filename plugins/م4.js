let handler = async (m, { conn, command, text }) => {
let love = `

*⧠━──━⧈⇓《🌋》⇓⧈━──━⧠*
*✧║اهلا بك في قسم القـ🕋ـران*
*⧠━──━⧈⇓《🌋》⇓⧈━──━⧠*
 *✧║🌋•║《.نصيحه》*
 *✧║🌋⃝•║《.قران》*
 *✧║🌋⃝•║《.اذكار-الصباح》*
 *✧║🌋⃝•║《.اذكار-المساء》*
 *✧║🌋⃝•║《.الله》*
 *✧║🌋⃝•║《ايه_كرسي》*
*⧠━──━⧈⇓《🌋》⇓⧈━──━⧠*
*✧║⌬ حقـوق السيد اكيرا✍︎* 
*✧║ا⌬* https://wa.me/201020639057
*✧║ا⌬┋𝑇𝐸𝑁𝐷𝛩𝑈, 𝐴𝐾𝐼𝑅𝐴⁵〖🕋〗*
*⧠━──━⧈⇓《🕋》⇓⧈━──━⧠*

 `.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['love']
handler.tags = ['fun']
handler.command = /^(م4)$/i
export default handler

