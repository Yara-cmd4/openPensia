const router = require("express").Router();
const userController = require("../Controller/user");

router
  .route("/add-approved-user")
  .post(userController.addApprovedUser);

router
  .route("/add-user")
  .post(userController.addUser);

  router
  .route("/login")
  .post(userController.login);

  router
  .route("/user-voting-history")
  .post(userController.getUserVotingHistory);








module.exports = router;
