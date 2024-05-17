<template>
    <div class="main" @click="clickFun">
        <textarea rows="8" id="inp" 
        :autofocus="true" ref="inp" wrap="soft"></textarea> 
        <el-button type="primary" class="btn">发送</el-button>
    </div>
    
</template>

<script setup>
import {ref} from "vue"
let inp = ref(null)
let clickFun=()=>{
    inp.value.focus();
}
</script>

<style scoped lang='less'>
@import '../assets/color.less';
.main{
    width: 100%;
    height: 100%;
    padding: 10px;
}
#inp{
    border: none;
    background-color: @themeColors;
    width: 100%;
    font-size: 16px;
}
#inp:focus{
    outline: none;
    }
    .btn{
        float: right;
        margin-right:30px ;
        width: 80px;
    }
</style>
