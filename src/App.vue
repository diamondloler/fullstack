<template>
  <div id="app" v-dz="asd">
    <yiluye ref="luye"></yiluye>
    <fucktop :show="isLogin" item="5" msg="nice brother"></fucktop>
    <router-view></router-view>
    <dz-input>美滋滋</dz-input>
  </div>
</template>

<script>
import fucktop from "./components/fucktop";
import yiluye from "./components/yiluye";
import createBus from "../server/bus";

var bus = createBus();

export default {
  name: "app",
  data() {
    return {
      mycontent: null,
      asd: "美滋滋",
      isLogin: false,
      content: "123"
    };
  },
  watch: {
    content(val, oldVal) {
      console.log(val);
    }
  },
  mounted() {
    var vm = this;
    bus.$on("ajax.start", function(l) {
      vm.$refs.luye.start();
    });
    bus.$on("ajax.end", function(l) {
      vm.$refs.luye.finish();
    });
    bus.$on("login", function(val) {
      vm.isLogin = val;
    });
  },
  components: {
    fucktop,
    yiluye
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.input_ {
  font-size: 15px;
}
</style>
