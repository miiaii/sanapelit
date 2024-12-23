// DOM-elements
const wordGrid = document.getElementById("wordGrid"); // Word grid for the game
const keyboard = document.getElementById("keyboard"); // Keyboard for the game

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // Alphabet used in the game

//***DICTIONARIES***


// words in english

// HOX! NEEDS TO BE UPPER CASE TO WORK
const dictionary = [
    "AIRPLANE", "ANIMAL", "APPLE", "BACKPACK", "BANANA", "BED", "BICYCLE", "BIRD",
"BLACK", "BLUE", "BLUEBERRY", "BOAT", "BOOK", "BOTTLE", "BOWL", "BRANCH",
"BRIDGE", "BRUSH", "BREAD", "BUTTERFLY", "BUTTON", "BUS", "CAMERA", "CAR",
"CARPET", "CAT", "CABLE", "CANDLE", "CHAIR", "CHEESE", "CLOUD", "CLOCK",
"COMPUTER", "COOKIE", "CROCODILE", "CUP", "CUSHION", "CYAN", "DAISY", "DESK",
"DOG", "DOOR", "DUCK", "ELEPHANT", "FIRE", "FISH", "FLOWER", "FORK", "GLASS",
"GLASSES", "GIRAFFE", "GRAPE", "GRASS", "GRAY", "GREEN", "GUITAR", "HAMMER",
"HAMSTER", "HIGHWAY", "HORSE", "HOUSE", "ISLAND", "JACKET", "JUICE", "KEYS",
"KNIFE", "LADDER", "LAMP", "LEOPARD", "LIGHT", "LILAC", "LIZARD", "MAPLE",
"MARKER", "MARKET", "MILK", "MONKEY", "MOON", "MOUSE", "NOTEBOOK", "OAKTREE",
"OCTOPUS", "ORANGE", "PAINTING", "PANDA", "PAPER", "PEACH", "PEPPER", "PENGUIN",
"PENCIL", "PHONE", "PILOT", "PINEAPPLE", "PINK", "PLANE", "PLANT", "PLATE",
"PLANE", "PURPLE", "RAIN", "RAILWAY", "RASPBERRY", "RABBIT", "RED", "ROCK",
"ROSE", "SAND", "SCHOOL", "SCOOTER", "SHADOW", "SHEEP", "SHOES", "SMILE",
"SNOW", "SOCK", "SPOON", "SQUIRREL", "STRAW", "STRAWBERRY", "STAR", "STREET",
"SUN", "SUNFLOWER", "TABLE", "TELEPHONE", "TRAIN", "TRAVEL", "TREE", "TULIP",
"TUNNEL", "TIGER", "TOWEL", "UMBRELLA", "WARDROBE", "WATER", "WHALE", "WHITE",
"WIND", "WINDOW", "YELLOW", "ZEBRA" ]

