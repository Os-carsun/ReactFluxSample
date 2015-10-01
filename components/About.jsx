import React from 'react';
import AboutAction from "../actions/AboutAction.js";
import AboutStore from "../stores/AboutStore.js";
export default class  About extends React.Component {
  
  constructor(props){
    super(props)
    this.state = AboutStore.getState();
    this.onChange = this.onChange.bind(this);
    AboutAction.getInfo();

  }
  componentDidMount() {
    AboutStore.listen(this.onChange);
  }

  componentWillUnmount() {
    AboutStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
    console.log(state);
  }
  

  render() {
    if(this.state.allInfo.length > 0){
      return(
        <div>
          {this.state.allInfo.map(
            (data,index)=>{
              return <div key={index}>{`${data.fname} ${data.lname}`}</div>
            }
          )}
        </div>
      )
    }else{
      return(
        <div>
          {"nothing~"}
        </div>
      )
    }
  }
}