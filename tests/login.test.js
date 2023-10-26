import { Selector } from 'testcafe';

// prettier-ignore
fixture `Login Test`
  .page `http://zero.webappsecurity.com/index.html`;

test('User cannot login with invalid credentials', async t => {
  const signInButton = Selector('#signin_button');
  const loginForm = Selector('#login_form');

  await t.click(signInButton);

  await t.expect(loginForm.exists).ok();
});
