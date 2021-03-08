'use strict';

const wrapper = document.getElementById('wrapper');
const person = document.createElement("span");

person.style.width = "5px";
person.style.height = "5px";
person.style.background = "black";
person.style.position = "absolute";
wrapper.appendChild(person);

const moveDown = () => {
	let ptop = person.offsetTop + 5;
	if (validPos("down")) {
		person.style.top = ptop + "px";
	}
}

const moveUp = () => {
	let ptop = person.offsetTop - 5;
	if (validPos("up")) {
		person.style.top = ptop + "px";
	}
}

const moveRight = () => {
	let pleft = person.offsetLeft + 5;
	if (validPos("right")) {
		person.style.left = pleft + "px";
	}
}

const moveLeft = () => {
	let pleft = person.offsetLeft - 5;
	if (validPos("left")) {
		person.style.left = pleft + "px";
	}
}

const createRandomBg = () => {
	let r = Math.random() * 255,
		g = Math.random() * 255,
		b = Math.random() * 255;
	if (r !== 255 && g !== 255 && b !== 255) {
		return "rgb(" + r + " " + g + " " + b + ")"
	} else {
		return createRandomBg();
	}
}

const moveElement = (keyCode) => {
	person.style.background = createRandomBg();
	switch (keyCode) {
		case 40:
			moveDown();
			break;
		case 39:
			moveRight();
			break;
		case 38:
			moveUp();
			break;
		case 37:
			moveLeft();
			break;	
	}
}

const validPos = (typeMove) => {
	let ptop = person.offsetTop,
		pleft = person.offsetLeft,
		wtop = wrapper.offsetTop,
		wleft = wrapper.offsetLeft;
	console.log(typeMove);
	// 5 is 1 step range = span width/height
	// 30 is padding of body - step range, if body padding = 0, this value is 0
	// 270 is height/width of wrapper - body padding
	switch (typeMove) {
		case "down":
			return (ptop + 5) < (wtop + 270);
		case "up":
			return ptop > (wtop - 30);
		case "right":
			return (pleft + 5) < (wleft + 270);
		case "left":
			return pleft > (wleft - 30);
		default:
			return false;
	}
}

window.addEventListener("keydown", (e) => {
	let keyCode = e.keyCode;
	moveElement(keyCode);
});
