package liftoff.recipehive.controllers;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import jakarta.servlet.http.HttpServletRequest;
import liftoff.recipehive.models.User;
import liftoff.recipehive.models.dto.ForgotPasswordDTO;
import liftoff.recipehive.models.dto.ResetPasswordDTO;
import liftoff.recipehive.security.services.UserServices;
import liftoff.recipehive.security.services.Utility;
import net.bytebuddy.utility.RandomString;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.io.UnsupportedEncodingException;

@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:8080"}, maxAge = 3600)
@RestController
@RequestMapping("/api/recovery")
public class ForgotPasswordController {
    @Autowired
    private JavaMailSender mailSender;

    @Autowired
    private UserServices userService;

    @PostMapping("/forgot_password")
    public ResponseEntity<?> processForgotPassword(@Valid @RequestBody ForgotPasswordDTO forgotPasswordDTO, HttpServletRequest request) throws MessagingException, UnsupportedEncodingException {
        String token = RandomString.make(30);
        String email = forgotPasswordDTO.getEmail();

        userService.updateResetPasswordToken(token, email);
        String resetPasswordLink = Utility.getSiteURL(request) + "/api/recovery/reset_password?token=" + token;
        sendEmail(email, resetPasswordLink);

        return ResponseEntity.ok("Password reset request received.");
    }

    @GetMapping("/reset_password")
    public ResponseEntity<?> showResetPasswordForm(@Param(value = "token") String token) {
        User user = userService.getByResetPasswordToken(token);

        if (user == null) {
            return ResponseEntity.badRequest().body("User does not exist.");
        }

        return ResponseEntity.ok("Change password functionality available.");
    }

    @PostMapping("/reset_password")
    public ResponseEntity<?> processResetPassword(@Valid @RequestBody ResetPasswordDTO resetPasswordDTO, HttpServletRequest request) {
        String token = request.getParameter("token");
        String password = resetPasswordDTO.getPassword();

        User user = userService.getByResetPasswordToken(token);

        if (user == null) {
            return ResponseEntity.badRequest().body("User does not exist.");
        } else {
            userService.updatePassword(user, password);

            return ResponseEntity.ok("User password updated.");
        }

    }

    public void sendEmail(String recipientEmail, String link)
            throws MessagingException, UnsupportedEncodingException {
        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message);

        helper.setFrom("RecipeHiveRecovery@gmail.com", "Recipe Hive");
        helper.setTo(recipientEmail);

        String subject = "Here's the link to reset your password";

        String content = "<p>Hello,</p>"
                + "<p>You have requested to reset your password.</p>"
                + "<p>Click the link below to change your password:</p>"
                + "<p><a href=\"" + link + "\">Change my password</a></p>"
                + "<br>"
                + "<p>Ignore this email if you do remember your password, "
                + "or you have not made the request.</p>";

        helper.setSubject(subject);

        helper.setText(content, true);

        mailSender.send(message);
    }

}