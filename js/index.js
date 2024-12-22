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



document.addEventListener('DOMContentLoaded', function() {
  const games = [
    {
      name: "Löydä sana \u{1F575}",
      link: "./searchWord.html"
        },
    {
      name: "Arvaa sana \u{1F914}",
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