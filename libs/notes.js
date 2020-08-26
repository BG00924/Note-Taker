const fs = require("fs")
const path = require("path")
function createNewNote(body, dbArray) {
    const note = body
    dbArray.push(note)
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: dbArray }, null, 2)
    )
    return note
}
// function validateNote(note) {
//     if (!note.title || typeof note.title !== 'string') {
//         return false
//     }
//     if (!note.text || typeof note.text !== 'string') {
//         return false
//     }
//     return true
// }

module.exports = {
    createNewNote,
    // validateNote
}