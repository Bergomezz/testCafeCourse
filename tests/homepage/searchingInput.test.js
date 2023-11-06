import { Selector, RequestLogger } from 'testcafe';
import { Locators } from '../../page-objects/pages/Locators';

const localize = new Locators();

const logger = RequestLogger();

// prettier-ignore
fixture `Searching Input Box`
  .page `http://zero.webappsecurity.com/index.html`
  .requestHooks(logger)

test('searching box funtionality. User can searching for information using it', async t => {
  // Variable
  const searchBoxSelector = Selector('h2').innerText;
  const anchorLink = Selector('a').withAttribute('href');

  // 1st action
  await t
    .expect(logger.contains(record => record.response.statusCode === 200))
    .ok();

  // 2nd action
  await t
    .typeText(localize.searchingBoxInput, 'online banking', { paste: true })
    .pressKey('enter');

  // Assert
  await t.expect(searchBoxSelector).contains('Search Results:');
  await t.expect(anchorLink.exists).ok();
});
