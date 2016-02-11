var start = function(){
  var name = ""
  //Check For Answers
  var checkAns = setInterval(function(){ 
    if(name==""){
      name = getInfo();
      String(name)
      document.getElementById('response').innerHTML ="<samp>" + "<p class="text-muted">*You wake up in a strange mystical place and a tall thin man stands in front of you*</p><br>'What is your name?'" + "</samp>";
    }
    else{
      document.getElementById('response').innerHTML = "<samp>" + "Hello " + name + " and Welcome to Rifthalen <br> You have been summoned here by the God Queen." + "</samp>";
      clearInterval(checkAns);
    }
  }, 2000);

  // innerHTML.getElementById
}
var getInfo = function(){
  var info = document.getElementById('in').value;
  return info
}
