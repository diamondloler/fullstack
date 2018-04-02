<template>
    <el-contianer>
        <el-main class="xixi">
    
            <el-carousel :interval="4000" type="card" height="360px" >
    
                <el-carousel-item v-for="item in 4">
    
                    <img src="../assets/666.jpg" :alt="item" class="banner">
    
                </el-carousel-item>
    
            </el-carousel>
    
        </el-main>
    
        <el-footer>
            {{justTest}}
        </el-footer>
    
    </el-contianer>
</template>
<script>
import fuckit from '../request/request.js';
import createBus from '../../server/bus';
import {mapState} from 'vuex';
var bus = createBus()
    export default {
    
        data() {
    
            return {
                isLogin:false,
                user: {
                    username:''
                },
                test: 6666
    
            }
    
        },
        computed: mapState({
            numAlias: 'num',
            justTest (state) {
                return state.num + this.test
            }
        }),
        mounted () {
            var vm = this;
            console.log(vm.$store)
            console.log(vm.$store.getters.getNum)
            vm.$store.commit('add')
            vm.$store.dispatch('changeNum', 9527)
            fuckit.auth().then(user => {
                console.log(user)
                vm.isLogin = true
                vm.user.username = user.username;
                bus.$emit('login',user)
            }).catch(() => {
                 console.log(66666)
                 vm.isLogin = false
                 bus.$emit('login',false)
            })
        }
    
    }
</script>
<style >
    .el-carousel__item h3 {
    
        color: #475669;
    
        font-size: 14px;
    
        opacity: 0.75;
    
        line-height: 200px;
    
        margin: 0;
    
    }
    
    
    
    .el-carousel__item:nth-child(2n) {
    
        background-color: #99a9bf;
    
    }
    
    
    
    .el-carousel__item:nth-child(2n+1) {
    
        background-color: #d3dce6;
    
    }
    
    
    
    .banner {
    
       
    
        overflow: hidden;
    
        display: block;
    
    }
 .el-carousel__container .el-carousel__arrow{
       background-color: green;
    }
</style>