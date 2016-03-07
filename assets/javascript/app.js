// timer object for counting remaining time to answer questions
var timer = {
  time:30,
  run: function(){
    counter = setInterval(timer.decrement, 1000);
  },
  stop: function(){
    clearInterval(counter);
  },
  decrement: function(){
    timer.time--
    $('#countdown').html(timer.time)
    if (timer.time === 0){
      timer.stop();
      $
    }
  }
}

var numCorrect = 0;
var numWrong = 0;

// display the remaining time for each question
var $timerDisplay = $('<p id="timeRemaining">' + "Time Remaining: " + '<span id="countdown">' + '</span>' + " Seconds" + '</p>');

// create variables for each question div that can be inserted into the #content div
var $q1 = $('<div class="qAndA">' + '<p class="question">' + '1. What material are hockey pucks made of?' + '</p>' + '<br>' + '<p class="answer incorrect">' + 'Plastic' + '</p>' + '<p class="answer correct">' + 'Rubber' + '</p>' + '<p class="answer incorrect">' + 'Wood' + '</p>' + '<p class="answer incorrect">' + 'Charcoal' + '</p>');
var $q2 = $('<div class="qAndA">' + '<p class="question">' + '2. What is it called when a player scores 3 goals in 1 game?' + '</p>' + '<br>' + '<p class="answer incorrect">' + 'Hole in One' + '</p>' + '<p class="answer incorrect">' + 'Swish' + '</p>' + '<p class="answer incorrect">' + 'Grand Slam' + '</p>' + '<p class="answer correct">' + 'Hat Trick' + '</p>');
var $q3 = $('<div class="qAndA">' + '<p class="question">' + '3. What is the National Hockey League\'s championship trophy called?' + '</p>' + '<br>' + '<p class="answer incorrect">' + 'The Lombardi Trophy' + '</p>' + '<p class="answer incorrect">' + 'The Heisman Trophy' + '</p>' + '<p class="answer correct">' + 'The Stanley Cup' + '</p>' + '<p class="answer incorrect">' + 'The World Cup' + '</p>');
var $q4 = $('<div class="qAndA">' + '<p class="question">' + '4. What player holds the National Hockey League records for most goals in a season and most assists in a season?' + '</p>' + '<br>' + '<p class="answer correct">' + 'Wayne Gretzky' + '</p>' + '<p class="answer incorrect">' + 'Mario Lemieux' + '</p>' + '<p class="answer incorrect">' + 'Jaromir Jagr' + '</p>' + '<p class="answer incorrect">' + 'Gordie Howe' + '</p>');
var $q5 = $('<div class="qAndA">' + '<p class="question">' + '5. What goaltender currently holds the National Hockey League record for most wins in a season?' + '</p>' + '<br>' + '<p class="answer incorrect">' + 'Ed Belfour' + '</p>' + '<p class="answer correct">' + 'Martin Brodeur' + '</p>' + '<p class="answer incorrect">' + 'Braden Holtby' + '</p>' + '<p class="answer incorrect">' + 'Patrick Roy' + '</p>');

var $q1Correct = $('<div class="correct">' + '<h2>' + 'Correct!' + '</h2>' + '<img src="assets/images/puck.jpg" alt="NHL hockey puck">' + '</div>');
var $q1Wrong = $('<div class="wrong">' + '<h2>' + 'Wrong!' + '</h2>' + '<h4>' + 'The correct answer was "rubber".' + '</h4>' + '<img src="assets/images/puck2.jpg" alt="NHL hockey puck">' + '</div>');

var $q2Correct = $('<div class="correct">' + '<h2>' + 'Correct!' + '</h2>' + '<img src="assets/images/hattrick.gif" alt="hats on ice">' + '</div>');
var $q2Wrong = $('<div class="wrong">' + '<h2>' + 'Wrong!' + '</h2>' + '<h4>' + 'The correct answer was "Hat Trick".' + '</h4>' + '<img src="assets/images/nhl94hat.gif" alt="NHL94 Lemieux Hat Trick">' + '</div>');

var $q3Correct = $('<div class="correct">' + '<h2>' + 'Correct!' + '</h2>' + '<img src="assets/images/StevensCup.jpg" alt="Scott Stevens Stanley Cup">' + '</div>');
var $q3Wrong = $('<div class="wrong">' + '<h2>' + 'Wrong!' + '</h2>' + '<h4>' + 'The correct answer was "The Stanley Cup".' + '</h4>' + '<img src="assets/images/StanleyCup.jpg" alt="Stanley Cup">' + '</div>');

var $q4Correct = $('<div class="correct">' + '<h2>' + 'Correct!' + '</h2>' + '<img src="assets/images/GretzkyKings.jpg" alt="Wayne Gretzky Kings">' + '</div>');
var $q4Wrong = $('<div class="wrong">' + '<h2>' + 'Wrong!' + '</h2>' + '<h4>' + 'The correct answer was "Wayne Gretzky".' + '</h4>' + '<img src="assets/images/gretzky2.jpg" alt="Wayne Gretzky">' + '</div>');

var $q5Correct = $('<div class="correct">' + '<h2>' + 'Correct!' + '</h2>' + '<img src="assets/images/marty2.jpg" alt="Martin Brodeur">' + '</div>');
var $q5Wrong = $('<div class="wrong">' + '<h2>' + 'Wrong!' + '</h2>' + '<h4>' + 'The correct answer was "Martin Brodeur".' + '</h4>' + '<img src="assets/images/marty.jpg" alt="Martin Brodeur">' + '</div>');

var $results = $('<div>' + '<h3>' + 'Correct Answers: ' + numCorrect + '</h3>' + '<h3>' + 'Incorrect Answers: ' + numWrong + '</h3>' + '<p id="playAgain">' + 'Play Again' + '</p>' +'</div>');

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
      $('.answer').click(function() {
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
        $('.answer').click(function() {
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
            $('.answer').click(function() {
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