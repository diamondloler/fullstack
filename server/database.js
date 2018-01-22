var mysql = require('mysql')

var data_base = function () {
  var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'test'
  });

  return {
    user_login: function (username) {
      return new Promise((resolve, reject) => {
        connection.connect(function () {
          connection.query('select * from user_info where username = ?', [username], function (err, results) {
            if (err) throw err;
            if (results) {
              resolve(results)
            } else {
              reject()
            }
          })
        })
      });
    }
  }
}

module.exports = data_base;
