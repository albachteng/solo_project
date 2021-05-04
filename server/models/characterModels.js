const {Pool} = require('pg'); 

const PG_URI = 'postgres://wwlmlnrv:IbH_Czff2KpQXH4RiHamwl4fKSt0S3Eg@queenie.db.elephantsql.com:5432/wwlmlnrv';

const pool = new Pool({
    connectionString: PG_URI
});

module.exports = {
    query: (text, params, callback) => {
        console.log('executed query', text);
        return pool.query(text, params, callback);
    }
}