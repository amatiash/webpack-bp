'use strict';

import 'start-styles';
import './header.scss';
import $ from 'jquery';
import charUrl from './char-walk.gif';

// ----------------------------------------------------

$(() =>{
    let $header = $('<div class="header"></div>');

    $header.appendTo(document.body);
    $header.append(`<img height="60px" src="${charUrl}"/>`);
});