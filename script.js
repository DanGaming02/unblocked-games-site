// Default thumbnail if a game has no image
const DEFAULT_THUMBNAIL = "default-thumbnail.png";

fetch("games.json")
.then(response => response.json())
.then(games => {

const container = document.getElementById("games");

games.forEach(game => {

const div = document.createElement("div");
div.className = "game";

// choose thumbnail or default
const thumb = game.thumbnail && game.thumbnail !== ""
? game.thumbnail
: DEFAULT_THUMBNAIL;

div.innerHTML = `
<img src="${thumb}" alt="${game.name}">
<p>${game.name}</p>
`;

// open game through play.html
div.onclick = () => {

const encodedURL = encodeURIComponent(game.path);

window.location.href = `play.html?game=${encodedURL}`;

};

container.appendChild(div);

});

})
.catch(error => {

console.error("Failed to load games.json:", error);

});
