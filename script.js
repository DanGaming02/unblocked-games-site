async function loadGames(){

const res = await fetch("/api/games");
const games = await res.json();

const container = document.getElementById("games");

games.forEach(game => {

const div = document.createElement("div");
div.className = "game";

div.innerHTML = `
<img src="${game.thumbnail}" />
<p>${game.name}</p>
`;

div.onclick = () => {
window.location = game.path;
};

container.appendChild(div);

});

}

loadGames();