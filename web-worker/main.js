function calculateFibonacci(n) {
  if(n <= 1) return n
  return calculateFibonacci(n-1) + calculateFibonacci(n-2);
}

document.querySelector('#sayHello').addEventListener('click', function() {
  console.log('hello there');
})

document.querySelector('#withoutWk').addEventListener('click', function() {
  const result = calculateFibonacci(42)
  console.log(result);
})

document.querySelector('#withWk').addEventListener('click', function() {
  const worker = new Worker('workerfb.js')
  worker.onmessage = function(message) {
    console.log(message.data);
  }
  worker.postMessage(42)
})