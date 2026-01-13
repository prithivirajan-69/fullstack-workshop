package oop_foundations.banking;

public class FixedDepositAccount extends Account {

    private static final double RATE = 0.07;

    public FixedDepositAccount(String holderName, double balance) {
        super(holderName, balance);
    }

    @Override
    public void withdraw(double amount) {
        throw new UnsupportedOperationException("Withdrawals not allowed for FD");
    }

    public double calculateInterest() {
        return balance * RATE;
    }
}
