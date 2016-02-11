var start = function(){
  var name = getInfo();
  String(name)
  //Check For Answers
  setInterval(checkAns(){ 
    if(name==""){
      document.getElementById('response').innerHTML = "What is your name?";
    }
    else{
      document.getElementById('response').innerHTML = "Hello " + name + " I am Jesus.";
      clearInterval(checkAns);
    }
  }, 3000);

  // innerHTML.getElementById
}
var getInfo = function(){
  var info = document.getElementById('in').value;
  return info
}
