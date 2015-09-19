var JustTemplate = React.createClass({
  getDefaultProps: function() {
    return {
      name: 'default value'
    };
  },
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
        <JustTemplate/>
      </div>
    );
  }
});
React.render(<Show />, document.getElementById('example'));