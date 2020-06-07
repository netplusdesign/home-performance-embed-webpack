const moment = require('moment');
const Handlebars = require('handlebars/runtime');

Handlebars.registerHelper('round', function (str) {
    return addCommas(Math.round(parseFloat(str)).toString());
})
Handlebars.registerHelper('round1', function (str) {
    return addCommas(parseFloat(str).toFixed(1));
})
Handlebars.registerHelper('dateYYYY', function (str) {
    return moment(str).format('YYYY');
})
Handlebars.registerHelper('dateYYYY-MM', function (str) {
    return moment(str).format('YYYY-MM');
})
Handlebars.registerHelper('dateMMM', function (str) {
    return moment(str).format('MMM');
})

// thanks http://www.mredkj.com/javascript/numberFormat.html
function addCommas(nStr) {
	nStr += '';
	let x = nStr.split('.'),
	x1 = x[0],
	x2 = x.length > 1 ? '.' + x[1] : '';
	let rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + ',' + '$2');
	}
	return x1 + x2;
}

module.exports = Handlebars;