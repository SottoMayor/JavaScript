/*    Cookies - cookies are containers that can store
                key=value1;key2=value2;

              values like that are available to us even if the user leave our website
              when the user visits your website again this value is still gonna be there
              because of it we can identify the person visiting us

              path=/
              expires= - when the cookie expires (default when you close the session) (toUTCString() format)
              max-age= - how old can the cookie be in seconds (not supported in ie6-8)

              localstorage - for local              
*/


function newCookie(name, value, days) {

  var expirationDate = ''
  if (days){
    var expirationDateOfCookie = new Date();
    expirationDateOfCookie.setDate(expirationDateOfCookie.setDate() + days);
    expirationDate = ';expires=' + expirationDateOfCookie.toUTCString();
  }
  

  document.cookie = name + '=' + encodeURIComponent(value) + expirationDate + ';path=/';

}

function byeCookie(name){

  var expirationDateOfCookie = new Date();
  document.cookie = name + '=;expiress=' + expirationDateOfCookie.toUTCString()+'path=/'

}

function getCookieByName(name) {

  var arrayCookies = document.cookie.split('; ');

  for(var i = 0; i < arrayCookies.length; i++){

    var splittedCookie = arrayCookies[i].split('=');

    return (name === splittedCookie[0]) ? decodeURIComponent(splittedCookie[1]) : console.log('not found...');

  }

}


window.onload = function(){

  var createCookie = document.getElementById('createCookie');
  var removeCookie = document.getElementById('removeCookie');
  var info = document.getElementById('info');

  createCookie.onclick = function() {
    
    newCookie('name', 'David', 1);
    newCookie('surname', 'Sotto Mayor');
    newCookie('age', 20);

    getCookieByName('name');
    getCookieByName('age');
    getCookieByName('major');

  };

  removeCookie.onclick = function() {

    byeCookie('age');

  };

};







