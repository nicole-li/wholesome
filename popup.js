document.addEventListener('DOMContentLoaded', function() {
 // console.log('Listening');
 var parent = document.querySelector('._3u16');
 parent.addEventListener('click', function(element) {
   // console.log(element)
   if (element.target && element.target.nodeName === 'BUTTON') {
     // console.log('Button clicked');
     var r = confirm('Make sure you are posting something wholesome!');
     if (!r) element.stopPropagation();
   }
 }, false);
}, false);
