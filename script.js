function sendMessage(){

let input = document.getElementById("userInput").value.toLowerCase();
let chat = document.getElementById("chat");

let message = document.createElement("div");
message.className = "message";
message.innerText = "Du: " + input;

chat.appendChild(message);


// SECRET WORD
if(input === "games"){

window.location.href = "games.html";

}else{

let bot = document.createElement("div");
bot.className = "message";
bot.innerText = "ChatABC: Ich verstehe das noch nicht.";

chat.appendChild(bot);

}

document.getElementById("userInput").value = "";

}
