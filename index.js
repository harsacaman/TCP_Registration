const express = require("express");
const sql = require("mssql/msnodesqlv8");
// var EventEmitter = require('events');
var {events} = require('events');



const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));  //This is middleware

const formFilup = require("./route/router");
const db = require("./db")
app.use("/",formFilup);
//=============================SQL SERVER CONNECTION==================================

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
// sql.connect(config)
//     .then(pool => {
//         console.log('Connected to MSSQL');
        
//         // Execute SQL query inside the connection callback
//         const request = pool.request();
//         request.query('SELECT * FROM tbl_U_C_SiteInspReport', (err, result) => {
//             if (err) {
//                 console.error('Error executing query:', err);
//                 return;
//             }
//             console.log('Query result:', result.recordset);
//         });
        
//         return pool;
//     })
//     .catch(err => console.error('Database connection failed:', err));

   
////////////////////////////////////////////////
// Route to handle form submission// Route to handle form submission
// app.post('/submit-form', async function sumitForm (req, res) {
//     try {
//         const pool = await sql.connect(config);
//         const { DateOfDetection, DateOfReport, DistrictID, ControledArea, UrbanArea, OwnerName, OwnerAddress, LocationDetails, AreaOfSite, DevelopmentPlan, AttachmentFile, Subject } = req.body;

//         // Insert data into the table
//         await pool.request()
//             .input('DateOfDetection', sql.DateTime, DateOfDetection)
//             .input('DateOfReport', sql.DateTime, DateOfReport)
//             .input('DistrictID', sql.Int, DistrictID)
//             .input('ControledArea', sql.VarChar(500), ControledArea)
//             .input('UrbanArea', sql.VarChar(500), UrbanArea)
//             .input('OwnerName', sql.VarChar(500), OwnerName)
//             .input('OwnerAddress', sql.VarChar(500), OwnerAddress)
//             .input('LocationDetails', sql.VarChar(500), LocationDetails)
//             .input('AreaOfSite', sql.VarChar(500), AreaOfSite)
//             .input('DevelopmentPlan', sql.VarChar(500), DevelopmentPlan)
//             .input('AttachmentFile', sql.VarChar(500), AttachmentFile)
//             .input('Subject', sql.VarChar(500), Subject)
//             .query(`INSERT INTO tbl_U_C_SiteInspReport (DateOfDetection, DateOfReport, DistrictID, ControledArea, UrbanArea, OwnerName, OwnerAddress, LocationDetails, AreaOfSite, DevelopmentPlan, AttachmentFile, Subject) 
//                     VALUES (@DateOfDetection, @DateOfReport, @DistrictID, @ControledArea, @UrbanArea, @OwnerName, @OwnerAddress, @LocationDetails, @AreaOfSite, @DevelopmentPlan, @AttachmentFile, @Subject)`);
        
//         res.send('Data inserted successfully!');
//     } catch (error) {
//         console.error('Error inserting data:', error);
//         res.status(500).send('Internal Server Error');
//     }
// });

// // Home page route
// app.get('/', (req, res) => {
//     res.render('tcp', { formAction: '/submit-form' });
// });

// app.get('/RevenueEstate' , (req, res) => {
//     res.render('RevenueEstate')
// })

// app.get('/ConstructionExisting' , (req, res) => {
//     res.render('ConstructionExisting')
// })

// app.get('/NatureofViolation' , (req, res) => {
//     res.render('NatureofViolation')
// })

// app.get('/IndependentConstruction' , (req, res) => {
//     res.render('IndependentConstruction')
// })

// app.get('/PrmCompetentAuth' , (req, res) => {
//     res.render('PrmCompetentAuth')
// })

// app.get('/OfficeProposal' , (req, res) => {
//     res.render('OfficeProposal')
// })

app.listen(port, () => {
    console.log(`Server is working on Port number${port}`);
  })

  