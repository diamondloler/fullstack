import Vue from 'vue';
import VueResource from 'vue-resource';
import createBus from '../../server/bus';

var bus = createBus();

Vue.use(VueResource);

Vue.http.interceptors.push(function (request, next) {
  bus.$emit('ajax.start');

  next(response => {
    bus.$emit('ajax.end');
    try {
      var resp = response.data
      if (typeof (response.data) == "string") {
        resp = JSON.parse(response.data) || {};
      }

      if (resp && resp.error && resp.error.code == 401) {
        Vue.nextTick(function () {

        });
      }
    } catch (error) {
      console.log(error);
    }
  })
})

export default {
  getMsg() {
    return Vue.http.get('/api/getMsg', {
      'params': {
        id: '4'
      }
    }).then(res => {
      var result = res.json()
      return new Promise((resolve, reject) => {
        if (result && result.status == 1) {
          resolve(result.data);
        }
      })

    })
  },
  login(n, p) {
    return Vue.http.post('api/login', {
      username: n,
      password: p
    }, {
      emulateJSON: true
    }).then(res => {
      var result = res.body
      return new Promise((resolve, reject) => {
        if (result && result.status == 1) {
          resolve(result.data);
        } else {
          reject(result.error);
        }
      })
    })
  },
  auth() {
    return Vue.http.get('api/auth').then(res => {
      var result = res.body
      return new Promise((resolve, reject) => {
        if (result && result.status == 1) {
          resolve(result);
        } else {
          reject();
        }
      })
    })
  },
  quit() {
    return Vue.http.get('api/quit').then(res => {
      var result = res.body
      return new Promise((resolve) => {
        if (result && result.status == 1) {
          resolve(result);
        }
      })
    })
  }
}
