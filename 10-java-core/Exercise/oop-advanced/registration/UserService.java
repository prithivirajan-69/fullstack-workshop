package oop_advanced;

import java.util.HashSet;
import java.util.Set;

public class UserService {

    private static Set<String> emails = new HashSet<>();

    public void register(User user) throws ValidationException {
        if (emails.contains(user.email))
            throw new DuplicateUserException("Email already registered");

        validate(user);
        emails.add(user.email);
    }

    private void validate(User u) throws ValidationException {
        if (u.name.length() < 2) throw new ValidationException("Name too short");
        if (!u.email.contains("@")) throw new ValidationException("Invalid email");
        if (u.password.length() < 8) throw new ValidationException("Password too weak");
        if (u.age < 13) throw new ValidationException("Must be 13+");
    }
}
