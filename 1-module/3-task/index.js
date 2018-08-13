'use strict';

/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
	let split = str.split(' ').join(',').split(',');
	let obj = {
		'min' : 0,
		'max' : 0
	}
	for(let i of split) {
		if(isNumeric(i)) {
			obj.min = Math.min(obj.min, i);
			obj.max = Math.max(obj.max, i);
		} 
	}
	
	return obj;
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}