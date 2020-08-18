import Account from './customer_account.js';
import pkg from 'mysql';

class AccountDao{

    getConnection(){
        const {createConnection} = pkg;

        var conn = createConnection({
            host: 'localhost', 
            user: 'root',
            password: 'root',
            database: 'nodeDB'
        });
        return conn;
    }

    addAccount(account){
        var conn = this.getConnection();

        conn.connect(function(err){
            if (err) throw err;
            console.log("Connected!");

            let sql = 'insert into accounts(accountNo, pin, balance) values(' + account.accountNo + ', ' + 
                account.pin + ', ' + account.balance + ')';

            // execute query
            conn.query(sql, function (err, result) {
                if (err) throw err;
                console.log("1 record inserted");
            });
        });
        
    }

    getSelectAllQuery(){
        var conn = this.getConnection();
        return new Promise(function (resolve, reject){
            
            conn.connect(function(err) {
                if (err) throw err;
                console.log("Connected!");
            
                // execute query
                conn.query("SELECT * FROM accounts", function (err, result, fields) {
                if (err) throw err;
                resolve(result);
                });
            });
        });
    }

    async getAccounts(){
        let accounts = [];
        await this.getSelectAllQuery().then(result => {
            for (let i = 0; i < result.length; i++){        
                let acct = new Account(result[i].accountNo, result[i].pin, result[i].balance)
                accounts.push(acct);        
            }
            console.log(accounts);
        });  
    }

}

export default AccountDao;