import { Selector } from 'testcafe';

// prettier-ignore
fixture `Getting start with TestCafe`
  .page `https://devexpress.github.io/testcafe/example/`;

test('My first testcafe test', async t => {
  await t.typeText('#developer-name', 'John');
  await t.click('#submit-button');
});
