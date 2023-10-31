import { Selector } from 'testcafe';
import { Locators } from '../../Class/Locators';

const locators = new Locators();

// prettier-ignore
fixture `Online Banking Button`
  .page `http://zero.webappsecurity.com/index.html`

test('online banking button funtionality', async t => {
  const signInLink = Selector('a').withText('Sign in');

  await t.expect(locators.signInButton.exists).ok();
  await t.click(locators.onlineBakingButton);
  await t.expect(signInLink.exists).ok();
});
