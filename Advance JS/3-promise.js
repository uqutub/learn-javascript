function getSalary() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(20000);
        }, 1500);
    });
}
function subtractTax(sal) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(sal - (sal * 0.25));
        }, 1000);
    });
}
function subtractHouseRent(sal) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(sal - 1500);
        }, 1000);
    });

}
function getDisposalSalary() {
    var salarPromise = getSalary();
    var taxPromise = salarPromise.then(salary => {
        return subtractTax(salary);
    });
    var rentPromise = taxPromise.then(salary => {
        return subtractHouseRent(salary);
    });

    return rentPromise;

}

getDisposalSalary().then(calulatedAmount => {
    console.log(calulatedAmount);
});