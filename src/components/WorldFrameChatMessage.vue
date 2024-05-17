<template>
    <div class="main">
        <div class="stage">
            <div v-for="item in chattingRecords" class="chattingRecords" :class="{isMe:item.isMe}" >
                <img :src="item.img" v-show="!item.isMe">
                <div class="right" v-show="!item.isMe">
                    <div class="name" v-show="isPrivateChat">{{item.name}}</div>
                    <div :class="classFun(item.isMe)">{{item.content}}</div>
                </div>
                <div class="right" v-show="item.isMe">
                    <div class="name" v-show="isPrivateChat">{{item.name}}</div>
                    <div :class="classFun(item.isMe)">{{item.content}}</div>
                </div>
                <img :src="item.img" v-show="item.isMe">

            </div>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue'
import {imgName} from '../utlis/index'
defineProps(['isPrivateChat'])
let chattingRecords=ref([
    {
        name:"艾尔法拉",
        isMe:false,
        img:imgName[2],
        content:"第一次发言"
    },
    {
        name:"我",
        isMe:true,
        img:imgName[1],
        content:"第一次发言"
    },
    {
        name:"艾尔法拉",
        isMe:false,
        img:imgName[2],
        content:"第一次发言"
    },
    {
        name:"我",
        isMe:true,
        img:imgName[1],
        content:"第一次发言"
    },
    {
        name:"艾尔法拉",
        isMe:false,
        img:imgName[2],
        content:"第一次发言"
    },
    {
        name:"我",
        isMe:true,
        img:imgName[1],
        content:"第一次发言"
    },
    {
        name:"艾尔法拉",
        isMe:false,
        img:imgName[2],
        content:"第一次发言"
    },
    {
        name:"我",
        isMe:true,
        img:imgName[1],
        content:"第一次发言"
    },
])
let classFun=( isMe)=>{
    if(isMe)return 'chatBlockMe'
    return 'chatBlock'
}
</script>

<style scoped lang='less'>
@import '../assets/color.less';
img{
    width: 35px;
    height: 35px;
    border-radius: 50%;
    margin: 10px;
}
.right{
    font-size: 12px;
    color: black;
    .name{
        font-size: 10px;
        color: @dimFont;
    }
}
.chattingRecords{
    display: flex;

    .chatBlockMe{
        background-color: @chatColor;
        color: white;
    }
    .chatBlock{
        background-color: white;
    }
    .chatBlock,.chatBlockMe{
        padding: 10px;
        border-radius: 10px;
    }
}
.isMe{
    justify-content: flex-end;
    display: flex;
    .name{
        text-align: right;
    }
}
</style>
