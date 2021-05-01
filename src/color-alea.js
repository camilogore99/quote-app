function generarletra () {
      let letra = ["a","b","c","d","f","0","1","2","3","4","5","6","7","8","9"]
      var numero = (Math.random()*15).toFixed(0);
      return letra[numero];
}
export function colorAlea() {
      var coolor = "";
      for (let i = 0; i < 6; i++) {
            coolor = coolor + generarletra();
      }
      return "#" + coolor
}
