<template>
<div>
  <draggable v-model="myArray" :options="{group:'people'}" @start="dragStart" @end="dragEnd">
   <div class="xixi" :style="{background:mappingColor(index)}"  v-for="(element, index) in myArray" :key="element.id">{{element.name}}</div>
</draggable>
<pre>{{myArray}}</pre>
</div>
</template>
<script>
import draggable from "vuedraggable";
export default {
  data() {
    return {
        myArray: [
            {
                id:1,
                name:'fuck'
            },
            {
                id:2,
                name:'you'
            },
            {
                id:3,
                name:'man'
            },
        ]
    };
  },
  components: {
    draggable
  },
  methods: {
      mappingColor(index) {
          switch (index) {
              case 0:
                    return 'red'  
                  break;
              case 1:
                    return 'blue'  
                  break;
              case 2:
                    return 'black'  
                  break;         
          }
      },
      dragStart(evt) {
          var vm = this;
      
        
      },
      dragEnd(evt) {
          console.log(evt)
          var oldIndex = evt.oldIndex,
              newIndex = evt.newIndex,
              vm = this;  
      }
  }
};
</script>

<style scoped>
.xixi {
  width: 30%;
  padding: 20px;
  margin: 30px;
  background: #ff0030;
  color: #fff;
  font-size: 21px;
  font-weight: bold;
  line-height: 1.3em;
  border: 2px dashed #fff;
  border-radius: 10px;
  box-shadow: 0 0 0 4px #ff0030, 2px 1px 6px 4px rgba(10, 10, 0, 0.5);
  text-shadow: -1px -1px #aa3030;
  font-weight: normal;
}
</style>

