import "jquery";
import "../stylesheets/index.css";

import "../stylesheets/details.css";
import "../stylesheets/cartlist.css";
import "../stylesheets/registry.css";
import "../stylesheets/login1.css";

import{
    render 
}from './index.js';
import{
    Details
}from './details';
import{
    louti
}from './louti.js';
import{
    nav
}from './nav.js';
import{
    registry
}from './registry.js';
import{
    Fdj
}from './scale.js';
import{
    login
}from './login.js';
import{
    success
}from './success.js';
import{
    Cartlist
}from './Cartlist.js';
import{
    Lunbo
}from './lunbo.js';


if($('script').attr('id') == 'index'){
    new render().init();
    new louti().init();
    new Lunbo().init();
    new nav().init();
    success();
}else if($('script').attr('id') == 'details'){
    new Details().init();
    new Fdj().init();
}else if($('script').attr('id') == 'login'){
    new login().init();
}
else if($('script').attr('id') == 'registry'){
    new registry().init();
}
else {
    new Cartlist().init();
}




 


 



 
