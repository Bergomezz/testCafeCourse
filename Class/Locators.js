import { Selector } from 'testcafe';

export class Locators {
  feedbackButton = Selector('#feedback');
  signInButton = Selector('#signin_button');
  feebackForm = Selector('.form-inputs');
  nameInputField = Selector('#name');
  emailInputField = Selector('#email');
  subjectInputField = Selector('#subject');
  messageTextArea = Selector('#comment');
  senderButton = Selector('.btn-signin');
  onlineBakingButton = Selector('#onlineBankingMenu');
}
