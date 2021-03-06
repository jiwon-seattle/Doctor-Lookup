import Handlebars from 'handlebars/dist/cjs/handlebars'

export class DoctorService {
  async getDoctorByCity(city) {
    try {
      let response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${city}&key=${process.env.API_KEY}`)
      if (response.ok && response.status == 200) {
        let jsonifiedResponse = await response.json()
        return jsonifiedResponse }
      else {
        return false
      }  
    } catch(error) {
      alert("There was an error handling your request: " + error.message)
    }
  }

  async getDoctors(issue, lat, lng) {
    try {
      let response = await fetch(`https://api.betterdoctor.com/2018-03-01/doctors?query=${issue}&location=${lat},${lng},100&skip=2&limit=30&user_key=${process.env.OTHER_API_KEY}`)
      if (response.ok && response.status == 200) {
        let jsonifiedResponse = await response.json()
        return jsonifiedResponse; }
      else {
        return false
      }
    } catch(error) {
      alert("There was an error handling your request " + error.message)
    }
  }

  async getDoctorInfo(name, lat, lng) {
    try {
      let response = await fetch(`https://api.betterdoctor.com/2018-03-01/doctors?last_name=${name}&location=${lat},${lng},100&skip=2&limit=20&user_key=${process.env.OTHER_API_KEY}`)
      if (response.ok && response.status == 200) {
        let jsonifiedResponse = await response.json()
        return jsonifiedResponse }
      else {
        return false
      }
    } catch(error) {
      alert("There was an error handling your request " + error.message)
    }
  }

  doctors(response) {
    let doctors = []
      for (var i = 0; i <response.data.length; i ++) {
      doctors.push(response.data[i].specialties[0].name)
    }return doctors
  }

  doctorsProfile (data) {
    var template = Handlebars.compile(document.getElementById('doctors-template').innerHTML)
    document.getElementById('doctorsInCity').innerHTML = template(data)
  }

  doctorInfo (data) {
    var template = Handlebars.compile(document.getElementById('doctorInfo-template').innerHTML)
    document.getElementById('doctorInformation').innerHTML = template(data)
  }
}
