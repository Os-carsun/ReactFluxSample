var React = require('react');
var CalandarStore = require('../stores/CalandarStore');
var CalandarAction = require('../actions/CalandarAction');

var CalandarBar = React.createClass({
  
  _onNextClick() {
    CalandarAction.nextMonth();
  },

  _onLastClick() {
    CalandarAction.lastMonth();
  },

  render() {
    return(
      <div>
        <a onClick={this._onLastClick}> {"<<"} </a>
        <span>{this.props.year}year {this.props.month}month</span>
        <a onClick={this._onNextClick}> {">>"} </a>
      </div>
    )
  }
})

var DateCell = React.createClass({
  render() {
    return <td>{this.props.date}</td>
  }
})

var DateTable = React.createClass({


  _CalTable() {
    var dates = [];
    var row = [];
    for(var k=0; k < this.props.begin.getDay(); k++ ){
      row.push(<DateCell key={k} date={" "}/>);
    }
    for(var k=this.props.begin.getDate(); k <= this.props.end.getDate(); k++ ){
      row.push(<DateCell key={k+"d"} date={k}/>);
      if(row.length > 6){ 
        dates.push(row);
        row = [];
      }
    }
    if(row.length > 0) 
      dates.push(row);
    console.log(dates)
    return dates;
  },

  render() {

    return (
      <table>
        <thead>
        </thead>
        <tbody>
          {this._CalTable().map(function(data,index) {
            return <tr key={index}>{data}</tr>
          })}
        </tbody>
      </table>
    )
  }
})

var Calandar = React.createClass({
  getInitialState() {
    return CalandarStore.getState();
  },

  componentDidMount() {
    CalandarStore.listen(this.onChange);
  },

  componentWillUnmount() {
    CalandarStore.unlisten(this.onChange);
  },

  onChange(state) {
    this.setState(state);
    console.log(state);
  },
  
  render() {
    return (
      <div>
        <CalandarBar year={this.state.Year} month={this.state.Month} />
        <DateTable begin={this.state.BeginDate} end={this.state.LastDate}/>
      </div>
    );
  }
});

module.exports = Calandar;