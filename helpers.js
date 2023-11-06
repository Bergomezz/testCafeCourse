import { t } from 'testcafe';
import { Locators } from './page-objects/pages/Locators';

const localize = new Locators();

export async function Login(username, password) {
  await t.click(localize.signInButton);
  await t.typeText(localize.usernameInput, username, { paste: true });
  await t
    .typeText(localize.passwordInput, password, { paste: true })
    .click(localize.submitButton);
}
