"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeatherInfo = void 0;
// 天気情報を表すクラス
var WeatherInfo = /** @class */ (function () {
    // コンストラクタ
    function WeatherInfo(weatherInfoJSON) {
        this._weatherInfoJSON = weatherInfoJSON;
    }
    Object.defineProperty(WeatherInfo.prototype, "cityName", {
        //都市名を得るゲッタ
        get: function () {
            return this._weatherInfoJSON.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WeatherInfo.prototype, "latitude", {
        // 緯度情報を得るゲッタ
        get: function () {
            var coord = this._weatherInfoJSON.coord;
            return coord.lat;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WeatherInfo.prototype, "longitude", {
        // 軽度情報を得るゲッタ
        get: function () {
            var coord = this._weatherInfoJSON.coord;
            return coord.lon;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WeatherInfo.prototype, "weatherDesc", {
        // 天気情報を得るゲッタ
        get: function () {
            var weatherArray = this._weatherInfoJSON.weather;
            var weather = weatherArray[0];
            return weather.description;
        },
        enumerable: false,
        configurable: true
    });
    return WeatherInfo;
}());
exports.WeatherInfo = WeatherInfo;
