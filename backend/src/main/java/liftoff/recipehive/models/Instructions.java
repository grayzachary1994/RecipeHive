package liftoff.recipehive.models;

import jakarta.persistence.Entity;

import java.util.ArrayList;

@Entity
public class Instructions extends AbstractEntity{
    private ArrayList<String> instructionList = new ArrayList<>();


    public Instructions() {
    }

    public Instructions(ArrayList<String> instructionList) {
        super();
        this.instructionList = instructionList;
    }

    public void setInstructionList(ArrayList<String> instructionList) {
        this.instructionList = instructionList;
    }

    public ArrayList<String> getInstructionList() {
        return instructionList;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        if (!super.equals(o)) return false;

        Instructions that = (Instructions) o;

        return instructionList.equals(that.instructionList);
    }

    @Override
    public int hashCode() {
        int result = super.hashCode();
        result = 31 * result + instructionList.hashCode();
        return result;
    }

    @Override
    public String toString() {
        return "Instructions{}";
    }
}
