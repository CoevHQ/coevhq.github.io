var start = function(){
  document.getElementById('response').innerHTML = "What is your name?";
  var name = getInfo();
  document.getElementById('response').innerHTML = "Hello " + name + " I am Jesus."
  // innerHTML.getElementById
}
var getInfo = function(){
  var info = getElementbyId('in').value;
  return info
}
