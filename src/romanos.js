class Romanos {
  constructor() {
    this.equivalencias = [
      { numero: 100, valor: "C" },
      { numero: 90, valor: "XC" },
      { numero: 50, valor: "L" },
      { numero: 40, valor: "XL" },
      { numero: 10, valor: "X" },
      { numero: 9, valor: "IX" },
      { numero: 5, valor: "V" },
      { numero: 4, valor: "IV" },
      { numero: 1, valor: "I" },
    ];
  }

  generar(num) {
    let result = "";
    this.equivalencias.forEach((equivalencia) => {
      while (num >= equivalencia.numero) {
        result += equivalencia.valor;
        num -= equivalencia.numero;
      }
    });
    return result;
  }
}

export default Romanos;
