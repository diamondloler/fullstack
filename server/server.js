var user_database = require('./database');

function my_api(module) {
  var format = function (status, data, error) {
    var status_ = status || 0
    var data_ = data || null
    var error_ = error || []

    return {
      data: data_,
      error: error_,
      status: status_,
      ssid: 'dsfgjhdjkIYIw2uyujh'
    };
  }

  return {
    api_emiter() {
      module.get('/api/getMsg', function (req, res) {
        if (req.query.id == 4) {
          res.jsonp(format({
            user_name: '张达志',
            password: 'pc9527'
          }))
        } else {
          res.jsonp(format({
            fail: '你输入的id不正确'
          }))
        }
      })

      module.post('/api/login', (req, res) => {
        var params = req.body;
        if (params.username && params.password) {
          user_database().user_login(params.username).then((back) => {
            if (back[0].password == params.password) {
              req.session.isLogin = true
              req.session.User = back[0]
              res.jsonp(format(1, params.username))
            } else {
              res.jsonp(format(0, null, ['密码错误']))
            }
          }).catch(() => {
            res.jsonp(format(0, null, ['用户不存在']))
          })
        } else {
          res.jsonp(format(0, null, '用户名或密码不能为空'))
        }
      }, () => {
        res.send('提交错误')
      })

      module.get('/api/auth', (req, res) => {
        var user_info = {},
          origin

        if (req.session.isLogin) {
          origin = req.session.User

          for (var key in origin) {
            if (key == 'password') continue;
            user_info[key] = origin[key]
          }

          res.jsonp(format(1, user_info))
        } else {
          res.jsonp(format(0))
        }


      })

      module.get('/api/quit', (req, res) => {
        req.session.isLogin = null
        req.session.User = null
        res.jsonp(format(1))
      })

    }
  }
}

module.exports = my_api;
