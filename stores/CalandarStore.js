var alt = require('../alt');
var CalandarActions = require('../actions/CalandarAction.js');

class CalandarStore {
  constructor() {
    this.date = new Date(); 
    this.Month = this.date.getMonth() + 1;
    this.Year = this.date.getFullYear();
    this.BeginDate = new Date(this.Year, this.Month-1, 1);
    this.LastDate = new Date(this.Year, this.Month, 0);

    this.bindListeners({
      handleNextMonth: CalandarActions.NEXT_MONTH,
      handleLastMonth: CalandarActions.LAST_MONTH
    });
  }

  handleNextMonth() {
    this.date.setMonth( this.date.getMonth() + 1 );
    this.Month = this.date.getMonth() + 1;
    this.Year = this.date.getFullYear();
    this.BeginDate = new Date(this.Year, this.Month-1, 1);
    this.LastDate = new Date(this.Year, this.Month, 0);

  }
  handleLastMonth() {
    this.date.setMonth( this.date.getMonth() - 1 );
    this.Month = this.date.getMonth() + 1;
    this.Year = this.date.getFullYear();
    this.BeginDate = new Date(this.Year, this.Month-1, 1);
    this.LastDate = new Date(this.Year, this.Month, 0);

  }
}

module.exports = alt.createStore(CalandarStore, 'CalandarStore');
