var start = function(){
  var name = ""
  //Check For Answers
  var checkAns = setInterval(function(){ 
    name = getInfo();
    String(name)
    if(name==""){
      document.getElementById('response').innerHTML = "What is your name?";
    }
    else{
      document.getElementById('response').innerHTML = "Hello " + name + " I am Jesus.";

    }
  }, 1000);

  // innerHTML.getElementById
}
var getInfo = function(){
  var info = document.getElementById('in').value;
  return info
}
