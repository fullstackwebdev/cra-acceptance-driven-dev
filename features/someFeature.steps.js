const { cucumber } = require('gherkin-jest');



// describe('Feature: calculator', () => {
//   beforeAll(() => cucumber.enterFeature([]));
//   afterAll(() => cucumber.exitFeature([]));
 
//   it('adding', () => {
//     const world = cucumber.createWorld();
//     return cucumber
//       .enterScenario(world, [])
//       .then(() => cucumber.rule('I take the number 5'))
//       .then(() => cucumber.rule('I take the number 3'))
//       .then(() => cucumber.rule('I add them'))
//       .then(() => cucumber.rule('I will have 8'))
//       .then(() => cucumber.exitScenario(world, []));
//   });
// })

// cucumber.defineRule('I have numbers {int} and {int}', (world, a, b) => {
//   world.a = a;
//   world.b = b;
// });

// cucumber.defineRule('I have numbers {a:int} and {b:int}', (world, params) => {
//   world.a = params.a;
//   world.b = params.b;
// });



// cucumber.defineCreateWorld(() => {
//   return {
//     a: null,
//     b: null,
//     answer: null
//   }
// })

// cucumber.defineRule('I have numbers {int} and {int}', (world, a, b) => {
//   world.a = a;
//   world.b = b;
// });

// cucumber.defineRule('I add them', (world) => {
//   world.answer = world.a + world.b;
// });

// cucumber.defineRule('I get {int}', (world, answer) => {
//   expect(world.answer).toBe(answer);
// });