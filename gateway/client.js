const { PingPongClient } = require('./gen/pingpong_grpc_web_pb');
const { PingRequest } = require('./gen/pingpong_pb');

/*
 * ホスト側からブラウザを使用してenvoy<->MSにアクセスしたい場合はgatewayのコンテナに入って以下のコマンドを実行
 * $ static -a 0.0.0.0 -p 8081
 * （portを変える場合はdocker-compose側も変更すること）
 * ホスト側は
 * http://0.0.0.0:8081/
 * でアクセスすること
 */
const hostname = `http://${process.env.GATEWAY_HOST}:${process.env.GATEWAY_PORT}`
console.log(`* hostname: ${hostname}`);
const client = new PingPongClient(hostname, null, null);
const request = new PingRequest();
request.setId(100);

client.ping(request, {}, (error, response) => {
    if (error) {
        console.log("----- error.");
        console.log(error);
    }
    console.log("----- response.");
    console.log(response);
    return response;
});
