INSERT INTO department (name)
VALUES
    ('Sales'),
    ('Finance'),
    ('Engineering'),
    ('Legal'),
    ('Management');

INSERT INTO role (title, salary, department_id)
VALUES

    ('Seller', 900.00, 1),
    ('Financer', 1000.00, 2),
    ('SoftwareEngineer', 3000.00, 3),
    ('Paralegal', 9000.00, 4),
    ('Manager', 5000.00, 5);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('Sadrac', 'Tijerina', 3, 1),
    ('Emmanual', 'Romero', 3, NULL),
    ('Bryson', 'Tiller', 1, 1),
    ('Bruno', 'Major', 2, NULL),
    ('Ed', 'Sheeran', 4, NULL),
    ('Mac', 'Miller', 5, NULL);