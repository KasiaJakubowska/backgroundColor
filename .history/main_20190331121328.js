const h1 = document.querySelector('h1');
document.body.addEventListener('mousemove', (event) => {
  // console.log(event.clientX,  event.clientY);
  //  h1.textContent = event.clientX + ", " + event.clientY;
  h1.textContent = `${event.clientX}, ${event.clientY}`;
  // h1.textContent = `${event.pageX}, ${event.pageY}`;

  document.body.style.backgroundColor = "";
})