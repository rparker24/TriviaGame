// timer object for keeping time
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
      alert('Time\'s Up!');
    }
  }
}
var $timerDisplay = $('<p id="timeRemaining">' + "Time Remaining: " + '<span id="countdown">' + '</span>' + " Seconds" + '</p>');
var $q1 = $('<div class="qAndA">' + '<p class="question">' + '1. What material are hockey pucks made of?' + '</p>' + '<br>' + '<p class="answer incorrect">' + 'Plastic' + '</p>' + '<p class="answer correct">' + 'Rubber' + '</p>' + '<p class="answer incorrect">' + 'Wood' + '</p>' + '<p class="answer incorrect">' + 'Charcoal' + '</p>');
var $q2 = $('<div class="qAndA">' + '<p class="question">' + '2. What is it called when a player scores 3 goals in 1 game?' + '</p>' + '<br>' + '<p class="answer incorrect">' + 'Hole in One' + '</p>' + '<p class="answer incorrect">' + 'Swish' + '</p>' + '<p class="answer incorrect">' + 'Grand Slam' + '</p>' + '<p class="answer correct">' + 'Hat Trick' + '</p>');
var $q3 = $('<div class="qAndA">' + '<p class="question">' + '3. What is the National Hockey League\'s championship trophy called?' + '</p>' + '<br>' + '<p class="answer incorrect">' + 'The Lombardi Trophy' + '</p>' + '<p class="answer incorrect">' + 'The Heisman Trophy' + '</p>' + '<p class="answer correct">' + 'The Stanley Cup' + '</p>' + '<p class="answer incorrect">' + 'The World Cup' + '</p>');
var $q4 = $('<div class="qAndA">' + '<p class="question">' + '4. What player holds the National Hockey League records for most goals in a season and most assists in a season?' + '</p>' + '<br>' + '<p class="answer correct">' + 'Wayne Gretzky' + '</p>' + '<p class="answer incorrect">' + 'Mario Lemieux' + '</p>' + '<p class="answer incorrect">' + 'Jaromir Jagr' + '</p>' + '<p class="answer incorrect">' + 'Gordie Howe' + '</p>');
var $q5 = $('<div class="qAndA">' + '<p class="question">' + '5. What goaltender currently holds the National Hockey League record for most wins in a season?' + '</p>' + '<br>' + '<p class="answer incorrect">' + 'Ed Belfour' + '</p>' + '<p class="answer correct">' + 'Martin Brodeur' + '</p>' + '<p class="answer incorrect">' + 'Braden Holtby' + '</p>' + '<p class="answer incorrect">' + 'Patrick Roy' + '</p>');



// when start button is clicked
$('#button').click(function() {
  $('#content').html($timerDisplay);
  $('#content').append($q1);
  timer.time = 30;
  timer.run();
  $('.answer').click(function() {
    $('#content').html($timerDisplay);
    $('#content').append($q2);
    timer.stop();
    timer.time = 30;
    timer.run();
    $('.answer').click(function() {
      $('#content').html($timerDisplay);
      $('#content').append($q3);
      timer.stop();
      timer.time = 30;
      timer.run();
      $('.answer').click(function() {
        $('#content').html($timerDisplay);
        $('#content').append($q4);
        timer.stop();
        timer.time = 30;
        timer.run();
        $('.answer').click(function() {
          $('#content').html($timerDisplay);
          $('#content').append($q5);
          timer.stop();
          timer.time = 30;
          timer.run();
        });
      });
    });
  });
});