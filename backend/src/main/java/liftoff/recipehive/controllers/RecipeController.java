package liftoff.recipehive.controllers;

import liftoff.recipehive.models.Recipe;
import liftoff.recipehive.repositories.RecipeRepository;
import liftoff.recipehive.security.jwt.JwtUtils;
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
    JwtUtils jwtUtils;

    @Autowired
    private RecipeRepository recipeRepository;


    //    @GetMapping
//    public String displayAddRecipeForm(@RequestBody ) {
//
//        return "add-recipe";
//    }
    @PostMapping("add-recipe")
    public String processAddRecipeForm(@RequestBody @Valid Recipe newRecipe, Errors errors, String accessToken) {
        if (errors.hasErrors()) {
            return "add-recipe";
        }
        String newRecipeUserName = jwtUtils.getUserNameFromJwtToken(accessToken);
        newRecipe.setRecipeUserName(newRecipeUserName);
        recipeRepository.save(newRecipe);
        return "Recipe added to your cookbook.";

    }

    @GetMapping("recipe-list")
    public ResponseEntity<List<Recipe>> displayCookbook() {
        List<Recipe> recipes = recipeRepository.findAll();
        return ResponseEntity.ok(recipes);
    }
}

