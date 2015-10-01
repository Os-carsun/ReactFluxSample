var alt = require('../alt.js');
import WebAPIUtil from "../utils/WebAPIUtil.js"

class AboutAction {
  getInfo() {
    // do get info
    this.dispatch();
    WebAPIUtil
        .getRemoteInfo()
        .then((res) => {
            console.log(res);
            this.actions.getInfoSuccess(JSON.parse(res.text));
        })
        .catch((e) => {
            console.log("error", e);
            this.actions.getInfoFail(e);
        });
  }

  getInfoSuccess (data){
    this.dispatch(data);
  }

  getInfoFail (errMessage){
    this.dispatch(errMessage);
  }

}

module.exports = alt.createActions(AboutAction);
