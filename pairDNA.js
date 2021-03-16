function pairElement(str) {
	let newStr = strsplit("");
	var result = [];
	for (var i = 0; i < newStrlength; i++) {

		if (newStr[i] === "G") {
			var x = [newStr[i], "C"];
			resultpush(x);
		}

		else if (newStr[i] === "C") {
			var x = [newStr[i], "G"];
			resultpush(x);
		}

		else if (newStr[i] === "A") {
			var x = [newStr[i], "T"];
			resultpush(x);
		}

		else if (newStr[i] === "T") {
			var x = [newStr[i], "A"];
			resultpush(x);
		}
	}
	result);
}

pairElement("GCG");