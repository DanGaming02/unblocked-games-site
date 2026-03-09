// script.js

// This image will show if a game doesn't have a thumbnail
const DEFAULT_THUMBNAIL = "default-thumbnail.png";

fetch("games.json")
  .then(res => res.json())
  .then(games => {
    const container = document.getElementById("games");

    games.forEach(game => {
      const div = document.createElement("div");
      div.className = "game";

      // Use game.thumbnail if it exists, otherwise use default
      const thumb = game.thumbnail && game.thumbnail !== "" ? game.thumbnail : DEFAULT_THUMBNAIL;

      div.innerHTML = `
        <img src="${thumb}" />
        <p>${game.name}</p>
      `;

      div.onclick = () => {
        window.location = game.path;
      };

      container.appendChild(div);
    });
  });
