const express = require("express")
const router = express.Router()

//models
const Something = require("../models/something");

//routes
//make a request to that end point, then we call the method findAll(), then we make the sql query, then we get the datbase response
router.get("/", (req, res) => {
  Something
  .findAll()
  .then((somethings) => res.json(somethings));
});

router.post("/", (req, res) => {
  const name = req.body.name;
  const clue = req.body.clue;
  const address = req.body.address;

  Something
    .create(name, clue, address)
    .then((something) => res.json(something));
});

router.delete("/:id", (req, res) => {
  const somethingId = req.params.id

  Something
    .delete(somethingId)
    .then(() => res.json({ message: 'Deleted successfully'}))
})

module.exports = router;