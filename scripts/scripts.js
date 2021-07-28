let numRoman = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I']
  ];
  
  function convertirRoman(num) {
    if (num === 0) {
      return '';
    }
    for (let i = 0; i < numRoman.length; i++) {
      if (num >= numRoman[i][0]) {
        return numRoman[i][1] + convertirRoman(num - numRoman[i][0]);
      }
    }
  }
function covertirN(){
    numero = document.getElementById('numeroI').value;
    resultado = convertirRoman(numero);
    swal(`EL NÚMERO ${numero}, EN ROMANO ES ${resultado}`)
    }
