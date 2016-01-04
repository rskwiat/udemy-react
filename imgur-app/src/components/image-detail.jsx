var React = require('react');
var Reflux = require('reflux');
var ImageStore = require('../stores/image-stores');
var CommentStore = require('../stores/comment-stores');
var CommentBox = require('./comment-box');
var Actions = require('../actions');


var imageDetail = React.createClass({
	mixins:[
		Reflux.listenTo(ImageStore, 'onChange'),
		Reflux.listenTo(CommentStore, 'onChange')
	],
	getInitialState: function(){
		return {
			image: null,
			comment: null
		}
	},
	componentWillMount: function(){
		Actions.getImage(this.props.params.id);
	},
	render: function(){
		return <div className="image-detail">
			{this.state.image ? this.renderContent() : null}
		</div>
	},
	renderContent: function(){
		return <div className="image-detail">
			<div className="panel panel-default">
				<div className="panel-heading">
					<h4>{this.state.image.title}</h4>
				</div>
				<div className="panel-body">
					{this.renderImage()}
				</div>
				<div className="panel-footer">
					<h5>{this.state.image.description}</h5>
				</div>
			</div>
			<h3>Comments</h3>
			{this.renderComments()}
		</div>
	},
	renderComments: function(){
		console.log(this.state.comment);
	},
	renderImage: function(){
		if(this.state.image.animated){
			return <video preload="auto" autoPlay="autoplay" loop="loop" webkit-playsinline>
				<source src={this.state.image.mp4} type="video/mp4" />
				<source src={this.state.image.webm} type="video/webm" />
			</video>

		} else {
			return <img src={this.state.image.link} />
		}
	},
	onChange: function(){
		this.setState({
			image: ImageStore.find(this.props.params.id),
			comment: CommentStore.comment
		})
	}
});


module.exports = imageDetail;