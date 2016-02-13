var start = function(){
  document.getElementById('response').innerHTML ="<samp>" + "<p class='text-muted'>*You walk by a small old town.*<p>*You see a sign: <b>'Welcome to Ridge--'</b> the rest has rusted off*</p></p>" + "</samp>";
    }
var getCoins = function(){
    var current = document.getElementById('coins').innerHTML
    var add = (Math.floor((Math.random()*10)+1))
    var final = 0
    current = Number(current)
    add = Number(add)
    final = current + add
    var oldValue = document.getElementById('choice3').innerHTML;

    document.getElementById('choice3').setAttribute('disabled', true);
    document.getElementById('choice3').innerHTML = 'Searching';
     setTimeout(function(){
        document.getElementById('choice3').innerHTML = oldValue;
        document.getElementById('choice3').removeAttribute('disabled');
        document.getElementById('coins').innerHTML = final
        document.getElementById('response').innerHTML = "<samp>You searched for scrap and now you have <b>"+final+"</b> pieces of scrap.</samp>"
    }, 2000)
}
