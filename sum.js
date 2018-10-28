const arr = [3,2,5,6];

function sumOfOther(array) {
	let sum = 0;
	let newSumm = 0;
	let newArr = [];

	for(var i = 0; i < array.length; i++){
		sum += array[i];
	}

	for (var i = 0; i < array.length; i++) {
		newSumm = sum - array[i];
		newArr.push(newSumm);
	}
	return newArr;
}


sumOfOther(arr);