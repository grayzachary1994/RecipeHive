package liftoff.recipehive.models;

import jakarta.persistence.Entity;

import javax.annotation.processing.Generated;
import java.util.ArrayList;
import java.util.Objects;

@Entity
public class Recipe extends AbstractEntity {

    private String name;
    private Instructions instructions;
    private ArrayList<Ingredient> ingredients;

    public Recipe() {
    }

    public Recipe(String name, Instructions instructions, ArrayList<Ingredient> ingredients) {
        super();
        this.name = name;
        this.instructions = instructions;
        this.ingredients = ingredients;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Instructions getInstructions() {
        return instructions;
    }

    public void setInstructions(Instructions instructions) {
        this.instructions = instructions;
    }

    public ArrayList<Ingredient> getIngredients() {
        return ingredients;
    }

    public void setIngredients(ArrayList<Ingredient> ingredients) {
        this.ingredients = ingredients;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        if (!super.equals(o)) return false;

        Recipe recipe = (Recipe) o;

        if (!Objects.equals(name, recipe.name)) return false;
        if (!Objects.equals(instructions, recipe.instructions))
            return false;
        return Objects.equals(ingredients, recipe.ingredients);
    }

    @Override
    public int hashCode() {
        int result = super.hashCode();
        result = 31 * result + (name != null ? name.hashCode() : 0);
        result = 31 * result + (instructions != null ? instructions.hashCode() : 0);
        result = 31 * result + (ingredients != null ? ingredients.hashCode() : 0);
        return result;
    }

    @Override
    public String toString() {
        return "Recipe{" +
                "name='" + name + '\'' +
                ", instructions=" + instructions +
                ", ingredients=" + ingredients +
                '}';
    }
}
