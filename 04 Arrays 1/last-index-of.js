function myLastIndexOf(arr, searchValue, startIdx) {
    let reversedArr = arr.reverse();
    if (arr.indexOf(searchValue) === -1) {
        return -1;
    }
    else if (startIdx !== undefined) {
        return (((arr.length - (startIdx + 1)) - reversedArr.indexOf(searchValue)))
    } else {
        return (((arr.length - 1) - reversedArr.indexOf(searchValue)))
    }
}
