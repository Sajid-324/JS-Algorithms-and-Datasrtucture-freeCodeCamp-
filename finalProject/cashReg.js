function checkCashRegister(price, cash, cid) {

    //All currency units converted into cents, means (penny * 100)
    const currencyUnit = {
        "PENNY": 1,
        "NICKEL": 5,
        "DIME": 10,
        "QUARTER": 25,
        "ONE": 100,
        "FIVE": 500,
        "TEN": 1000,
        "TWENTY": 2000,
        "ONE HUNDRED": 10000
    }


    let balanceAmount = ((cash * 100) - (price * 100));
    let balanceAmountCheck = balanceAmount;     // <= copy of balanceAmount
    let change = [];
    let status = '';

    let cidSum = 0;
    /*
    *   This filter function in below will only return values > 0 from cash in drawer
    *   and will put into new array named fiteredCid in reverse order 
    *   which means "ONE HUNDRED" comes first if we have $100 notes in drawer
    */
    let filteredCid = cid.filter(elem => elem[1] !== 0).reverse();

    filteredCid.forEach(elem => {
        let curr = elem[0];
        let currSum = elem[1] * 100;
        cidSum += currSum;
        let amount = 0;
        while (balanceAmount >= currencyUnit[curr] && currSum > 0) {
            amount += currencyUnit[curr];
            balanceAmount -= currencyUnit[curr];
            currSum -= currencyUnit[curr];
        }
        if (amount !== 0) {
            change.push([curr, amount / 100]);
        }
    });

    if (balanceAmount > 0) {
        status = 'INSUFFICIENT_FUNDS';
        change = [];
    } else if (balanceAmount == 0 && balanceAmountCheck == cidSum) {
        status = 'CLOSED';
        change = cid;
    } else {
        status = 'OPEN';
    }
    return { 'status': status, 'change': change };
}


console.log(checkCashRegister(19.5, 20,
    [["PENNY", .5],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]]));
