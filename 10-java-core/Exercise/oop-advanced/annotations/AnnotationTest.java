package oop_advanced;

public class AnnotationTest {

    public static void main(String[] args) {
        User user = new User();
        user.setAge(15);

        System.out.println(Validator.validate(user));
    }
}
