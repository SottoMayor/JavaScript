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
    var expirationDateOfCookie = newDate();
    expirationDateOfCookie.setDate(expirationDateOfCookie.setDate() + days);
    expirationDate = ';expires=' + expirationDateOfCookie.toUTString();
  }
  

  document.cookie = name + '=' + value + expirationDate + ';path=/';

}


window.onload = function(){

  var createCookie = document.getElementById('createCookie');
  var removeCookie = document.getElementById('removeCookie');
  var info = document.getElementById('info');

  createCookie.onclick = function() {
    
    newCookie('name', 'David', 1);
    newCookie('surname', 'Sotto Mayor');
    
  };

  removeCookie.onclick = function() {

    var expirationDateOfCookie = new Date();

    document.cookie = 'surname=;expiress='+expirationDateOfCookie.getTime()+';path=/';

  };

};







