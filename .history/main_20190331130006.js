const h1 = document.querySelector('h1');
document.body.addEventListener('mousemove', (event) => {
  const x = event.clientX;
  const y = event.clientY;
  const width = window.innerWidth;
  const height = window.innerHeight;
  // console.log(event.clientX,  event.clientY);
  //  h1.textContent = event.clientX + ", " + event.clientY;
  // h1.textContent = `${event.pageX}, ${event.pageY}`;
  h1.textContent = `${x}, ${y}`;

  const red = 100;
  const green = 10;
  const blue = 50;
  document.body.style.backgroundColor = `rgb(${red}%, ${green}%, ${blue}%)`

  // document.body.style.backgroundColor = `rgb(${event.clientX/3}, ${event.clientY/2}, 100)`;
})