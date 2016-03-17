var count = document.getElementById('time-to-read-view').innerHTML.split(' ').length;
var wpm = Math.round(count / 230);
console.log(wpm + " minutes.")
