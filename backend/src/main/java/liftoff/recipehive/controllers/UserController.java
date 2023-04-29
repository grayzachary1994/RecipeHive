package liftoff.recipehive.controllers;

import liftoff.recipehive.models.User;
import liftoff.recipehive.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("api/")
public class UserController {

    @Autowired
    private UserRepository userRepository;

//    @GetMapping("add")
//    public String displayAddUserForm(User user) {
//        return;
//    }

    @PostMapping("add/")
    public String processAddUserForm(@RequestBody @Valid User user, Errors errors) {
        if (!errors.hasErrors()) {
            return "User not created. Please fix errors.";
        } else {
            userRepository.save(user);
            return "New user added.";
        }

    }


}
