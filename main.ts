// receiveWeatherInfo関数をインポート
import { WeatherInfo } from "./WeatherInfo";
import {receiveWeatherInfo} from "./weatherinfo-receiver";
// apiキーをインポート
import { $api_key } from "./api";

// アクセス先URLの基本部分の変数を用意
const weatherinfoURL = "https://api.openweathermap.org/data/2.5/weather";
// クエリパラメーターの元データとなるオブジェクトリテラルを用意
const params: {
  lang: string,
  q: string,
  appId: string
} = {
  // 言語設定のクエリパラメーター
  lang: "ja",
  // 都市名を表すクエリパラメーター
  q: "Asaka",
  // APIキーのクエリパラメーター
  appId: $api_key
}

// クエリパラメーターを生成
const queryParams = new URLSearchParams(params);
// アクセスするURLの生成
const urlFull = `${weatherinfoURL}?${queryParams}`
// receiveWeatherInfo関数を実行
const promise = receiveWeatherInfo(urlFull);

// 非同期処理成功の際の処理を定義
promise.then(
  (weatherInfo: WeatherInfo) => {
    // WeatherInfoオブジェクトから必要情報を取得して表示文字列を生成
    const message = `現在の${weatherInfo.cityName}の天気は、${weatherInfo.weatherDesc}です。\n緯度は${weatherInfo.latitude}で経度は${weatherInfo.longitude}です`;
  // 表示
  console.log(message);
  }
);

// 非同期処理がエラーの際の処理を定義
promise.catch(
  (error) => {
    // エラー表示
    const message = `エラーが発生しました。\nエラー内容${error}`;
    console.log(message);
  }
);

// 非同期処理の成功・エラーに関わらず行う処理を定義
promise.finally(
  () => {
    console.log("すべての処理が完了しました");
  }
)
