var start = function(){
  var name = getInfo();
  String(name)
  do {
  document.getElementById('response').innerHTML = "What is your name?"
  } while(name == "");
  document.getElementById('response').innerHTML = "Hello " + name + " I am Jesus."
  // innerHTML.getElementById
}
var getInfo = function(){
  var info = document.getElementById('in').value;
  return info
}
