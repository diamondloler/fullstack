import Vue from 'vue';
import _ from 'lodash';

var resiver = (function () {

  var plugin = function (option) {
    var obj = _.assign({
      bitch: '',
      callback: false
    }, option)

    var bitch = function () {
      if (obj.bitch) {
        console.log('很他妈无聊')
      }
    }

    var handleZhuangB = function (callback) {
      callback && console.log('fuck you')

    }

    return {
      bind(el, binding) {
        if (el.tagName.toLowerCase() != 'div') {
          return;
        }

        el.setAttribute('data-dz', binding.expression + obj.bitch)

        bitch()
      },
      update(el, binding) {
        if (el.tagName.toLowerCase() != 'div') {
          return;
        }

        el.setAttribute('data-dz', binding.expression + obj.bitch)

        bitch()
      },
      unbind() {
        console.log('兄弟再见了')

        handleZhuangB(obj.callback)
      }
    }

  }
  return {
    install: function (Vue, option) {
      Vue.directive('dz', plugin(option))
    }
  }

})()

export default resiver;
