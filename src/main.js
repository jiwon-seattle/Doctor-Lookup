import $ from 'jquery';
import 'bootstrap' ;
import 'bootstrap/dist/css/bootstrap.min.css' ;
import './styles.css' ;
import { DoctorService } from './doctor-service';

$(document).ready(function() {

  $('#searchDoctorName').click(function(){
    $('#doctorName').toggle();
    $('#doctorIssue').toggle();
  })

  $('#searchIssue').click(function(){
    $('#doctorName').toggle();
    $('#doctorIssue').toggle();
  })

  $('#doctorIssue').submit(function(event) {
    event.preventDefault();
    const city = $('#locationIssue').val();
    const issue = $('#issue').val();
    $("#doctorsIntheCity").show();
    $("#doctorInformation").hide();

    cityIssueAPI(issue);

    async function cityIssueAPI(issue) {
        let doctorService = new DoctorService();
        const response = await doctorService.getDoctorByCity(city);
        let lan = response.results[0].geometry.lat
        let lng = response.results[0].geometry.lng
        const doctorResponse = await doctorService.getDoctors(issue, lan, lng);
        console.log('doctorResponse' + doctorResponse);
        let doctors = doctorService.doctors(doctorResponse);
        console.log(doctors)
        let doctorList = doctorService.doctorsProfile(doctorResponse)
        doctorList
      }
  });

    $('#doctorName').submit(function(event) {
      event.preventDefault();
      const city = $('#locationDoctor').val();
      const name = $('#name').val();
      console.log(name)
      $("#doctorsIntheCity").hide();
      $("#doctorInformation").show();

      cityNameAPI(name);

      async function cityNameAPI(name) {
          let doctorService = new DoctorService();
          const response = await doctorService.getDoctorByCity(city);
          let lan = response.results[0].geometry.lat
          let lng = response.results[0].geometry.lng
          const doctorResponse = await doctorService.getDoctorInfo(name, lan, lng);
          console.log('doctorResponse' + doctorResponse);
          let doctors = doctorService.doctors(doctorResponse);
          console.log(doctors)
          let doctorInfo = doctorService.doctorInfo(doctorResponse)
          doctorInfo
          console.log(doctorInfo.data)
        }
    });


  });
