import convertirARomano from "./romanos.js";

describe("Conversión a números romanos", () => {
  it("debería convertir 1 a 'I'", () => {
    expect(convertirARomano(1)).toEqual("I");
  });

  it("debería convertir 2 a 'II'", () => {
    expect(convertirARomano(2)).toEqual("II");
  });

  it("debería convertir 3 a 'III'", () => {
    expect(convertirARomano(3)).toEqual("III");
  });
});


