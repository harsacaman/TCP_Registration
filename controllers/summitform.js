// const config = require("../db");
const {pool}= require("../db")
const sql = require("mssql/msnodesqlv8");
var events = require('events');
const multer = require('multer');
const upload = multer();

//======================Unauthorized Construction (UC) Site Inspection Report ===========START======================
// This is for Insert Data
// const sumitForm = async (req, res) => {
//     try {
//         // const pool = await sql.connect(config);
//         const request = pool.request(); 

//         const { DateOfDetection, DateOfReport, DistrictID, ControledArea, UrbanArea, OwnerName, OwnerAddress, LocationDetails, AreaOfSite, DevelopmentPlan, AttachmentFile, Subject } = req.body;
//         console.log(DateOfDetection);
//         console.log(ControledArea)
//         // Insert data into the table
       

//         await request
//             .input('DateOfDetection', sql.Date, DateOfDetection)
//             .input('DateOfReport', sql.Date, DateOfReport)
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
        
//         res.send('Data inserted successfully!😊👍');
//     } catch (error) {
//         console.error('Error inserting data:', error);
//         res.status(500).send('Internal Server Error');
//     }
// }

const sumitForm = async (req, res) => {
    try {
        // Request body will contain form data
        const formData = req.body;

        // Extract form data from formData object
        const { DateOfDetection, DateOfReport, DistrictID, ControledArea, UrbanArea, OwnerName, OwnerAddress, LocationDetails, AreaOfSite, DevelopmentPlan, AttachmentFile, Subject } = formData;

        console.log(DateOfDetection);
        console.log(ControledArea);
        const request = pool.request();
        // Your database insertion code goes here
        await request
            .input('DateOfDetection', sql.Date, DateOfDetection)
            .input('DateOfReport', sql.Date, DateOfReport)
            .input('DistrictID', sql.Int, DistrictID)
            .input('ControledArea', sql.VarChar(500), ControledArea)
            .input('UrbanArea', sql.VarChar(500), UrbanArea)
            .input('OwnerName', sql.VarChar(500), OwnerName)
            .input('OwnerAddress', sql.VarChar(500), OwnerAddress)
            .input('LocationDetails', sql.VarChar(500), LocationDetails)
            .input('AreaOfSite', sql.VarChar(500), AreaOfSite)
            .input('DevelopmentPlan', sql.VarChar(500), DevelopmentPlan)
            .input('AttachmentFile', sql.VarChar(500), AttachmentFile)
            .input('Subject', sql.VarChar(500), Subject)
            .query(`INSERT INTO tbl_U_C_SiteInspReport (DateOfDetection, DateOfReport, DistrictID, ControledArea, UrbanArea, OwnerName, OwnerAddress, LocationDetails, AreaOfSite, DevelopmentPlan, AttachmentFile, Subject) 
                    VALUES (@DateOfDetection, @DateOfReport, @DistrictID, @ControledArea, @UrbanArea, @OwnerName, @OwnerAddress, @LocationDetails, @AreaOfSite, @DevelopmentPlan, @AttachmentFile, @Subject)`);
        
        res.send('Data inserted successfully!😊👍');
    } catch (error) {
        console.error('Error inserting data:', error);
        res.status(500).send('Internal Server Error');
    }
};

// const getFormData = async (req, res) => {
//     try {
//         const pool = await sql.connect(config);
        
//         // Execute SELECT query to retrieve data from the table
//         const result = await pool.request().query('SELECT * FROM tbl_U_C_SiteInspReport');
        
//         // Send the retrieved data in response
//         res.json(result.recordset);
//     } catch (error) {
//         console.error('Error retrieving data:', error);
//         res.status(500).send('Internal Server Error');
//     }
// }
const getFormData = async (req, res) => {
    try {
        // Reuse the existing connection pool
        const request = pool.request();
        
        // Execute SELECT query to retrieve data from the table
        const result = await request.query(`select DateOfDetection, DateOfReport, DistrictID, ControledArea, UrbanArea, OwnerName, OwnerAddress,
        LocationDetails, AreaOfSite, DevelopmentPlan,Subject from tbl_U_C_SiteInspReport`);
        
        // Send the retrieved data in response
        res.json(result.recordset);
    } catch (error) {
        console.error('Error retrieving data:', error);
        res.status(500).send('Internal Server Error');
    }
}

