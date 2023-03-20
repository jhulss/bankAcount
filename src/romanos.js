class Romanos {
  generar(num) {
    let result = "";
    while (num > 0) {
      result += "I";
      num -= 1;
    }
    return result;
  }
}

export default Romanos;
