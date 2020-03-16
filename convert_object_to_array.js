function toArr( obj ) {
    let arr = Array();
    for (const key in obj) {
        arr.push([key, obj[key]]);
    }
    return arr;
}

console.log(toArr({ key1: 'value1', key2: 'value2' })); // [["key1", "value1"], ["key2", "value2"]]

console.log(toArr({})); // [] Return an empty array if the object is empty.
