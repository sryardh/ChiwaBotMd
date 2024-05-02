const fs = require("fs");

const ceraiSave = (db, obj, session) => {
    var mine = db
    const dbdir = `./database/cerai/${session}.json`
    fs.writeFileSync(dbdir, JSON.stringify(obj, null, 2))
}

const setCerai = (session) => {
    const dbdir = `./database/cerai/${session}.json`
    if (!fs.existsSync(dbdir)) {
        const objcas = {
            status: true,
            turn: 'Z',
            session: session,
            Z: null,
            Y: null,
            nominal: null,
        }
        ceraiSave(dbdir, objcas, session)
        return objcas
    } else {
        const read = JSON.parse(fs.readFileSync(dbdir))
        return read
    }
}

const deleteCerai = (from) => {
    return fs.unlinkSync('./database/cerai/' + from + '.json')
}

module.exports = { ceraiSave, setCerai, deleteCerai }
    