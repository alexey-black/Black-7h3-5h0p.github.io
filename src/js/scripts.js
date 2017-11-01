function editIMG(link) {
    document.images["full-img"].src = link ;
}
var S_sizeInput = document.getElementById('size--s');
var M_sizeInput = document.getElementById('size--m');
var L_sizeInput = document.getElementById('size--l');

function clicks() {
    S_sizeInput.classList.add('active');
    M_sizeInput.classList.remove('active');
    L_sizeInput.classList.remove('active');
}
function clickm() {
    M_sizeInput.classList.add('active');
    L_sizeInput.classList.remove('active');
    S_sizeInput.classList.remove('active');
}
function clickl() {
    L_sizeInput.classList.add('active');
    S_sizeInput.classList.remove('active');
    M_sizeInput.classList.remove('active');
}

var colorInput1 = document.getElementById('color--1');
var colorInput2 = document.getElementById('color--2');
var colorInput3 = document.getElementById('color--3');

function click1() {
    colorInput1.classList.add('active');
    colorInput2.classList.remove('active');
    colorInput3.classList.remove('active');
}
function click2() {
    colorInput2.classList.add('active');
    colorInput3.classList.remove('active');
    colorInput1.classList.remove('active');
}
function click3() {
    colorInput3.classList.add('active');
    colorInput1.classList.remove('active');
    colorInput2.classList.remove('active');
}
