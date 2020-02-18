import $ from 'jquery';
import 'bootstrap' ;
import 'bootstrap/dist/css/bootstrap.min.css' ;
import './styles.css' ;
import { DoctorService } from './doctor-service';

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    const city = $('#location').val();
    $('#location').val("");

    (async () => {
      let doctorService = new DoctorService();
      const response = await doctorService.getDoctorByCity(city);
      let lan = response.results[0].geometry.lat
      let lng = response.results[0].geometry.lng
      const doctorResponse = await doctorService.getDoctors(lan, lng);
      console.log(doctorResponse.data);
      //let doctors = weatherService.doctors(doctorResponse);
      //console.log(doctors)
      let doctorList = doctorService.doctorsProfile(doctorResponse)
      console.log(doctorList)
      let doctors = doctorService.doctors(doctorResponse)
      console.log(doctors)
      //getElements(doctors)

      // let doctors = weatherService.doctors(response);
      // console.log(doctors[0])
      //getElements(response);
      // $('.showHumidity').text(doctors[0].bio)
    }) ();


    //function getElements (doctors) {
      //let pictures = ""
    //  for (var i = 0; i < doctors.length; i++;) {
    //  $('#picture').append(`<img src = ${doctors[0].image_url}>`);
  // //  } return pictures
  //     console.log(pictures)
  //     $('.picture').append(pictures[0]);
    //  $('.showTemp').text(`${response.data}`);
      //console.log('response is' + response.data)
      //console.log(response.results)
  //  }
    //}
  });

  $(document).on('click', '.doctorsName', function() {
    alert('hi');

});

});
