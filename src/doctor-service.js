import Handlebars from 'handlebars/dist/cjs/handlebars'

export class DoctorService {
  async getDoctorByCity(city) {
    try {  
      let response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${city}&key=${process.env.API_KEY}`)
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error) {
      console.error("There was an error handling your request: " + error.message);
    }
  }
  async getDoctors(issue, lat, lng) {
    try {
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?query=${issue}&location=${lat},${lng},100&skip=2&limit=20&user_key=${process.env.OTHER_API_KEY}`)
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error) {
      console.error("There was an error handling your request " + error.message);
    }
  }


  doctors(response) {
  //  this.response = response
    let doctors = []
      for (var i = 0; i <response.data.length; i ++) {
      doctors.push(response.data[i].uid)
    }return doctors
  }


  doctorsProfile (data) {
    var template = Handlebars.compile(document.getElementById('doctors-template').innerHTML);
    document.getElementById('doctorsInCity').innerHTML = template(data);

    // var doctorsInfo = document.getElementById('doctorsInCity').innerHTML);
    // document.getElementById('doctorsInCity').innerHTML = template(data);
    document.getElementById(data.data[0].ui).onclick(function(event) {
      console.log("doctor name clicked");
    })
    console.log(data)

  }
}
