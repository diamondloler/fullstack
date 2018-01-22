<template>
 <el-container class="bitch">
    <el-header>
        <h1 style="color:#409EFF; letter-spacing:3px;">（三合会）会员登录</h1>
    </el-header>
    <transition name="el-zoom-in-top">
   <el-main class="fuck" v-show="flag">   
            <el-row type="flex" align="middle" justify="center">
                 <el-col :xl="5" :lg="6" :xs="15" :sm="15" :md="8"> <dz-input v-model="input" suffixIcon="el-icon-edit" >用户名</dz-input></el-col>
            </el-row>
            <el-row type="flex" align="middle" justify="center"  class="top">
                 <el-col :xl="5":lg="6" :xs="15" :sm="15" :md="8"><dz-input type="password" @keyup.enter="login" v-model="password" suffixIcon="el-icon-info" >密码</dz-input></el-col>
            </el-row>
            <el-row type="flex" align="middle" justify="center" class="top">
           <el-col :xl="5" :lg="6" :xs="15" :sm="15" :md="8"> <el-button type="primary" class="login-btn" :loading="flag2" @click="login">{{msg}}</el-button></el-col>
             </el-row>
             <el-row>
              
               <el-col :span="5"> <dz-select v-model="select_content" placeholder="请选择性别" >
                 <dz-option  v-for="item in sex_arr" :key="item" :disabled="item == '酷' ? '1': ''">{{item}}</dz-option>
               </dz-select></el-col>
              
             </el-row>
           <el-row>
               <el-col :offset="6" :span="5" ><dz-radio value="大家好" v-model="check_content"></dz-radio></el-col>
           </el-row> 
           <el-row class="top">
               <el-col :offset="6" :span="5" ><dz-radio value="你老妹" v-model="check_content"></dz-radio></el-col>
           </el-row>  
           <el-row type="flex" align="middle" justify="center">   
               <dz-collapse>
                   <dz-collapse-item v-for="(item, index) in fun_arr" :index="index" :key="item.title" >
                       <div slot="title">{{item.title}}</div>
                       <div slot="content">{{item.content}}</div>
                   </dz-collapse-item>
                </dz-collapse>  
           </el-row>
           
   </el-main>
   </transition>
   <el-footer>

   </el-footer>
   </el-container>
   
</template>
<script>
import fuckit from "../request/request.js";
export default {
  data() {
    return {
      input: "",
      flag: false,
      password: "",
      flag2: false,
      msg: "登录",
      select_content: "",
      check_content: "",
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
      sex_arr: ["你看你呀", "是真TMTM", "的炫酷", "狂拽", "螺旋", "棒"]
    };
  },
  watch: {
    check_content(val, oldVal) {
      console.log(val);
    },
    select_content(val, oldVal) {
      console.log(val);
    }
  },
  mounted() {
    console.log(1);
    this.flag = true;
    console.log(this.$router);
  },
  methods: {
    login() {
      var vm = this;
      this.flag2 = true;
      this.msg = "登录中";
      fuckit.login(vm.input, vm.password).then(
        login_flag => {
          var username = login_flag;
          vm.$alert("登陆成功！", "登录提示", {
            confirmButtonText: "确定",
            callback: action => {
              this.$message({
                type: "info",
                message: `欢迎: ${username}`
              });
            },
            beforeClose(action, module, done) {
              console.log(action);
              if (action == "confirm") {
                vm.$router.push({
                  path: "/"
                });
              }
              done();
            }
          });
        },
        error => {
          vm.flag2 = false;
          vm.msg = "登录";
          vm.$alert(error, "登录提示", {
            confirmButtonText: "确定"
          });
        }
      );
    },
    xixi() {
      console.log(666666);
      this.login();
    }
  }
};
</script>
<style scoped>
.fuck {
  margin-top: 20px;
}

.top {
  margin-top: 30px;
}
.login-btn {
  width: 100%;
}
.bitch {
  margin-top: 200px;
}
</style>