function stringToLow (key){
	return key.toLowerCase();
}
function removeSpaces(key){
	return key.trim();
}
function generateKeyTable(key){
	let str, arr, alphabet, finalArr = [], num = 0;
	key = stringToLow(key);
	key =  removeSpaces(key);
	alphabet = "abcdefghiklmnopqrstuvwxyz";
	str = key + alphabet;
	arr = str.split("").filter(arrayUnique);
	finalArr[num] = [];
	for (let i = 0; i < arr.length; i++) {
		if(i%5==0 && i != 0){
			num++;
			finalArr[num] = [];
		}
		finalArr[num].push(arr[i]);
	}
	return finalArr;
}
function arrayUnique(value,index,self){
	return self.indexOf(value) === index;
}
function encript(key,text){
	
}

console.log(generateKeyTable("comedy"));