//const { cucumber } = require('gherkin-jest');

import { cucumber } from 'gherkin-jest';

//import * as google from './google.js';



cucumber.defineCreateWorld(() => []);
 
cucumber.defineRule('I take the number {int}', (world, number) => {
  world.push(number);
});
 
cucumber.defineRule('I add them', (world) => {
  const a = world.pop();
  const b = world.pop();
  world.push(a + b);
});
 
cucumber.defineRule('I will have {int}', (world, number) => {
  expect(world[world.length - 1]).toEqual(number);
});



let page;
cucumber.defineRule('I go to google', async (world, number ) => {
  page = await global.__BROWSER__.newPage()
      await page.goto('https://google.com')
})
cucumber.defineRule('I see {string}', async (world, daString ) => {

  let text = await page.evaluate(() => document.body.textContent)
  expect(text).toContain(daString)
 
})



