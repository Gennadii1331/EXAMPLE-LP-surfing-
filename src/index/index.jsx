import './index.scss'
import './scrypts/carusel/carusel'

import * as React from 'react';
import ReactDOM from "react-dom";

import { MultipleItems } from './scrypts/carusel/multiple-carusel.jsx';
import RegistrationForm from "./scrypts/RegistrationForm/RegistrationForm.jsx";


ReactDOM.render(<MultipleItems />, document.getElementById("container"));

ReactDOM.render(<RegistrationForm />, document.getElementById("Form"));

///menu
$('.nav-btn').click(function(){
    $('.menu').addClass("active");
});

///scrolling

$('.boards').click(function(){
    $('html, body').animate({scrollTop:$('.shop').position().top}, 2000);
    $('.menu').removeClass("active");
});

$('.places').click(function(){
    $('html, body').animate({scrollTop:$('.Contacts').position().top}, 2000);
    $('.menu').removeClass("active");
});

$('.events').click(function(){
    $('html, body').animate({scrollTop:$('.media').position().top}, 2000);
    $('.menu').removeClass("active");
});

$('.stories').click(function(){
    $('html, body').animate({scrollTop:$('.content-simetrik').position().top}, 2000);
    $('.menu').removeClass("active");
});