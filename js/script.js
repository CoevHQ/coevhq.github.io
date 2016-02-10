var start = function(){
  innerHTML.getElementById('response') = "What is your name?";
  var name = getInfo();
  innerHTML.getElementById('response') = "Hello " + name + " I am Jesus."
  // innerHTML.getElementById
}
var getInfo = function(){
  var info = getElementbyId('in').value;
  return info
}
