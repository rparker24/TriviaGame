




// timer object for keeping time
var timer = {
  time:30,
  run: function(){
    counter = setInterval(timer.increment, 1000);
  },
  stop: function(){
    clearInterval(counter);
  },
  increment: function(){
    timer.time--
    $('#countdown').html(timer.time)
    if (timer.time === 0){
      stop();
      alert('Time Up!');
    }
  }
}

timer.run();

$div = $('<div>')
$p = $('<p>' + "Time Remaining: " + )

$(document).ready(function() {

})

$('#startButton').click(function() {
  $('#content').html($div)
})
