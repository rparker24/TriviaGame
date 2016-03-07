// when start button is clicked
$('#button').click(function() {
  $('#content').html($timerDisplay);
  $('#content').append($q1);
  timer.time = 30;
  timer.run();
  // question 1 is loaded
  $('.answer').click(function() {
    // user clicks an answer for Q1
    var clickedClass = $(this).attr("class");
    // check for correct answer using class
    if(clickedClass == "answer correct") {
      timer.stop();
      $('.qAndA').html($q1Correct);
    } else {
      timer.stop();
      $('.qAndA').html($q1Wrong);
    }
    startWait();
    // load Q2
    function load2() {
      if(wait >= 5){
      stopWait();
      $('#content').html($timerDisplay);
      $('#content').append($q2);
      timer.time = 30;
      timer.run();
    };
      load2();
      $('.answer').click(function() {
        clickedClass = $(this).attr("class");
        if(clickedClass == "answer correct") {
          timer.stop();
          numCorrect++;
          $('.qAndA').html($q2Correct);
        } else {
          timer.stop();
          numWrong++;
          $('.qAndA').html($q2Wrong);
        }
        startWait();
        if(wait >= 5){
          stopWait();
          function load3() {      
            $('#content').html($timerDisplay);
            $('#content').append($q3);
            timer.time = 30;
            timer.run();
          };
          load3();
          $('.answer').click(function() {
            clickedClass = $(this).attr("class");
            if(clickedClass == "answer correct") {
              timer.stop();
              $('.qAndA').html($q3Correct);
            } else {
              timer.stop();
              $('.qAndA').html($q3Wrong);
            }
            startWait();
            if(wait >= 5){
              stopWait();   
              function load4() {
                $('#content').html($timerDisplay);
                $('#content').append($q4);
                timer.time = 30;
                timer.run();
              };
              $('.answer').click(function() {
                clickedClass = $(this).attr("class");
                if(clickedClass == "answer correct") {
                  timer.stop();
                  $('.qAndA').html($q4Correct);
                } else {
                  timer.stop();
                  $('.qAndA').html($q4Wrong);
                }
                startWait();
                if(wait >= 5){
                  stopWait();
                  function load5() {                  }
                    $('#content').html($timerDisplay);
                    $('#content').append($q5);
                    timer.time = 30;
                    timer.run();
                  };
                  load5();
                  $('.answer').click(function() {
                    clickedClass = $(this).attr("class");
                    if(clickedClass == "answer correct") {
                      timer.stop();
                      $('.qAndA').html($q5Correct);
                    } else {
                      timer.stop();
                      $('.qAndA').html($q5Wrong);
                    }
                    startWait();
                    if(wait >= 5){
                      stopWait(); 
                      function loadResults() {  
                        $('#content').append($results)
                      };
                    }
                  });
                }
              });
            };
          });
        };
      });
    }
  });
});