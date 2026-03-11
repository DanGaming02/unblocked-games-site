function sendMessage(){

let input = document.getElementById("userInput").value.toLowerCase();
let chat = document.getElementById("chat");

let message = document.createElement("div");
message.className = "message";
message.innerText = "You: " + input;

chat.appendChild(message);


// SECRET WORD
if(input === "games"){

window.location.href = "games.html";

}else{

let bot = document.createElement("div");
bot.className = "message";
bot.innerText = "ChatABC: I'm still learning how to respond to that.";

chat.appendChild(bot);

}

document.getElementById("userInput").value = "";

}
