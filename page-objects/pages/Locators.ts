import { Selector, t } from 'testcafe';

export default class Locators {
  loginForm = Selector('#login_form');
  usernameInput = Selector('#user_login');
  passwordInput = Selector('#user_password');
  submitButton = Selector('.btn-primary');
  feedbackButton = Selector('#feedback');
  signInButton = Selector('#signin_button');
  feebackForm = Selector('.form-inputs');
  nameInputField = Selector('#name');
  emailInputField = Selector('#email');
  subjectInputField = Selector('#subject');
  messageTextArea = Selector('#comment');
  senderButton = Selector('.btn-signin');
  onlineBakingButton = Selector('#onlineBankingMenu');
  searchingBoxInput = Selector('#searchTerm');
  payBillsTab = Selector('#pay_bills_tab');
  sendPage = Selector('div');
}
