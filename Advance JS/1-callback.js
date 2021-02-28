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






function login(user, pwd, success, error) {
    console.log('Loading.... Loader, waiting....')
     setTimeout(function () {       // network call / API
        // if (user == admin && pwd== adin)
        if(user == 'admin' && pwd == 'admin') {
            success();    // callback
        } else {
            error();        // callback
        } 
     }, 3000);
};
function errorHandling(err) {
    console.log('pls ttry again...');
}
function gotoDashboard() {
    console.log('Welcome to Dahsboad/Homepage');
}


function letsLogin(u, p) {

    login(u, p, gotoDashboard, errorHandling);
}


letsLogin('admin', 'p')