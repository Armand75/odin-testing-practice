const {capitalize, reverseString, calculator, caesarCipher, analyzeArray} = require("./functions");

test("Capitalize first character", () => {
    expect(capitalize("armand")).toBe("Armand");
})

test("Revese string", () => {
    expect(reverseString("armand")).toBe("dnamra");
})

test("Calculator addition", () => {
    expect(calculator.add(1, 2)).toBe(3);
})
test("Calculator subtraction", () => {
    expect(calculator.subtract(1, 2)).toBe(-1);
})
test("Calculator division", () => {
    expect(calculator.divide(3369, 3)).toBe(1123);
})
test("Calculator multiplication", () => {
    expect(calculator.multiply(76, 2)).toBe(152);
})

test("Cipher by displacing by three", () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
})

test("Cipher by displacing by three", () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
})

test("Cipher by displacing by three", () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
})

test("calculate average, min, max and length", () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual(
        {
            average: 4,
            min: 1,
            max: 8,
            length: 6
         }
    )
})