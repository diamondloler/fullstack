<template>
    <div class="luye"  :class="status">
        
    </div>
</template>
<script>
import Vue from "vue";
export default {
  data() {
    return {
      status: ""
    };
  },
  methods: {
    start() {
      this.status = "start";
    },
    end() {
      var vm = this;
      this.status = "end";
      setTimeout(() => {
        vm.status = "";
      }, 800);
    }
  }
};
</script>
<style scoped>
.luye {
  height: 5px;
  width: 100%;
  position: fixed;
  left: 0;
  top: 60px;
}
.luye:before {
  display: block;
  width: 0%;
  height: 4px;
  /* background: #409eff; */
  background-image: linear-gradient(to right, #0074a2, #409eff, #6eb1f5);
  content: "";
}
.luye.start:before {
  animation: progress 5s linear;
}

.luye.end:before {
  width: 100%;
}
@keyframes progress {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}
</style>


