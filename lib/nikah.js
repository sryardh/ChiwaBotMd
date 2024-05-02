const fs = require("fs");

const nikahSave = (db, obj, session) => {
    var mine = db
    const dbdir = `./database/nikah/${session}.json`
    fs.writeFileSync(dbdir, JSON.stringify(obj, null, 2))
}

const setNikah = (session) => {
    const dbdir = `./database/nikah/${session}.json`
    if (!fs.existsSync(dbdir)) {
        const objcas = {
            status: true,
            turn: 'Z',
            session: session,
            Z: null,
            Y: null,
            nominal: null,
        }
        nikahSave(dbdir, objcas, session)
        return objcas
    } else {
        const read = JSON.parse(fs.readFileSync(dbdir))
        return read
    }
}

const deleteNikah = (from) => {
    return fs.unlinkSync('./database/nikah/' + from + '.json')
}

module.exports = { nikahSave, setNikah, deleteNikah }
    