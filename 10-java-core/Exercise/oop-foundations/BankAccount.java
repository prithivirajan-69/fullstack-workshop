package oop_foundations;

public class BankAccount {

    private static String bankName = "MyBank";
    private static int totalAccounts = 0;
    private static long accountCounter = 1000;

    private long accountNumber;
    private String holderName;
    private double balance;

    public BankAccount(String holderName, double balance) {
        this.accountNumber = ++accountCounter;
        this.holderName = holderName;
        this.balance = balance;
        totalAccounts++;
    }

    public static String getBankInfo() {
        return bankName + " - Total Accounts: " + totalAccounts;
    }

    public void deposit(double amount) {
        if (amount > 0) balance += amount;
    }

    public void withdraw(double amount) {
        if (amount > 0 && amount <= balance) balance -= amount;
    }

    public double getBalance() {
        return balance;
    }

    public static void main(String[] args) {
        BankAccount acc1 = new BankAccount("Alice", 1000);
        BankAccount acc2 = new BankAccount("Bob", 500);
        System.out.println(BankAccount.getBankInfo());
    }
}
