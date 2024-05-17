<template>
    <div class="left">
        <div class="top">
            <el-input
        v-model="input2"
        class="inp"
        placeholder="搜索"
        :prefix-icon="Search"
      />
        </div>
        <div class="contactList">
            <div v-for="(item,index) in store.state.contact" 
             :class="classFun(index,store.state.current)"
             @click="contactFun(item,index)">
                <img :src="item.img" class="headPortrait">
                <div class="listDiv_right" >
                    <div>{{item.name}}</div>
                    <div class="message">
                        {{messageMax(item.lastMessage)}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue'
import { Calendar, Search } from '@element-plus/icons-vue'
import { useStore } from 'vuex'
import {useRouter} from 'vue-router'
const router =useRouter()
const input2 = ref('')
const store = useStore()
//最后消息最大字数
let messageMax = function(data){
    if(data.length>=13){
        return   data.slice(0,13)+"..."
    }
    return data
}
let classFun=function(a,b){
    return a==b?"chat":"listDiv"
}
let contactFun=function(item,index){
    router.push({path:`/${item.ChatPattern}`, query: {name:item.name}})   
    store.commit('setCurrent',index)
}
</script>

<style scoped lang='less'>
@import 'src/assets/color.less';
.left{
    width: 300px;
    height: 100%;
    background-color: #fff;
    .top{
        width: 100%;
        height: 60px;
        background-color: #fff;
        text-align: center;
        line-height: 60px;
        .inp{
            width: 80%;
        }
    }
    .listDiv,.chat{
        display: flex;
        align-items: center;
        padding:15px  20px;
        font-size: 16px;
        .listDiv_right{
            margin-left: 10px;
            .message{
                color: @dimFont;
                font-size: 12px;
            }
        }
    }
    .listDiv:hover{
        background-color:@themeColors;
    }
}
.chat{
    color: #fff;
    background-color: @chatColor;
    .message{
        color: #fff !important;
    }
}

</style>
