
const sum = (a,b) => a+b;
const greeting = (name) => `hi ${name}!.`;

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('Says Greeting', ()=>{
      expect(greeting("Avinash")).toBe('hi Avinash!.');
  })