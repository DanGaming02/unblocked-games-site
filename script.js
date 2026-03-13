const DEFAULT_THUMBNAIL = "default-thumbnail.png";

fetch("games.json")
.then(res => res.json())
.then(games => {

const container = document.getElementById("games");

games.forEach(game => {

const div = document.createElement("div");
div.className = "game";

const thumb = game.thumbnail || DEFAULT_THUMBNAIL;

div.innerHTML = `
<img src="${thumb}">
<p>${game.name}</p>
`;

div.onclick = () => {

if(game.type === "html"){

window.location.href = game.path;

}

else if(game.type === "url" || game.type === "iframe"){

const encoded = encodeURIComponent(game.path);
window.location.href = `play.html?game=${encoded}`;

}

};

container.appendChild(div);

});

});
