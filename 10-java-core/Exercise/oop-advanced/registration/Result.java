package oop_advanced;

import java.util.List;

public class Result {

    boolean success;
    String message;
    List<String> errors;

    public static Result success(String msg) {
        Result r = new Result();
        r.success = true;
        r.message = msg;
        return r;
    }

    public static Result failure(List<String> errors) {
        Result r = new Result();
        r.success = false;
        r.errors = errors;
        return r;
    }
}
