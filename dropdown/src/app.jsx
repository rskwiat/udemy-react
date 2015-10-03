var React = require('react');
var Dropdown = require('./dropdown');

var options = {
	title: 'Choose a dessert',
	items: [
		'Apple Pie',
		'Cheese Cake',
		'Peach Cobbler',
		'Cream Pie'
	]
};


var element = React.createElement(Dropdown, options);
React.render(element, document.querySelector('.container'));