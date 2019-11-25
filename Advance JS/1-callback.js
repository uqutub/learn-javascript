function getSalary(cb) {
    setTimeout(function() {
        cb(20000);
    }, 1500);
}
function subtractTax(sal) {
    return sal - (sal * 0.25);
}
function subtractHouseRent(sal) {
    return sal - 1500;
}
function getDisposalSalary(cb) {
    getSalary(function (salary) {
        salary = subtractTax(salary);
        salary = subtractHouseRent(salary);
        cb(salary);
    });
}



getDisposalSalary(function(data) {
    console.log(data);
});
