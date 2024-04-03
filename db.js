

// const sql = require("mssql/msnodesqlv8");

// // MSSQL database configuration
// const config = {
//     user: 'sa',
//     password: 'Yashraj@1234',
//     server: 'LAPTOP-54KAUOVA\\SPARTA',
//     database: 'TCP_Enforcement',
//     options: {
//         encrypt: false 
//     }
// };

// // Connect to MSSQL
// const sqlConnection = sql.connect(config)
//     .then(pool => {
//         console.log('Connected to MSSQL');
        
//         // Execute SQL query inside the connection callback
//         const request = pool.request();
//         request.query('SELECT * FROM tbl_U_C_SiteInspReport', (err, result) => {
//             if (err) {
//                 console.error('Error executing query:', err);
//                 return;
//             }
//             else{
//                 // console.log(result.recordset);
//             }
//             // console.log('Query result:', result.recordset);
//         });
        
//         return pool;
//     })
//     .catch(err => console.error('Database connection failed:', err));

// module.exports = {config , sqlConnection}

// db.js
const sql = require("mssql/msnodesqlv8");

// MSSQL database configuration
const config = {
    user: 'sa',
    password: 'Yashraj@1234',
    server: 'LAPTOP-54KAUOVA\\SPARTA',
    database: 'TCP_Enforcement',
    options: {
        encrypt: false 
    }
};

// Connect to MSSQL and export the connection pool
const pool = new sql.ConnectionPool(config);
pool.connect()
    .then(() => console.log("Don't worry! your Data Base is Connected😁🦚"))
    .catch(err => console.error('Database connection failed:😒', err));

module.exports = { config, pool };
