var start = function(){
  innerHTML.getElementbyID('response') = "What is your name?";
  var name = getInfo();
  innerHTML.getElementbyID('response') = "Hello " + name + " I am Jesus."
}
var getInfo = function(){
  var info = getElementbyId('in').value;
  return info
}
