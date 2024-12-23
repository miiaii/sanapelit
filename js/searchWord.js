//MUUTTUJAT

//sanakirjat; sanat enkuksi & käännökset

const allWords = [ 
  "ANIMAL", "APPLE", "BACKPACK", "BANANA", "BED", "BICYCLE", "BIRD", 
    "BLACK", "BLUEBERRY", "BOAT", "BOOK", "BOTTLE", "BOWL", "BRANCH", 
    "BRIDGE", "BRUSH", "BREAD", "BUTTERFLY", "BUTTON", "BUS", "CAMERA",
    "CARPET", "CAT", "CABLE", "CANDLE", "CHAIR", "CHEESE", "CLOUD", "CLOCK", 
    "COMPUTER", "COOKIE", "CROCODILE", "CUP", "CUSHION", "CYAN", "DAISY", "DESK", 
    "DOG", "DOOR", "DUCK", "ELEPHANT", "FIRE", "FISH", "FLOWER", "FORK", "GLASS", 
    "GIRAFFE", "GRAPE", "GRASS", "GRAY", "GREEN", "GUITAR", "HAMMER", 
    "HAMSTER", "HIGHWAY", "HORSE", "HOUSE", "ISLAND", "JACKET", "JUICE", "KEYS", 
    "KNIFE", "LADDER", "LAMP", "LEOPARD", "LIGHT", "LILAC", "LIZARD", "MAPLE", 
    "MARKER", "MARKET", "MILK", "MONKEY", "MOON", "MOUSE", "NOTEBOOK", "OAKTREE", 
    "OCTOPUS", "ORANGE", "PAINTING", "PANDA", "PAPER", "PEACH", "PEPPER", "PENGUIN", 
    "PENCIL", "PHONE", "PILOT", "PINEAPPLE", "PINK", "PLANE", "PLANT", "PLATE", 
    "PLANE", "PURPLE", "RAIN", "RAILWAY", "RASPBERRY", "RABBIT", "RED", "ROCK", 
    "ROSE", "SAND", "SCHOOL", "SCOOTER", "SHADOW", "SHEEP", "SHOES", "SMILE", 
    "SNOW", "SOCK", "SPOON", "SQUIRREL", "STRAWBERRY", "STAR", "STREET", 
    "SUN", "TABLE", "TRAIN", "TRAVEL", "TULIP", 
    "TUNNEL", "TIGER", "TOWEL", "UMBRELLA", "WARDROBE", "WATER", "WHALE", "WHITE", "WINDOW", "YELLOW", "ZEBRA"
];



