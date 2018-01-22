<template>
<div class="btn">
    <button @click="add">add</button><br>
    <button @click="remove">delete</button><br>
    <transition-group tag="ul" name="cool">
    <li v-for="(item, index) in arr" :key="item" :style="{'text-indent': index*randomIndex() +'px'}">{{item}}</li>
    </transition-group>
    <transition name="xixi" @enter="enter" @leave="leave" @before-enter="beforeEnter">
    <span :key="text" style="display:block;" ref="fuck">{{ text }}</span>
   </transition>
   <br>
   <input type="text" v-model="text">
   <div class="bigbox">
   </div>
   <h1  ref="h1">look at me ,pussy!</h1>
   <div class="niupi">
    美滋滋
   </div>
   <div class="card-list">
        <div class="card-one">
            <input type="radio" style="display: none;" name="six"  id="#good" checked>
            <label for="#good">render js click event</label>
            <div class="content">
                jkhsdjkfjksdjkjksadfsjkdfjksjkdfjksdhjhjkhgjkhfjkfhjkfhjkashdjkhjksfhkljhjkfhdjkghjkhgkhahjkfsdhjkfhjk
            </div>
        </div>
        <div class="card-one">
            <input type="radio" style="display: none;" name="six"  id="#good2">
            <label for="#good2">render js click event</label>
            <div class="content">
                jkhsdjkfjksdjkjksadfsjkdfjksjkdfjksdhjhjkhgjkhfjkfhjkfhjkashdjkhjksfhkljhjkfhdjkghjkhgkhahjkfsdhjkfhjk
            </div>
       </div>
        <div class="card-one">
            <input type="radio" style="display: none;" name="six"  id="#good3">
            <label for="#good3">render js click event</label>
            <div class="content">
                jkhsdjkfjksdjkjksadfsjkdfjksjkdfjksdhjhjkhgjkhfjkfhjkfhjkashdjkhjksfhkljhjkfhdjkghjkhgkhahjkfsdhjkfhjk
            </div>
       </div>
   </div>
</div>
</template>
<script>
'use strict';
    import velocity from 'velocity-animate';
    import fuckit from '../request/request.js';
    export default {
        data () {
            return {
                arr: [1, 2, 3, 4, 5, 6],
                init: 6,
                text:'6666',
                user_msg: null
            };
        },
        beforeRouteEnter(to, from, next) {
            console.log('你大哥我真之最快的')
            next(vm => {
                console.log(vm.init)
            });
        },
        beforeRouteLeave (to, from , next) {
            const answer = window.confirm('真系要翻屋企？')
            if (answer) {
                next()
            } else {
                next(false)
            }
        },
        methods:{
            randomIndex () {
                return Math.floor(Math.random() * this.arr.length);
            },
            add () {
                this.init++;
                this.arr.splice(this.randomIndex(), 0, this.init);
            },
            remove () {
                this.arr.splice(this.randomIndex(), 1);
            },
            beforeEnter (el){
               
                velocity(el, {opacity: 0})
            },
            enter (el, done) {
                 
                velocity(el, {opacity: 1, fontSize: '1.4em'},{duration: 300})
                velocity(el, {fontSize: '1em'},{complete: done})
            },
            leave (el, done) {

                 velocity(el, {translateX: '30px', rotateY: '60deg'},{
                     loop: 2,
                     duration: 600,
                     complete: done
                     })
            }        
        },
        created() {
             console.log('你大哥我是最快的??')
        },
         mounted () {
             var vm = this;
             console.log('你大哥我是最快的?')
            fuckit.getMsg().then(json => {
                console.log(json)
                vm.user_msg = json;
            })

        //    setInterval(() => {
        //        this.text +=  Math.floor(Math.random()* (10000 - 1000) + 1000);
        //        if(this.text.length > 10){
        //        this.text = this.text.slice(5,this.text.length);
        //        }
        //    }, 300)


            velocity.Easings.my_time_fun = function (p, opt, beopt) {
                return 1 - Math.cos((Math.random() * p) * Math.PI);
            }
            
            var p_el = this.$refs.fuck
            var h1 = this.$refs.h1
            velocity(h1,{opacity:0});
            // velocity(h1,'scroll',{duration:3000,easing:'ease-in',delay:1000})
            // velocity(h1,{opacity:1});
            // window.onscroll= function(){
            //     console.log(666)
            //      console.log(document.body.scrollHeight)
            //       console.log(document.body.clientHeight)
            //     if(document.body.scrollHeight == document.body.clientHeight + document.body.scrollTop){
            //          console.log(777)
            //        velocity(h1,{opacity:1},{duration:1000});
            //     }
            // }
            p_el.onmouseover = function () {
                velocity(this, {width:"100px"}, {duration: 3000, queue: false, easing: 'ease-in-out',
                begin: function(elements){
                    elements.forEach(function(val,index){
                        console.log(val);
                    })
                }});          
            }
            p_el.onmouseout = function () {                
                velocity(this, {width:"100%"}, {duration: 3000, queue: false,  easing: 'ease-in'});
            }
            
        },
        updated () {     
        //    setInterval(() => {
        //        this.add();
        //    }, 1000)
            var p_el = this.$refs.fuck
            p_el.onmouseover = function () {
                velocity(this, {width:"100px"}, {duration: 3000, queue: false});
            
            }
            p_el.onmouseout = function () {
                
                velocity(this, {width:"100%"}, {duration: 3000, queue: false});
            }
            
        }
    }
</script>
<style scoped lang="less" type="text/css">
 @base:5px;
    li {
        list-decoration:none;
        margin: 15px 0;
        text-align: left;
        
    }

    .cool-enter-active, .cool-leave-active{
        transition: all .5s ease;
        
    }
    .cool-enter, .cool-leave-to{
       opacity: 0;
       transform: translateX(30px);
       transform: rotate(30deg);
    }
    .btn {
        margin-top: 30px + @base;
        .niupi{
                @media screen {
                    color: green;
                    @media (min-width: 768px) {
                        color: red;
                }
            }
        }
        .card-list {
            margin-top:1em;
            & :first-child  {
                 border-top: 1px solid #ccc;     
            }   
               
            .card-one{
                width:30%;
                margin: 0 auto;    
                    input[type="radio"]{         
                        ~label{
                            padding: 20px;
                            display: block;       
                            transition: all .5s ease;
                            border: 1px solid #ccc;
                            box-sizing: content-box;
                            border-bottom: none;
                            border-top: none;
                            ~.content{                               
                                font-size:1em;                               
                                height:1px;
                                transition: all 0.4s ease-in-out;
                                border: 1px solid #ccc; 
                                line-height:1.5;
                                overflow:hidden;
                                word-wrap:break-word;
                            }
                        }
                        &:checked{
                            ~label{
                                color: red;
                                ~.content{
                                    height: 400px;
                                }
                            }
                        }
                }
            }
        }      
    }
    .bigbox{
        width:100vw;
        height:100vh;
        background:#ccc;
    }
    
</style>