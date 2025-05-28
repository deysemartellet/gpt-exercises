const prompt = require('prompt-sync')();

function Nate() {
    const name = prompt("What's your name? ");
    const mood = prompt("What's your mood today? ");

    console.log(`Hey, ${name}. Nate knows you're feeling ${mood} today. He's watching. 👀`);
}

Nate();