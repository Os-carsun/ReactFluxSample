var request = require('superagent');
var WebAPIUtil = {
  getRemoteInfo: function(){
    //http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&pretty=true
    return new Promise(function (resolve, reject) {
        // simulate an asynchronous action where data is fetched on
        // a remote server somewhere.
        request
           .get('http://www.filltext.com/')
           .send({ rows: '10' })
           .send({ fname: "{firstName}" })
           .send({ lname: '{lastName}' })
           .on('error', function(err, res){
            reject(err);
           })
           .end(function(res,err){
                resolve(res);
           });
    });
  }
}
module.exports = WebAPIUtil;
