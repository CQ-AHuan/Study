function getAdd() {
    let count = 0;
    return function () {
    	count++;
    	console.log(count);
    }
}

getAdd()(); //
getAdd()(); //
getAdd()(); //
