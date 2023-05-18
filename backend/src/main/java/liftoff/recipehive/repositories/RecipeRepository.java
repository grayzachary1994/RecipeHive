package liftoff.recipehive.repositories;

import liftoff.recipehive.models.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RecipeRepository extends JpaRepository<Recipe, Integer> {

    Optional<Recipe> findByName(String name);

    Boolean existsByName(String name);

//    Optional<Recipe> findByUserId(int userId);

}