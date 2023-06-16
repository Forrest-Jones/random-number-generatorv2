function generateNumber() {
    var min = parseInt(document.getElementById('min').value);
    var max = parseInt(document.getElementById('max').value);
  
    if (min < max) {
      var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      document.getElementById('result').textContent = 'Random Number: ' + randomNumber;
    } else {
      document.getElementById('result').textContent = 'Invalid range';
    }
  }
  