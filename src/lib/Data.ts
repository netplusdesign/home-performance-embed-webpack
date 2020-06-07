import * as $ from 'jquery';
import { DataView } from './interfaces';
import { insertAverage } from './lib';
const monthlyTemplate = require("../templates/SummaryMonthly");
const yearlyTemplate = require("../templates/SummaryYearly");

export class Data {
    id: string;
    house: string;
    src: string;
    duration: string;
    response: object;

    constructor(id: string, house: string, duration: string, src: string, url: string){
        this.id = id, 
        this.house = house,
        this.src = src,
        this.duration = duration,
        $.getJSON(url, this.onLoad.bind(this));
    }

    onLoad(res: DataView) {
        this.response = insertAverage(res, ['used'], ['adu']);
        let html;
    
        if (this.duration.includes("month")){
            html = monthlyTemplate(this);
        }
        else {
            html = yearlyTemplate(this);
        }
        // Insert the HTML code into the page
        $('#'+this.id).append(html);
    }
}