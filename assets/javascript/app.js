
// not sure where this should run yet or if it is needed
$(document).ready(function() {

})



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
      stop();
      alert('Time Up!');
    }
  }
}
// make timer run on q1 div load
// timer.run();

var $div = $('<div>' + timer.time + '</div>');
var $q1 = $('<p>' + "Time Remaining: " + timer.time + '</p>');


$('#button').click(function() {
  $('#content').html($div, $q1);
  timer.time = 30;
  timer.run();
})
