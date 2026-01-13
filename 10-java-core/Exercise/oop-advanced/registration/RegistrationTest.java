package oop_advanced;

public class RegistrationTest {

    public static void main(String[] args) {

        UserController controller = new UserController();

        System.out.println(controller.register("J", "bad", "weak", 10));
        System.out.println(controller.register("John", "existing@email.com", "Strong1Pass", 25));
        System.out.println(controller.register("Alice", "alice@email.com", "Secure123", 30));
    }
}
