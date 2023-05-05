package liftoff.recipehive.controllers;


import liftoff.recipehive.repositories.RecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import liftoff.recipehive.models.Recipe;
import javax.validation.Valid;

@RestController
@RequestMapping("api/recipe")
public class RecipeController {
    @Autowired
    private RecipeRepository recipeRepository;

//    @GetMapping
//    public String displayAddRecipeForm(@RequestBody ) {
//
//        return "add-recipe";
//    }
    @PostMapping("add-recipe")
    public String processAddRecipeForm(@RequestBody @Valid Recipe newRecipe, Errors errors) {
        if(errors.hasErrors()){
            return "add-recipe";
        }
        recipeRepository.save(newRecipe);
        return "Recipe added to your cookbook.";

    }
}

