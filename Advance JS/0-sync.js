function getSalary() {
    return 20000;
}
function subtractTax(sal) {
    return sal - (sal * 0.25);
}
function subtractHouseRent(sal) {
    return sal - 1500;
}
function getDisposalSalary() {
    var salary = getSalary();
    salary = subtractTax(salary);
    salary = subtractHouseRent(salary);
    return salary;
}

console.log(getDisposalSalary());
