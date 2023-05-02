package liftoff.recipehive.controllers;

import liftoff.recipehive.models.User;
import liftoff.recipehive.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("api/user")
@CrossOrigin
public class UserController {

    @Autowired
    private UserRepository userRepository;

//    @GetMapping("add")
//    public String displayAddUserForm(User user) {
//        return;
//    }

    @PostMapping("add")
    public String processAddUserForm(@RequestBody @Valid User user) {
        if (user.getPassword().equals(user.getVerify())) {
            userRepository.save(user);
            return "New user added.";

        } else {
            return "User not created. Please fix errors.";
        }

    }


}
