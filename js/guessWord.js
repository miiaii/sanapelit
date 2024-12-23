// DOM-elements
const wordGrid = document.getElementById("wordGrid"); // Word grid for the game
const keyboard = document.getElementById("keyboard"); // Keyboard for the game

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // Alphabet used in the game

//***DICTIONARIES***


// words in english

// HOX! NEEDS TO BE UPPER CASE TO WORK
const dictionary = [
    "ELEPHANT",
    "GIRAFFE",
    "CROCODILE",
    "PENGUIN",
    "BUTTERFLY",
    "SUNFLOWER",
    "DAISY",
    "MAPLE",
    "OAKTREE",
    "RAILWAY",
    "HIGHWAY",
    "AIRPLANE",
    "BICYCLE",
    "SCOOTER",
    "CARPET",
    "CUSHION",
    "WARDROBE",
    "CHAIR",
    "LADDER",
    "TELEPHONE",
    "UMBRELLA",
    "PAINTING",
    "GLASSES",
    "COMPUTER",
    "NOTEBOOK",
    "BACKPACK",
    "PINEAPPLE",
    "STRAWBERRY",
    "RASPBERRY",
    "BLUEBERRY",
    "WHALE",
    "OCTOPUS",
    "TIGER",
    "LEOPARD",
    "PANDA",
    "SQUIRREL",
    "HAMSTER",
    "TULIP",
    "ROSE",
    "LILAC",
    "FISH",
    "BIRD",
    "DOGS",
    "CATS",
    "BLUE",
    "PINK",
    "GRAY",
    "CYAN",
    "BOAT",
    "BUSS",
    "TREE",
    "ROCK",
    "BOWL",
    "CUPP",
    "KEYS",
    "BOOK",
    "DESK",
    "SOCK",
    "FORK",
    "LAMP",
    "HORSE",
    "ZEBRA",
    "MOUSE",
    "KOALA",
    "BLACK",
    "WHITE",
    "GREEN",
    "PURPLE",
    "TRAINS",
    "PLANE",
    "TABLE",
    "HOUSE",
    "PILOT",
    "CABLE",
    "PHONE",
    "CHAIR",
    "LIGHT",
    "PLANT",
    "GRAPE",
    "PEACH",
    "ORANGE",
    "YELLOW",
    "FLOWER",
    "BOTTLE",
    "MARKER",
    "WINDOW",
    "GUITAR",
    "BRIDGE",
    "MARKET",
    "TRAVEL",
    "BANANA",
    "HAMMER",
    "CAMERA",
    "LADDER",
    "ANIMAL",
    "TUNNEL",
    "RABBIT",
    "MONKEY",
    "ISLAND",
    "LIZARD"
];


const translations = {
  "elephant": "norsu",
  "giraffe": "kirahvi",
  "crocodile": "krokotiili",
  "penguin": "pingviini",
  "butterfly": "perhonen",
  "sunflower": "auringonkukka",
  "daisy": "kaunokki",
  "maple": "vaherra",
  "oaktree": "tammi",
  "railway": "rautatie",
  "highway": "moottoritie",
  "airplane": "lentokone",
  "bicycle": "polkupyörä",
  "scooter": "skootteri",
  "carpet": "matto",
  "cushion": "tyyny",
  "wardrobe": "vaatekaappi",
  "chair": "tuoli",
  "ladder": "tikkaat",
  "telephone": "puhelin",
  "umbrella": "sadevarjo",
  "painting": "maalaus",
  "glasses": "lasit",
  "computer": "tietokone",
  "notebook": "viho",
  "backpack": "reppu",
  "pineapple": "ananas",
  "strawberry": "mansikka",
  "raspberry": "vadelma",
  "blueberry": "mustikka",
  "whale": "valas",
  "octopus": "mustekala",
  "tiger": "tiikeri",
  "leopard": "leopardi",
  "panda": "panda",
  "squirrel": "orava",
  "hamster": "hamsteri",
  "tulip": "tulppaani",
  "rose": "ruusu",
  "lilac": "syreeni",
  "fish": "kala",
  "bird": "lintu",
  "dogs": "koirat",
  "cats": "kissat",
  "blue": "sininen",
  "pink": "vaaleanpunainen",
  "gray": "harmaa",
  "cyan": "syaani",
  "boat": "vene",
  "buss": "bussi",
  "tree": "puu",
  "rock": "kivi",
  "bowl": "kulho",
  "cupp": "kuppi",
  "keys": "avaimet",
  "book": "kirja",
  "desk": "työpöytä",
  "sock": "sukka",
  "fork": "haarukka",
  "lamp": "lamppu",
  "horse": "hevonen",
  "zebra": "seeprä",
  "mouse": "hiiri",
  "koala": "koala",
  "black": "musta",
  "white": "valkoinen",
  "green": "vihreä",
  "purple": "liila",
  "trains": "junat",
  "plane": "kone",
  "table": "pöytä",
  "house": "talo",
  "pilot": "lentäjä",
  "cable": "kaapeli",
  "phone": "puhelin",
  "light": "valo",
  "plant": "kasvi",
  "grape": "viinirypäle",
  "peach": "persikka",
  "orange": "oranssi",
  "yellow": "keltainen",
  "flower": "kukka",
  "bottle": "pullo",
  "marker": "tussikynä",
  "window": "ikkuna",
  "guitar": "kitara",
  "bridge": "silta",
  "market": "tori",
  "travel": "matkustus",
  "banana": "banaani",
  "hammer": "vasara",
  "camera": "kamera",
  "animal": "eläin",
  "tunnel": "tunneli",
  "rabbit": "kaniini",
  "monkey": "apina",
  "island": "saari",
  "lizard": "lisko"
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

//THEMES

const toggle = document.getElementById("toggle");
toggle.onclick = function() {
 toggle.classList.toggle("active");
}

// To set theme on page load based on localStorage
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("toggle");
  const body = document.body;
  const savedTheme = localStorage.getItem("theme");

  // Apply the saved theme on page load
  if (savedTheme) {
    body.className = savedTheme; // Apply the saved theme class
    toggle.classList.toggle("active", savedTheme === "dark"); // Update toggle state
  }

  // Toggle theme when user clicks on the toggle
  toggle.onclick = function () {
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

  topicsBtn.addEventListener('change', (event) => {
    const selectedValue = event.target.value;

    switch (selectedValue) {
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
  });

  // Initialize the game on page load with full dictionary by default
  window.onload = () => newGame(allLetterWords);
});

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