const translations = {
  ANIMAL: "ELÄIN",
  APPLE: "OMENA",
  BACKPACK: "REPPU",
  BANANA: "BANAANI",
  BED: "SÄNKY",
  BICYCLE: "POLKUPYÖRÄ",
  BIRD: "LINTU",
  BLACK: "MUSTA",
  BLUEBERRY: "MUSTIKKA",
  BOAT: "VENE",
  BOOK: "KIRJA",
  BOTTLE: "PULLO",
  BOWL: "KULHO",
  BRANCH: "OKSA",
  BRIDGE: "SILTA",
  BRUSH: "HARJA",
  BREAD: "LEIPÄ",
  BUTTERFLY: "PERHONEN",
  BUTTON: "NAPPI",
  BUS: "BUSSI",
  CAMERA: "KAMERA",
  CARPET: "MATTO",
  CAT: "KISSA",
  CABLE: "KAAPELI",
  CANDLE: "KYNTTILÄ",
  CHAIR: "TUOLI",
  CHEESE: "JUUSTO",
  CLOUD: "PILVI",
  CLOCK: "KELLO",
  COMPUTER: "TIETOKONE",
  COOKIE: "KEKSI",
  CROCODILE: "KROKOTIILI",
  CUP: "KUPPI",
  CUSHION: "TYYNY",
  CYAN: "SYAANINSININEN",
  DAISY: "PÄIVÄNKAKKARA",
  DESK: "TYÖPÖYTÄ",
  DOG: "KOIRA",
  DOOR: "OVI",
  DUCK: "ANKKA",
  ELEPHANT: "ELEFANTTI",
  FIRE: "TULI",
  FISH: "KALA",
  FLOWER: "KUKKA",
  FORK: "HAARUKKA",
  GLASS: "LASI",
  GIRAFFE: "KIRAHVI",
  GRAPE: "VIINIRYPÄLE",
  GRASS: "RUOHO",
  GRAY: "HARMAA",
  GREEN: "VIHREÄ",
  GUITAR: "KITARA",
  HAMMER: "VASARA",
  HAMSTER: "HAMSTERI",
  HIGHWAY: "VALTATIE",
  HORSE: "HEVONEN",
  HOUSE: "TALO",
  ISLAND: "SAARI",
  JACKET: "TAKKI",
  JUICE: "MEHU",
  KEYS: "AVAIMET",
  KNIFE: "VEITSI",
  LADDER: "TIKKAAT",
  LAMP: "LAMPPU",
  LEOPARD: "LEOPARDI",
  LIGHT: "VALO",
  LILAC: "SYREENI",
  LIZARD: "LISKO",
  MAPLE: "VAAHTERA",
  MARKER: "TUSSI",
  MARKET: "TORI",
  MILK: "MAITO",
  MONKEY: "APINA",
  MOON: "KUU",
  MOUSE: "HIIRI",
  NOTEBOOK: "VIHKO",
  OAKTREE: "TAMMI",
  OCTOPUS: "MUSTEKALA",
  ORANGE: "APPELSIINI",
  PAINTING: "MAALAUS",
  PANDA: "PANDA",
  PAPER: "PAPERI",
  PEACH: "PERSIKKA",
  PEPPER: "PIPPURI",
  PENGUIN: "PINGVIINI",
  PENCIL: "KYNÄ",
  PHONE: "PUHELIN",
  PILOT: "LENTÄJÄ",
  PINEAPPLE: "ANANAS",
  PINK: "PINKKI",
  PLANE: "LENTOKONE",
  PLANT: "KASVI",
  PLATE: "LAUTANEN",
  PURPLE: "VIOLETTI",
  RAIN: "SADE",
  RAILWAY: "RAUTATIE",
  RASPBERRY: "VADELMA",
  RABBIT: "KANI",
  RED: "PUNAINEN",
  ROCK: "KIVI",
  ROSE: "RUUSU",
  SAND: "HIEKKA",
  SCHOOL: "KOULU",
  SCOOTER: "POTKULAUTA",
  SHADOW: "VARJO",
  SHEEP: "LAMMAS",
  SHOES: "KENGÄT",
  SMILE: "HYMY",
  SNOW: "LUMI",
  SOCK: "SUKKA",
  SPOON: "LUSIKKA",
  SQUIRREL: "ORAVA",
  STRAWBERRY: "MANSIKKA",
  STAR: "TÄHTI",
  STREET: "KATU",
  SUN: "AURINKO",
  TABLE: "PÖYTÄ",
  TRAIN: "JUNA",
  TRAVEL: "MATKA",
  TULIP: "TULPPAANI",
  TUNNEL: "TUNNELI",
  TIGER: "TIIKERI",
  TOWEL: "PYYHE",
  UMBRELLA: "SATEENVARJO",
  WARDROBE: "VAATEKAAPPI",
  WATER: "VESI",
  WHALE: "VALAS",
  WHITE: "VALKOINEN",
  WINDOW: "IKKUNA",
  YELLOW: "KELTAINEN",
  ZEBRA: "SEEPRA"
};

// ***HAMBURGER-MENU***

