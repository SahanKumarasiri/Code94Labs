const router = require("express").Router(); //initialize express router
const RecipeModel = require("../models/models"); //import the model

router.route("/add").post((req, res) => { //backend route for addtion of data pass through the frontend
  const { recipename, ingrediants, description, today } = req.body;

  const Recipe = { recipename, ingrediants, description, today };

  const newRecipeModel = new RecipeModel(Recipe);

  newRecipeModel
    .save() //save to the database
    .then(() => res.json("Recipe Added"))
    .catch((error) => res.status(400).json({ "Error": error }));
});

router.route("/").get((req, res) => {//backend route for getting all data and passing back
  //route for display all

  RecipeModel.find() //find all
    .then((recipes) => {
      res.json(recipes);
    })
    .catch((err) => {
      res.json({ Error: error });
    });
});

router.route("/delete/:id").delete((req, res) => {//backend route for deleting relavant data pass through the froentend
  const { id } = req.params;

  RecipeModel.findByIdAndDelete(id) //find the document by id and delete
    .then(() => res.json({ success: "Recipe Deleted" }))
    .catch((error) => res.json({ Error: error }));
});

router.route("/get/:id").get((req, res) => {//backend route for getting relavant data and passing back
  const { id } = req.params;

  RecipeModel.findById(id) //find the document by id
    .then((recipe) => res.json(recipe))
    .catch((error) => res.json({ Error: error }));
});

router.route("/update/:id").put((req, res) => {//backend route for updating relavant data and passing back
  const { id } = req.params;
  const { recipename, ingrediants, description } = req.body;

  RecipeModel.findByIdAndUpdate(id, { recipename, ingrediants, description }) //find the document by and update the relavant data
    .then(() => res.json({ success: true }))
    .catch((error) => res.json({ success: false, Error: error }));
});

module.exports = router;
