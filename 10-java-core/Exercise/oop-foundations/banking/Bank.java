package oop_foundations.banking;

import java.util.*;

public class Bank {

    private String bankName;
    private List<Account> accounts = new ArrayList<>();

    public Bank(String bankName) {
        this.bankName = bankName;
    }

    public void addAccount(Account acc) {
        accounts.add(acc);
    }

    public Account findAccount(long accNo) {
        for (Account a : accounts) {
            if (a.accountNumber == accNo) return a;
        }
        return null;
    }

    public double getTotalDeposits() {
        return accounts.stream().mapToDouble(Account::getBalance).sum();
    }

    public List<Account> getAllAccounts() {
        return accounts;
    }
}
