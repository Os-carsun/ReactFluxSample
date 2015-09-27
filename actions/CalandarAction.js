var alt = require('../alt');

class CalandarActions {
  nextMonth() {
    this.dispatch();
  }
  lastMonth(){
    this.dispatch();
  }
}

module.exports = alt.createActions(CalandarActions);