const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener('click', function(){
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



let words = []; //Arvottavat sanat; 6kpl/ peli;
const gridSize = 10; //Peliruudukko/ ruudukon koko; max 7 kirjaimisia sanoja
let selectedCells = []; //Hover; mouse/touch
let foundWords = []; //Löydetyt sanat
let counter = 0; //Pistelaskuri löydetyille sanoille
const points = document.getElementById("score"); //Pistelaskurin HTML-elementti


//Uuden pelin alustus
document.addEventListener("DOMContentLoaded", () => {
    const startGameBtn = document.getElementById("startGameBtn");
    startGameBtn.addEventListener("click", newGame);

    newGame(); //Peli käynnistyy automaattisesti sivun latauduttua
});


//FUNKTIOT

//UUSI PELI
function newGame() {
    //Nollaus ja uudet arvot
    counter = 0;
    points.textContent = counter; //Päivitys näkyviin
    words = getRandomWords(12); //6 etsittävää sanaa/peli
    foundWords = [];
    selectedCells = [];
    //Pelilaudan ja sanalistan päivitys
    document.getElementById("gameBoard").innerHTML = "";
    document.getElementById("wordsToFind").innerHTML = "";

    createBoard(); //Luo pelilauta
    populateWordList(); //Arvotut sanat löydettävien sanojen listalle
    placeWords(); //Arvotut sanat ruudukkoon
    fillEmptyCells(); //Tyhjien ruutujen täyttö
    setupEventListeners(); //Tapahtumakuuntelijoiden asetus
}

//ARVO SANAT
function getRandomWords(count) {
    const shuffled = [...allWords].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}


//PELILAUDAN LUOMINEN
function createBoard() {
    const board = document.getElementById("gameBoard");
    for (let i = 0; i < gridSize * gridSize; i++) {  //Ruudukon koko 7x7 laatikkoa
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.dataset.index = i;
        board.appendChild(cell);
    }
}

//LÖYDETTÄVIEN SANOJEN LISTAN LUOMINEN
function populateWordList() {
    const wordList = document.getElementById("wordsToFind");

    // Järjestetään sanat aakkosjärjestykseen
    const sortedWords = words.slice().sort();

    sortedWords.forEach(word => {
        const listItem = document.createElement("li");
        listItem.textContent = word;
        listItem.dataset.word = word;
        wordList.appendChild(listItem);
    });
}

//SANOJEN ASETUS RUUDUKKOON

//Miten sanat asetetaan ruudukkoon; vaaka- ja pystysuunnassa sanat, etu/takaperin sanat (kirjaimet)
function placeWords() {
    const board = document.querySelectorAll(".cell");
    words.forEach(word => {
        let placed = false; //Onko sana asetettu onnistuneesti (oletuksena ei)
        while (!placed) { //Käydään läpi kunnes sana on asetettu onnistuneesti
            const direction = Math.floor(Math.random() * 4); // 0: vasemmalta oikealle, 1: oikealta vasemmalle, 2: ylhäältä alas, 3: alhaalta ylös
            const startIdx = Math.floor(Math.random() * (gridSize * gridSize)); // Arvotaan alkuindeksi ruudukosta josta sana alkaa
            placed = canPlaceWord(word, startIdx, direction, board); //Funktiolla tarkistetaan voiko sanan asettaa valittuun paikkaan ja suuntaan
            if (placed) {
                placeWord(word, startIdx, direction, board); //Funktiolla asetetaan sana ruudukkoon jos sen voi asettaa siihen kohdalle
            }
        }
    });
}
//Tarkistetaan voiko sanan asettaa ruudukkoon
function canPlaceWord(word, startIdx, direction, board) { //Sanan aloituspaikan rivin ja sarakkeen indeksi
    let row = Math.floor(startIdx / gridSize);
    let col = startIdx % gridSize;

    for (let i = 0; i < word.length; i++) { //Käydään läpi sanan kirjaimet
        if (row < 0 || col < 0 || row >= gridSize || col >= gridSize) return false; //Tarkistetaan meneekö sana ruudukon ulkopuolelle
        const index = row * gridSize + col; //Solu johon nykyinen (tarkistettavana oleva) kirjain menossa
        if (board[index].textContent && board[index].textContent !== word[i]) return false; //Jos solussa on jo kirjain eikä se ole sama kuin nykyinen kirjain, palautetaan false

        //Päivitetään solun sijaintia sanan suunnan mukaan
        if (direction === 0) col++;       // vasen -> oikea
        else if (direction === 1) col--;  // oikea -> vasen
        else if (direction === 2) row++;  // ylä -> ala
        else if (direction === 3) row--;  // ala -> ylä
    }
    return true; //Palautetaan true jos kaikki kirjaimet tarkistettu ja sana mahtuu ruudukkoon
}

//Sanan asettaminen ruudukkoon
function placeWord(word, startIdx, direction, board) { //Sanan aloituspaikan rivin ja sarakkeen indeksi
    let row = Math.floor(startIdx / gridSize);
    let col = startIdx % gridSize;

    for (let i = 0; i < word.length; i++) {
        const index = row * gridSize + col; //Solu johon nykyinen (tarkistettavana oleva) kirjain menossa
        board[index].textContent = word[i]; //Kirjain asetetaan soluun
        board[index].dataset.letter = word[i]; //Tallennetaan kirjaimen tieto soluun

        //Päivitetään solun sijaintia sanan suunnan mukaan
        if (direction === 0) col++;       // vasen -> oikea
        else if (direction === 1) col--;  // oikea -> vasen
        else if (direction === 2) row++;  // ylä -> ala
        else if (direction === 3) row--;  // ala -> ylä
    }
}


//TYHJIEN RUUTUJEN TÄYTTÖ
function fillEmptyCells() {
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => {
        if (!cell.textContent) { //Jos solussa ei ole kirjainta arvotaan siihen kirjain
            cell.textContent = String.fromCharCode(65 + Math.floor(Math.random() * 26));
        }
    });
}

//Set up event listeners

function setupEventListeners() {
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => { // Hiiritapahtumat peliruudussa
        cell.addEventListener("mousedown", () => startSelection(cell));
        cell.addEventListener("mouseenter", () => extendSelection(cell));
        cell.addEventListener("mouseup", endSelection);

        // Kosketustapahtumat
        cell.addEventListener("touchstart", (e) => {
            e.preventDefault();
            startSelection(cell);
        });
        cell.addEventListener("touchmove", (e) => {
            e.preventDefault();
            const touch = e.touches[0];
            const target = document.elementFromPoint(touch.clientX, touch.clientY);
            if (target && target.classList.contains("cell")) {
                extendSelection(target);
            }
        });
        cell.addEventListener("touchend", (e) => {
            e.preventDefault();
            endSelection();
        });
    });
}


