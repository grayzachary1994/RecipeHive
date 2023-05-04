package liftoff.recipehive.controllers;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import liftoff.recipehive.models.User;
import liftoff.recipehive.models.dto.LoginFormDTO;
import liftoff.recipehive.models.dto.RegistrationFormDTO;
import liftoff.recipehive.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Optional;

@RestController
@RequestMapping("api/user")
@CrossOrigin
public class AuthenticationController {

    @Autowired
    private UserRepository userRepository;

    private static final String userSessionKey = "user";

    public User getUserFromSession(HttpSession session) {
        Integer userId = (Integer) session.getAttribute(userSessionKey);
        if (userId == null) {
            return null;
        }

        Optional<User> userOptional = userRepository.findById(userId);

        if (userOptional.isEmpty()) {
            return null;
        }

        return userOptional.get();
    }

    private static void setUserInSession(HttpSession session, User user) {
        session.setAttribute(userSessionKey, user.getId());
    }

    // Handlers

    @PostMapping("add")
    public String processAddUserForm(@RequestBody @Valid RegistrationFormDTO registrationFormDTO, HttpServletRequest request) {
        User existingUser = userRepository.findByUsername(registrationFormDTO.getUsername());
        String password = registrationFormDTO.getPassword();
        String verify = registrationFormDTO.getVerify();

        if(!(existingUser == null)) {
            return "User already exists.";
        } else if(!password.equals(verify)) {
            return "Password and password verification do not match.";
        } else {
            User newUser = new User(registrationFormDTO.getUsername(), registrationFormDTO.getEmail(), registrationFormDTO.getPassword());
            userRepository.save(newUser);
            setUserInSession(request.getSession(), newUser);

            return "User created.";
        }

    }

    @GetMapping("add")
    public void redirectAfterAddingUser(HttpServletResponse response) {
        response.setHeader("Location", "localhost:3000/");
        response.setStatus(302);
    }


    @PostMapping("login")
    public String processLoginForm(@RequestBody @Valid LoginFormDTO loginFormDTO, HttpServletRequest request, HttpServletResponse response) {
        User existingUser = userRepository.findByUsername(loginFormDTO.getUsername());
        String password = loginFormDTO.getPassword();

        if(existingUser == null || !existingUser.isMatchingPassword(password)) {
            return "Login failed.";
        } else {
            setUserInSession(request.getSession(), existingUser);
            response.setHeader("Location", "localhost:3000/");
//            response.setStatus(302);
            return "Login successful.";
        }
    }

    @GetMapping("login")
    public void redirectAfterLogin(HttpServletResponse response) {
        response.setHeader("Location", "localhost:3000/");
        response.setStatus(302);
    }

//    @RequestMapping(value = "login", method = RequestMethod.GET)
//    public ResponseEntity handleGet(HttpServletResponse response) {
//        HttpHeaders headers = new HttpHeaders();
//        headers.add("Location", "localhost:3000/");
//        return new ResponseEntity(headers, HttpStatus.FOUND);
//    }

    @GetMapping("logout")
    public String logout(HttpServletRequest request, HttpServletResponse response) {
        request.getSession().invalidate();
        response.setHeader("Location", "localhost:3000/login");
        response.setStatus(302);
        return "Logged out.";
    }

}
