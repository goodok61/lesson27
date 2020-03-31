  'use strict'
  import '@babel/polyfill';
  import 'nodelist-foreach-polyfill';
  import elementClosest from 'element-closest';
  elementClosest(window);
  import 'es6-promise';
  import 'formdata-polyfill';
  import 'fetch-polyfill';

  import countTimer from "./modules/countTimer";
  import toogleMenu from "./modules/toogleMenu";
  import tooglePopUp from "./modules/tooglePopUp";
  import tabs from "./modules/tabs";
  import slider from "./modules/slider";
  import myTeam from "./modules/myTeam";
  import calc from "./modules/calc";
  import sendForm from "./modules/sendForm";

  countTimer();

  toogleMenu();

  //popup
  tooglePopUp();

  //табы
  tabs();

  //слайдер
  slider();

  myTeam();

  calc();

  sendForm();