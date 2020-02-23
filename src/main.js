import $ from 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css'
import { DoctorService } from './doctor-service'

$(document).ready(function() {
  $('#searchDoctorName').click(function() {
    $(".doctorName").show();
    $(".Issue").hide();
  })

  $('#searchIssue').click(function() {
    $(".doctorName").hide();
    $(".Issue").show();
  })

  $('#doctorIssue').submit(function(event) {
    event.preventDefault()
    console.log('hi')

    const city = $('#location').val()
    const issue = $('#issue').val()
    //const doctorName = $('#doctorName').val()

    asynAPICall(issue)

    async function asynAPICall(issue) {
        let doctorService = new DoctorService()
        const response = await doctorService.getDoctorByCity(city)
        let lan = response.results[0].geometry.lat
        let lng = response.results[0].geometry.lng
        const doctorResponse = await doctorService.getDoctors(issue, lan, lng)
        console.log('doctorResponse' + doctorResponse)
        let doctors = doctorService.doctors(doctorResponse)
        console.log(doctors)
        let doctorList = doctorService.doctorsProfile(doctorResponse)
        console.log(doctorList.data.specialties[0])
        // let doctors = doctorService.doctorsProfile(doctorResponse)
        // console.log(doctors)

        //getElements(doctors)

        // let doctors = weatherService.doctors(response);
        // console.log(doctors[0])
        //getElements(response);
        // $('.showHumidity').text(doctors[0].bio)
      }

      // let hasbeenclicked = false;
      // $('#uid').click(function () {
      //   hasbeenclicked = true;
      // });


  })

  $('#doctorName').submit(function(event) {
    event.preventDefault()
    console.log('hello')
    $("#doctorsInCity").hide();

    const city = $('#location').val()
    const doctorName = $('#doctorName').val()

    asynAPICall(doctorName)

    async function asynAPICall(doctorName) {
        let doctorService = new DoctorService()
        const response = await doctorService.getDoctorByCity(city)
        let lan = response.results[0].geometry.lat
        let lng = response.results[0].geometry.lng
        const doctorResponse = await doctorService.getDoctorInfo(doctorName, lan, lng)
        console.log('doctorResponse' + doctorResponse)
        //let doctors = doctorService.doctors(doctorResponse)
        //console.log(doctors)
        let doctorDetail = doctorService.doctorInfo(doctorResponse)
        console.log(doctorDetail)
        // let doctors = doctorService.doctorsProfile(doctorResponse)
        // console.log(doctors)

        //getElements(doctors)

        // let doctors = weatherService.doctors(response);
        // console.log(doctors[0])
        //getElements(response);
        // $('.showHumidity').text(doctors[0].bio)
      }

      // let hasbeenclicked = false;
      // $('#uid').click(function () {
      //   hasbeenclicked = true;
      // });


  })

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
})
