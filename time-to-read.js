function timeToRead() {
  var count = document.getElementById('time-to-read-view').innerHTML.split(' ').length;
  wpm = Math.round(count / 230);
}

function showTime() {
  var body = document.getElementById("body").innerHTML;
  document.getElementById("body").innerHTML = '<div class="float" id="float"></div>' + body;
  document.getElementById("float").innerHTML = wpm +
    (wpm <= 1 ? " Minute" : " Minutes");
}

timeToRead();
showTime();
