var React = require('react');

module.exports = React.createClass({
	render: function(){
		return <button className="btn btn-primary" type="button">
			{this.props.message} <span className="badge">{this.props.count}</span>
		</button>
	}
});