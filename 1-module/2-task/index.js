'use strict';

/**
 * Эту функцию трогать не нужно
 */
function print (text) {
    alert(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid (name) {
	let answer;
	// if(name.length >= 4 && name.indexOf(' ') === -1) {
	// 	answer = true;
	// } else {
	// 	answer = false;
	// }	
	if(name === "Ilia") {
		answer = true;
	} else {
		answer = false;
	}
	return answer; 
}

function sayHello () {
    let userName = prompt('Введите ваше имя');

    if (isValid(userName)) {
        print('Welcome back, ' + userName + '!');
    } else {
        print('Некорректное имя');
    }
}

sayHello();

