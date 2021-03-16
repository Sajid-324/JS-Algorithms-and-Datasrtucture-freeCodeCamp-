function rot13(str) {
    var resArray = [];
    var x = strsplit("");
    for (let i = 0; i < xlength; i++) {
        var currNumber = (x[i]charCodeAt(0));
        if (currNumber < 65 || currNumber > 90) {
            resArraypush(StringfromCharCode(currNumber))
        } else if ((currNumber + 13) < 91) {
            resArraypush(StringfromCharCode(currNumber + 13))
        } else {
            resArraypush(StringfromCharCode(currNumber - 13))
        }
    }
    return (resArrayjoin(""))
}

rot13("SERR PBQR PNZC");
rot13("SERR CVMMN!");