const translations = {
  "airplane": "lentokone",
  "animal": "eläin",
  "apple": "omena",
  "backpack": "reppu",
  "banana": "banaani",
  "bed": "sänky",
  "bicycle": "polkupyörä",
  "bird": "lintu",
  "black": "musta",
  "blue": "sininen",
  "blueberry": "mustikka",
  "boat": "vene",
  "book": "kirja",
  "bottle": "pullo",
  "bowl": "kulho",
  "branch": "oksa",
  "bridge": "silta",
  "brush": "harja",
  "bread": "leipä",
  "butterfly": "perhonen",
  "button": "nappi",
  "bus": "bussi",
  "camera": "kamera",
  "car": "auto",
  "carpet": "matto",
  "cat": "kissa",
  "cable": "kaapeli",
  "candle": "kynttilä",
  "chair": "tuoli",
  "cheese": "juusto",
  "cloud": "pilvi",
  "clock": "kello",
  "computer": "tietokone",
  "cookie": "keksi",
  "crocodile": "krokotiili",
  "cup": "kuppi",
  "cushion": "tyyny",
  "cyan": "syaaninsininen",
  "daisy": "päivänkakkara",
  "desk": "työpöytä",
  "dog": "koira",
  "door": "ovi",
  "duck": "ankka",
  "elephant": "elefantti",
  "fire": "tuli",
  "fish": "kala",
  "flower": "kukka",
  "fork": "haarukka",
  "glass": "lasi",
  "glasses": "silmälasit",
  "giraffe": "kirahvi",
  "grape": "viinirypäle",
  "grass": "ruoho",
  "gray": "harmaa",
  "green": "vihreä",
  "guitar": "kitara",
  "hammer": "vasara",
  "hamster": "hamsteri",
  "highway": "valtatie",
  "horse": "hevonen",
  "house": "talo",
  "island": "saari",
  "jacket": "takki",
  "juice": "mehu",
  "keys": "avaimet",
  "knife": "veitsi",
  "ladder": "tikkaat",
  "lamp": "lamppu",
  "leopard": "leopardi",
  "light": "valo",
  "lilac": "syreeni",
  "lizard": "lisko",
  "maple": "vaahtera",
  "marker": "tussi",
  "market": "tori",
  "milk": "maito",
  "monkey": "apina",
  "moon": "kuu",
  "mouse": "hiiri",
  "notebook": "vihko",
  "oaktree": "tammi",
  "octopus": "mustekala",
  "orange": "appelsiini",
  "painting": "maalaus",
  "panda": "panda",
  "paper": "paperi",
  "peach": "persikka",
  "pepper": "pippuri",
  "penguin": "pingviini",
  "pencil": "kynä",
  "phone": "puhelin",
  "pilot": "lentäjä",
  "pineapple": "ananas",
  "pink": "pinkki",
  "plane": "lentokone",
  "plant": "kasvi",
  "plate": "lautanen",
  "purple": "violetti",
  "rain": "sade",
  "railway": "rautatie",
  "raspberry": "vadelma",
  "rabbit": "kani",
  "red": "punainen",
  "rock": "kivi",
  "rose": "ruusu",
  "sand": "hiekka",
  "school": "koulu",
  "scooter": "potkulauta",
  "shadow": "varjo",
  "sheep": "lammas",
  "shoes": "kengät",
  "smile": "hymy",
  "snow": "lumi",
  "sock": "sukka",
  "spoon": "lusikka",
  "squirrel": "orava",
  "straw": "olki",
  "strawberry": "mansikka",
  "star": "tähti",
  "street": "katu",
  "sun": "aurinko",
  "sunflower": "auringonkukka",
  "table": "pöytä",
  "telephone": "puhelin",
  "train": "juna",
  "travel": "matka",
  "tree": "puu",
  "tulip": "tulppaani",
  "tunnel": "tunneli",
  "tiger": "tiikeri",
  "towel": "pyyhe",
  "umbrella": "sateenvarjo",
  "wardrobe": "vaatekaappi",
  "water": "vesi",
  "whale": "valas",
  "white": "valkoinen",
  "wind": "tuuli",
  "window": "ikkuna",
  "yellow": "keltainen",
  "zebra": "seepra"
};

// ***HAMBURGER-MENU***

const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener('click', function() {
  this.classList.toggle("close");

})

//sub-menu
document.addEventListener("DOMContentLoaded", () => {
  const dropdownLinks = document.querySelectorAll(".has-dropdown > .menu-link");

  dropdownLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault(); // Estetään oletuksena oleva linkin toiminta

      const submenu = link.nextElementSibling; // Alavalikko (submenu)
      if (submenu) {
        // Tarkistetaan, onko alavalikko jo näkyvissä
        const isOpen = submenu.classList.contains("active");

        // Suljetaan kaikki muut alavalikot
        document.querySelectorAll(".submenu.active").forEach((openSubmenu) => {
          openSubmenu.classList.remove("active");
        });

        // Asetetaan valitun alavalikon tila (auki/suljettu)
        if (!isOpen) {
          submenu.classList.add("active");
        } else {
          submenu.classList.remove("active");
        }
      }
    });
  });
});

// THEMES

const toggle = document.getElementById("toggle");

