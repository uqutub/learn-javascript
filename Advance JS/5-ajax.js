




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





