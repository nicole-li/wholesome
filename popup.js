document.addEventListener('DOMContentLoaded', function() {
 // console.log('Listening');

 // Tracking entire page
 var parent = document.querySelector('#globalContainer');

 // Checking when making a new post
 parent.addEventListener('click', function(element) {
   // console.log(element);
   if (element.target && element.target.innerText === 'Share') {
     // console.log('Button clicked');
     var r = confirm('Make sure you are posting something wholesome!');
     if (!r) element.stopPropagation();
   }
 }, false);

 // Checking when commenting on a post
 parent.addEventListener('keydown', function(key) {
   // console.log(key);
   if (key.keyCode === 13) {
     key.preventDefault();
     // console.log('enter key');
     var r = confirm('Make sure you are posting something wholesome!');
     if (!r) key.stopPropagation();
   }
 }, false);

}, false);