// To set theme on page load based on localStorage
document.addEventListener("DOMContentLoaded", function() {
  const body = document.body;
  const savedTheme = localStorage.getItem("theme");

  // Apply the saved theme on page load or default to light mode
  if (savedTheme) {
    body.className = savedTheme; // Apply the saved theme class
    toggle.classList.toggle("active", savedTheme === "dark"); // Update toggle state
  } else {
    body.classList.add("light"); // Default to light mode
    localStorage.setItem("theme", "light"); // Save the default theme to localStorage
  }

  // Toggle theme when user clicks on the toggle
  toggle.onclick = function() {
    const isDarkMode = body.classList.toggle("dark"); // Toggle the "dark" class
    body.classList.toggle("light", !isDarkMode); // Ensure "light" class is also toggled
    toggle.classList.toggle("active", isDarkMode); // Update toggle state

    // Save the selected theme to localStorage
    const selectedTheme = isDarkMode ? "dark" : "light";
    localStorage.setItem("theme", selectedTheme);
  };
});

//OHJEET

// Modal functionality for "Ohjeet" button
document.addEventListener("DOMContentLoaded", () => {
  const ohjeBtn = document.getElementById("ohjeBtn");
  const ohjeetContainer = document.getElementById("ohjeetContainer");
  const closeModal = document.getElementById("closeModal");

  // Show modal when "Ohjeet" button is clicked
  ohjeBtn.addEventListener("click", () => {
    ohjeetContainer.classList.remove("hidden");
  });

  // Close modal when the close button is clicked
  closeModal.addEventListener("click", () => {
    ohjeetContainer.classList.add("hidden");
  });

  // Close modal when the ESC key is pressed
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    ohjeetContainer.classList.add("hidden");
  }
});

// Close modal when the ESC key is pressed
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    ohjeetContainer.classList.add("hidden");
  }
});

  // Close modal when clicking outside the modal content
  window.addEventListener("click", (event) => {
    if (event.target === ohjeetContainer) {
      ohjeetContainer.classList.add("hidden");
    }
  });
});

const texts = [
    "Voit valita Topics -valikosta arvattavan sanan pituuden mukaisesti 4-,5- tai 6- kirjainta, tai valita kaikki sanat. ",
    "Settings- valikosta voit valita teemaksi light/dark mode. Valittu teema pysyy kunnes valitset sen uudelleen.",
    "Näppäimistöstä voit syöttää kirjaimia arvattavan sanan laatikoihin: punainen delete-näppäin pyyhkii ja vihreällä enter-näppäimellä voit lähettää arvauksen.",
    "Arvauksesi ei tarvitse olla heti oikea sana, voit esimerkiksi syöttää kirjaimia järjestyksessä jolloin saat selville mitä kirjaimia sanassa ei ole.",
    "Kirjaimen laatikko muuttuu keltaiseksi, jos arvattu kirjain on oikea mutta väärässä kohdassa.",
    "Kirjaimen laatikko muuttuu vihreäksi, jos arvattu kirjain on oikea ja oikeassa kohdassa.",
    "Kirjaimen laatikko sekä näppäimistön kirjain muuttuvat harmaaksi, jos arvattua kirjainta ei ole arvattavassa sanassa.",
    "Jos kirjaimen laatikon väri ei muutu, arvattu kirjain on arvattu jo vähintään kerran eikä sitä ole näin montaa arvattavassa sanassa.",
    "Tehtyäsi arvauksen tulee uusi rivi laatikoita joihin tehdään uusi arvaus: voit verrata näiden laatikoiden sisältöjä.",
    "Kun arvauksia on tehty useampia ja laatikkorivejä on monta päällekkäin, voit scrollata näitä ylös-alas tarkistaen edellisiä arvauksia.",
    "Voit tallentaa sanan ja sen käännöksen myöhempää tarkastelua varten Saved words näkymän listaan arvattuasi oikein.",
    "Halutessasi tyhjentää tallennettujen sanojen listan, paina empty list- painiketta listan alla."
];

// Reference to the text element
const puheTeksti = document.getElementById('puheTeksti');

// Counter to keep track of current text index
let currentTextIndex = 0;
let intervalId; // to hold the interval ID for pausing
let isPaused = false; // to indicate if the carousel is paused

