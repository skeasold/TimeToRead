function timeToRead() {
  var count = document.getElementById('time-to-read-view').innerHTML.split(' ').length;
  var wpm = Math.round(count / 230);
  document.getElementById("float").innerHTML = wpm + " minutes.";
}

timeToRead();
