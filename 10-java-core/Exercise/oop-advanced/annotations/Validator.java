package oop_advanced;

import java.lang.reflect.Field;
import java.util.*;

public class Validator {

    public static List<String> validate(Object obj) {
        List<String> errors = new ArrayList<>();

        for (Field field : obj.getClass().getDeclaredFields()) {
            field.setAccessible(true);
            try {
                Object value = field.get(obj);

                if (field.isAnnotationPresent(NotNull.class) && value == null) {
                    errors.add(field.getAnnotation(NotNull.class).message());
                }

                if (field.isAnnotationPresent(Validate.class)) {
                    Validate v = field.getAnnotation(Validate.class);
                    int num = (int) value;
                    if (num < v.min() || num > v.max()) {
                        errors.add(v.message());
                    }
                }
            } catch (Exception ignored) {}
        }
        return errors;
    }
}
