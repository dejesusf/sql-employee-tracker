USE employee_db;

SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;

-- view all roles (job title, role_id, department, salary) --
SELECT role.title, department.name AS department, role.salary
FROM department
JOIN role
ON role.department_id= department.id;

-- view all employees (role id, first_name, last_name, title, salary, and manager --
SELECT employee.role_id, employee.first_name, employee.last_name, role.title, role.department_id, role.salary, employee.manager_id AS manager
FROM role
JOIN employee
ON employee.role_id= role.id;