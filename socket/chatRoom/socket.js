module.exports= function (io) {
    io.on("connection",(socket)=>{
        console.log("连接成功");

        //新加入
        socket.on('join',name=>{
            socket.emit("welcome",socket.id)
        })

        //  已登录时使用旧id
        socket.on("setId",(data)=>{
        })

        //私聊
        socket.on("privateChat",(data)=>{
            socket.to(data.toId).emit("privateChat",data)
        })
        //群聊
        socket.on("groupChat",(data)=>{
            socket.broadcast.emit("groupChat",data)
        })
        
        socket.on('disconnecting',()=>{
            console.log('断开')
        })

    })
  }