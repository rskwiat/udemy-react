var React = require('react');
var Badge = require('./badge');

module.exports = React.createClass({
	render: function(){
		return <div className="col-xs-12 col-sm-6 col-md-4 flex-item">
		 <div className="thumbnail">
      <img src={this.props.imageUrl} />
      <div className="caption">
        <h3>{this.props.header}</h3>
        <p>{this.props.description}</p>
        	<Badge message={this.props.message} count={this.props.count} />
      </div>
    </div>
    </div>
	}
});