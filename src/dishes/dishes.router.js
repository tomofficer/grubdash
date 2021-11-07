//Router
const router = require("express").Router();

//Path for Controller
const controller = require("./dishes.controller");

//Path for methodNotAllowed
const methodNotAllowed = require("../errors/methodNotAllowed");

// TODO: Implement the /dishes routes needed to make the tests pass
//Dishes Routes
router
  .route("/:dishId")
  .get(controller.read)
  .put(controller.update)
  .all(methodNotAllowed);

router
  .route("/")
  .get(controller.list)
  .post(controller.create)
  .all(methodNotAllowed);


module.exports = router;
