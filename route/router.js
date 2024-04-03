const express = require("express");
const  router = express.Router();
const multer = require('multer');
const upload = multer();
const {sumitForm, getFormData,editFormData,deleteFormData,searchFormDataByUCID} = require("../controllers/summitform");
const {RevenueEstate} = require("../controllers/RevenueEstateform");


router.post("/api/submit-form", upload.none(), sumitForm);
router.get("/api/getFormData", getFormData);
router.put("/api/editFormData", upload.none(),editFormData);
router.delete("/api/deleteFormData",deleteFormData);
router.get('/api/search/:UCID', searchFormDataByUCID);

//Next Page RevenueEstate
router.post("/api/postRevenueEstate",RevenueEstate);
router.get('/', (req, res) => {
    // res.render('tcp', { formAction: '/submit-form' });
    
    // const initialValues = {
    //    type : "add",
    //    ControledArea : type === "add" ? "" : "Gurugram"
    //     // Add more initial values as needed
    // };
    // res.render('tcp', {initialValues})
    res.render('tcp')
});

router.get('/RevenueEstate' , (req, res) => {
    res.render('RevenueEstate')
})

router.get('/ConstructionExisting' , (req, res) => {
    res.render('ConstructionExisting')
})

router.get('/NatureofViolation' , (req, res) => {
    res.render('NatureofViolation')
})

router.get('/IndependentConstruction' , (req, res) => {
    res.render('IndependentConstruction')
})

router.get('/PrmCompetentAuth' , (req, res) => {
    res.render('PrmCompetentAuth')
})

router.get('/OfficeProposal' , (req, res) => {
    res.render('OfficeProposal')
})

router.get('/searchUC' , (req, res) => {
    res.render('searchUC')
})

router.get('/illegalLand' , (req, res) => {
    res.render('illegalLand')
})
router.get('/FIRmemo' , (req, res) => {
    res.render('FIRmemo')
})

router.get('/subDivision' , (req, res) => {
    res.render('subDivision')
})

router.get('/ConstViolation' , (req, res) => {
    res.render('ConstViolation')
})

router.get('/searchillegal' , (req, res) => {
    res.render('searchillegal')
})

router.get('/orderDTP' , (req, res) => {
    res.render('orderDTP')
})
router.get('/misusereport' , (req, res) => {
    res.render('misusereport')
})
router.get('/misuseland' , (req, res) => {
    res.render('misuseland')
})
router.get('/searchfilling' , (req, res) => {
    res.render('searchfilling')
})
router.get('/followup' , (req, res) => {
    res.render('followup')
})
router.get('/demolitionschedule' , (req, res) => {
    res.render('demolitionschedule')
})
router.get('/demolitionexercise' , (req, res) => {
    res.render('demolitionexercise')
})

module.exports = router