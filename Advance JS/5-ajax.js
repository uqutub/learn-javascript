




var abc = null;

// function callback(data) {
//     abc = data;
//     console.log('abc...............', abc)
// }

function getMyGithubProfile(_callFunc) {
    var xhttp = new XMLHttpRequest();
    console.log('1 registeration...')
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log('4 xyz...', xhttp.responseText);
            _callFunc(xhttp.responseText);
        }
    };
    xhttp.open("GET", "https://api.github.com/users/uqutub", true);
    // xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    console.log('2 sending.....');
    xhttp.send();
}

getMyGithubProfile(function(data) {
    abc = data
    console.log('abc...............', abc)
    

});





fetchApi('https://api.github.com/users/uqutub')
.then(data => { 
	console.log('My Name ', data.name);
	return fetchApi('https://api.github.com/users/'+data.id)
	
})
.then(data)
.catch(err => console.log('Err ', err))



var posts = ['post1', 'post2']

posts.map(item => fetchApi('http://getpost/'+item))


function fetchApi(url) {

    return new Promise((res, rej) => {
        fetch(url, true).then(res => res.json())
        .then(data => res(data))
        .catch(err => rej(err))
    })

}