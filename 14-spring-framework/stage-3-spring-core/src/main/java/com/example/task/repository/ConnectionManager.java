package com.example.task.repository;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Repository;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

/**
 * Manages database connections.
 *
 * Stage 3:
 * - @Repository marks this as a persistence-related Spring bean
 * - @Value injects properties from db.properties
 */
@Repository
public class ConnectionManager {

    private final String url;
    private final String username;
    private final String password;

    /**
     * Constructor-based dependency injection using @Value.
     *
     * Spring reads values from db.properties automatically.
     */
    public ConnectionManager(
            @Value("${db.host}") String host,
            @Value("${db.port}") String port,
            @Value("${db.name}") String dbName,
            @Value("${db.username}") String username,
            @Value("${db.password}") String password) {

        this.url = String.format("jdbc:mysql://%s:%s/%s", host, port, dbName);
        this.username = username;
        this.password = password;

        loadDriver();
        System.out.println("ConnectionManager initialized by Spring");
    }

    private void loadDriver() {
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
        } catch (ClassNotFoundException e) {
            throw new RuntimeException("MySQL JDBC Driver not found", e);
        }
    }

    public Connection getConnection() throws SQLException {
        return DriverManager.getConnection(url, username, password);
    }
}
