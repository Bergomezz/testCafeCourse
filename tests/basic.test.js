import { Selector } from 'testcafe';

// prettier-ignore
fixture `Getting start with TestCafe`
  .page `https://devexpress.github.io/testcafe/example/`
  .before(async t => {
    /*
    Test setup goes here
    await runDatabaseReset()
    await seedTestData()
    */
  })
  .beforeEach(async t => {
    /*
    Test preparation code for each test case goes in this function, e.g.:
    */
   await t.setTestSpeed(1); //1 - 0.01
  })
  .after(async t => {
    /*
    Test cleanup logic goes here:
    Logging and sending data to monitoring systems
    */
  })
  .afterEach(async t => {
    /*
    Runs after each tests
    */
  })

const name = 'John';

test('My first testcafe test', async t => {
  const developer_name_input = Selector('#developer-name');
  const submit_button = Selector('#submit-button');
  const articleText = Selector('#article-header').innerText;
  // await t.takeElementScreenshot(submit_button);
  await t.typeText(developer_name_input, name);
  await t.click(submit_button);
  // await t.takeScreenshot({ fullPage: true });

  await t.expect(articleText).contains(name);
});
