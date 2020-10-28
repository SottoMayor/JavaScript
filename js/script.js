/*



*/

window.onload = function(){

    var box = document.getElementById('box');

    box.onmousedown = function(){

        this.onmousemove = function(event){

            this.style.left = event.clientX + 'px';
            this.style.top = event.clientY + 'px';

        }
    }

    box.onmouseup = function(){
        this.onmousemove = null;
    }

    box.ondragstart = function(event){
        event.preventDefault();
    }

}