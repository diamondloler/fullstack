import Vue from 'vue'
import Router from 'vue-router'
import my_server from './request/request'

Vue.use(Router);

/**
 * 匹配下一个路由
 */
function match_(str, array) {
  var flag = false;
  array.forEach(function (val) {
    if (new RegExp("^(" + val + ')').test(str)) {
      flag = true;
    }
    // if (str.indexOf(val) > -1) {
    //   str.indexOf(val) == 0 && (flag = true);
    // }
  })
  return flag;
}

const VueRouter = new Router({
  mode: 'hash',
  routes: [{
      path: "/",
      component: resolve => {
        require(['./page/home.vue'], resolve)
      },
      name: 'home'
    },
    {
      path: "/login",
      component: resolve => {
        require(['./page/login.vue'], resolve)
      },
      name: "login",
      alias: '/fuckman'
    },
    {
      path: "/random",
      component: resolve => {
        require(['./page/random.vue'], resolve)
      },
      name: 'random'
    },
    {
      path: "/example",
      component: resolve => {
        require(['./page/example.vue'], resolve)
      },
      name: 'example'
    },
    {
      path: "/vuedraggable",
      component: resolve => {
        require(['./page/vuedraggable.vue'], resolve)
      },
      name: 'example'
    }
  ]
})

VueRouter.beforeEach((to, form, next) => {
  if (match_(to.path, ['/login'])) {
    my_server.auth().then(res => {
      res.status == 1 && next('/')
    }).catch(() => {
      next()
    })
  } else {
    next()
  }

})

export default VueRouter
