import { imgName,ChatPattern } from "../utlis/index.js"
export default {
    state () {
        return {
          //layout/component/left.vue 左侧头像数据
            contact:[
              {
                name:"艾尔法拉",
                img:imgName[2],
                lastMessage:"哈哈哈哈",
                id:"",
                ChatPattern:ChatPattern[1]
              },
              {
                name:"艾尔法拉",
                img:imgName[2],
                lastMessage:"哈哈哈哈",
                ChatPattern:ChatPattern[1]
              },
              {
                name:"艾尔法拉",
                img:imgName[2],
                lastMessage:"哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
                ChatPattern:ChatPattern[1]
              },
              {
                name:"艾尔法拉",
                img:imgName[2],
                lastMessage:"哈哈哈哈",
                ChatPattern:ChatPattern[2]
              }
            ],
          //左侧头像数据-当前聊天
          current:0
        }
      },
      mutations: {
        addContact(state,data){
            state.contact.push(data)
        },
        setCurrent(state,index){
            state.current=index
        }
      }
}
