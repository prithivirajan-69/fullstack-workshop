import java.util.Arrays;
import java.util.List;
import java.util.OptionalDouble;

public class StreamProcessor {

    public static OptionalDouble averageOfEvens(List<Integer> numbers) {
        return numbers.stream()
                      .filter(n -> n % 2 == 0)     // keep only even numbers
                      .mapToInt(Integer::intValue)  // convert to IntStream
                      .average();                   // compute average
    }

    public static void main(String[] args) {
        System.out.println(averageOfEvens(Arrays.asList(1, 2, 3, 4, 5, 6)));
        System.out.println(averageOfEvens(Arrays.asList(1, 3, 5)));
    }
}