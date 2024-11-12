var navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');

}

var searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');

}

var cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}



window.onscroll = ( ) =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}


var btn0 = document.getElementById('contbtn');

btn0.addEventListener('click', () => {
  alert('We Will Contact you soon');
});


var btn1 = document.getElementById('readbtn');
var readback = document.getElementById('readback');
var readstyle = document.getElementById('readstyle');

btn1.addEventListener('click', () => {
  readback.classList.remove('hidden');
  readstyle.classList.remove('hidden');
});

readback.addEventListener('click', () => {
  readback.classList.add('hidden');
  readstyle.classList.add('hidden');
});

var btn2 = document.getElementById('readbtnn');
var readback = document.getElementById('readback');
var readstyle = document.getElementById('readstyle');

btn2.addEventListener('click', () => {
  readback.classList.remove('hidden');
  readstyle.classList.remove('hidden');
});

readback.addEventListener('click', () => {
  readback.classList.add('hidden');
  readstyle.classList.add('hidden');
});

var btn3 = document.getElementById('readbtnnn');
var readback = document.getElementById('readback');
var readstyle = document.getElementById('readstyle');

btn3.addEventListener('click', () => {
  readback.classList.remove('hidden');
  readstyle.classList.remove('hidden');
});

readback.addEventListener('click', () => {
  readback.classList.add('hidden');
  readstyle.classList.add('hidden');
});