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




//load saved words from localStorage to list on html page
function loadSavedWords() {
  const savedList = document.getElementById('savedWordsList');

  // check if savedWordsList element exists
  if (savedList) {
    const savedWords = JSON.parse(localStorage.getItem('savedWords')) || [];
    savedList.innerHTML = ''; // enpty list before loading

    // set object to avoid adding duplicates
    const uniqueWords = new Set();

    savedWords.forEach(item => {
      const key = item.word.toUpperCase(); // change key to uppercase for comparison
      if (!uniqueWords.has(key)) { // check if word is already in the list
        uniqueWords.add(key); // add word to Set

        // create list item: word = translation
        const listItem = document.createElement('li');
        listItem.textContent = `${item.word} = ${item.translation}`;


        savedList.appendChild(listItem);
      }
    });
  }
}

//empty saved list = clear localStorage      
document.getElementById('delBtn').addEventListener('click', function() {
  const reset = confirm("Haluatko varmasti tyhjentää tallennettujen sanojen listan?");
  if (reset) {
  localStorage.removeItem('savedWords')
  loadSavedWords()}
})





document.getElementById("pisteetBtn").addEventListener("click", function() {
  window.location.href = "./kooste.html";
});


// Load saved words on page load
window.onload = loadSavedWords;