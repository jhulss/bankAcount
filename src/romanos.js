class Romanos {
  constructor() {
    this.equivalencias = [
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
