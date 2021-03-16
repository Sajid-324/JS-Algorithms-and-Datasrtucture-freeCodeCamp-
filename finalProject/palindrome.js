function palindrome(str) {
    var s1 = strtoLowerCase()replace(/[^A-Za-z0-9]/g, "")split("");
    consolelog(s1);
    var s2 = [];
    for (let i = (s1length - 1); i >= 0; i--) {
        s2push(s1[i])
    }

    //return (s1every((val, index) => val === s2[index]))
}



palindrome("1 eye for of 1 eye");