const express = require('express');
const { signupValidation, loginValidation } = require('../Middleware/AuthValidation');
const { signup, login,verify, forgetPassword, resetPassword, getAdminPendingUsers, acceptUser, deleteUserRequest } = require('../Controllers/AuthController');
const { addAdviser, updateSlots, getAllAdvisers, deleteAdviser, sendAdviserRequest, getAdviserRequestsForTeacher, getStudentRequests, updateRequestStatus, updateRequestFeedback } = require('../Controllers/AdviserController');
const {addAnnouncements,fetchAnnouncements, updateAnnouncement, deleteAnnouncement} = require('../Controllers/NoticeBoard');
const { addResults, fetchresults, deleteresult } = require('../Controllers/ResultController');
const router = express.Router();
router.post("/signup",signupValidation,signup);

router.post("/login",loginValidation,login);

router.post("/verify",verify);
router.post("/forget",forgetPassword);
router.post("/resetPassword",resetPassword);
router.post("/getAdminPendingUsers",getAdminPendingUsers);
router.post("/acceptUser",acceptUser);
router.post("/deleteUserRequest",deleteUserRequest);

router.post("/addAdviser", addAdviser); 
router.put("/update-slot/:adviserId/:slotIndex", updateSlots); 
router.get("/getAllAdvisers", getAllAdvisers); 
router.delete("/deleteAdviser", deleteAdviser); 
router.post("/sendAdviserRequest", sendAdviserRequest);
router.get('/getAdviserRequestsForTeacher/:adviseremail', getAdviserRequestsForTeacher);
router.get("/getStudentRequests/:email", getStudentRequests);
router.put("/updateRequestStatus/:id", updateRequestStatus);
router.put("/updateRequestFeedback/:id", updateRequestFeedback);




router.post('/addAnouncements', addAnnouncements);
router.get('/fetchAnnouncements', fetchAnnouncements);
router.put('/updateAnnouncement/:id', updateAnnouncement);
router.delete('/deleteAnnouncement/:id', deleteAnnouncement);

router.post('/addResults', addResults);
router.get('/fetchresults', fetchresults);
router.delete('/deleteresult', deleteresult); 




module.exports=router;