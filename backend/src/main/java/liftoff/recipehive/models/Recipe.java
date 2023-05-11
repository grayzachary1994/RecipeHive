package liftoff.recipehive.models;

import jakarta.persistence.*;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import java.util.Arrays;
import java.util.List;

@Entity
public class Recipe {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Size(min=3, message="Name must be 3 characters or longer.")
    private String name;
    @Size(min=5, message="Description must be 5 characters or longer.")
    private String description;
    @NotEmpty(message = "Ingredients required.")
    private String ingredients;
    @NotEmpty(message = "Steps required.")
    private String steps;
    private String time;
    public Recipe(){

    }

    public Recipe(String name, String description, String ingredients,
                  String steps, String time) {
        this();
        this.name = name;
        this.description = description;
        this.ingredients = ingredients;
        this.steps = steps;
        this.time = time;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public List<String> getIngredients() {
        return Arrays.asList(ingredients.split("`"));
    }

    public void setIngredients(List<String> ingredients) {
        this.ingredients = String.join("`", ingredients);
    }

    public List<String> getSteps() {
        return Arrays.asList(steps.split("`"));
    }

    public void setSteps(List<String> steps) {
        this.steps = String.join("`", steps);
    }
}
