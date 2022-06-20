function myIndexOf(source, searchValue, startIdx) {
    if (startIdx === undefined) {
        for (let i = 0; i < source.length - 1; i++) {
            if (source.slice(i, searchValue.length + i) === searchValue) {
                return i;
            }
        }
    } else {
        for (let i = startIdx; i < source.length - 1; i++) {
            if (source.slice(i, searchValue.length + i) === searchValue) {
                return i;
            }
        }
    } return -1;
}

