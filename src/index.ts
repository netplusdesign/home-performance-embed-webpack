import * as $ from 'jquery';
import { Data } from './lib/Data';

var data = [];

let displayTables = function(){
    // get all tags with class home-performance-summary
    $('.home-performance-summary').each(function (i) {
        // for each tag get it's attributes
        let id = $(this).attr("id"),
        house = $(this).attr("house"),
        interval = $(this).attr("interval"),
        start = $(this).attr("start"),
        duration = $(this).attr("duration"),
        src = $(this).attr("src"),
        url = src + '/api/houses/' + house + '/views/summary/?interval=' + interval + '&start=' + start + '&duration=' + duration; 
        data.push(new Data(id, house, duration.replace(/[0-9]/g, ''), src, url));
    });
}

// function to call after page has loaded
$(document).ready(function() {
    displayTables();
})
