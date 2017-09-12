'use strict';

import 'start-styles';
import './footer.scss';
import $ from 'jquery';
import template from './footer.pug';

// ----------------------------------------------------

$(() =>{
    $(template({text: 'xyz'})).appendTo(document.body);
});