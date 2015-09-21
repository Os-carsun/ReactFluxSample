var InputBar = React.createClass({
  getInitialState: function() {
    return {inputText:""};
  },
  _onChange(event){
    var value = event.target.value;
    this.setState({inputText:value})
  },
  render: function() {
    return (
      <div>
      Username: <input type="text" value={this.state.inputText} onChange={this._onChange}/>
      <SayHello name={this.state.inputText} />
      </div>
    );
  }
});
var SayHello = React.createClass({
  render: function () {
    if(this.props.name === ""){
      return <div>Hello,nobody</div>
    }else{
      return <div>Hello, {this.props.name}</div>
    }
  }
})
React.render(
  <InputBar/>,
  document.getElementById('example')
);