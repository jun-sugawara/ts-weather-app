"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var weatherinfo_receiver_1 = require("./weatherinfo-receiver");
// apiキーをインポート
var api_1 = require("./api");
// アクセス先URLの基本部分の変数を用意
var weatherinfoURL = "https://api.openweathermap.org/data/2.5/weather";
// クエリパラメーターの元データとなるオブジェクトリテラルを用意
var params = {
    // 言語設定のクエリパラメーター
    lang: "ja",
    // 都市名を表すクエリパラメーター
    q: "Asaka",
    // APIキーのクエリパラメーター
    appId: api_1.$api_key
};
// クエリパラメーターを生成
var queryParams = new URLSearchParams(params);
// アクセスするURLの生成
var urlFull = "".concat(weatherinfoURL, "?").concat(queryParams);
// receiveWeatherInfo関数を実行
var promise = (0, weatherinfo_receiver_1.receiveWeatherInfo)(urlFull);
// 非同期処理成功の際の処理を定義
promise.then(function (weatherInfo) {
    // WeatherInfoオブジェクトから必要情報を取得して表示文字列を生成
    var message = "\u73FE\u5728\u306E".concat(weatherInfo.cityName, "\u306E\u5929\u6C17\u306F\u3001").concat(weatherInfo.weatherDesc, "\u3067\u3059\u3002\n\u7DEF\u5EA6\u306F").concat(weatherInfo.latitude, "\u3067\u7D4C\u5EA6\u306F").concat(weatherInfo.longitude, "\u3067\u3059");
    // 表示
    console.log(message);
});
// 非同期処理がエラーの際の処理を定義
promise.catch(function (error) {
    // エラー表示
    var message = "\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F\u3002\n\u30A8\u30E9\u30FC\u5185\u5BB9".concat(error);
    console.log(message);
});
// 非同期処理の成功・エラーに関わらず行う処理を定義
promise.finally(function () {
    console.log("すべての処理が完了しました");
});
