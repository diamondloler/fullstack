<template>
  <div class="dz-select">
      <div class="input_field">
        <input :value="select_val" type="text" :placeholder="placeholder" :disabled="disabled">
         <div class="trigger" @click="trigger()">
        </div>
        <div class="trigger trigger_disabled" v-if="disabled">
        </div>
        <i class="suff el-icon-arrow-down" :class="show ? 'rotate': ''"></i>
        <div class="line"></div>  
    </div>
    <transition
      name="el-zoom-in-top">
     <ul class="option_list" v-show="show" ref="option_list">
       <slot></slot>
     </ul>
     </transition>
  </div>
</template>
<script>
import createBus from "../../server/bus";
var bus = createBus();
export default {
  model: {
    prop: "selected",
    event: "input"
  },
  props: {
    selected: {
      type: [String, Number],
      default: ""
    },
    placeholder: [String],
    disabled: [Boolean]
  },
  data() {
    return {
      mark: 1,
      show: false,
      select_val: ""
    };
  },
  methods: {
    trigger() {
      this.mark++;
      if (this.mark % 2 == 0) {
        this.show = true;
      } else {
        this.show = false;
      }
    }
  },
  mounted() {
    var vm = this;
    var ulist = vm.$refs.option_list;
    bus.$on("option.select", function(target) {
      vm.$emit("input", target.innerText);
      vm.select_val = target.innerText;
      vm.mark++;
      vm.show = false;
      vm.$nextTick(() => {
        var list = ulist.querySelectorAll("li");
        list.forEach(val => {
          val.classList.remove("selected");
        });
        target.classList.add("selected");
      });
    });
  }
};
</script>
<style scoped>
.dz-select {
  box-sizing: border-box;
  position: relative;
}

.dz-select .input_field {
  width: 100%;
  height: 30px;
  border-bottom: 1px solid #aaa;
  position: relative;
  font-size: 15px;
  transition: 0.2s ease-in-out;
}
.line {
  width: 100%;
  height: 2px;
  background: #42b983;
  position: absolute;
  bottom: -1px;
  transition: 0.5s ease-out;
}
.dz-select .input_field input {
  width: 100%;
  height: 30px;
  border: none;
  outline: none;
  padding: 0px 13px;
  box-sizing: border-box;
}
.dz-select .input_field .suff {
  position: absolute;
  right: 10px;
  top: 5px;
  font-size: 18px;
  transition: 0.2s ease-in-out;
}
.dz-select .trigger {
  width: 100%;
  height: 30px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
  cursor: pointer;
}
.dz-select .trigger_disabled {
  z-index: 3;
  cursor: not-allowed;
}
.dz-select .input_field .rotate {
  transform: rotate(-180deg);
  color: #42b983;
}
.dz-select .option_list {
  padding: 6px 0;
  position: absolute;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 3px;
  top: 40px;
  background: #fff;
  z-index: 666;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
}
.dz-select .option_list:after,
.dz-select .option_list:before {
  bottom: 100%;
  left: 50%;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
}

.dz-select .option_list:after {
  border-color: rgba(255, 255, 255, 0);
  border-bottom-color: #fff;
  border-width: 5px;
  margin-left: -5px;
}
.dz-select .option_list:before {
  border-color: rgba(228, 221, 245, 0);
  border-bottom-color: #ccc;
  border-width: 6px;
  margin-left: -6px;
}
</style>