const deleteFormData = async (req, res) => {
    try {
        // const pool = await sql.connect(config);
        const request = pool.request(); // Define request object here

        const { UCID } = req.params; // Assuming you're extracting UCID from request parameters
        // No need to redeclare UCID here: var { UCID } = req.body;
        
        // Execute DELETE query to delete the record with specified id
        await request
            .input('UCID', sql.Int, UCID)
            .query('DELETE FROM tbl_U_C_SiteInspReport WHERE UCID=@UCID');

        res.send('Your Data has been deleted');
    } catch (err) {
        console.error('Error deleting data:', err);
        res.status(500).send('Internal Server Error');
    }
}



/// This is for Editing data
const editFormData = async (req, res) => {
    try {
        // const pool = await sql.connect(config);
        const request = pool.request();
        const editData = req.body;
        // var { UCID } = req.params; 
        const { DateOfDetection, UCID, DateOfReport, DistrictID, ControledArea, UrbanArea, OwnerName, OwnerAddress, LocationDetails, AreaOfSite, DevelopmentPlan, AttachmentFile, Subject } = editData ;
        
        // if (!UCID){
        //     res.status(400).send('Kindly give UCID');
        //     return
           
        // }
        // Execute UPDATE query to edit the record
        await request
            .input('UCID', sql.Int, UCID)
            .input('DateOfDetection', sql.Date, DateOfDetection)
            .input('DateOfReport', sql.Date, DateOfReport)
            .input('DistrictID', sql.Int, DistrictID)
            .input('ControledArea', sql.VarChar(500), ControledArea)
            .input('UrbanArea', sql.VarChar(500), UrbanArea)
            .input('OwnerName', sql.VarChar(500), OwnerName)
            .input('OwnerAddress', sql.VarChar(500), OwnerAddress)
            .input('LocationDetails', sql.VarChar(500), LocationDetails)
            .input('AreaOfSite', sql.VarChar(500), AreaOfSite)
            .input('DevelopmentPlan', sql.VarChar(500), DevelopmentPlan)
            .input('AttachmentFile', sql.VarChar(500), AttachmentFile)
            .input('Subject', sql.VarChar(500), Subject)
            .query(`UPDATE tbl_U_C_SiteInspReport 
                    SET DateOfDetection = @DateOfDetection, 
                        DateOfReport = @DateOfReport, 
                        DistrictID = @DistrictID, 
                        ControledArea = @ControledArea, 
                        UrbanArea = @UrbanArea, 
                        OwnerName = @OwnerName, 
                        OwnerAddress = @OwnerAddress, 
                        LocationDetails = @LocationDetails, 
                        AreaOfSite = @AreaOfSite, 
                        DevelopmentPlan = @DevelopmentPlan, 
                        AttachmentFile = @AttachmentFile, 
                        Subject = @Subject 
                    WHERE UCID = @UCID`);

        res.send('Data edited successfully!');
    } catch (error) {
        console.error('Error editing data:', error);
        res.status(500).send('Internal Server Error');
    }
}


// This is for Search Data
const searchFormDataByUCID = async (req, res) => {
    try {
        // const pool = await sql.connect(config);
        const request = pool.request();

       const { UCID } = req.params;
        
        // Execute SELECT query to retrieve data by UCID
         result = await request
            .input('UCID', sql.Int, UCID)
            .query(`SELECT * FROM tbl_U_C_SiteInspReport WHERE UCID = @UCID`);

        if (result.recordset.length === 0) {
            return res.status(404).send('Data not found');
        }

        res.json(result.recordset);
    } catch (error) {
        console.error('Error searching data:', error);
        res.status(500).send('Internal Server Error');
    }
}

//======================Unauthorized Construction (UC) Site Inspection Report ===========END======================

module.exports= {sumitForm, getFormData,editFormData,deleteFormData,searchFormDataByUCID};