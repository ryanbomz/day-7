function MajoritySweeper(arr) {
    const counts = {};
    let maxCount = 0;

    for (let num of arr) {
        counts[num] = (counts[num] || 0) + 1;
        maxCount = Math.max(maxCount, counts[num]);
    }

    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (counts[arr[i]] !== maxCount) {
            result.push(arr[i]);
        }
    }

    return result;
}

console.log(MajoritySweeper([9, 1, 1, 1, 1, 1, 3, 3, 4, 2, 5, 5, 5])); // [ 9, 3, 3, 4, 2, 5, 5, 5 ]
console.log(MajoritySweeper([22, 22, 100, 100, 100, 2000])); // [ 22, 22, 2000 ]
console.log(MajoritySweeper([2, 2])); // []
console.log(MajoritySweeper([4, 4, 4, 1, 1, 1, 2, 2])); // [ 1, 1, 1, 2, 2 ]
