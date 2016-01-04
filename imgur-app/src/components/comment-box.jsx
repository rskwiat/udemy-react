var React = require('react');

var comments = React.createClass({
  render: function(){
    return <ul className="list-group">
      {this.renderComments()}
    </ul>
  },
  renderComments: function() {
    return this.props.comments.slice(0, 20).map(function(comment){
      return <li className="list-group-item comment-box" key={comment.id}>
        <span className="badge">{comment.ups}</span>
        <h5>{comment.author}</h5>
        {comment.comment}
      </li>
    })
  }
});

module.exports = comments;