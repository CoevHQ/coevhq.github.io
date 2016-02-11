var start = function(){
  var name = ""
  document.getElementById('response').innerHTML ="<samp>" + "<p class='text-muted'>*You wake up in a strange mystical place and a tall thin man stands in front of you*</p>'What is your name?'" + "</samp>";
  // Get Info After Submission
  document.getElementById('submitin').onclick = getInfo(name)
  document.getElementById('response').innerHTML = "<samp>" + "Hello " + name + " and Welcome to Rifthalen <br> You have been summoned here by the God Queen." + "</samp>";
    }
var getInfo = function(thing){
  var info = document.getElementById('in').value;
  thing = info
}
