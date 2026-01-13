package oop_advanced;

public class Employee implements Payable, Taxable {

    private String name;
    private double salary;

    public Employee(String name, double salary) {
        this.name = name;
        this.salary = salary;
    }

    @Override
    public double getPaymentAmount() {
        return salary - calculateTax();
    }

    @Override
    public double calculateTax() {
        return salary * Taxable.getTaxRate();
    }
}
