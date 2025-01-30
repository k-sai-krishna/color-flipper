const btn = document.getElementById('btn');
const body = document.querySelector('body');
const current_hex = document.querySelector('.current-hex');
const current_rgb = document.querySelector('.current-rgb');

// console.log(btn);
function changeColor() {
  // available colors
  const colors = [
    '#FF5733', // Bright Red-Orange
    '#33FF57', // Lime Green
    '#3357FF', // Bright Blue
    '#FF33A8', // Hot Pink
    '#FFD700', // Gold
    '#FF4500', // Orange Red
    '#800080', // Purple
    '#00FFFF', // Aqua
    '#FF6347', // Tomato
    '#4682B4', // Steel Blue
    '#008000', // Green
    '#8B0000', // Dark Red
    '#A52A2A', // Brown
    '#FFA07A', // Light Salmon
    '#2E8B57' // Sea Green
  ];
  // generate a random index
  const random = Math.round(Math.random() * colors.length) % colors.length;
  // get color
  const color = colors[random];
  // change the background color
  body.style.backgroundColor = color;
  // put it into the html
  current_hex.innerHTML = color;
  // get color in rgb
  const rgb = body.style.backgroundColor;
  // put it into the html
  current_rgb.innerHTML = rgb;
  // console.log(rgb);
  // console.log(color);
}

btn.addEventListener('click', () => {
  // possible chars in hexcode
  const mylist = '1234567890ABCDEF';
  // convert it into array
  const arrayOfHexValues = Array.from(mylist);
  // shuffle the array
  let col = arrayOfHexValues.sort(() => 0.5 - Math.random());
  // take first 6 shuffled items 
  col = col.slice(0, 6);
  // convert it into string with '#' prefix
  col = '#' + col.join('');
  // put it into html
  current_hex.innerHTML = col;
  // change background color to col
  body.style.backgroundColor = col;
  // get col in rgb
  const rgb = body.style.backgroundColor;
  // put it into html
  current_rgb.innerHTML = rgb;
  // console.log(col);
  // console.log(rgb);
});
