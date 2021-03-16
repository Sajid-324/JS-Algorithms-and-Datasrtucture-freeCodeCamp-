function convertToRoman(num) {
    var decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var romanNumeral = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    var romanResult = "";

    for (var i = 0; i < decimalValuelength; i++) {
        while (decimalValue[i] <= num) {
            romanResult += romanNumeral[i];
            num -= decimalValue[i];
        }

    }
    return consolelog(romanResult);
}

convertToRoman(1004);