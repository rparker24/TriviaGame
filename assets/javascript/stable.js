// when start button is clicked
$('#button').on('click', function() {
  $('#content').html($timerDisplay);
  $('#content').append($q1);
  timer.time = 30;
  timer.run();
  // question 1 is loaded
  $('.answer').on('click', function() {
    // user clicks an answer for Q1
    var clickedClass = $(this).attr("class");
    // check for correct answer using class
    if(clickedClass == "answer correct") {
      timer.stop();
      numCorrect++;
      $('.qAndA').html($q1Correct);
    } else {
      timer.stop();
      numWrong++;
      $('.qAndA').html($q1Wrong);
    }
    function load2() {
      $('#content').html($timerDisplay);
      $('#content').append($q2);
      timer.time = 30;
      timer.run();
    };
    function loadQ2() {
      counter1 = setTimeout(load2, 3000);
    };
    loadQ2();
    $('.answer').on('click', function() {
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
      function load3() {
          $('#content').html($timerDisplay);
          $('#content').append($q3);
          timer.time = 30;
          timer.run();
      };
      function loadQ3() {
        counter2 = setTimeout(load3, 3000);
      };
      loadQ3();
      $('.answer').on('click', function() {
        clickedClass = $(this).attr("class");
        if(clickedClass == "answer correct") {
          timer.stop();
          numCorrect++;
          $('.qAndA').html($q3Correct);
        } else {
          timer.stop();
          numWrong++;
          $('.qAndA').html($q3Wrong);
        }
        function load4() {
          $('#content').html($timerDisplay);
          $('#content').append($q4);
          timer.time = 30;
          timer.run();
        };
        function loadQ4() {
        counter3 = setTimeout(load4, 3000);
        };
        loadQ4();
        $('.answer').on('click', function() {
          clickedClass = $(this).attr("class");
          if(clickedClass == "answer correct") {
            timer.stop();
            numCorrect++;
            $('.qAndA').html($q4Correct);
          } else {
            timer.stop();
            numWrong++;
            $('.qAndA').html($q4Wrong);
          }
          function load5() {
            $('#content').html($timerDisplay);
            $('#content').append($q5);
            timer.time = 30;
            timer.run();
          };
          function loadQ5() {
            counter4 = setTimeout(load5, 3000);
          };
          loadQ5();
          $('.answer').on('click', function() {
            clickedClass = $(this).attr("class");
            if(clickedClass == "answer correct") {
              timer.stop();
              numCorrect++;
              $('.qAndA').html($q5Correct);
            } else {
              timer.stop();
              numWrong++;
              $('.qAndA').html($q5Wrong);
            }
            function loadResults() {  
              $('#content').append($results)
            };
            function loadEnd() {
              counter5 = setTimeout(loadResults, 3000);
            };
            loadEnd();
          });
        });
      });
    });
  });
});