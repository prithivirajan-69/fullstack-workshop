SELECT
    e.id,
    e.name,
    e.department
FROM employees e
WHERE NOT EXISTS (
    SELECT 1
    FROM assignments a
    WHERE a.employee_id = e.id
);
-- This query selects the ID, name, and department of employees who have not been assigned to any projects.