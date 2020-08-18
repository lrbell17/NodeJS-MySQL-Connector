import Account from './src/customer_account.js';
import AccountDao from './src/account_dao.js';

let account = new Account(1111, 1234, 99999999);
let account2 = new Account(1114, 1210, 15123454);

let accountDao = new AccountDao();

accountDao.addAccount(account);
accountDao.addAccount(account2);

accountDao.getAccounts();


