// 天気情報を表すクラス
export class WeatherInfo {
  // 天気情報JSONデータオブジェクト
  private _weatherInfoJSON: WeatherInfoJSON;
  
  // コンストラクタ
  constructor(weatherInfoJSON: WeatherInfoJSON){
    this._weatherInfoJSON = weatherInfoJSON;
  }
  //都市名を得るゲッタ
  get cityName(){
    return this._weatherInfoJSON.name;
  }
  // 緯度情報を得るゲッタ
  get latitude(){
    const coord = this._weatherInfoJSON.coord;
    return coord.lat;
  }
  // 軽度情報を得るゲッタ
  get longitude(){
    const coord = this._weatherInfoJSON.coord;
    return coord.lon;
  }
  // 天気情報を得るゲッタ
  get weatherDesc(){
    const weatherArray = this._weatherInfoJSON.weather;
    const weather = weatherArray[0];
    return weather.description;
  }
}

// 天気情報のJOSNデータ形式を定義したインターフェイス
interface WeatherInfoJSON{
  coord:{
    lon: number,
    lat: number
  },
  weather: {id: number, main: string, description: string, icon: string}[],
  main:{
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    humidity: number
  },
  visibility: number,
  wind:{
    speed: number,
    deg: number
  },
  clouds:{
    all: number
  },
  dt: number,
  sys:{
    type: number,
    id: number,
    country: string,
    sunrise: number,
    sunset: number
  },
  timezone: number,
  id: number,
  name: string,
  cod: number
}
