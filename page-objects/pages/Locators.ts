import { Selector, t } from 'testcafe';

export default class Locators {
  loginForm: Selector = Selector('#login_form');
  usernameInput: Selector = Selector('#user_login');
  passwordInput: Selector = Selector('#user_password');
  submitButton: Selector = Selector('.btn-primary');
  feedbackButton: Selector = Selector('#feedback');
  signInButton: Selector = Selector('#signin_button');
  feebackForm: Selector = Selector('.form-inputs');
  nameInputField: Selector = Selector('#name');
  emailInputField: Selector = Selector('#email');
  subjectInputField: Selector = Selector('#subject');
  messageTextArea: Selector = Selector('#comment');
  senderButton: Selector = Selector('.btn-signin');
  onlineBakingButton: Selector = Selector('#onlineBankingMenu');
  searchingBoxInput: Selector = Selector('#searchTerm');
  payBillsTab: Selector = Selector('#pay_bills_tab');
  sendPage: Selector = Selector('div');
}
