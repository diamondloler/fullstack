<template>
  <div class="card-list">
        <slot></slot>  
   </div>
</template>
<script>
export default {
  name: "dz-collapse",
  data() {
    return {};
  },
  methods: {}
};
</script>
<style scope>
.card-list {
  font-size: 15px;
  margin-top: 1em;
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 5px 5px 5px 5px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
}
</style>

