const yargs = require('yargs');
const notes = require('./notes.js');

yargs.version("1.1.0");

yargs.command({
    command: "add",
    describe: "This is to create an ADD command",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        },
        body: {
            describe: "Note body",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body);
    }
})

yargs.command({
    command: "remove",
    describe: "This is to create a REMOVE command",
    builder: {
        title: {
            describe: "Note tile",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
});

yargs.command({
    command: "list",
    describe: "This is to create a LIST command",
    handler() {
        notes.listNotes()
    }
})

yargs.command({
    command: "read",
    describe: "This is to create a READ command",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

yargs.parse()
const loadNotes = notes.loadNotes()

// console.log(loadNotes)
// console.log(yargs.argv)

// node inspect app.js
// node --inspect-brk app.js
// node app.js --help
// node app.js add
// node app.js add --title="content" --body="content"
