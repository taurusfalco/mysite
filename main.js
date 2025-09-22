{
  const countElem = document.getElementById('count');
  const btn = document.getElementById('btn');
  let count = 0;
  let fontSize = 20;

  btn.addEventListener('click',() => {
    count ++;
    countElem.textContent = count;
    sizeUp(count);
  })

  function sizeUp(count) {
    if (count % 2 === 0){
        fontSize += 10;
        countElem.style.fontSize = fontSize + "px";
    }
  }

}