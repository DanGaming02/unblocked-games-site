const DEFAULT_THUMBNAIL = "default-thumbnail.png";

fetch("games.json")
.then(res => res.json())
.then(games => {

const container = document.getElementById("games");

games.forEach(game => {

const div = document.createElement("div");
div.className = "game";

const thumb = game.thumbnail ? game.thumbnail : DEFAULT_THUMBNAIL;

div.innerHTML = `
<img src="${thumb}">
<p>${game.name}</p>
`;

div.onclick = () => {
window.location.href = game.path;
};

container.appendChild(div);

});

});
