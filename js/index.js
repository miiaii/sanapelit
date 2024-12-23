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



document.addEventListener('DOMContentLoaded', function() {
  const games = [
    {
      name: "LÖYDÄ SANA \u{1F575}",
      link: "./searchWord.html"
        },
    {
      name: "ARVAA SANA \u{1F914}",
      link: "./guessWord.html"
        }
    ];

  const gameIconsContainer = document.getElementById('game-icons-container');

  games.forEach(game => {
    const gameIcon = document.createElement('div');
    gameIcon.classList.add('game-icon');

    const gameName = document.createElement('div');
    gameName.classList.add('game-name');
    gameName.textContent = game.name;

    const playButton = document.createElement('button');
    playButton.classList.add('play-button');
    playButton.textContent = "Pelaa \u27B2";
    playButton.onclick = () => {
      window.location.href = game.link;
    };

    gameIcon.appendChild(gameName);
    gameIcon.appendChild(playButton);

    gameIconsContainer.appendChild(gameIcon);
  });
});