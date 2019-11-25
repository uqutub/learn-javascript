// callback
function makingTea(myCallBackFunc) {
    console.log('1. adding Water')
    console.log('2. sugar')
    console.log('3. tea')
    console.log('4. boiling Start')
    setTimeout(function() {
        console.log('5. boiling Completed');
        myCallBackFunc()
    }, 500);
}

function readyForServing() {
    console.log('6. Serving...');
}


//calling 
makingTea(readyForServing);