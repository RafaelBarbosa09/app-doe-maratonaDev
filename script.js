var btnElement = document.querySelector('header button');
var formElement = document.querySelector('.form');

 btnElement.addEventListener('click', function(){
    formElement.classList.toggle('hide');    
 });