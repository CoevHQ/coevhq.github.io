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
        var time = document.getElementById('time').innerHTML
        time = Number(time)
        document.getElementById('time').innerHTML = ++time
        document.getElementById('response').innerHTML = "<samp>You searched for scrap and now you have <b>"+final+"</b> pieces of scrap.</samp>"
    }, 2000) }
var cutWood = function(){
    var current = document.getElementById('wood').innerHTML
    var add = (Math.floor((Math.random()*10)+1))
    var final = 0
    current = Number(current)
    add = Number(add)
    final = current + add
    var oldValue = document.getElementById('choice1').innerHTML
    document.getElementById('choice1').setAttribute('disabled', true);
    document.getElementById('choice1').innerHTML = 'Cutting';
     setTimeout(function(){
        document.getElementById('choice1').innerHTML = oldValue;
        document.getElementById('choice1').removeAttribute('disabled');
        document.getElementById('wood').innerHTML = final
        var time = document.getElementById('time').innerHTML
        time = Number(time)
        document.getElementById('time').innerHTML = ++time
        document.getElementById('response').innerHTML = "<samp>You cut wood and now you have <b>"+final+"</b> logs of wood.</samp>"
}, 2000)
}
var getFood = function() {
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
        var time = document.getElementById('time').innerHTML
        time = Number(time)
        document.getElementById('time').innerHTML = ++time
        document.getElementById('response').innerHTML = "<samp>You searched for scrap and now you have <b>"+final+"</b> pieces of scrap.</samp>"
    }, 2000)
}
var gameTime = function() {
      setInterval(function(){
        var time = document.getElementById('time').innerHTML
        time = Number(time)
        document.getElementById('time').innerHTML = ++time
      }, 20000);
}
