<template>
<main>
   <div class="loading">
        <div class="line" ref="line"></div>
    </div>
    <el-row class="mar">
       <el-col :span="5" :offset="10" :xs="{span:15,offset:3}"><dz-input v-model="s1">用户名</dz-input></el-col> 
    </el-row>
    <el-row class="mar">
       <el-col :span="5" :offset="10" :xs="{span:15,offset:3}"><dz-input v-model="s4" type="password">密码</dz-input></el-col> 
    </el-row>
    <el-row class="mar">
       <el-col :span="5" :offset="10" :xs="{span:15,offset:3}">
           <dz-select placeholder="It's funny" v-model="s2">
               <dz-option v-for="item in dj" :key="item" :disabled="item == '狂拽' ? '1':''">
                   {{item}}
               </dz-option>
           </dz-select>
        </el-col> 
    </el-row>
    <el-row class="mar">
       <el-col :span="5" :offset="10" :xs="{span:15,offset:3}" class="mars">你不爱我 &nbsp;<dz-radio value="你不爱我" v-model="s3"></dz-radio></el-col> 
       <el-col :span="5" :offset="10" :xs="{span:15,offset:3}" class="mars">你爱我 &nbsp;<dz-radio value="你爱我" v-model="s3"></dz-radio></el-col> 
    </el-row>
    <el-row class="mar">
       <el-col :span="5" :offset="10" :xs="{span:15,offset:3}">
            <dz-collapse>
           <dz-collapse-item v-for="(item, index) in fun_arr" :index="index" :key="item.title" >
                       <div slot="title">{{item.title}}</div>
                       <div slot="content">{{item.content}}</div>
                   </dz-collapse-item>
                    </dz-collapse></el-col> 
    </el-row>

</main>
</template>
<script>
 import smoothLoad from '../../lib/smooth-load/smooth-load'
 console.log(smoothLoad)
export default {
  data() {
    return {
      s1: "",
      s2: "",
      s3: "",
      fun_arr: [
        {
          title: "技术部部长牛批",
          content: "看钉钉看钉钉看钉钉看钉钉看钉钉看钉钉看钉钉看钉钉看钉钉看钉钉"
        },
        {
          title: "技术部部长牛批",
          content: "看钉钉看钉钉看钉钉看钉钉看钉钉看钉钉看钉钉看钉钉看钉钉看钉钉"
        },
        {
          title: "技术部部长牛批",
          content: "看钉钉看钉钉看钉钉看钉钉看钉钉看钉钉看钉钉看钉钉看钉钉看钉钉"
        },
        {
          title: "技术部部长牛批",
          content: "看钉钉看钉钉看钉钉看钉钉看钉钉看钉钉看钉钉看钉钉看钉钉看钉钉"
        },
        {
          title: "技术部部长牛批",
          content: "看钉钉看钉钉看钉钉看钉钉看钉钉看钉钉看钉钉看钉钉看钉钉看钉钉"
        },
        {
          title: "技术部部长牛批",
          content: "看钉钉看钉钉看钉钉看钉钉看钉钉看钉钉看钉钉看钉钉看钉钉看钉钉"
        }
      ],
      dj: ["你看你呀", "是真TMTM", "的炫酷", "狂拽", "螺旋", "棒"],
      s4: ""
    };
  },
  mounted() {
     var line = this.$refs.line,
         load = smoothLoad({
            elem: line,
            speed: 8000,
            easing: 'ease-in',
            loop: true
        })
    
  }
};
</script>
<style scoped>
.mar {
  margin-top: 50px;
  font-size: 17px;
}
.mars {
  margin-top: 15px;
  font-size: 17px;
  height: 30px;
  line-height: 30px;
}
.loading {
    position: absolute;
    top: 0;
    overflow-x: hidden;
    width: 100%;
}
.loading .line {
    background: #A12;
    height: 4px;
    width: 0;
}
</style>

