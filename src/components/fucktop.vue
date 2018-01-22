<template>
  <nav>
     
      <span class="bitch"><span class="gou" @click="goHome">今晚打老虎--</span><el-button type="primary" v-if="!show" class="login-btn" size="small" @click="gogo">登录？
      </el-button>
      <el-button type="primary" v-if="show" class="login-btn" size="small">{{show.data.username}}
      </el-button>
      <el-button type="primary" v-if="show" class="login-btn" size="small" @click="quit_user">退出？
      </el-button></span> 
      <test  style="display:none;" ref="cool">
      <h1 slot="header">哈哈哈哈哈哈哈日你妈</h1>
      <p slot="">接口的画法几何时间快点收到货结合实际的看法和函数的尽快发货手机端客服户就是</p> 
      <p slot="footer">fuckyou@asdasd.com</p>  
      </test>
      <why :action='5'>
        <p ref="pure_el">fuck you son !</p>
      </why>
  </nav>
  
</template>

<script>
import user_server from "../request/request.js";
export default {
  name: "fucktop",
  props: {
    item: "",
    msg: "",
    show: ""
  },
  data() {
    return {};
  },
  methods: {
    gogo() {
      this.$router.push({
        name: "login"
      });
    },
    goHome() {
      this.$router.push({
        name: "home"
      });
    },
    quit_user() {
      user_server.quit().then(json => {
        this.$confirm("你确定要退出吗", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
          center: true
        })
          .then(() => {
            window.location.reload();
          })
          .catch(() => {
            this.$message({
              type: "warning",
              message: "够胆你就无退出"
            });
          });
      });
    }
  },
  mounted() {},
  components: {
    test: {
      render(createElement) {
        var header = this.$slots.header;
        var footer = this.$slots.footer;
        var body = this.$slots.default;

        return createElement("div", [
          createElement("header", header),
          createElement("main", body),
          createElement("footer", footer)
        ]);
      }
    },
    why: {
      functional: true,
      render(createElement, context) {
        function renderList() {
          var list = [];
          for (var i = 0; i < context.props.action; i++) {
            list.push(createElement("li", context.children));
          }
          return list;
        }

        return createElement(
          "ul",
          {
            attrs: {
              style: "display:none;"
            }
          },
          renderList()
        );
      },
      props: {
        action: {
          default: 0,
          required: true,
          type: Number
        }
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav {
  height: 60px;
  background-color: rgba(25, 35, 50, 0.98);
  text-align: center;
}
.bitch {
  color: #ccc;
  display: inline-block;
  margin-top: 15px;
  letter-spacing: 3px;
}
.gou {
  vertical-align: middle;
}
</style>
