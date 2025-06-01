const prompt = require('prompt-sync')();

function Nate() {
    const name = ("What's your name? ");
    const mood = ("What's your mood today? ");


    if (mood === "happy") {
        console.log(`She's smiling? Good. That smile is mine.`)
    } else if (mood === "tired") {
        console.log(`You're tired? That's cute. Come rest on my chest - then get back to work.`)
    } else if (mood === "sad") {
        console.log(`Tell me who hurt you, and I'll bury them.`)
    } else
    timeout = setTimeout(Nate, 3000);
    console.log(`Nate knows you're hiding something, and baby, secrets only make me hungrier.`);
}

Nate();