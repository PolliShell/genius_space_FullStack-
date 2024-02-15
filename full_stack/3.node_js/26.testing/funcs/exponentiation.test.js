const exponentiationTest=require("./exponentiation");

describe("exponentiation test",()=>{
test("2 to pow 3 must be 8",()=>{
    expect(exponentiationTest(2,3)).toBe(8)
})
    test("() - error 'Year must be exist'",()=>{
        expect(()=>exponentiationTest()).toThrow("Numbers must be exist")
    })
})