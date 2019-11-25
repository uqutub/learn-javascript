function getSalary(cb) {
    setTimeout(() => {
        cb(20000);
    }, 1500);
}
function subtractTax(sal, cb) {
    setTimeout(() => {
        cb(sal - (sal * 0.25));
    }, 1000);
}
function subtractHouseRent(sal, cb) {
    setTimeout(() => {
        cb(sal - 1500);
    }, 1000);
}
function getDisposalSalary(cb) {
    getSalary(salary_1 => {
        console.log('got salary');
        subtractTax(salary_1, salary_2 => {
            console.log('got tax');
            subtractHouseRent(salary_2, salary_3 => {
                console.log('got rent');
                cb(salary_3);
            });
        });
    });
}

getDisposalSalary(calulatedAmount => {
    console.log(calulatedAmount);
});
