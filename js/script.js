var link = document.querySelector(".search-hotel .btn");
var popup = document.querySelector(".search-hotel form");
var arrival = popup.querySelector("[name=date-arrival]");
var departure = popup.querySelector("[name=date-departure]");
var adults = popup.querySelector("[name=adults]");
var children = popup.querySelector("[name=children]");

link.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.toggle("content-show");
})

popup.addEventListener("submit", function(event) {
	if (!arrival.value || !departure.value || !adults.value || !children.value) {
		event.preventDefault();
		alert ("Все поля формы должны быть заполнены");
	}
})

window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		if (popup.classList.contains("content-show")) {
			popup.classList.remove("content-show");
		}
	}
})
