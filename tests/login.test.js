import { Selector } from 'testcafe';

// prettier-ignore
fixture `Login Test`
  .page `http://zero.webappsecurity.com/index.html`;

test('User cannot login with invalid credentials', async t => {
  const signInButton = Selector('#signin_button');
  const loginForm = Selector('#login_form');
  const usernameInput = Selector('#user_login');
  const passwordInput = Selector('#user_password');
  const submitButton = Selector('.btn-primary');
  const errorMessage = Selector('.alert-error').innerText;

  await t.click(signInButton);

  await t.expect(loginForm.exists).ok();
  await t.typeText(usernameInput, 'invalid username', { paste: true });
  await t.typeText(passwordInput, 'wrong password', { paste: true });
  await t.click(submitButton);

  await t.expect(errorMessage).contains('Login and/or password are wrong');
});
