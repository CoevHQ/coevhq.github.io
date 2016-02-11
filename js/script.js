var start = function(){
  var name = ""
  document.getElementById('response').innerHTML ="<samp>" + "<p class='text-muted'>*You wake up in a strange mystical place and a tall thin man stands in front of you*</p>'Hello and Welcome to Rifthalen.' <br> 'You have been summoned here by the God Queen.'" + "</samp>";
    }
var getCoins = function(addit){
    var x = document.getElementById('coins').innerHTML
    var inc = 1
    Number(x)
    if(addit>=0){
     inc += addit
    }
    x += inc
    document.getElementById('coins').innerHTML = x
}
