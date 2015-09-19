var JustTemplate = React.createClass({
  render: function() {
    return (
      <div>Hello! {this.props.name}</div>
    );
  }
});
var Show = React.createClass({
  render: function() {
    var templates = [];
    for(var k=10; k>0; k--){
      templates.push(<JustTemplate name={k}/>)
    }
    return (
      <div className="Show">
        {templates}
      </div>
    );
  }
});
React.render(<Show />, document.getElementById('example'));