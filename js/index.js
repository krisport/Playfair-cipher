function stringToLow (key){
	return key.toLowerCase();
}
function removeSpaces(key){
	return key.replace(/\s+/g,'');
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
	let text1, text2, text3;
	if (text.length%2==0) {
		text1 = text.toLowerCase();
		text2 = text1.replace(/\s+/g,'');
		text3 = text2.match(/.{1,2}/g);
	}else{
		let text0 = text+"x";
		text1 = text0.toLowerCase();
		text2 = text1.replace(/\s+/g,'');
		text3 = text2.match(/.{1,2}/g);
	}
	let num = 0, keyObj = [];
	keyArr = generateKeyTable(key);
	for (let i = 0; i < keyArr.length; i++) {
		for (let j = 0; j < keyArr[i].length; j++) {
			keyObj[num] = {};
			keyObj[num].value = keyArr[i][j];
			keyObj[num].row = i;
			keyObj[num].col = j;
			num++;
		}
	}
	for (textInd in text3) {
        let chars = [], x = {}, y = {}, xNew = {}, yNew = {}, newWord = [];
		chars = text3[textInd].split("");
		for (ind in keyObj) {
			if (keyObj[ind].value == chars[0]) {
				x.row = keyObj[ind].row; 
				x.col = keyObj[ind].col;
			}else if (keyObj[ind].value == chars[1]) {
				y.row = keyObj[ind].row; 
				y.col = keyObj[ind].col;
			}
		}
		if (x.row != y.row && x.col != y.col) {
			if(x.col > y.col){
				xNew.row = x.row;
				xNew.col = x.col - (x.col - y.col);
				yNew.row = y.row;
				yNew.col = y.col + (x.col - y.col);
			}else if (y.col > x.col ) {
				xNew.row = x.row;
				xNew.col = x.col + (y.col - x.col);
				yNew.row = y.row;
				yNew.col = y.col - (y.col - x.col);	
			}
		}else if (x.row == y.row) {
			if (x.col > y.col) {
				if (y.row+1 > 4) {
					yNew.row = 0;
				}else{
					yNew.row = y.row +  1;
				}
				yNew.col = x.col;
				if (x.col+1 > 4) {
					xNew.col = 0;
				}else{
					xNew.col = x.col + 1;
				}
				xNew.row = x.row;
			}else if (y.col > x.col) {
				if (x.row+1 > 4) {
					xNew.row = 0;
				}else{
					xNew.row = x.row +  1;
				}
				xNew.col = y.col;
				if (yNew.col+1 > 4) {
					yNew.col = 0;
				}else{
					yNew.col = y.col + 1;
				}
				yNew.row = y.row;
			}
		}else if (x.col == y.col) {
			if (x.row > y.row) {
				if (y.row+1 > 4) {
					yNew.row = 0;
				}else{
					yNew.row = y.row +  1;
				}
			yNew.col = y.col;
			if (x.row+1 > 4) {
				xNew.row = 0;
			}else{
				xNew.row = x.row +  1;
			}
			xNew.col = x.col;
		}else if (y.row > x.row) {
			if (x.row+1 > 4) {
				xNew.row = 0;
			}else{
				xNew.row = x.row +  1;
			}
			xNew.col = x.col;
			if (yNew.row+1 > 4) {
				yNew.row = 0;
			}else{
				yNew.row = y.row +  1;
			}
			yNew.col = y.col;
		}
			
		}
		console.log(xNew, yNew);
	}
return keyObj;
}

console.log(encript("comedy", "I Watch films every day"));