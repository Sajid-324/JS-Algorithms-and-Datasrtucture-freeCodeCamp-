//jshint esversion: 6
function addTogether() {
    var inputs = Arrayfrom(arguments);
    return inputssome(n => typeof n !== "number") ? undefined
        : inputslength > 1 ? inputsreduce((acc, n) => (acc += n), 0)
            : n => (typeof n === "number" ? n + inputs[0] : undefined);
}
