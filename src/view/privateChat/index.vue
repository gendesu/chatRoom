<template>
    <div class="stage">
        <div class="top">
            <div>{{name}}</div>
        </div>
        <div class="conter">
            <world-frame-chat-message :isPrivateChat="true"></world-frame-chat-message>
        </div>
        <div class="bottom">
            <chat-input-box></chat-input-box>
        </div>
    </div>
</template>

<script setup>
import {useStore} from 'vuex'
import {ref,computed} from 'vue'
import ChatInputBox from "../../components/ChatInputBox.vue";
import WorldFrameChatMessage from "../../components/WorldFrameChatMessage.vue";
const store = useStore();
let contact = store.state.contact;
let current = store.state.current;
let name = computed(()=>{
    return contact[current].name
})
</script>

<style scoped lang='less'>
@import 'src/assets/color.less';
.stage,.conter,.bottom{
    width: 100%;
    border: 1px solid @borderColor2;
    overflow: auto;
}
.stage{
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
}
.top{
    height: 60px;
    width: 100%;
    border: 1px solid @borderColor3;
    padding-left:15px;
    padding-bottom: 10px;
    display: flex;
    align-items:flex-end;
    font-size: 16px;
    color: black;
}
.conter{
    height: 65%;
}
.bottom{
    height: 35%;
}
</style>
