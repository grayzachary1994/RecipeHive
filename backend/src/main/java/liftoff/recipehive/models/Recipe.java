package liftoff.recipehive.models;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.ArrayList;

@Entity
public class Recipe {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Size(min=3, message="Name must be 3 characters or longer.")
    private String name;
    @Size(min=5, message="Description must be 5 characters or longer.")
    private String description;
    @NotBlank(message = "Ingredients required.")
    private ArrayList<String> ingredients;
    @NotBlank(message = "Steps required.")
    private ArrayList<String> steps;
    private String time;
    public Recipe(){

    }

    public Recipe(String name, String description, ArrayList<String> ingredients,
                  ArrayList<String> steps, String time) {
        this.name = name;
        this.description = description;
        this.ingredients = ingredients;
        this.steps = steps;
        this.time = time;
    }

    public int getId() {
        return id;
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

    public ArrayList<String> getIngredients() {
        return ingredients;
    }

    public void setIngredients(ArrayList<String> ingredients) {
        this.ingredients = ingredients;
    }

    public ArrayList<String> getSteps() {
        return steps;
    }

    public void setSteps(ArrayList<String> steps) {
        this.steps = steps;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }
}
