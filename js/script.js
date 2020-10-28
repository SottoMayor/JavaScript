/*

Prevent Default... 

*/

window.onload = function(){

    var email = document.getElementById('email');

    var btnSubmit = document.querySelector('#btn-submit');

    btnSubmit.onclick = function(event){

        var event = event || window.event;

        if(event.preventDefault){
            event.preventDefault()
        }else{
            event.returnValue = false;
        }


        var form = document.getElementById('form');

        var tmp = document.getElementById('tmp');

        if (email.value == 'Some valid Email...'){
            form.submit();
        }else{
            tmp.innerHTML = 'The email is invalid!'
        }

        btnSubmit.oncontextmenu = function(event){

            var event = event || window.event;

            if(event.preventDefault){
                event.preventDefault()
            }else{
                event.returnValue = false;
            }

        }

    }


}
