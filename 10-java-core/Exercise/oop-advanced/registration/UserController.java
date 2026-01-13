package oop_advanced;

import java.util.ArrayList;
import java.util.List;

public class UserController {

    private UserService service = new UserService();

    public Result register(String name, String email, String pwd, int age) {
        List<String> errors = new ArrayList<>();

        try {
            service.register(new User(name, email, pwd, age));
            return Result.success("User registered successfully");
        } catch (ValidationException | DuplicateUserException e) {
            errors.add(e.getMessage());
        }
        return Result.failure(errors);
    }
}
