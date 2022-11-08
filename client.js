const net = require('net');
const port = 1234;
const host = '127.0.0.1';

/** 创建 socket 客户端 */
const client = new net.Socket();
/** 设置成 server 一致的编码格式 */
client.setEncoding('binary');

/** 使用 connect 方法链接服务端，必须要保证端口、编码格式一致 */
client.connect(port, host, function () {
  /** 向服务端发送数据 */
  client.write('Ping! Hello, Liyinghe.');
});

client.on('data', function (data) {
  console.log('Server send:',data);
});

client.on('error', function (error) {
  console.log('error:' + error);
  /** 通过 destory 方法关闭连接 */
  client.destory();
});

client.on('close', function () {
  /** 关闭连接 */
  console.log('Connection closed');
});
