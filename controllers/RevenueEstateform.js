const {pool} = require('../db');
const sql = require("mssql/msnodesqlv8");
var events = require('events');


const RevenueEstate = async function (req, res) {
    try {
       const request = pool.request();
       const {RevenueEstate,Type,RectangleNo,NoOfKillas,RectangleKhasraNo,RectangleKhasraNoExt,KilaNo,KilaNoExt,Kanal,Marla,Acre,Share}=req.body;

      await request
       .input('RevenueEstate', sql.VarChar(500),RevenueEstate)
       .input('Type', sql.VarChar(500),Type)
       .input('RectangleNo', sql.VarChar(500),RectangleNo)
       .input('NoOfKillas', sql.VarChar(500),NoOfKillas)
       .input('RectangleKhasraNo',  sql.VarChar(500),RectangleKhasraNo)
       .input('RectangleKhasraNoExt', sql.VarChar(500),RectangleKhasraNoExt)
       .input('KilaNo', sql.VarChar(500),KilaNo)
       .input('KilaNoExt', sql.VarChar(500),KilaNoExt)
       .input('Kanal', sql.VarChar(500),Kanal)
       .input("Marla", sql.VarChar(500),Marla)
       .input("Acre", sql.VarChar(500),Acre)
       .input("Share", sql.VarChar(500),Share)
       .query(`INSERT INTO tbl_RevenueEstateKhasra(RevenueEstate, Type, RectangleNo,NoOfKillas, RectangleKhasraNo,KilaNo,RectangleKhasraNoExt, KilaNoExt, Kanal, Marla, Acre, Share) 
       VALUES (@RevenueEstate, @Type, @RectangleNo, @NoOfKillas, @RectangleKhasraNo, @RectangleKhasraNoExt, @KilaNo, @KilaNoExt, @Kanal,@Marla, @Acre, @Share)`)
    res.send("Data inserted successfully!😊👍");

        
    } catch (error) {
        console.error('Error inserting data:', error);
        res.status(500).send('Internal Server Error 😒'); 
    }
};

module.exports = {RevenueEstate}