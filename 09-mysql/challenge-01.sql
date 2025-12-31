-- Create tables
CREATE TABLE employees (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    department VARCHAR(50),
    salary DECIMAL(10,2),
    hire_date DATE,
    manager_id INT
);

CREATE TABLE projects (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    budget DECIMAL(12,2),
    start_date DATE,
    end_date DATE
);

CREATE TABLE assignments (
    employee_id INT,
    project_id INT,
    role VARCHAR(50),
    hours_allocated INT,
    PRIMARY KEY (employee_id, project_id)
);

-- Insert sample data
INSERT INTO employees (id,name, department, salary, hire_date, manager_id) VALUES
(1,'Arundhathi', 'Engineering', 75000.00, '2022-01-15', NULL),
(2,'Prithivirajan', 'Engineering', 82000.00, '2021-07-10', 1),
(3,'Sathya Dev', 'Engineering', 68000.00, '2023-03-05', 1),

(4,'Prithivi', 'HR', 50000.00, '2022-05-20', NULL),
(5,'Arun', 'HR', 52000.00, '2023-01-12', 4),
(6,'Meena', 'HR', 48000.00, '2021-11-01', 4),

(7,'Vikraman', 'Sales', 60000.00, '2020-09-18', NULL),
(8,'Anjali', 'Sales', 65000.00, '2022-02-25', 7);


INSERT INTO projects 
VALUES (1,'Website Redesign', 250000.00, '2023-01-01', '2023-06-30'),
(2,'HR Management System', 180000.00, '2023-02-15', '2023-08-31'),
(3,'Sales Analytics Tool', 300000.00, '2023-03-01', '2023-12-31');
SELECT * FROM PROJECTS;

INSERT INTO assignments (employee_id, project_id, role, hours_allocated) VALUES
(1, 1, 'Backend Developer', 120),
(2, 1, 'Frontend Developer', 100),
(3, 1, 'QA Engineer', 80),

(4, 2, 'HR Lead', 90),
(5, 2, 'HR Executive', 70),

(7, 3, 'Sales Manager', 110),
(8, 3, 'Sales Analyst', 95);


SELECT 
    department,
    COUNT(*) AS employee_count,
    ROUND(AVG(salary), 2) AS avg_salary,
    MAX(salary) AS max_salary
FROM employees
GROUP BY department
HAVING COUNT(*) > 2;
