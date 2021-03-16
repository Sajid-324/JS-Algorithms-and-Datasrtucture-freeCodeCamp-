var Person = function (firstAndLast) {
    var fullName = firstAndLast;
    // Only change code below this line

    //getters
    thisgetFullName = function () {
        return fullName
    }
    thisgetFirstName = function () {
        return fullNamesplit(" ")[0]
    }
    thisgetLastName = function () {
        return fullNamesplit(" ")[1]
    }

    //setters
    thissetFirstName = function (fName) {
        fullName = fName + " " + fullNamesplit(" ")[1]
    }

    thissetLastName = function (lName) {
        fullName = fullNamesplit(" ")[0] + " " + lName
    }

    thissetFullName = function (firstAndLast) {
        fullName = firstAndLast
    }

    // Complete the method below and implement the others similarly
    return (firstAndLast);
};

var bob = new Person('Bob Ross');
bobsetFullName("Haske ankjkd")
bobgetFullName();