// Default thumbnail if the game folder has none
const DEFAULT_THUMBNAIL = "default-thumbnail.png";

fetch("games.json")
  .then(response => response.json())
  .then(games => {
    const container = document.getElementById("games");

    games.forEach(game => {
      const div = document.createElement("div");
      div.className = "game";

      // Use the game thumbnail if it exists, otherwise use default
      const thumb = game.thumbnail && game.thumbnail !== "" ? game.thumbnail : DEFAULT_THUMBNAIL;

      div.innerHTML = `
        <img src="${thumb}" alt="${game.name} thumbnail">
        <p>${game.name}</p>
      `;

      // Click to open the game
      div.onclick = () => {
        window.location.href = game.path;
      };

      container.appendChild(div);
    });
  })
  .catch(err => console.error("Failed to load games.json:", err));
