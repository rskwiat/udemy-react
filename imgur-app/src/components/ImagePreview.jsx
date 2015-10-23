var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

module.exports = React.createClass({
	getInitialState: function(){
		return{
			hovering: false
		}
	},
	render: function(){
		return <Link to={"images/" + this.props.id} className="image-preview"
			onMouseEnter={this.handleMouseEnter}
			onMouseLeave={this.handleMouseLeave}>
			{this.props.animated && !this.state.hovering ? this.icon() : null }
			{this.props.animated && this.state.hovering ? this.video() : this.image()}
			{this.state.hovering ? this.inset(): null}
		</Link>
	},
	inset: function(){
		return <div className="inset">

			Views: {this.props.views}
				<br />
			Upvotes: {this.props.ups}
		</div> 
	},
	image: function(){
		var link = 'http://i.imgur.com/' + this.props.id + 'h.jpg';
		return <img src={link} />
	},
	video: function(){
		return <div>
			<video preload="auto" autoPlay="autoplay" loop="loop" webkit-playsinline>
				<source src={this.props.mp4} />
				<source src={this.props.webm} />
			</video>
		</div>
	},
	icon: function(){
		return <span className="glyphicon glyphicon-play-circle"></span>		
	},
	handleMouseLeave: function(){
		this.setState({ hovering: false });		
	},
	handleMouseEnter: function(){
		this.setState({ hovering: true });
	},
});