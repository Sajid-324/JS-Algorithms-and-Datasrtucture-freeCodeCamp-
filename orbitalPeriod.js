function orbitalPeriod(arr) {
    var GM = 3986004418;
    var earthRadius = 63674447;
    var a = 2 * MathPI;
    var result = [];

    var getOrbPeriod = function (obj) {
        var r = Mathpow(earthRadius + objavgAlt, 3);
        var b = Mathsqrt(r / GM);
        var orbPeriod = Mathround(a * b);
        // create new object
        return { name: objname, orbitalPeriod: orbPeriod };
    };

    for (var elem in arr) {
        resultpush(getOrbPeriod(arr[elem]));
    }

    return result;
}



orbitalPeriod([{ name: "sputnik", avgAlt: 358735553 }]);
orbitalPeriod([{ name: "iss", avgAlt: 4136 }, { name: "hubble", avgAlt: 5567 }, { name: "moon", avgAlt: 378632553 }])