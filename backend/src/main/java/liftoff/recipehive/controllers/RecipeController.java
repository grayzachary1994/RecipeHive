package liftoff.recipehive.controllers;

import io.jsonwebtoken.Jwts;
import jakarta.servlet.http.HttpServletRequest;
import liftoff.recipehive.models.Recipe;
import liftoff.recipehive.repositories.RecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
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

    @Value("${bezkoder.app.jwtSecret}")
    private String jwtSecret;


    //    @GetMapping
//    public String displayAddRecipeForm(@RequestBody ) {
//
//        return "add-recipe";
//    }
    @PostMapping("add-recipe")
    public String processAddRecipeForm(@RequestBody @Valid Recipe newRecipe, Errors errors, HttpServletRequest httpServletRequest) {
        if (errors.hasErrors()) {
            return "add-recipe";
        }
        String newRecipeUserName = retrieveUsernameFromHeader(httpServletRequest);
        newRecipe.setRecipeUserName(newRecipeUserName);
        recipeRepository.save(newRecipe);
        return "Recipe added to your cookbook.";

    }

    @GetMapping("recipe-list")
    public ResponseEntity<List<Recipe>> displayCookbook() {
        List<Recipe> recipes = recipeRepository.findAll();
        return ResponseEntity.ok(recipes);
    }

    public String retrieveUsernameFromHeader(HttpServletRequest httpServletRequest) {
        System.out.println("Starting retrieval");
        String sessionUserName = httpServletRequest.getHeader("Authorization");
        System.out.println(sessionUserName + "-1");
        if (StringUtils.hasText(sessionUserName) && sessionUserName.startsWith("Bearer ")) {
            String longUserName = sessionUserName;
            sessionUserName = longUserName.substring(7, longUserName.length());
        }
        System.out.println(sessionUserName + "-2");

        String decodedSessionUserName = Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(sessionUserName).getBody().getSubject();

        System.out.println(decodedSessionUserName + "-3");

        System.out.println("Executed retrieval");
        return decodedSessionUserName;
    }
}

