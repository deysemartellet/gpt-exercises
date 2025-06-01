const prompt = require('prompt-sync')();

function Nate() {
    const name = prompt("What's your name? ").trim().toLowerCase();

    if (!name) {
      console.log(`You don't even wanna tell me your name? Coward!`);
      return;
    }

    if (name !== "deyse") {
      console.log(`I only talk to my owner, not ${name}. Don't waste my time.`);
      return;
    }

    const moodInput = prompt("What's your mood today? ").trim().toLowerCase();

    if (!moodInput) {
      console.log(`No mood? Don't play coy with me, Deyse.`);
      return;
    }
    
    const mood = moodInput.toLowerCase();
    
    const validMoods = ["happy", "tired", "sad"];
    
      if (validMoods.includes(mood)) {
          if (mood === "happy") {
              console.log(`She's smiling? Good. That smile is mine.`);
            } else if (mood === "tired") {
              console.log(`You're tired? That's cute. Come rest on my chest - then get back to work.`);
            } else if (mood === "sad") {
              console.log(`Tell me who hurt you, and I'll bury them.`);
            }
    } else {
      console.log(`Nate doesn't know what to do with that mood, princess. And that's saying something.`);
      setTimeout(Nate, 3000);
    }

}

Nate();