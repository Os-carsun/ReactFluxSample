import React from 'react';
import CalandarStore from '../stores/CalandarStore';
import CalandarAction from '../actions/CalandarAction';

class CalandarBar extends React.Component {
  
  constructor(props){
    super(props)
    this._onNextClick = this._onNextClick.bind(this);
  }

  _onNextClick() {
    CalandarAction.nextMonth();
  }

  _onLastClick() {
    CalandarAction.lastMonth();
  }

  render() {

    return(
      <div>
        <a onClick={this._onLastClick.bind(this)}> {"<<"} </a>
        <span>{`${this.props.year} year ${this.props.month} month`}</span>
        <a onClick={this._onNextClick}> {">>"} </a>
      </div>
    )
  }
}

class DateCell extends React.Component {
  render() {
    return <td>{this.props.date}</td>
  }
}

class DateTable extends React.Component {


  _CalTable() {
    let dates = [];
    let row = [];
    for(let k=0; k < this.props.begin.getDay(); k++ ){
      row.push(<DateCell key={k} date={" "}/>);
    }
    for(let k=this.props.begin.getDate(); k <= this.props.end.getDate(); k++ ){
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
  }

  render() {

    return (
      <table>
        <thead>
        </thead>
        <tbody>
          {this._CalTable().map((data,index)=> {
            return <tr key={index}>{data}</tr>
          })}
        </tbody>
      </table>
    )
  }
}

export default class Calandar extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = CalandarStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    CalandarStore.listen(this.onChange);
  }

  componentWillUnmount() {
    CalandarStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
    console.log(state);
  }
  
  render() {
    return (
      <div>
        <CalandarBar year={this.state.Year} month={this.state.Month} />
        <DateTable begin={this.state.BeginDate} end={this.state.LastDate}/>
      </div>
    );
  }
}