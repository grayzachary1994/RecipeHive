package liftoff.recipehive.models;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;

public class Ingredient {


    String name;
    String type;
    int caloriesPerGram;

    public Ingredient(String name, String type, int caloriesPerGram) {
        this.name = name;
        this.type = type;
        this.caloriesPerGram = caloriesPerGram;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Ingredient that = (Ingredient) o;

        if (caloriesPerGram != that.caloriesPerGram) return false;
        if (!name.equals(that.name)) return false;
        return type.equals(that.type);
    }

    @Override
    public int hashCode() {
        int result = name.hashCode();
        result = 31 * result + type.hashCode();
        result = 31 * result + caloriesPerGram;
        return result;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public int getCaloriesPerGram() {
        return caloriesPerGram;
    }

    public void setCaloriesPerGram(int caloriesPerGram) {
        this.caloriesPerGram = caloriesPerGram;
    }
}
