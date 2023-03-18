import Romanos from "./romanos.js";
describe("Romanos", () => {
  it("convierte 1 a romano", () => {
    let romanos = new Romanos();
    expect(romanos.generar(1)).toEqual("I");
  });
});
