const {Router} = require('express');
const IngredientController = require('../controllers/Ingredient.controller');


const ingredientRouter = Router();

ingredientRouter.get('/', IngredientController.getAllIngredient);
ingredientRouter.post('/', IngredientController.addIngredient);


module.exports = ingredientRouter;