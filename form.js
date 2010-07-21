var fx = new Fx.Tween($('f'));

fx.set('opacity',0);

var container = $('container');

var ov = new Overlay('container',{
 
    id: 'overlay',

    color: '#393',

    duration: 300,

    opacity: 0.4
});

$('container').addEvent('dblclick',function() {
          ov.open();  
          fx.start('opacity',1);  
});


$('overlay').addEvent('click',function() {
          ov.close();  
          fx.start('opacity',0);  
});

(function(){

var d = document;

var f = $('f');

f.onsubmit = function(){

     var button = $('s'); 

     button.setAttribute('value','loading...'); 

     var url = 'map.php?'; 

     var fields = ['latitude','longitude','maptype'];

     for(var i=0;i<fields.length;i++) { 

         var value = $(fields[i]).value;

         url += '&'+fields[i]+'='+value;

     }
         var s = document.createElement('script');  

         s.setAttribute('id','leach');  

         s.setAttribute('type','text/javascript');  

         s.setAttribute('src',url);

         var head = d.getElementsByTagName('head')[0];

         head.appendChild(s);

  return false;
}
})();

function placeonmap(o) {

      fx.start('opacity',0);

      ov.close(); 
 
      var c = document.getElementById('container');

      var s = document.getElementById('leach');

          if(s) {s.parentNode.removeChild(s);}

      c.getElementsByTagName('img')[0].src = o.src;

      var b = document.getElementById('s');

      b.setAttribute('value','render map');

}//end function placeonmap


