function generateFibonacci() {
    var termsInput = document.getElementById('terms').value;
    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '';
  
    if (termsInput === '' || isNaN(termsInput) || parseInt(termsInput) <= 0 || parseInt(termsInput) >= 100) {
      outputDiv.textContent = 'Please enter a valid number (1-99).';
      return;
    }
  
    var terms = parseInt(termsInput);
  
    var a = 0, b = 1;
    var fibonacciSeries = [a, b];
  
    for (var i = 2; i < terms; i++) {
      var next = a + b;
      fibonacciSeries.push(next);
      a = b;
      b = next;
    }
  
    outputDiv.textContent = 'Fibonacci Series: ' + fibonacciSeries.join(', ');
  } 