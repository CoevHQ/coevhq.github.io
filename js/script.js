var start = function(){
  var name = ""
  document.getElementById('response').innerHTML ="<samp>" + "<p class='text-muted'>*You walk by a small old town.*<p>*You see a sign: <b>'Welcome to Ridge--'</b> the rest has rusted off*</p></p>" + "</samp>";
    }
var getCoins = function(){
    var x = document.getElementById('coins').innerHTML
    var y = (Math.floor((Math.random()*10)+1))
    Number(y)
    Number(x)
    x = x+y
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
