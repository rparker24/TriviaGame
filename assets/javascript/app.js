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
var $q1 = $('<div class="questions">' + '<p id="question1">' + '1. What material are hockey pucks made of?' + '</p>' + '<br>' + '<p class="answer incorrect">' + 'Plastic' + '</p>' + '<p class="answer correct">' + 'Rubber' + '</p>' + '<p class="answer incorrect">' + 'Wood' + '</p>' + '<p class="answer incorrect">' + 'Charcoal' + '</p>');
var $q2 = $('<div class="questions">' + '<p id="question1">' + '2. What is it called when a player scores 3 goals in 1 game?' + '</p>' + '<br>' + '<p class="answer incorrect">' + 'Hole in One' + '</p>' + '<p class="answer incorrect">' + 'Swish' + '</p>' + '<p class="answer incorrect">' + 'Grand Slam' + '</p>' + '<p class="answer correct">' + 'Hat Trick' + '</p>');

// when start button is clicked
$('#button').click(function() {
  $('#content').html($timerDisplay);
  $('#content').append($q1);
  timer.time = 30;
  timer.run();
});

$('.incorrect').click(function() {
  $('#content').html($timerDisplay);
  $('#content').append($q2);
  timer.time = 30;
  timer.run();
});
