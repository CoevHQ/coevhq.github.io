//GLOBAL VARIABLES - PLAYER STATS
var armor = 0
var health = 10
var sps=0;var wps=0; var fps=0;
var badChance = 0.02
var goodChance = 6
//GLOBAL VARIABLES - END PLAYER STATS
var start = function(){
  document.getElementById('response').innerHTML ="<samp>" + "<p class='text-muted'>*You walk by a small old town.*<p>*You see a sign: <b>'Welcome to Ridge--'</b> the rest has rusted off*</p></p>" + "</samp>";
  document.getElementById('health').innerHTML = health;
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
     
       ohNoes()
     }, 2000) }
var ohNoes = function(){
      var time = document.getElementById('time').innerHTML
      time = Number(time)
      var random = (Math.floor((Math.random()*10)+1))
       if (random < badChance){
         health=health-2
         document.getElementById('response').innerHTML = "<samp>You were attacked by a zombie and you lost 2 health!</samp>"
       }
       badChance += 0.003*time
       console.log(badChance)
}
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

       ohNoes()
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
        document.getElementById('response').innerHTML = "<samp>You searched for scrap and now you have <b>"+final+"</b> pieces of scrap.</samp>"
    
       ohNoes()
     }, 2000)
}
var gameTime = function() {
      setInterval(function(){
        var time = document.getElementById('time').innerHTML
        time = Number(time)
        document.getElementById('time').innerHTML = ++time
      }, 20000);
}
var healthCheck = function(){
      setInterval(function(){
        document.getElementById('health').innerHTML = health
        if (health<=0){
          document.getElementById('health').innerHTML = 0
          document.getElementById('response').innerHTML = "<samp><strong>You Are Dead</strong></samp>"
          document.getElementById('choice1').setAttribute('disabled', true);
          document.getElementById('choice2').setAttribute('disabled', true);
          document.getElementById('choice3').setAttribute('disabled', true);
        }
      }, 500)
}
var armorUp = function(){
  armor+=1
  document.getElementById('response').innerHTML = "<samp>+ 1 Armor = TOTAL of "+armor+" armor</samp>"
}
var autoWood = function(){
  wps+=1
  setInterval(function(){
   wood = document.getElementById('wood').innerHTML
   wood = Number(wood)
   document.getElementById('wood').innerHTML = wood+wps
  }, 1000)
}
var autoScrap = function(){
  sps+=1
  setInterval(function(){
   wood = document.getElementById('coins').innerHTML
   wood = Number(wood)
   document.getElementById('coins').innerHTML = wood+sps
  }, 1000)
}
