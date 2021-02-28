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









function login(user, pwd) {
    return new Promise(function(res, rej) {

            setTimeout(function() {
                    if(user == 'admin' && pwd == 'admin') {
                        res({'id': '13443', name: 'admin', school: 'ABC'});
                    } else {
                        rej({code: 505, message: 'User Not found, try again'});
                    }
            }, 4000);
            
    });
}








function getGithubProfile(userId) {
    return fetch(`https://api.github.com/users/${userId}`);
}


getGithubProfile('uqutub')
.then(function(data) {    
    return data.json()
})
.then(function(profile){
    console.log('profile', profile);
    return fetch(profile.followers_url);
})
.then(function(data) {    
    return data.json()
})
.then(function(followers){
    console.log('Followrs', followers)
})














function getJSON(url) {
    return fetch(url)
           .then(function(d){return d.json()});
}

var users = ['uqutub', 'shahid-rafique'];
for(var i = 0; i < users.length; i++){

    getJSON(`https://api.github.com/users/${users[i]}`)    // profile
        .then(function(profile) {
             return getJSON(profile.followers_url)        // followers
        })
        .then(function(followers) {
            console.log('folowers', followers)
        })
        .catch(function(err) {
                console.log('err ', err);
        });
}



for(var i = 0; i < users.length; i++){

    getJSON(`https://api.github.com/users/${users[i]}`)    // profile
        .then((profile) => {
             return getJSON(profile.followers_url)        // followers
        })
        .then((followers) => {
            console.log('folowers', followers)
        })
        .catch((err) => {
                console.log('err ', err);
        });
}