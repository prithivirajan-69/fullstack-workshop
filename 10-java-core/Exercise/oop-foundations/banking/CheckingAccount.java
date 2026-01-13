package oop_foundations.banking;

public class CheckingAccount extends Account {

    private static final double OVERDRAFT = 500;

    public CheckingAccount(String holderName, double balance) {
        super(holderName, balance);
    }

    @Override
    public void withdraw(double amount) {
        if (amount <= balance + OVERDRAFT) {
            balance -= amount;
        }
    }

    public double calculateInterest() {
        return 0;
    }
}
