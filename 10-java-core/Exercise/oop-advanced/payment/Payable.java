package oop_advanced;

public interface Payable {
    double getPaymentAmount();

    default void printPaymentInfo() {
        System.out.println("Payment Amount: $" + getPaymentAmount());
    }
}
