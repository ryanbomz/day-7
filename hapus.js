function hapusSimbol(str) {
    var hapusStr = '';
    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        if ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) {
            hapusStr += char;
        }
    }
    return hapusStr;
}

// TEST CASES
console.log(hapusSimbol('test%$4aa')); // test4aa
console.log(hapusSimbol('devel0p3r s3j@@ati')); // devel0p3rs3jati
console.log(hapusSimbol('ma@#k!an~')); // makan
console.log(hapusSimbol('coding')); // coding
console.log(hapusSimbol('1+3-5*2=100')); // 1352100
