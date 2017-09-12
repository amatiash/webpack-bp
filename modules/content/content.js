'use strict';

import 'start-styles';
import './content.scss';
import bg from './abstract.png';
import $ from 'jquery';
import loadImage from 'image-promise';
import template from './content.pug';

// ----------------------------------------------------

$(() =>{
    let $content       = $(template({text: 'Header'})),
        mandalaPromise = import(/* webpackChunkName: "mandala" */ './mandala.svg'), // async import
        bgPromise      = loadImage(bg); // async img load

    $content.appendTo(document.body);

    Promise.all([mandalaPromise, bgPromise]).then((values) =>{
        let mandalaSvg = values[0],
            $mandala   = $('<div class="mandala mandala--hidden"></div>');

        // Append and show
        // ----------------------------------------------------

        $mandala.append(mandalaSvg);

        $content
            .append($mandala)
            .removeClass('content--loading')
            .addClass('content--bg_on');

        setTimeout(() => $mandala.removeClass('mandala--hidden'), 400);
    });
});