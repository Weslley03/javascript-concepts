self.addEventListener('message', function(message) {
  const n = message.data
  const result = calculateFibonacci(n)
  self.postMessage(result);
})

function calculateFibonacci(n) {
  if(n <= 1) return n
  return calculateFibonacci(n-1) + calculateFibonacci(n-2);
}