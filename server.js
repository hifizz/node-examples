const net = require("net");

const port = 1234;

const server = net
  /** 创建 socket 服务端 */
  .createServer(function (socket) {
    console.log(
      "Info: connect -> " + socket.remoteAddress + ":" + socket.remotePort
    );

    socket.setEncoding("binary");

    /** 监听 data 事件，接收数据 */
    socket.on("data", function (data) {
      console.log("Client send: " + data);
    });

    socket.write("Pong! Hello, I am Wangxiaobo.");

    socket.on("error", function (exception) {
      console.log("socket error:" + exception);
      socket.end();
    });

    /** 客户端关闭事件 */
    socket.on("close", function (data) {
      console.log("client closed!");
    });
  })
  .listen(port);

server.on("listening", function () {
  console.log("server listening: " + server.address().port);
});

server.on("error", function (exception) {
  console.log("server error:" + exception);
});
