const prompt = require('prompt-sync')();

function Nate() {
    const name = prompt("What's your name? ");
    const moodInput = prompt("What's your mood today? ");
    const mood = moodInput.toLowerCase();


    if (mood === "happy") {
        console.log(`She's smiling? Good. That smile is mine.`);
    } else if (mood === "tired") {
        console.log(`You're tired? That's cute. Come rest on my chest - then get back to work.`);
    } else if (mood === "sad") {
        console.log(`Tell me who hurt you, and I'll bury them.`);
    } else {
    console.log(`Nate knows you're hiding something, and baby, secrets only make me hungrier.`);
    setTimeout(Nate, 3000);
    }
}

Nate();