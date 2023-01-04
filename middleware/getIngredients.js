const {Ingredient} = require('../model');

module.exports.findIngredient = async(req, res, next) => {
    try {
        const {body: {ingredients} }= req;
        const ingrs = [];
        for (let i = 0; i < ingredients.length; i++) {
            const ingr = await Ingredient.findOne({
                name: ingredients[i]});
                ///////If does not exist - create it!
                ingrs.push(ingr['_id']);
        }
        req.ingredients = ingrs;
        next();
    } catch(error) {
        next(error);
    }
}