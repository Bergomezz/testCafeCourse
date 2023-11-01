import { Selector, RequestLogger } from 'testcafe';
import { Locators } from '../../Class/Locators';
import { UsersInformations } from '../../Class/UserInformations';
import { Login } from '../../helpers';

const localize = new Locators();
const useData = new UsersInformations();

const logger = RequestLogger();

// prettier-ignore
fixture `Payment Page`
  .page `http://zero.webappsecurity.com/index.html`
  .requestHooks(logger)

test.before(async t => {
  // Variable

  // 1st action
  await t
    .expect(logger.contains(result => result.response.statusCode === 200))
    .ok();
  await Login(useData.loginName, useData.password);

  // 2nd action
  await t.expect(localize.loginForm.exists).ok();
  await Login(useData.loginName, useData.password);
})('payment functionality. user can add new payee to the list', async t => {
  // Variables
  const addNewPayeeTab = Selector('a').withText('Add New Payee');

  // 1st action
  //await t.click(localize.payBillsTab);
});
