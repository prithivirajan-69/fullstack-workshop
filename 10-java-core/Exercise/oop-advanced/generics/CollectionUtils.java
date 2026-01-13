package oop_advanced;

import java.util.*;
import java.util.function.Predicate;
import java.util.stream.Collectors;

public class CollectionUtils {

    public static <T> T findFirst(List<T> list, Predicate<T> predicate) {
        return list.stream().filter(predicate).findFirst().orElse(null);
    }

    public static <T extends Comparable<T>> T findMax(List<T> list) {
        return Collections.max(list);
    }

    public static <T> List<T> filter(List<T> list, Predicate<T> predicate) {
        return list.stream().filter(predicate).collect(Collectors.toList());
    }
}
