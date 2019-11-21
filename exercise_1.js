// Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these into individual array that is ordered.
// For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. 
const array1 = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];

const sortArray = (arr) => {
	// Sort all elements into numeric order
	arr.sort((a,b) => a-b);

	let cnt = 0;
	let mem = [];
	arr.forEach((num, i) => {
		// Check the element one by one if elements are equal, it counts how many of similar numbers
		// Find the last element of similar element		
		if (arr[i] === arr[i+1]) {
			cnt++;
		} else if (arr[i] !== arr[i+1] && arr[i] === arr[i-1]) { 
			// Create a new array between similar elements and put it into first index of similar ones
			arr[i-cnt] = arr.slice(i-cnt, i+1);
			mem.push([i-cnt+1, cnt]);
			cnt = 0;
		}
	});

	// Nested array have been built but need to delete similar ones from original array
	// Check the first element of nested array equal to next element and delete it
	arr.forEach((num, i) => {
		// The reason why putting arr[i][0] && is because of the undefined when last element is processed
		// without arr[i][0] && it will be in infinite loop
		while(arr[i][0] && (arr[i][0] === arr[i+1])) {
			arr.splice(i+1, 1);
		}
	});

	return arr;
}

// console.log(sortArray(array1));



// Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]
const array2 = ["1", 2, "4", "591", 392, "391", 2, 5, "10", 2, "1", "1", 1, 20, 20];

const sortArray2 = (array) => {
	let sArr = [];
	let nArr = [];
	let rArr = [];

	array.filter((num) => {
		switch(typeof num) {
			case "string": 
			sArr.push(num);
			break;
			case "number":
			nArr.push(num);
			break;
		}	
	});	

	nArr.sort((a,b) => a-b);
	sArr.sort((a,b) => a-b);

	rArr.push(nArr);
	rArr.push(sArr);

	return rArr;	
}

const array3 = sortArray2(array2);
// console.log(array3);



// Question 2: Write a javascript function that takes an array of numbers and a target number. 
// The function should find two different numbers in the array that, when added together, give the target number. 
// For example: answer([1,2,3], 4)should return [1,3]
const targetAdd = (numArray, target) => {
	let numbers = [];
	let rArr = [];
	for (let i = 0; i < numArray.length-1; i++) {
		for (let j = 1; j < numArray.length; j++) {
			if (numArray[i] + numArray[j] === target) {
				numbers.push(numArray[i]);
				numbers.push(numArray[j]);	
				rArr.push(numbers);
				numbers = [];			
			}
		}
	}

	return rArr;
}

// console.log(targetAdd([1,2,3,4,5,6,7,8,9], 10));



// Question 3: Write a function that converts HEX to RGB. 
// Then Make that function auto-dect the formats so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.
const hexToRGB = (color) => {
	let strArr = color.split("");

	strArr.shift();
	for (let i = 0; i < strArr.length; i++) {
		switch(strArr[i]) {
			case "a":
			strArr[i] = 10;
			break;
			case "b":
			strArr[i] = 11;
			break;
			case "c":
			strArr[i] = 12;
			break;
			case "d":
			strArr[i] = 13;
			break;
			case "e":
			strArr[i] = 14;
			break;
			case "f":
			strArr[i] = 15;
			break;
			default:
			strArr[i] = Number(strArr[i]);
			break;
		}
	}

	let red = (16 * strArr[0]) + strArr[1];
	let green = (16 * strArr[2]) + strArr[3];
	let blue = (16 * strArr[4]) + strArr[5];

	return [red, green, blue];
}

const rgbColor = hexToRGB("#f4e3d8");
// console.log(rgbColor);