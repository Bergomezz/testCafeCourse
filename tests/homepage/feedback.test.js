import { Selector, RequestLogger } from 'testcafe';
import { UsersInformations } from '../../page-objects/components/UserInformations';
import { Locators } from '../../page-objects/pages/Locators';

const usersInformations = new UsersInformations();
const locators = new Locators();

const logger = RequestLogger();

// prettier-ignore
fixture `Feedback Page Test`
  .page `http://zero.webappsecurity.com/index.html`
  .requestHooks(logger);

test('feeback funtion page', async t => {
  // variable
  const subjectText = 'Test Subject';
  const messageText = 'This is a test feedback message!';
  const sendPage = Selector('div').innerText;

  //1st action
  await t
    .expect(logger.contains(record => record.response.statusCode === 200))
    .ok();
  await t.expect(locators.signInButton.exists).ok();
  await t.click(locators.feedbackButton);
  await t.expect(locators.feebackForm.exists).ok();

  // 2nd action
  await t.typeText(locators.nameInputField, usersInformations.username, {
    paste: true,
  });
  await t.typeText(locators.emailInputField, usersInformations.email, {
    paste: true,
  });
  await t.typeText(locators.subjectInputField, subjectText), { paste: true };
  await t.typeText(locators.messageTextArea, messageText), { paste: true };
  await t.click(locators.senderButton);
  await t.expect(sendPage).contains(usersInformations.username);
});
