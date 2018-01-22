<template> 
      <li class="dz-option" @click="selected" :class="disabled == 1 ? 'disable':''" ><slot></slot>
      </li> 
</template>
<script>
import createBus from "../../server/bus";
var bus = createBus();
export default {
  props: {
    disabled: {
      type: [String, Number],
      default: 0
    }
  },
  data() {
    return {};
  },
  methods: {
    selected(event) {
      this.disabled == 0 && bus.$emit("option.select", event.target);
    }
  }
};
</script>
<style scoped>
.dz-option {
  padding: 0 20px;
  font-size: 15px;
  cursor: pointer;
  height: 34px;
  line-height: 34px;
  position: relative;
}
.disable {
  cursor: not-allowed;
  background-color: rgba(0, 0, 0, 0.3);
  opacity: 0.5;
}

.selected {
  color: #37723b;
  font-weight: bold;
}
.dz-option:hover {
  background-color: #eee;
}
.disable:hover {
  background-color: rgba(0, 0, 0, 0.3);
}
</style>

