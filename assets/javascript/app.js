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
    timer.time--;
    $('#countdown').html(timer.time);
    if (timer.time === 0){
      timer.stop();
      $('#content').html($timeIsUp);
    }
  }
}

var numCorrect = 0;
var numWrong = 0;

// display the remaining time for each question
var $timerDisplay = $('<p id="timeRemaining">' + "Time Remaining: " + '<span id="countdown">' + '</span>' + " Seconds" + '</p>');

var $timeIsUp = $('<h2>Time Is Up!</h2>' + '<button id="playAgain" class="button">' + 'Play Again' + '</button>');

// var q1 = {
//   question: {
//     number: 1,
//     text: 'What material are hockey pucks made of?'
//   },
//   choices: {
//
//   }
// }

// create variables for each question div that can be inserted into the #content div
var $q1 = $('<div class="qAndA">' + '<p class="question">' + '1. What material are hockey pucks made of?' + '</p>' + '<br>' + '<p class="answer1 incorrect">' + 'Plastic' + '</p>' + '<p class="answer1 correct">' + 'Rubber' + '</p>' + '<p class="answer1 incorrect">' + 'Wood' + '</p>' + '<p class="answer1 incorrect">' + 'Charcoal' + '</p>');
var $q2 = $('<div class="qAndA">' + '<p class="question">' + '2. What is it called when a player scores 3 goals in 1 game?' + '</p>' + '<br>' + '<p class="answer2 incorrect">' + 'Hole in One' + '</p>' + '<p class="answer2 incorrect">' + 'Swish' + '</p>' + '<p class="answer2 incorrect">' + 'Grand Slam' + '</p>' + '<p class="answer2 correct">' + 'Hat Trick' + '</p>');
var $q3 = $('<div class="qAndA">' + '<p class="question">' + '3. What is the National Hockey League\'s championship trophy called?' + '</p>' + '<br>' + '<p class="answer3 incorrect">' + 'The Lombardi Trophy' + '</p>' + '<p class="answer3 incorrect">' + 'The Heisman Trophy' + '</p>' + '<p class="answer3 correct">' + 'The Stanley Cup' + '</p>' + '<p class="answer3 incorrect">' + 'The World Cup' + '</p>');
var $q4 = $('<div class="qAndA">' + '<p class="question">' + '4. What player holds the National Hockey League records for most goals in a season and most assists in a season?' + '</p>' + '<br>' + '<p class="answer4 correct">' + 'Wayne Gretzky' + '</p>' + '<p class="answer4 incorrect">' + 'Mario Lemieux' + '</p>' + '<p class="answer4 incorrect">' + 'Jaromir Jagr' + '</p>' + '<p class="answer4 incorrect">' + 'Gordie Howe' + '</p>');
var $q5 = $('<div class="qAndA">' + '<p class="question">' + '5. What goaltender currently holds the National Hockey League record for most wins in a season?' + '</p>' + '<br>' + '<p class="answer5 incorrect">' + 'Ed Belfour' + '</p>' + '<p class="answer5 correct">' + 'Martin Brodeur' + '</p>' + '<p class="answer5 incorrect">' + 'Braden Holtby' + '</p>' + '<p class="answer5 incorrect">' + 'Patrick Roy' + '</p>');

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

// use the arrays to make a loop(s) and simplify the code (plus less repitition)
// var questions = [$q1, $q2, $q3, $q4, $q5];
// var answers = [[$q1Correct, $q1Wrong], [$q2Correct, $q2Wrong], [$q3Correct, $q3Wrong], [$q4Correct, $q4Wrong], [$q5Correct, $q5Wrong]];

// better idea than above - use objects to store question and answer data

var $results = $('<div id="results">' + '<h3>' + 'Correct Answers: ' + '<span id="numCorrect"></span>' + '</h3>' + '<h3>' + 'Incorrect Answers: ' + '<span id="numWrong"></span>' + '</h3>' + '<form>' + '<button id="playAgain" class="button" type="submit">' + 'Play Again' + '</button>' + '</form>' + '</div>');

// when start button is clicked
$(document).on('click', '#startButton', function() {
  $('#content').html($timerDisplay);
  $('#content').append($q1);
  timer.time = 30;
  timer.run();
  // question 1 is loaded
});
$(document).on('click', '.answer1', function() {
  // user clicks an answer for Q1
  var clickedClass = $(this).attr("class");
  // check for correct answer using class
  function load2() {
    $('#content').html($timerDisplay);
    $('#content').append($q2);
    timer.time = 30;
    timer.run();
    clickedClass = null;
  };
  function loadQ2() {
    counter1 = setTimeout(load2, 3000);
  // loop version: function loadQuestion(i?) {
  //    counter = setTimeout(load[i], 3000)
  };
  if(clickedClass == "answer1 correct") {
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
$(document).on('click', '.answer2', function() {
  clickedClass = $(this).attr("class");
  function load3() {
    $('#content').html($timerDisplay);
    $('#content').append($q3);
    timer.time = 30;
    timer.run();
    clickedClass = null;
  };
  function loadQ3() {
    counter2 = setTimeout(load3, 3000);
  };
  if(clickedClass == "answer2 correct") {
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
$(document).on('click', '.answer3', function() {
  clickedClass = $(this).attr("class");
  function load4() {
    $('#content').html($timerDisplay);
    $('#content').append($q4);
    timer.time = 30;
    timer.run();
    clickedClass = null;
  };
  function loadQ4() {
    counter3 = setTimeout(load4, 3000);
  };
  if(clickedClass == "answer3 correct") {
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
$(document).on('click', '.answer4', function() {
  clickedClass = $(this).attr("class");
  function load5() {
    $('#content').html($timerDisplay);
    $('#content').append($q5);
    timer.time = 30;
    timer.run();
    clickedClass = null;
  };
  function loadQ5() {
    counter4 = setTimeout(load5, 3000);
  };
  if(clickedClass == "answer4 correct") {
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
$(document).on('click', '.answer5', function() {
  clickedClass = $(this).attr("class");
  function loadResults() {
    $('#content').html($results);
    $('#numCorrect').html(numCorrect);
    $('#numWrong').html(numWrong);
    clickedClass = null;
  };
  function loadEnd() {
    counter5 = setTimeout(loadResults, 3000);
  };
  if(clickedClass == "answer5 correct") {
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
});
