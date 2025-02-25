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

  it("debería convertir 4 a 'IV'", () => {
    expect(convertirARomano(4)).toEqual("IV");
  });

  it("debería convertir 5 a 'V'", () => {
    expect(convertirARomano(5)).toEqual("V");
  });

  it("debería convertir 6 a 'VI'", () => {
  expect(convertirARomano(6)).toEqual("VI");
  });

  it("debería convertir 9 a 'IX'", () => {
    expect(convertirARomano(9)).toEqual("IX");
  });

  it("debería convertir 27 a 'XXVII'", () => {
    expect(convertirARomano(27)).toEqual("XXVII");
  });

  it("debería convertir 44 a 'XLIV'", () => {
    expect(convertirARomano(44)).toEqual("XLIV");
  });

  it("debería convertir 99 a 'XCIX'", () => {
    expect(convertirARomano(99)).toEqual("XCIX");
  });

  it("debería convertir 2024 a 'MMXXIV'", () => {
    expect(convertirARomano(2024)).toEqual("MMXXIV");
  });


});


