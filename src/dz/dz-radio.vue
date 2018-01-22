<template>
  <span class="dz-radio">
      <input :value="value" type="radio" @change="handleChange" name="radio" :id="rid">
      <label :for="rid"></label>
  </span>
</template>
<script>
import MixIn from "../mixin/mixin";
export default {
  model: {
    prop: "checked",
    event: "change"
  },
  props: {
    value: [String, Number],
    checked: {
      type: String,
      default: ""
    }
  },
  mixins: [MixIn],
  data() {
    return {
      rid: null
    };
  },
  methods: {
    handleChange(event) {
      this.$emit("change", event.target.value);
    }
  }
};
</script>
<style scoped>
.dz-radio {
  display: block;
  height: 23px;
  width: 23px;
  float: left;
}
.dz-radio input[type="radio"] {
  display: none;
}
.dz-radio input[type="radio"] + label {
  height: 22px;
  width: 22px;
  position: relative;
  cursor: pointer;
}
.dz-radio input[type="radio"] + label:before {
  content: " ";
  border: 1px solid #000;
  width: 21px;
  height: 21px;
  margin: 0;
  border-radius: 3px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 0;
  transition: 0.28s ease;
}
.dz-radio input[type="radio"]:checked + label:before {
  top: -6px;
  left: -8px;
  width: 12px;
  height: 22px;
  border-top: 2px solid transparent;
  border-left: 2px solid transparent;
  border-right: 2px solid #26a69a;
  border-bottom: 2px solid #26a69a;
  transform: rotate(40deg);
  backface-visibility: hidden;
  transform-origin: 100% 100%;
}
</style>
