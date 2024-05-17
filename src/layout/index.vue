<template>
    <div class="app">
        <div class="main">
            <div class="left">
                <left></left>
            </div>
            <div class="right">
                <RouterView/>
            </div>
        </div>
    </div>
</template>

<script setup>
import left from './component/left.vue'

</script>

<style lang="less" scoped>
@import 'src/assets/color.less';
.main{
    width: 970px;
    height: 650px;
    background-color: @themeColors;
    margin: auto;
    border: 1px solid @borderColor;
    border-radius: 7px;
    display: flex;
    overflow: hidden;
}
.app{
    width: 100%;
    height: 100%;
}
.right{
    width: 100%;
}
</style>
