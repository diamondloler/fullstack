<template>
   <div class="card-one">
            <input type="radio" style="display: none;" name="six"  :id="rid" :checked="index == expanded ? true : ''">
            <label :for="rid" :class="index == 0 ? 'first' : ''"><slot name="title"></slot></label>
            <div class="content">
                <slot name="content"></slot>
            </div>
    </div>
</template>
<script>
import MixIn from "../mixin/mixin";
export default {
  name: "dz-collapse-item",
  mixins: [MixIn],
  props: {
    index: {
      type: Number,
      default: 0
    },
    expanded: {
      type: [Number, String],
      default: null
    }
  },
  data() {
    return {
      rid: null
    };
  }
};
</script>
<style scoped>
.card-one {
  width: 100%;
  margin: 0 auto;
}
.card-one input[type="radio"] {
  display: none;
}
.card-one input[type="radio"] ~ label {
  display: block;
  transition: all 0.5s ease;
  border: 1px solid #ccc;
  box-sizing: content-box;
  border-bottom: none;
  border-top: none;
  background: #37723b;
  color: #eee;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  cursor: pointer;
}
.card-one input[type="radio"] ~ label div {
  padding: 20px;
}
.card-one input[type="radio"] ~ label ~ .content {
  font-size: 1em;
  height: 1px;
  transition: all 0.4s ease-in-out;
  border: 1px solid #ccc;
  line-height: 1.5;
  overflow: hidden;
  word-wrap: break-word;
}
.card-one input[type="radio"] ~ label ~ .content div {
  padding: 15px 30px;
}
.card-one input[type="radio"]:checked ~ label {
  color: #fff;
}
.card-one input[type="radio"]:checked ~ label ~ .content {
  height: 200px;
}
.card-one input[type="radio"] ~ .first {
  border-top: 1px solid #ccc;
}
</style>
