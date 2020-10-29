/*

location....

*/ 

window.onload = function() {

    var google = document.getElementById('google');

    google.onclick = function(event){

        event.preventDefault();

        window.location = this.getAttribute('href')

    }

};