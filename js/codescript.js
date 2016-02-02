$(document).ready(function() {
 //for the strenght indicator
 var a = 0;
 var b = 0;
 var c = 0;
 var d = 0;
 var e = 0;
 var isEducateInfo = 0;
 progress(a + b + c + d + e, $('#progressBar'));
 //indicator is hidden by default
 $("#pswd_info").hide();
 $("#setYourOwn").hide();
 $("#question2").hide();
 $("#question3").hide();
 $("#question4").hide();
 $("#question5").hide();
 $("#buttondiv2").hide();
 $("#buttondiv3").hide();
 $("#buttondiv4").hide();
 $("#buttondiv5").hide();
 document.getElementById("next_button1").disabled = true; 
 document.getElementById("next_button2").disabled = true; 
 document.getElementById("next_button3").disabled = true; 
 document.getElementById("next_button4").disabled = true; 
 document.getElementById("next_button5").disabled = true; 
 $('#pswd').keyup(function() {

  //get the text inserted as answer
  var pswd = $('#pswd').val();
  $("#pswd_info").show();
  // validate the length 
  if (pswd.length < 8) {
   $('#length').removeClass('valid').addClass('invalid');
   a = 0;
   progress(a + b + c + d + e, $('#progressBar'));
  } else {
   $('#length').removeClass('invalid').addClass('valid');
   a = 20;
   progress(a + b + c + d + e, $('#progressBar'));
  }

  //validate letter
  if (pswd.match(/[A-z]/)) {
   $('#letter').removeClass('invalid').addClass('valid');
   b = 20;
   document.getElementById("next_button1").disabled = false; 
 document.getElementById("next_button2").disabled = false; 
 document.getElementById("next_button3").disabled = false; 
 document.getElementById("next_button4").disabled = false; 
 document.getElementById("next_button5").disabled = false; 
   progress(a + b + c + d + e, $('#progressBar'));
  } else {
   $('#letter').removeClass('valid').addClass('invalid');
   b = 0;
 document.getElementById("next_button1").disabled = true; 
 document.getElementById("next_button2").disabled = true; 
 document.getElementById("next_button3").disabled = true; 
 document.getElementById("next_button4").disabled = true; 
 document.getElementById("next_button5").disabled = true; 
   progress(a + b + c + d + e, $('#progressBar'));
  }

  //validate Special characters
  if (pswd.match(/[!@#$%\^&*(){}[\]<>?/|\-]/)) {
   $('#specialchar').removeClass('invalid').addClass('valid');
   c = 20;
   progress(a + b + c + d + e, $('#progressBar'));
  } else {
   $('#specialchar').removeClass('valid').addClass('invalid');
   c = 0;
   progress(a + b + c + d + e, $('#progressBar'));
  }

  //validate capital letter
  if (pswd.match(/[A-Z]/)) {
   $('#capital').removeClass('invalid').addClass('valid');
   d = 20;
   progress(a + b + c + d + e, $('#progressBar'));
  } else {
   $('#capital').removeClass('valid').addClass('invalid');
   d = 0;
   progress(a + b + c + d + e, $('#progressBar'));
  }

  //validate number
  if (pswd.match(/\d/)) {
   $('#number').removeClass('invalid').addClass('valid');
   e = 20;
   progress(a + b + c + d + e, $('#progressBar'));
  } else {
   $('#number').removeClass('valid').addClass('invalid');
   e = 0;
   progress(a + b + c + d + e, $('#progressBar'));
  }
 });

 $('#pswd').focus(function() {
  $('#pswd_info').show();
 });
 $('#pswd').blur(function() {
  $('#pswd_info').hide();
 });
 $('#next_button1').on('click', function() {
  if (((c == 20) && (d == 20) && (e == 20))) {
   $("#question1").hide();
   $("#buttondiv2").show();
   $("#question2").show();
   $("#buttondiv1").hide();
   resetPopup();
  } else {
   swal({
     html: true,
     title: "Having a hard time figuring out a strong answer? ",
     text: "<li >Look at this sample : </li><br></br> <li ><strong>Question : What is your favorite sport?</strong></li><li ><strong>A Strong Answer : Crick@Australia</strong></li><br></br><li > Your favourite game is cricket, and your favourite cricket team is the Australian cricket team.</li><br></br>",
     confirmButtonText: "Let me Retry",
     cancelButtonText: "Next Question",
     showCancelButton: true,
     closeOnCancel: true,
     closeOnConfirm: true
    },
    function(isCancel) {
     if (!isCancel) {
      $("#question1").hide();
      $("#buttondiv2").show();
      $("#question2").show();
      $("#buttondiv1").hide();
      resetPopup();
     }
    }
   );
  }
 });
 $('#next_button2').on('click', function() {
  if ((c == 20) && (d == 20) && (e == 20)) {
   $("#question2").hide();
   $("#buttondiv3").show();
   $("#question3").show();
   $("#buttondiv2").hide();
   resetPopup();
  } else {
   swal({
     html: true,
     title: "Your answer is not strong enough.. ",
     text: " <li ><strong>Question : Your mother's maiden name ?</strong></li><li ><strong>A Strong Answer : BrownUntil89@Syd</strong></li><br></br><li >  Her surname remained Brown until she got married in 1989 in Sydney</li><br></br>",
     confirmButtonText: "Let me Retry",
     cancelButtonText: "Next Question",
     showCancelButton: true,
     closeOnCancel: true,
     closeOnConfirm: true
    },
    function(isCancel) {
     if (!isCancel) {
      $("#question2").hide();
      $("#buttondiv3").show();
      $("#question3").show();
      $("#buttondiv2").hide();
      resetPopup();
     }
    }
   );

  }
 });
 $('#next_button3').on('click', function() {
  if ((c == 20) && (d == 20) && (e == 20)) {
   $("#question3").hide();
   $("#buttondiv4").show();
   $("#setYourOwn").show();
   $("#question4").show();
   $("#buttondiv3").hide();
   $("#dropdownlist").hide();
   resetPopup();
  } else {
   swal({
     html: true,
     title: "Your answer is weak.. ",
     text: "<li ><strong>Question : Your pet's name ?</strong></li><li ><strong>A Strong Answer : WoofyDog@95</strong></li><br></br><li >  Your pet Woofy is a dog born in 1995</li><br></br>",
     confirmButtonText: "Let me Retry",
     cancelButtonText: "Next Question",
     showCancelButton: true,
     closeOnCancel: true,
     closeOnConfirm: true
    },
    function(isCancel) {
     if (!isCancel) {
      $("#question3").hide();
      $("#buttondiv4").show();
      $("#setYourOwn").show();
      $("#question4").show();
      $("#buttondiv3").hide();
      $("#dropdownlist").hide();
      resetPopup();
     }
    }
   );

  }
 });
 $('#next_button4').on('click', function() {
  if ((c == 20) && (d == 20) && (e == 20)) {
   $("#question4").hide();
   $("#buttondiv5").show();
   $("#setYourOwn").show();
   $("#question5").show();
   $("#buttondiv4").hide();
   $("#dropdownlist").hide();
   resetPopup();
  } else {
   swal({
     html: true,
     title: "Let's look at another sample for a stronger answer",
     text: "<li >Example Question : </li><br></br> <li ><strong>Question : Who was your childhood hero?</strong></li><li ><strong>A Strong Answer : Robin@Sherwood7</strong></li><br></br><li > Robin hood of Sherwood, and I first heard of him when I was 7 years old</li><br></br>",
     confirmButtonText: "Let me Retry",
     cancelButtonText: "Next Question",
     showCancelButton: true,
     closeOnCancel: true,
     closeOnConfirm: true
    },
    function(isCancel) {
     if (!isCancel) {
      $("#question4").hide();
      $("#buttondiv5").show();
      $("#setYourOwn").show();
      $("#question5").show();
      $("#buttondiv4").hide();
      $("#dropdownlist").hide();
      resetPopup();
     }
    }
   );

  }
 });
 $('#next_button5').on('click', function() {
  if ((c == 20) && (d == 20) && (e == 20)) {
   $("#question5").hide();
   $("#buttondiv1").show();
   $("#question1").show();
   $("#buttondiv5").hide();
   $("#dropdownlist").show();
   $("#setYourOwn").hide();
   resetPopup();
  } else {
   swal({
     html: true,
     title: "Your answer needs to be stronger..",
     text: "<li >Example Question : </li><br></br> <li ><strong>Question : What was the first 3D movie you watched?</strong></li><li ><strong>A Strong Answer : JurasicW@Majestic2015</strong></li><br></br> <li >It would be hard to guess the movie you watched with the location and the year! </li><br></br>",
     confirmButtonText: "Let me Retry",
     cancelButtonText: "Let me Finish",
     showCancelButton: true,
     closeOnCancel: true,
     closeOnConfirm: true
    },
    function(isCancel) {
     if (!isCancel) {
      $("#question5").hide();
      $("#buttondiv1").show();
      $("#question1").show();
      $("#buttondiv5").hide();
      $("#dropdownlist").show();
      $("#setYourOwn").hide();
      resetPopup();
     }
    }
   );

  }
 });

 //progress bar
 function progress(percent, $element) {
  var progressBarWidth = percent * 4;
  if (50 > percent) {
   $element.find('div').animate({
    width: progressBarWidth
   }, 0).html("weak..");
   $('#heading').removeClass('valid').addClass('invalid');
  } else if (70 > percent) {
   $element.find('div').animate({
    width: progressBarWidth
   }, 0).html("medium..");
   $element.find('div').removeClass('meter meterred meterorrange').addClass('meterorrange');
   $('#heading').removeClass('valid').addClass('invalid');
  } else if (100 > percent) {
   $element.find('div').animate({
    width: progressBarWidth
   }, 0).html("strong..");
   $element.find('div').removeClass('meter meterred meterorrange').addClass('meterorrange');
   $('#heading').removeClass('valid').addClass('invalid');
  } else if (percent == 100) {
   $element.find('div').animate({
    width: 400
   }, 0).html("your answer is very strong !!");
   $element.find('div').removeClass('meter meterred meterorrange').addClass('meter');
   $('#heading').removeClass('invalid').addClass('valid');
  } else {
   $element.find('div').animate({
    width: progressBarWidth
   }, 0).html(percent + "% ");
  }
 }

 function resetPopup() {
  $('#pswd').val('');
  progress(0, $('#progressBar'));
  $('#length').removeClass('valid').addClass('invalid');
  $('#number').removeClass('valid').addClass('invalid');
  $('#capital').removeClass('valid').addClass('invalid');
  $('#specialchar').removeClass('valid').addClass('invalid');
  $('#letter').removeClass('valid').addClass('invalid');
  $('#heading').removeClass('valid').addClass('invalid');
 document.getElementById("next_button1").disabled = true; 
 document.getElementById("next_button2").disabled = true; 
 document.getElementById("next_button3").disabled = true; 
 document.getElementById("next_button4").disabled = true; 
 document.getElementById("next_button5").disabled = true; 
 }
 //empty the text box on drop down selection change
 var answer = $('#pswd').val();
 $("select").on("change", function() {
  if ($(this).val().indexOf('ed') == -1) {
   $('#pswd').val('');
  } else {
   $('#pswd').val(answer);
  }

 })
});
