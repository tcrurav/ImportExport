import { header } from './header.js';

window.onload = initialize;

function initialize(){
    document.getElementById("header").innerHTML = header();
}