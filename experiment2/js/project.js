// project.js - purpose and description here
// Author: Your Name
// Date:

function main() {
  console.log("testing")
  const fillers = {
    adventurer: ["My dude", "Broski", "WesBot", "Adventurer", "Traveller", "Fellow", "Citizen", "Ashen One", "Dragonborn", "Cool person", "Tarnished", "勇者", "$adventurer and $adventurer", "$adventurer, $adventurer, and $adventurer", "Geoff"],
    pre: ["Fra", "Tro", "Gre", "Pan", "Ast", "Ara"],
    post: ["gria", "ston", "gott","-on-the-lee", "ora", "Ara", "uwu"],
    people: ["kindly", "meek", "brave", "wise", "sacred", "cherished", "honored", "forgotten", "apathetic", "mystic", "orca", "帥氣"],
    item: ["axe", "staff", "book", "cloak", "shield", "club", "sword", "magic gloves", "galvel", "fists", "mace", "potato"],
    num: ["two", "three", "eleven", "so many", "too many", "an unsatisfying number of", "barely any", "an unspecified amount of", "surely a satisfactory number of"],
    looty: ["gleaming", "valuable", "esteemed", "rare", "exalted", "scintillating", "kinda gross but still usefull", "complete garbage"],
    loots: ["coins", "chalices", "ingots", "hides", "victory points", "gems","scrolls", "bananas", "noodles", "goblins", "CS Majors", "college credits"],
    baddies: ["orcs", "glubs", "fishmen", "cordungles", "mountain trolls", "college professors", "dragon", "evil $adventurer", "agents of chaos"],
    message: ["call", "txt", "post", "decree", "shoutz", "tweets", "choiche", "hearkens", "harkening", "harkenening", "harkenenening", "...wait, no! Come back", "Watermelon"],
    farewell: ["Bees!", "Do you accept this mission?", "So are you in dude?", "Yiff!", "*runs away*", "Todaloo!", "Hark!", "wait! On second thoughts...", "Would you like to know more?", "Sound like a plan?", "Whudduyou think?"],


  };

  const template = `$adventurer, heed my $message!

I have just come from $pre$post where the $people folk are in desperate need. Their town has been overrun by $baddies. You must venture forth at once, taking my $item, and help them.

It is told that the one who can rescue them will be awarded with $num $looty $loots. Surely this must tempt one such as yourself! $farewell
`;


  const slotPattern = /\$(\w+)/;

  function replacer(match, name) {
    let options = fillers[name];
    if (options) {
      return options[Math.floor(Math.random() * options.length)];
    } else {
      return `<UNKNOWN:${name}>`;
    }
  }

  function generate() {
    let story = template;
    while (story.match(slotPattern)) {
      story = story.replace(slotPattern, replacer);
    }

    /* global box */
    $("#box").text(story);  }

  /* global clicker */
  $("#clicker").click(generate);

  generate();
}

main();