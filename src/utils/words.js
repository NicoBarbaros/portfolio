"use strict";

var words = require('./words.json');
import uniqueRandomArray from 'unique-random-array';

const getUniquerWord = () => {

	var word = uniqueRandomArray(words);
	var firstChar = word().substring(0, 1);

	if (firstChar === 'a' || firstChar === 'e' || firstChar === 'i' || firstChar === 'o' || firstChar === 'u') {
		return 'an ' + word();
	}

	return 'a ' + word();
}

export default getUniquerWord;