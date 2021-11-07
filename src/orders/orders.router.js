const router = require("express").Router();

//Path for Controller
const controller = require("./orders.controller");

//Path for methodNotAllowed
const methodNotAllowed = require("../errors/methodNotAllowed");

// TODO: Implement the /orders routes needed to make the tests pass


//ROUTES
router
  .route("/")
  .get(controller.list)
  .post(controller.create)
  .all(methodNotAllowed);

router
  .route("/:orderId")
  .get(controller.read)
  .put(controller.update)
  .delete(controller.destroy)
  .all(methodNotAllowed);


//EXPORTS
module.exports = router;
