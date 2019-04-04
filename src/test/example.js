function adder(a, b){
    return a + b
}

test('If given 2 and 2 return 4', () => { 
    expect(adder(2, 2)).toBe(4)
})

test('if given 2 and 3 return 5', () => {
    expect(adder(2, 3)).toBe(5)
})