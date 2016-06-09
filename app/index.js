var USER_DATA = {
  name: 'Noah Springwater',
  username: 'noah-springwater'
}
var React = require('react');
var ReactDOM = require('react-dom');

var ProfileLink = React.createClass({
  render: function () {
    return (
      <div>
        <a href={'https://www.github.com/' + this.props.username} target='_blank'>
          {this.props.username}
        </a>
      </div>
    )
  }
});

var ProfileName = React.createClass({
  render: function () {
    return (
      <div>{this.props.name}</div>
    )
  }
});

var Avatar = React.createClass({
  render: function () {
    return (
      <div>
        <ProfileLink username={this.props.user.username}/>
        <ProfileName name={this.props.user.name}/>
      </div>
    )
  }
})

ReactDOM.render(
  <Avatar user={USER_DATA} />,
  document.getElementById('app')
);
