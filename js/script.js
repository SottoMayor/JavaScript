/*

Dialog Window

1 - alert
2 - confirm
3 - prompt

*/ 

window.onload = function() {

    var username = prompt('What is your name?', 'Username');

    if(username != null){
        alert('Hello ' + username + ' how is going?')
    }

    var cancelAccount = confirm('Are sure about deleting you account?');
    
    if(cancelAccount){
        alert('Bye Bye... :(');
    }

};