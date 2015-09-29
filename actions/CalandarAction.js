import alt from '../alt';

class CalandarActions {
  nextMonth() {
    this.dispatch();
  }
  lastMonth(){
    this.dispatch();
  }
}

export default alt.createActions(CalandarActions);