// Function to update the text
function updateText() {
  puheTeksti.textContent = texts[currentTextIndex];
}

// Function to start the carousel
function startCarousel() {
  intervalId = setInterval(() => {
    currentTextIndex = (currentTextIndex + 1) % texts.length; // Loop through texts
    updateText();
  }, 4500); // Change text every 4.5 seconds
}

// Pause functionality
document.getElementById('pauseButton').addEventListener('click', function() {
  if (!isPaused) {
    clearInterval(intervalId);
    intervalId = null; // Reset intervalId to indicate paused
    this.textContent = ">"; // Change icon to ">" when paused
  } else {
    startCarousel(); // Resume the carousel
    this.textContent = "||"; // Change icon back to "||" when running
  }
  isPaused = !isPaused; // Toggle the paused state
});

// Back button functionality
document.getElementById('backButton').addEventListener('click', function() {
  currentTextIndex = (currentTextIndex - 1 + texts.length) % texts.length; // Go back
  updateText();
});

// Next button functionality
document.getElementById('nextButton').addEventListener('click', function() {
  currentTextIndex = (currentTextIndex + 1) % texts.length; // Go forward
  updateText();
});

// Initialize the carousel on page load
startCarousel();



// ***TOPICS SELECT***

// *** DICTIONARY FILTERING BASED ON SELECTION FROM TOPICS ***
const allLetterWords = dictionary; // Use the full dictionary
const fourLetterWords = dictionary.filter(word => word.length === 4);
const fiveLetterWords = dictionary.filter(word => word.length === 5);
const sixLetterWords = dictionary.filter(word => word.length === 6);

// Add event listener for the select element
document.addEventListener('DOMContentLoaded', () => {
  const topicsBtn = document.getElementById('topicsBtn');

  // Load saved topic from localStorage, default to "allWords"
  const savedTopic = localStorage.getItem('selectedTopic') || "allWords";
  topicsBtn.value = savedTopic;
  applyTopic(savedTopic);

  topicsBtn.addEventListener('change', (event) => {
    const selectedValue = event.target.value;
    localStorage.setItem('selectedTopic', selectedValue); // Save selected topic
    applyTopic(selectedValue);
  });

  // Initialize the game on page load
  window.onload = () => {
    applyTopic(savedTopic); // Apply the saved topic
  };
});

// Function to apply the selected topic and update the game
function applyTopic(topic) {
  switch (topic) {
    case "allWords":
      updateDictionary(allLetterWords);
      break;
    case "four":
      updateDictionary(fourLetterWords);
      break;
    case "five":
      updateDictionary(fiveLetterWords);
      break;
    case "six":
      updateDictionary(sixLetterWords);
      break;
    default:
      console.error("Tuntematon valinta");
  }
}

// Function to update the game with the new word set
function updateDictionary(filteredWords) {
  currentWord = filteredWords[Math.floor(Math.random() * filteredWords.length)];
  newGame(filteredWords); // Start a new game with the chosen topic
}

// Start new game function, using full dictionary by default (all words)
const newGame = (filteredWords = allLetterWords) => {
  currentWord = filteredWords[Math.floor(Math.random() * filteredWords.length)];
  wordGrid.innerHTML = ""; // Clear previous grid
  currentGuess = "";
  currentLetterIndex = 0;
  currentRow = 0;
  createRows();
  createKeyboard();
};


// Create one row for the word grid
function createRows() {
    const newRow = document.createElement('div');
    newRow.classList.add('word-grid');
    for (let i = 0; i < currentWord.length; i++) {
        const box = document.createElement('div');
        box.classList.add('word-box');
        newRow.appendChild(box);
    }
    wordGrid.appendChild(newRow);
}

