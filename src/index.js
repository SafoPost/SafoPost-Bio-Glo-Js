'use strict';

import '@babel/polyfill';
import 'nodelist-foreach-polyfill';
import 'formdata-polyfill';
import 'es6-promise';
import 'fetch-polyfill';

import elementClosest from 'element-closest';
elementClosest(window);


import popupOpenClose from './modules/popupOpenClose';
import getCalcSeptic from './modules/getCalcSeptic';
import getAccordions from './modules/getAccordions';
import promotions from './modules/promotions';
import sendForm from './modules/sendForm';
// import ooo from './modules/ooo';


// Модальные окна. Открыть/закрыть
popupOpenClose();
// Калькулятор в аккордеоне "Конструктор септика"
getCalcSeptic();
// Аккордеоны "Конструктор септика" и "Вопросы"
getAccordions();
// Акции и спецпредложения
promotions();
// Отправка форм
sendForm();
