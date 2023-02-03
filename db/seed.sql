USE employee_db;

INSERT INTO department(name) VALUES('Processing'),
('Logistics'),
('Information Technology');

INSERT INTO role(title, salary, department_id) VALUES
('Manager', '100000', 1),
('Technician', '50000', 2),
('Engineer', '120000', 3);

INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES
('Feliclare', 'De Jesus', 1, NULL),
('Roger', 'Dodger', 2, 1),
('Yuri', 'The Dog', 3, 2);