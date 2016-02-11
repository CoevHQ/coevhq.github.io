var start = function(){
  document.getElementById('response') = "What is your name?";
  var name = getInfo();
  document.getElementById('response') = "Hello " + name + " I am Jesus."
  // innerHTML.getElementById
}
var getInfo = function(){
  var info = getElementbyId('in').value;
  return info
}
