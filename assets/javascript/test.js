// when start button is clicked
$('#button').on('click', function() {
  $('#content').html($timerDisplay);
  $('#content').append($q1);
  timer.time = 30;
  timer.run();
  // question 1 is loaded
});
$(document).on('click', '.answer', function() {
  // user clicks an answer for Q1
  var clickedClass = $(this).attr("class");
  // check for correct answer using class
  function load2() {
    $('#content').html($timerDisplay);
    $('#content').append($q2);
    timer.time = 30;
    timer.run();
  };
  function loadQ2() {
    counter1 = setTimeout(load2, 3000);
  // loop version: function loadQuestion(i?) {
  //    counter = setTimeout(load[i], 3000)
  };
  if(clickedClass == "answer correct") {
    timer.stop();
    numCorrect++;
    $('.qAndA').html($q1Correct);
    loadQ2();
  } else {
    timer.stop();
    numWrong++;
    $('.qAndA').html($q1Wrong);
    loadQ2();
  }
});
$('.answer').on('click', function() {
  clickedClass = $(this).attr("class");
  function load3() {
    $('#content').html($timerDisplay);
    $('#content').append($q3);
    timer.time = 30;
    timer.run();
  };
  function loadQ3() {
    counter2 = setTimeout(load3, 3000);
  };
  if(clickedClass == "answer correct") {
    timer.stop();
    numCorrect++;
    $('.qAndA').html($q2Correct);
    loadQ3();
  } else {
    timer.stop();
    numWrong++;
    $('.qAndA').html($q2Wrong);
    loadQ3();
  }
});
$('.answer').on('click', function() {
  clickedClass = $(this).attr("class");
  function load4() {
    $('#content').html($timerDisplay);
    $('#content').append($q4);
    timer.time = 30;
    timer.run();
  };
  function loadQ4() {
    counter3 = setTimeout(load4, 3000);
  };
  if(clickedClass == "answer correct") {
    timer.stop();
    numCorrect++;
    $('.qAndA').html($q3Correct);
    loadQ4();
  } else {
    timer.stop();
    numWrong++;
    $('.qAndA').html($q3Wrong);
    loadQ4();
  }
});
$('.answer').on('click', function() {
  clickedClass = $(this).attr("class");
  function load5() {
    $('#content').html($timerDisplay);
    $('#content').append($q5);
    timer.time = 30;
    timer.run();
  };
  function loadQ5() {
    counter4 = setTimeout(load5, 3000);
  };
  if(clickedClass == "answer correct") {
    timer.stop();
    numCorrect++;
    $('.qAndA').html($q4Correct);
    loadQ5();
  } else {
    timer.stop();
    numWrong++;
    $('.qAndA').html($q4Wrong);
    loadQ5();
  }
});
$('.answer').on('click', function() {
  clickedClass = $(this).attr("class");
  if(clickedClass == "answer correct") {
    timer.stop();
    numCorrect++;
    $('.qAndA').html($q5Correct);
    loadEnd();
  } else {
    timer.stop();
    numWrong++;
    $('.qAndA').html($q5Wrong);
    loadEnd();
  }
  function loadResults() {  
    $('#content').append($results)
  };
  function loadEnd() {
    counter5 = setTimeout(loadResults, 3000);
  };
});