// Create keyboard
function createKeyboard() {
    keyboard.innerHTML = ""; // Clear previous keyboard
    alphabet.split('').forEach(letter => {
        const key = document.createElement('div');
        key.classList.add('key');
        key.textContent = letter;
        key.addEventListener('click', () => handleKeyPress(letter));
        keyboard.appendChild(key);
    });

    // Add delete and enter keys
    const deleteKey = document.createElement('div');
    deleteKey.classList.add('key', 'delete-key');
    deleteKey.textContent = String.fromCharCode(0x232B); // Unicode character for backspace
    deleteKey.addEventListener('click', handleDelete);
    keyboard.appendChild(deleteKey);

    const enterKey = document.createElement('div');
    enterKey.classList.add('key', 'enter-key');
    enterKey.textContent = String.fromCharCode(0x21B5); // Unicode character for enter
    enterKey.addEventListener('click', handleEnter);
    keyboard.appendChild(enterKey);
}

// Handle key press; add letter to guess when key is pressed
function handleKeyPress(letter) {
    if (currentLetterIndex < currentWord.length) {
        const currentRowElement = wordGrid.children[currentRow];
        const boxes = currentRowElement.getElementsByClassName('word-box');
        boxes[currentLetterIndex].textContent = letter;
        currentGuess += letter;
        currentLetterIndex++;
    }
}

//delete function
function handleDelete() {
    if (currentLetterIndex > 0) {
        currentLetterIndex--;
        const currentRowElement = wordGrid.children[currentRow];
        const boxes = currentRowElement.getElementsByClassName('word-box');
        boxes[currentLetterIndex].textContent = '';
        currentGuess = currentGuess.slice(0, -1);
    }
}

//enter function
function handleEnter() {
    if (currentGuess.length === currentWord.length) {
        checkGuess();
        if (currentGuess === currentWord) {
            win();
        } else {
            currentRow++;
            currentLetterIndex = 0;
            currentGuess = "";
            createRows();
        }
    }
}


// Check if guess is correct
function checkGuess() {
    const currentRowElement = wordGrid.children[currentRow];
    const boxes = currentRowElement.getElementsByClassName('word-box');
    let wordCopy = currentWord.split('');

    //correct letter and position
    for (let i = 0; i < currentGuess.length; i++) {
        if (currentGuess[i] === currentWord[i]) {
            boxes[i].style.backgroundColor = 'lightgreen';
            wordCopy[i] = null;
        }
    }

    //correct letter but wrong position
    for (let i = 0; i < currentGuess.length; i++) {
        if (wordCopy.includes(currentGuess[i]) && boxes[i].style.backgroundColor !== 'lightgreen') {
            boxes[i].style.backgroundColor = 'yellow';
            wordCopy[wordCopy.indexOf(currentGuess[i])] = null;
        }
    }

    //wrong letter
    for (let i = 0; i < currentGuess.length; i++) {
        if (!currentWord.includes(currentGuess[i]) && boxes[i].style.backgroundColor !== 'lightgreen' && boxes[i].style.backgroundColor !== 'yellow') {
            boxes[i].style.backgroundColor = 'gray';
            disableKey(currentGuess[i], 'gray');
        }
    }
}

//keyboard key color change when wrong letter
function disableKey(letter, color) {
    const keys = document.getElementsByClassName('key');
    for (let i = 0; i < keys.length; i++) {
        if (keys[i].textContent === letter) {
            keys[i].style.backgroundColor = color;
            break;
        }
    }
}

// Function to be called on win
function win() {
    const translation = translations[currentWord.toLowerCase()];
    const save = confirm(`Arvasit oikein! \u{1F44F}\u{1F929} Sana oli "${currentWord}", joka on "${translation}" suomeksi. Haluatko tallentaa sanan?`);
    //LOCALSTORAGE PISTEIDEN TALLENNUS
let savedPoints = parseInt(localStorage.getItem("game2Count")) || 0;
savedPoints++;
localStorage.setItem("game2Count", savedPoints);
    
    if (save) {
        addSavedList(currentWord, translation); // Save the word in localStorage
        alert('Sana tallennettu!');
    }
    
    newGame(); // Start a new game after winning
}

// Save the word in localStorage
function addSavedList(word, translation) {
    // get saved words or create empty array
    let savedWords = JSON.parse(localStorage.getItem('savedWords')) || [];
    
    // add new word and translation to array
    
    savedWords.push({ word, translation });
    
    // save array to localStorage
    localStorage.setItem('savedWords', JSON.stringify(savedWords));
}


// Initialize the game on page load
window.onload = newGame;