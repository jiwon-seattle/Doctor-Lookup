import $ from 'jquery';
import 'bootstrap' ;
import 'bootstrap/dist/css/bootstrap.min.css' ;
import './styles.css' ;
import { DoctorService } from './doctor-service';

$(document).ready(function() {
  $('#doctorLocationIssue').submit(function(event) {
    event.preventDefault();
    const city = $('#location').val();
    console.log(city)
    const issue = $('#issue').val();

    (async () => {
        let doctorService = new DoctorService();
        const response = await doctorService.getDoctorByCity(city);
        let lan = response.results[0].geometry.lat
        let lng = response.results[0].geometry.lng
        const doctorResponse = await doctorService.getDoctors(issue, lan, lng);
        console.log(doctorResponse);
        let doctors = doctorService.doctors(doctorResponse);
        console.log(doctors)
        let doctorList = doctorService.doctorsProfile(doctorResponse)
        console.log(doctorList)
        // let doctors = doctorService.doctorsProfile(doctorResponse)
        // console.log(doctors)

        //getElements(doctors)

        // let doctors = weatherService.doctors(response);
        // console.log(doctors[0])
        //getElements(response);
        // $('.showHumidity').text(doctors[0].bio)
      }) ();
  });


      //
      // fetch(`https://api.betterdoctor.com/2016-03-01/doctors?query=${issue}&location=${lat},${lng},100&skip=2&limit=20&user_key=632cb65d3c0037a4cd102982fbaee2a3`)
      //   .then(function(response){
      //     let json = response.json();
      //     return json
      //   }).then(function(json){
      //     console.log(json);
      //   })




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
//   });
//   //
//   // $(document).on('click', '.doctorsName', function() {
//   //
//
//
// });
//
// });
