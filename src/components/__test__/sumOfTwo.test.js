import sumOfTwo from "../sumOfTwo";

test("SumOfTwo function should calculate the sum", () => {
    const result = sumOfTwo(5,5);
    //Assertion
    expect(result).toBe(10);
});
 