var start = function(){
  var name = ""
  document.getElementById('response').innerHTML ="<samp>" + "<p class='text-muted'>*You wake up in a strange mystical place and a tall thin man stands in front of you*</p>'Hello and Welcome to Rifthalen.' <br> 'You have been summoned here by the God Queen.'" + "</samp>";
    }
var getCoins = function(){
    var x = document.getElementById('coins').innerHTML
    document.getElementById('coins').innerHTML = ""
    parseFloat(x)
    x = ++x
    console.log(x)
    document.getElementById('coins').innerHTML = x
    var oldValue = document.getElementById('choice3').innerHTML;

    document.getElementById('choice3').setAttribute('disabled', true);
    document.getElementById('choice3').innerHTML = 'Resting';
     setTimeout(function(){
        document.getElementById('choice3').innerHTML = oldValue;
        document.getElementById('choice3').removeAttribute('disabled');
    }, 3000)
}
