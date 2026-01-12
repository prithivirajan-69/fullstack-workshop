import java.util.Objects;

public class Pair<K, V> {
    private final K key;
    private final V value;

    // Constructor
    public Pair(K key, V value) {
        this.key = key;
        this.value = value;
    }

    // Getters
    public K getKey() {
        return key;
    }

    public V getValue() {
        return value;
    }

    // swap(): returns a new Pair<V, K>
    public Pair<V, K> swap() {
        return new Pair<>(value, key);
    }

    // equals(): compares keys and values
    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (!(obj instanceof Pair)) return false;
        Pair<?, ?> other = (Pair<?, ?>) obj;
        return Objects.equals(key, other.key)
            && Objects.equals(value, other.value);
    }

    // hashCode(): consistent with equals()
    @Override
    public int hashCode() {
        return Objects.hash(key, value);
    }

    // toString(): nice string representation
    @Override
    public String toString() {
        return "Pair[" + key + ", " + value + "]";
    }
}