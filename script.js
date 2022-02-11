let example1a = document.getElementById('example1');
example1a.addEventListener('click', function(event) {
window.location.href = "http://bing.com"

  event.prevendDefault();
  //console.log(event);
  //alert("Hello world");
});
let example2a = document.getElementById('example2');
example2a.addEventListener('click', function(event) {
  window.location.href = "http://linkedin.com"

  event.prevendDefault();
});
let example3a = document.getElementById('example3');
example3a.addEventListener('click', function(event) {
  window.location.href = "http://upwork.com"

  event.prevendDefault();
});