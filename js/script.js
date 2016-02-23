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
          if (ran<rak){
            document.getElementById('response').innerHTML = "<samp>Oh no a zombie attacked. -</samp>"+lost+" health"
            health = health - lost
          }
        ran = (Math.floor((Math.random()*10)+1))
          if (ran<6) {
            document.getElementById('response').innerHTML = "<samp>You found an energy bar</samp>"
            if(health>6){
              health = 10
            }
            health = health+4
          }
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
          if (ran<rak){
            document.getElementById('response').innerHTML = "<samp>Oh no a zombie attacked. -</samp>"+lost+" health"
            health = health - lost
          }
        ran = (Math.floor((Math.random()*10)+1))
          if (ran<6) {
            document.getElementById('response').innerHTML = "<samp>You found an energy bar</samp>"
            if(health>6){
              health = 10
            }
            health = health+4
          }
}, 2000)
}
var getFood = function() {
  var current = document.getElementById('food').innerHTML
    var add = (Math.floor((Math.random()*10)+1))
    var final = 0
    current = Number(current)
    add = Number(add)
    final = current + add
    var oldValue = document.getElementById('choice2').innerHTML;

    document.getElementById('choice2').setAttribute('disabled', true);
    document.getElementById('choice2').innerHTML = 'Hunting';
     setTimeout(function(){
        document.getElementById('choice2').innerHTML = oldValue;
        document.getElementById('choice2').removeAttribute('disabled');
        document.getElementById('food').innerHTML = final
        var time = document.getElementById('time').innerHTML
        time = Number(time)
        document.getElementById('time').innerHTML = ++time
        document.getElementById('response').innerHTML = "<samp>You hunted for food and now you have <b>"+final+"</b> pieces of meat.</samp>"
          if (ran<rak){
            document.getElementById('response').innerHTML = "<samp>Oh no a zombie attacked. -</samp>"+lost+" health"
            health = health - lost
          }
        ran = (Math.floor((Math.random()*10)+1))
          if (ran<6) {
            document.getElementById('response').innerHTML = "<samp>You found an energy bar</samp>"
            if(health>6){
              health = 10
            } 
            health = health+4
}
var gameTime = function() {
      setInterval(function(){
        var time = document.getElementById('time').innerHTML
        time = Number(time)
        document.getElementById('time').innerHTML = ++time
        var lost = (Math.floor((Math.random()*10)+1)) - armor
          if (ran<rak){
            document.getElementById('response').innerHTML = "<samp>Oh no a zombie attacked. -</samp>"+lost+" health"
            health = health - lost
          }
        ran = (Math.floor((Math.random()*10)+1))
          if (ran<6) {
            document.getElementById('response').innerHTML = "<samp>You found an energy bar</samp>"
            if(health>6){
              health = 10
            }
            health = health+4
          }
      }, 20000);
}
