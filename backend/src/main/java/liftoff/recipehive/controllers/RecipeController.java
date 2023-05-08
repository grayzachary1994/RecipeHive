package liftoff.recipehive.controllers;
import liftoff.recipehive.models.Recipe;
import liftoff.*;
import liftoff.recipehive.repositories.RecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import java.util.ArrayList;

@RestController
@RequestMapping("api/recipe")
@CrossOrigin
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
        if (errors.hasErrors()) {
            return "add-recipe";
        }
        recipeRepository.save(newRecipe);
        return "Recipe added to your cookbook.";

    }

    @GetMapping
    public ArrayList<Recipe> displayCookbook(@RequestParam(required = false) Integer recipeId) {
        return (ArrayList<Recipe>) recipeRepository.findAll();

    }
}

