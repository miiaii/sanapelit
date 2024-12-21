//MUUTTUJAT

//sanakirjat; sanat enkuksi & käännökset

const allWords = [ 
    "APPLE", "HOUSE", "WATER", "MOUSE", "GRASS", "CHAIR", "TABLE", "BREAD", "PLANE", 
    "PENCIL", "CLOUD", "SCHOOL", "CANDLE", "HORSE", "DOOR", "LIGHT", "SHOES", "SMILE", 
    "TRAIN", "BOOK", "CAR", "DOG", "CAT", "FISH", "BIRD", "TREE", "SUN", "MOON", 
    "STAR", "MILK", "CHEESE", "JUICE", "PLATE", "CLOCK", "RIVER", "BRIDGE", "WINDOW", 
    "BED", "TOWEL", "FORK", "SPOON", "KNIFE", "GLASS", "CUP", "SHEEP", "CANDLE", 
    "DUCK", "FIRE", "SNOW", "RAIN", "WIND", "BRUSH", "BOTTLE", "STREET", "MARKET", 
    "COOKIE", "BUTTON", "PAPER", "PENCIL", "FLOWER", "CANDLE", "JACKET", "SHADOW", 
    "CANDLE", "SAND", "CLOUD", "PEPPER", "ORANGE", "BANANA", "STRAW", "BRANCH"
];

const translations = {
    APPLE: "OMENA",
    HOUSE: "TALO",
    WATER: "VESI",
    MOUSE: "HIIRI",
    GRASS: "RUOHO",
    CHAIR: "TUOLI",
    TABLE: "PÖYTÄ",
    BREAD: "LEIPÄ",
    PLANE: "LENTOKONE",
    PENCIL: "KYNÄ",
    CLOUD: "PILVI",
    SCHOOL: "KOULU",
    CANDLE: "KYNTTILÄ",
    HORSE: "HEVONEN",
    DOOR: "OVI",
    LIGHT: "VALO",
    SHOES: "KENGÄT",
    SMILE: "HYMY",
    TRAIN: "JUNA",
    BOOK: "KIRJA",
    CAR: "AUTO",
    DOG: "KOIRA",
    CAT: "KISSA",
    FISH: "KALA",
    BIRD: "LINTU",
    TREE: "PUU",
    SUN: "AURINKO",
    MOON: "KUU",
    STAR: "TÄHTI",
    MILK: "MAITO",
    CHEESE: "JUUSTO",
    JUICE: "MEHU",
    PLATE: "LAUTANEN",
    CLOCK: "KELLO",
    RIVER: "JOKI",
    BRIDGE: "SILTA",
    WINDOW: "IKKUNA",
    BED: "SÄNKY",
    TOWEL: "PYYHE",
    FORK: "HAARUKKA",
    SPOON: "LUSIKKA",
    KNIFE: "VEITSI",
    GLASS: "LASI",
    CUP: "KUPPI",
    SHEEP: "LAMMAS",
    DUCK: "ANKKA",
    FIRE: "TULI",
    SNOW: "LUMI",
    RAIN: "SADE",
    WIND: "TUULI",
    BRUSH: "HARJA",
    BOTTLE: "PULLO",
    STREET: "KATU",
    MARKET: "TORI",
    COOKIE: "KEKSI",
    BUTTON: "NAPPI",
    PAPER: "PAPERI",
    FLOWER: "KUKKA",
    JACKET: "TAKKI",
    SHADOW: "VARJO",
    SAND: "HIEKKA",
    PEPPER: "PIPPURI",
    ORANGE: "APPELSIINI",
    BANANA: "BANAANI",
    STRAW: "OLKI",
    BRANCH: "OKSA"
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

// ***THEME***

// To set theme on page load based on localStorage
document.addEventListener("DOMContentLoaded", function() {
    const themeSelector = document.getElementById('theme-selector');
    const savedTheme = localStorage.getItem('theme');
  
    if (savedTheme) {
      document.body.className = savedTheme; // Apply the saved theme class
      themeSelector.value = savedTheme; // Set the selector to match the saved theme
    }
  
    // Change theme when user selects a new one
    themeSelector.addEventListener('change', function() {
      const selectedTheme = themeSelector.value;
      document.body.className = selectedTheme; // Apply the theme class
      localStorage.setItem('theme', selectedTheme); // Save the selected theme to localStorage
    });
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
    let savedPoints = parseInt(localStorage.getItem("game3Count")) || 0;
    savedPoints++;
    localStorage.setItem("game3Count", savedPoints);

    // Näytetään "+1 sana" -animaatio
    setTimeout(() => {
      showNotification("+1 SANA");
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


//PISTEET MODAL


document.addEventListener("DOMContentLoaded", () => {
  const infoButton = document.getElementById('infoBtn');

  // Luodaan modaali ja sen sisältö
  const modal = document.createElement('div');
  modal.id = 'infoModal';
  modal.classList.add('modal');
  modal.style.display = 'none'; // Piilotetaan modaali oletuksena

  const modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');
  modalContent.id = 'infoModalContent';

  // Luodaan sulje-painike oikeaan yläkulmaan
  const closeButton = document.createElement('span');
  closeButton.textContent = '×'; // Unicode-merkki "x"
  closeButton.classList.add('close-button');

  // Lisätään teksti ja löydettyjen sanojen määrä
  const completedGamesText = document.createElement('p');
  completedGamesText.textContent = 'Sanoja löydetty yhteensä: ';

  const completedGamesCount = document.createElement('span');

  // Kootaan modaali
  modalContent.appendChild(closeButton);
  modalContent.appendChild(completedGamesText);
  modalContent.appendChild(completedGamesCount);

  modal.appendChild(modalContent);
  document.body.appendChild(modal);

  // Näytä modaali vain nappia painamalla
  infoButton.addEventListener('click', () => {
    let completedGames = parseInt(localStorage.getItem("game3Count")) || 0;
    completedGamesCount.textContent = completedGames; // Päivitä sisältö
    modal.style.display = 'flex'; // Näytä modaali
  });

  // Sulje modaali ulkopuolelle klikattaessa
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });

  // Sulje modaali ESC-näppäimellä
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      modal.style.display = 'none';
    }
  });

  // Sulje modaali "x"-painiketta klikatessa
  closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
  });
});
  