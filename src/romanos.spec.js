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
});
