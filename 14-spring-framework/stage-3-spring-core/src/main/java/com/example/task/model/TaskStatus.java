package com.example.task.model;

/**
 * Task status values.
 * Plain enum – NOT a Spring bean.
 */
public enum TaskStatus {
    PENDING,
    IN_PROGRESS,
    COMPLETED,
    CANCELLED
}
