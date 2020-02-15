export class WeatherService {
  async getWeatherByCity(city) {
    try {
      let response = await fetch(`https://api.betterdoctor.com/2018-03-01/doctors?location=37.773,-122.413,100&skip=2&limit=5&user_key=632cb65d3c0037a4cd102982fbaee2a3`);
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error) {
      console.error("There was an error handling your request: " + error.message);
    }
  }

  doctors(response) {
    this.response = response
    let doctors = []
      for (var i = 0; i <response.data.length; i ++) {
      doctors.push(response.data[i].profile)
    }return doctors
  }
}
