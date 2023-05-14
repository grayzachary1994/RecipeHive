package liftoff.recipehive.controllers;
import liftoff.recipehive.models.Recipe;
import liftoff.recipehive.repositories.RecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("api/recipe")
@CrossOrigin(origins = "http://localhost:3000")
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

    @GetMapping("recipe-list")
    public ResponseEntity<List<Recipe>> displayCookbook() {
        List<Recipe> recipes = recipeRepository.findAll();
        return ResponseEntity.ok(recipes);
    }
}

