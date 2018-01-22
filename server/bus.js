import Vue from 'vue'

var createBus = function () {
  if (window["bus"]) {
    return window["bus"];
  }

  var bus = new Vue({});
  window.bus = bus;

  return bus;
}

export default createBus;
