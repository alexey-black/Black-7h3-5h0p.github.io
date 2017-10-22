function editIMG(link) {
    document.images["full-img"].src = link ;
}
var S_sizeInput = document.getElementById('size--s');
var M_sizeInput = document.getElementById('size--m');
var L_sizeInput = document.getElementById('size--l');

function clickS() {
    S_sizeInput.classList.add('active');
    M_sizeInput.classList.remove('active');
    L_sizeInput.classList.remove('active');
}
function clickM() {
    M_sizeInput.classList.add('active');
    L_sizeInput.classList.remove('active');
    S_sizeInput.classList.remove('active');
}
function clickL() {
    L_sizeInput.classList.add('active');
    S_sizeInput.classList.remove('active');
    M_sizeInput.classList.remove('active');
}

var 1_colorInput = document.getElementById('color--1');
var 2_colorInput = document.getElementById('color--2');
var 3_colorInput = document.getElementById('color--3');

function click1() {
    1_colorInput.classList.add('active');
    2_colorInput.classList.remove('active');
    3_colorInput.classList.remove('active');
}
function click2() {
    2_colorInput.classList.add('active');
    3_colorInput.classList.remove('active');
    1_colorInput.classList.remove('active');
}
function click3() {
    3_colorInput.classList.add('active');
    1_colorInput.classList.remove('active');
    2_colorInput.classList.remove('active');
}
