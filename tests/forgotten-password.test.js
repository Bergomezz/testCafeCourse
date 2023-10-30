import { Selector } from 'testcafe';

// prettier-ignore
fixture `Forgotten Password Sender`
  .page `http://zero.webappsecurity.com/index.html`

test('forgotten password test', async t => {
  //variable
  const signInButton = Selector('#signin_button');
  const loginForm = Selector('#login_form');
  const forgottenPasswordButton = Selector('a').withText(
    'Forgot your password ?'
  );
  const emailForm = Selector('#user_email');
  const submitEmailButton = Selector('.btn-primary');
  const pageHeader = Selector('.page-header');

  //First test step
  await t.click(signInButton);
  await t.expect(loginForm.exists).ok();

  //Second test step
  await t.click(forgottenPasswordButton);
  await t.expect(emailForm.exists).ok();

  //Third test step
  await t.typeText(emailForm, 't@t.com', { paste: true });
  await t.click(submitEmailButton);
  await t.expect(pageHeader.exists).ok();
});
