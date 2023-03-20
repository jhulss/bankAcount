import Romanos from "./romanos.js";
describe("Romanos", () => {
  let romanos = new Romanos();
  it("convierte 1 a romano", () => {
    expect(romanos.generar(1)).toEqual("I");
  });

  it("convierte 2 a romano", () => {
    expect(romanos.generar(2)).toEqual("II");
  });

  it("convierte 3 a romano", () => {
    expect(romanos.generar(3)).toEqual("III");
  });

  it("convierte 4 a romano", () => {
    expect(romanos.generar(4)).toEqual("IV");
  });

  it("convierte 5 a romano", () => {
    expect(romanos.generar(5)).toEqual("V");
  });

  it("convierte 157 a romano", () => {
    expect(romanos.generar(157)).toEqual("CLVII");
  });

  it("convierte 169 a romano", () => {
    expect(romanos.generar(169)).toEqual("CLXIX");
  });

  it("convierte 92 a romano", () => {
    expect(romanos.generar(92)).toEqual("XCII");
  });
  it("convierte 45 a romano", () => {
    expect(romanos.generar(45)).toEqual("XLV");
  });
});
