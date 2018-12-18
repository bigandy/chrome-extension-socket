import io from "socket.io-client";

const socket = io("http://localhost:6767");

socket.on("server-status", async message => {
	console.log('server-status', message);
});

const clickMeButton = document.querySelector("#clickMe");

clickMeButton.addEventListener("click", function () {
    socket.emit("message-from-frontend", "hi from front-end");
});
