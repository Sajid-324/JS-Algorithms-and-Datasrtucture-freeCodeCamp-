function fearNotLetter(str) {
  let startIndex = str.charCodeAt(0);
  let endIndex = str.charCodeAt(str.length - 1);
  var i = startIndex;
  for (var j = 0; j < str.length; j++) {

    if (!(str.charCodeAt(j) === i)) {
      return ((String.fromCharCode(i)));
    }
    i++;
  }
}

fearNotLetter("abce");