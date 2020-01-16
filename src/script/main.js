import "jquery";
import "../stylesheets/index.css";

import{
    render
}from './index.js';
import{
    Lunbo
}from './lunbo.js';
import{
    Details
}from './details';
import{
    louti
}from './louti.js';
import{
    nav
}from './nav.js';

 new render().init();
 new Lunbo().init();
 new Details().init();
 new louti().init();
 new nav().init();