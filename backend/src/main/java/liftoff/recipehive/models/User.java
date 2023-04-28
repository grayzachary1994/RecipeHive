package liftoff.recipehive.models;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;


public class User {
    @NotBlank(message = "Username required.")
    @Size(min=5, max=15, message="Username must be between 5 and 15 characters.")
    private String username;

    @Size(min=6, message="Password must be 6 characters or longer.")
    private String password;

    @Size(min=6, message="Password must be 6 characters or longer.")
    @NotNull(message="Passwords must match.")
    private String verify;

    public User() {

    }

    public User(String username, String email, String password, String verify) {
        this();
        this.username = username;
        this.password = password;
        this.verify = verify;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
        checkPassword();
    }

    public String getVerify() {
        return verify;
    }

    public void setVerify(String verify) {
        this.verify = verify;
        checkPassword();
    }

    private void checkPassword() {
        if(password != null && verify != null && !password.equals(verify)) {
            setVerify(null);
        }
    }
}