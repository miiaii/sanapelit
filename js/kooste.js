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



document.getElementById("savedBtn").addEventListener("click", function() {
  window.location.href = "./saved.html";
});



// Retrieve game progress and scores
const gameProgress = {
  "game1": {
    completed: parseInt(localStorage.getItem("game1Completed")) || 0,
    score: parseInt(localStorage.getItem("game1Count")) || 0
  },
  "game2": {
    completed: parseInt(localStorage.getItem("game2Completed")) || 0,
    score: parseInt(localStorage.getItem("game2Count")) || 0
  },
  "game3": {
    completed: parseInt(localStorage.getItem("game3Completed")) || 0,
    score: parseInt(localStorage.getItem("game3Count")) || 0
  }
};

// Update game point counts
document.getElementById("game1Count").textContent = gameProgress.game1.score;
document.getElementById("game2Count").textContent = gameProgress.game2.score;
document.getElementById("game3Count").textContent = gameProgress.game3.score;


//reset points = clear localStorage      
document.getElementById('delBtn1').addEventListener('click', function() {
  const reset = confirm("Haluatko varmasti tyhjentää pisteet nollille?");
  if (reset) {
    localStorage.removeItem('game1Count');
    document.getElementById('game1Count').textContent = 0;
  }
});

document.getElementById('delBtn2').addEventListener('click', function() {
  const reset = confirm("Haluatko varmasti tyhjentää pisteet nollille?");
  if (reset) {
    localStorage.removeItem('game2Count');
    document.getElementById('game2Count').textContent = 0;
  }
});

document.getElementById('delBtn3').addEventListener('click', function() {
  const reset = confirm("Haluatko varmasti tyhjentää pisteet nollille?");
  if (reset) {
    localStorage.removeItem('game3Count');
    document.getElementById('game3Count').textContent = 0;
  }
});