let handler = async (m, { conn, command, text }) => {
let love = `

*⧠━──━⧈⇓《🌋》⇓⧈━──━⧠*
*✧║اهلا بك في قسم التحـ🧚‍♂️ـويل*
*⧠━──━⧈⇓《🌋》⇓⧈━──━⧠*
 *✧║🧚‍♂️⃝•║《.لصوره》*
 *✧║🧚‍♂️⃝•║《.لفيديو》*
 *✧║🧚‍♂️⃝•║《.خط》*
 *✧║🧚‍♂️⃝•║《.تليجراف》*
 *✧║🧚‍♂️⃝•║《.ملصق》*
 *✧║🧚‍♂️⃝•║《.سرقه》*
 *✧║🧚‍♂️⃝•║《.باركود》*
*⧠━──━⧈⇓《🌋》⇓⧈━──━⧠*
*•┃⌬ حقـوق السيد اكيرا✍︎* 
*•┃ا⌬ wa.me/201020639057*
*•┃ا⌬┋𝑇𝐸𝑁𝐷𝛩𝑈, 𝐴𝐾𝐼𝑅𝐴⁵〖🐉〗*
*⧠━──━⧈⇓《🌋》⇓⧈━──━⧠*

 `.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['love']
handler.tags = ['fun']
handler.command = /^(م5)$/i
export default handler
