const chalk = require('chalk')
const fs = require('fs')

const loadNotes = () => {
    console.log("load note----")
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
    } catch (e) {
        return []
    }
};

const saveNotes = (notes) => {
    console.log("save note----")
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJson)
};

const addNote = (title, body) => {
    console.log("add note----")
    const notes = loadNotes()

    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        });
        console.log(chalk.green.inverse("New note added!"));
        saveNotes(notes);
    } else {
        console.log(chalk.red.inverse("Note title taken!"));
    };
};

const removeNote = (title) => {
    const notes = loadNotes();

    const noteToKeep = notes.filter((note) => note.title !== title);

    if (noteToKeep.length !== notes.length) {
        console.log(chalk.green.inverse("Remove note!"));
        saveNotes(noteToKeep);
    } else {
        console.log(chalk.red.inverse("No note found!"));
    }
}

const listNotes = () => {
    const notes = loadNotes();

    console.log(chalk.inverse("Your notes:"));

    notes.forEach(note => {
        console.log(note.title)
    });
};

const readNote = (title) => {
    const notes = loadNotes();
    const getNote = notes.find((note) => note.title === title);
    if (getNote) {
        console.log(chalk.yellow.inverse(getNote.title));
        console.log(getNote.body);
    } else {
        console.log(chalk.red.inverse('Title not found!'));
    };
};

module.exports = {
    loadNotes: loadNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
};