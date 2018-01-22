<template>
    <div class="input_field">
        <input :type="type" :id="rid" @focus="handleFocus" @blur="handlleBlur" @keyup="handleKeyup"  :value="currentValue" @input="update" >
        <label :for="rid"  :class="{'active': flag}"><slot></slot></label>
        <div class="line"></div>
        <i class="suff" :class="suffixIcon" v-if="suffixIcon"></i>
    </div>
</template>
<script>
import MixIn from "../mixin/mixin";
export default {
  name: "dz-input",
  mixins: [MixIn],
  props: {
    value: [Number, String],
    type: {
      type: String,
      default: "text"
    },
    suffixIcon: String,
    maxlength: Number,
    minlength: Number,
    readonly: Boolean,
    autofocus: Boolean,
    disabled: Boolean
  },
  data() {
    return {
      flag: false,
      currentValue: this.value,
      rid: ""
    };
  },
  watch: {
    value(val, oldVal) {
      this.currentValue = val;
    }
  },
  methods: {
    handleFocus(event) {
      this.flag = true;
      this.$emit("focus", event);
    },
    handlleBlur(event) {
      !this.currentValue && (this.flag = false);
      this.$emit("blur", event);
    },
    update(event) {
      var val = event.target.value;
      this.$emit("input", val);
      this.setCurrentValue(val);
    },
    handleKeyup(event) {
      this.$emit("keyup", event);
    },
    setCurrentValue(val) {
      this.currentValue = val;
    }
  },
  mounted() {
    this.currentValue && (this.flag = true);
  }
};
</script>
<style scoped>
.input_field {
  width: 100%;
  height: 30px;
  border-left: 1px solid #aaa;
  border-bottom: 1px solid #aaa;
  position: relative;
  font-size: 15px;
}

.input_field label {
  position: absolute;
  left: 13px;
  top: 7px;
  color: #aaa;
  letter-spacing: 1px;
  transition: 0.3s ease-out;
}

.input_field input {
  width: 100%;
  height: 30px;
  border: none;
  outline: none;
  padding: 0px 13px;
  box-sizing: border-box;
}

.active {
  color: #42b983 !important;
  transform: translateY(-130%);
  font-size: 12px !important;
}
.line {
  width: 0px;
  height: 2px;
  background: #42b983;
  position: absolute;
  bottom: -1px;
  transition: 0.5s ease-out;
}
.active ~ .line {
  width: 100%;
}

.input_field .suff {
  position: absolute;
  right: 10px;
  top: 7px;
}
</style>