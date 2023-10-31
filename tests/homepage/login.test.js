import { Selector, RequestLogger } from 'testcafe';

const logger = RequestLogger();

// prettier-ignore
fixture `Login Test`
  .page `http://zero.webappsecurity.com/index.html`
  .requestHooks(logger)
  .beforeEach(async t => {
  await t.navigateTo('http://zero.webappsecurity.com/index.html');
});

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
  await t
    .typeText(passwordInput, 'wrong password', { paste: true })
    .pressKey('enter');
  //await t.click(submitButton);

  await t.expect(errorMessage).contains('Login and/or password are wrong');
});

test
  .skip(
    'User can login into application using a valid credentials',
    async t => {
      // variables
      const signInButton = Selector('#signin_button');
      const loginForm = Selector('#login_form');
      const usernameInput = Selector('#user_login');
      const passwordInput = Selector('#user_password');
      const submitButton = Selector('.btn-primary');
      const accountSummaryTab = Selector('#account_summary_tab');
      const userIcon = Selector('.icon-user');
      const logoutButton = Selector('#logout_link');

      // Tests
      await t.click(signInButton);

      await t.expect(loginForm.exists).ok();
      await t.typeText(usernameInput, 'username', { paste: true });
      await t
        .typeText(passwordInput, 'password', { paste: true })
        .pressKey('enter');
      //await t.click(submitButton);

      // Assertions
      await t
        .expect(logger.contains(record => record.response.statusCode === 200))
        .ok();
      // await t.expect(accountSummaryTab.exists).ok();
      // await t.expect(loginForm.exists).notOk();
      // await t.expect(userIcon.visible).ok();

      //finishing the test
      await t.click(logoutButton);
      await t.expect(logoutButton.visible).notOk();
      await t.expects(signInButton.visible).ok();
    }
  )
  .timeouts({
    requestTimeout: 5000,
    pageRequestTimeout: 60000,
    ajaxRequestTimeout: 60000,
  });
