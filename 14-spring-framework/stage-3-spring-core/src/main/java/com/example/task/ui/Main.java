package com.example.task.ui;

import com.example.task.config.AppConfig;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

/**
 * Application entry point.
 *
 * =====================================================
 * COMPARE THIS TO STAGE 2!
 * =====================================================
 *
 * STAGE 2 (Manual Wiring):
 *     ConnectionManager connectionManager = new ConnectionManager();
 *     TaskRepository taskRepository = new TaskRepository(connectionManager);
 *     TaskService taskService = new TaskService(taskRepository);
 *     ConsoleUI ui = new ConsoleUI(taskService);
 *
 * STAGE 3 (Spring DI):
 *     ApplicationContext context = new AnnotationConfigApplicationContext(AppConfig.class);
 *     ConsoleUI ui = context.getBean(ConsoleUI.class);
 *
 * Spring creates and wires ALL dependencies automatically!
 */
public class Main {

    public static void main(String[] args) {
        System.out.println("Starting Task Manager with Spring...\n");

        /*
         * Create the Spring Application Context.
         *
         * This single line triggers:
         * 1. Reading AppConfig
         * 2. Component scanning
         * 3. Bean creation
         * 4. Dependency injection
         */
        AnnotationConfigApplicationContext context =
                new AnnotationConfigApplicationContext(AppConfig.class);

        try {
            // Ask Spring for the ConsoleUI bean
            ConsoleUI ui = context.getBean(ConsoleUI.class);
            ui.run();
        } finally {
            // Properly shut down Spring container
            context.close();
        }
    }
}
