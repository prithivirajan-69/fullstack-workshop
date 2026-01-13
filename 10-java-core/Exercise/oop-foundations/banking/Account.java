package oop_foundations.banking;

public abstract class Account {

    private static long accCounter = 10000;

    protected long accountNumber;
    protected String holderName;
    protected double balance;

    public Account(String holderName, double balance) {
        this.accountNumber = ++accCounter;
        this.holderName = holderName;
        this.balance = balance;
    }

    public abstract double calculateInterest();

    public void deposit(double amount) {
        if (amount > 0) balance += amount;
    }

    public void withdraw(double amount) {
        if (amount > 0 && amount <= balance) balance -= amount;
    }

    public double getBalance() {
        return balance;
    }

    public String getHolderName() {
        return holderName;
    }
}