function startSelection(cell) {
    selectedCells = [cell];
    cell.classList.add("selected");
}

function extendSelection(cell) {
    if (selectedCells.length && !selectedCells.includes(cell)) {
        cell.classList.add("selected");
        selectedCells.push(cell);
    }
}

function endSelection() {
  const selectedWord = selectedCells.map(cell => cell.textContent).join("");
  const reversedWord = selectedCells.map(cell => cell.textContent).reverse().join("");
  const wordFound = words.includes(selectedWord) || words.includes(reversedWord);

  if (wordFound) {
    selectedCells.forEach(cell => cell.classList.add("correct"));
    const foundWord = wordFound ? selectedWord : reversedWord;
    document.querySelector(`#wordsToFind li[data-word="${foundWord}"]`).classList.add("found");
    foundWords.push(foundWord);

    // Näytetään ilmoitus löydetystä sanasta
    

    // Kasvatetaan pistelaskuria
    counter++;
    points.textContent = counter; // Päivitetään näkyviin

//LOCALSTORAGE PISTEIDEN TALLENNUS
    let savedPoints = parseInt(localStorage.getItem("game1Count")) || 0;
    savedPoints++;
    localStorage.setItem("game1Count", savedPoints);

    // Näytetään "+1 sana" -animaatio
    setTimeout(() => {
      showNotification("+1 SANA \u{1F929}");
    }, 10); // Pieni viive, että alert sulkeutuu ensin

    // Tarkistetaan, onko kaikki sanat löydetty
    if (foundWords.length === words.length) {

        showGameOverModal();
    }
  } else {
    selectedCells.forEach(cell => cell.classList.remove("selected"));
  }

  selectedCells = [];
}

//NOTIFICATION +1 SANA LÖYDETTY

function showNotification(message) {
    const container = document.getElementById("notificationContainer");

    // Notification elementin luominen
    const notification = document.createElement("div");
    notification.className = "notification";
    notification.textContent = message;
    container.appendChild(notification);

    // Fade-out efekti
    setTimeout(() => {
      notification.classList.add("fade-out");
    }, 500); // Fade out alkaa 1 sekunnin kuluttua

    // Poistetaan notification
    setTimeout(() => {
      container.removeChild(notification);
    }, 2000); // Kesto 2 sekuntia
  }


// GAME OVER -MODAL
function showGameOverModal() {
    const modal = document.getElementById("gameOverModal");
    const wordsListParagraph = document.getElementById("wordsModal");
    wordsListParagraph.innerHTML = '';

    // Lisätään löydetyt sanat modaaliin näkyville ja niiden suomennokset
    foundWords.forEach(word => {
        const translation = translations[word];
        const listItem = document.createElement("li");
        listItem.textContent = `${word} = ${translation}`;
        wordsListParagraph.appendChild(listItem);
    });

    modal.style.display = "flex";

    //Modaalin sulkeminen
    const closeModal = () => {
        modal.style.display = "none";
        newGame();
        document.removeEventListener("keydown", handleKeyDown);
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            closeModal();
        }
    };

    document.addEventListener("keydown", handleKeyDown);
    const yesButton = document.getElementById("yesButton");
    yesButton.onclick = closeModal;
}




  
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
   '1Etsi ruudukosta listalla näkyvät etsittävät sanat.',
'Sanat voivat olla ruudukossa vasemmalta oikealle, oikealta vasemmalle, ylhäältä alas tai alhaalta ylöspäin.',
'Sana valitaan vetämällä hiirellä (tai sormella) sanan kirjaimien ylitse: valittujen kirjainten taustaväri muuttuu keltaiseksi.',
'Jos valittu sana on oikea, kirjainten taustaväri muuttuu vihreäksi ja saat ilmoituksen löytämästäsi sanasta ja mikä se on suomeksi.',
'Jokaisesta löydetystä sanasta saa aina yhden pisteen ja pelin yläkulmasta näet kuinka paljon olet saanut meneillään olevassa pelissä pisteitä. Pistelaskuri nollaantuu aina uuden pelin alkaessa, mutta voit nähdä kaikki pelatuista peleistä saamasi pisteet koostesivulla.',
'Pelissä on kerrallaan kuusi sanaa löydettävänä jonka jälkeen näet kaikki löytämäsi sanat ja voit aloittaa uuden pelin. Halutessasi voit myös painaa alhaalla sijaitsevaa uusi peli- painiketta ja aloittaa uuden pelin uusilla sanoilla.'
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
  