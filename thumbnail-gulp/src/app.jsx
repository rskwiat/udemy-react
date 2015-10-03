var React = require('react');
var ThumbnailList = require('./thumbnail-list');

var options = {
		thumbnailData: [{
			message: 'Inbox',
			count: 5,
			header: 'Learn React',
			description: 'React is a new way to build pages.',
			imageUrl: 'https://media.giphy.com/media/xTiTnzsx8lZV90Yb4s/giphy.gif'
		},{
			message: 'Show Courses',
			count: 25,
			header: 'Learn Gulp',
			description: 'Gulp is a lightweight task runner',
			imageUrl: 'http://gaboesquivel.com/images/2014/04/gulp-js.jpg'
		}]
	};


var element = React.createElement(ThumbnailList, options);
React.render(element, document.querySelector('.target'));