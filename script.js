const manner = document.querySelector('#manner');

const button = document.querySelector('button');

const quotes = ["I hope your first born marries a french canadian.", 
              "I hope you get a leg cramp when you're on the phone.", 
              "Step on a lego.", 
              "I hope you nick your cheek whilst shaving.",
              "I hope you get a papercut on your eyeball.",
              "I hope you eat spicy food and forget to wash your hands.",
              "Your dog doesn't love you.",
              "I wish a lifetime of nosebleeds upon you.",
              "You're the least popular friend in all your friend groups.",
              "You'll die alone.",
              "Get lost half face!",
              "Go lick hot feces!",
              "Your choice of playstyle demonstrates your lack of ability.",
              "I hope you step on a crack and your mothers back really does crack.",
              "When your mother thinks of you she is disappointed.",
              "No one will miss you when you die.",
              "Everyone secretly thinks you have terrible body odor.",
              "You don't know what happiness feels like do you?",
              "You are very unendowed!",
              "I hope you never see the northern lights again.",
              "I hope you find a hair in your soup.",
              "Everyone thinks your dandruff is out of control.",
              "I hope you stub your toe on my cock!"];

button.addEventListener('click', function () {
  manner.textContent = quotes[Math.floor(Math.random()*quotes.length)]
});
