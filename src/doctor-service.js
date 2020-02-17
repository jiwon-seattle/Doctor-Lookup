import Handlebars from 'handlebars/dist/cjs/handlebars'

export class DoctorService {
  async getWeatherByCity(city) {
    try {
      let response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${city}&key=2a9d41f98613441097ecd86dd8ed4916`)
      //let response = await fetch(`https://api.betterdoctor.com/2018-03-01/doctors?location=37.773,-122.413,100&skip=2&limit=5&user_key=632cb65d3c0037a4cd102982fbaee2a3`);
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error) {
      console.error("There was an error handling your request: " + error.message);
    }
  }
  async getDoctors(lat, lng) {
    try {
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?location=${lat},${lng},100&skip=2&limit=20&user_key=632cb65d3c0037a4cd102982fbaee2a3`)
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error) {
      console.error("There was an error handling your request " + error.message);
    }
  }


  doctors(response) {
  //  this.response = response
    let doctors = []
    let doctorsNumber = []
      for (var i = 0; i <response.data.length; i ++) {
      doctors.push(response.data[i].practices[0].uid)

    }return doctors
  }


  doctorsProfile (data) {
      var template = Handlebars.compile(document.getElementById('doctors-template').innerHTML);
      document.getElementById('doctorsInCity').innerHTML = template(data);
    }

  // doctorsInformation (data) {
  //   var
  // }
}
