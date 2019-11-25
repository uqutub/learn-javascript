var githuId = 'uqutub'

function fetchUserData(id) {
    fetch('https://api.github.com/users/'+id)
    .then(function(response){
        return response.json()
    })
    .then(function(data) {
        console.log('data ', data);
        UserDetails(data);
    })
    .catch(function(err) {
        console.log('err ', err);
    })
}

function UserDetails(d) {
    console.log('Id ', d.id);
    console.log('Name ', d.name);
    console.log('Total Repo. ', d.public_repos);
}



console.log('calling start');
fetchUserData(githuId);
console.log('calling end');