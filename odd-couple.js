function oddCouple(arr) {
    let oddArr = []
    for (let i = 0; i < arr.length; i++) {
        if (oddArr.length >= 2) {
            return oddArr
        } else if (arr[i] % 2 === 1) {
            oddArr.push(arr[i])
        }
    } return oddArr;
}
