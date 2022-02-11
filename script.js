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

  event.prevendDefault();
});

document.body.addEventListener('contextmenu', function(event) {
  event.prevendDefault();
});

document.querySelector('div').addEventListener('dblclick', function(event) {
  alert('Hello!');
  //event.prevendDefault();
});
let example = document.createElement('section');
example.style.width = "20px";
example.style.height = "20px";
example.style.backgroundColor = "black";
example.style.position = "absolute";
document.body.append(example);

document.body.addEventListener('mousemove', function(event) {
  example.style.top = event.clienty = 'px';
example.style.left = event.clientX = 'px';
});


document.body.addEventListener('mousedown', function(event) {
 console.log('mousedown');
});

document.body.addEventListener('mouseup', function(event) {
  console.log('mouseup');
 });

 document.body.addEventListener('click', function(event) {
  console.log('click');
 });

example1.style.background = "black"
 example1.addEventListener('mouseout', function(event) {
  console.log('mouseout');
 });

 document.body.addEventListener('mouseover', function(event) {
  console.log('mouseover');
 });