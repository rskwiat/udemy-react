var React = require('react');
var Header = require('./header');
var TopicList = require('./topic-list');

var main = React.createClass({
  render: function() {
    return <div>
   		<Header />
   		{this.content()}
    </div>
  },
  content: function(){
  	if(this.props.children){
  		return this.props.children
  	} else {
  		return <TopicList />
  	}
  }
});

module.exports = main;