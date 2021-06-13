INSERT INTO department (name)
VALUES
    ("Sales"),
    ("Finance"),
    ("Engineering"),
    ("Legal");

INSERT INTO role (title, salary, department_id)
VALUES

    ("Sales Manager", 90000.00, 1),
    ("Sales Person", 40000.00, 1),
    ("Finance Specialist", 100000.00, 2)
    ("Accountant", 80000.00, 2),
    ("Software Engineer", 300000.00, 3),
    ("Senior Software Develop", 500000.00, 3),
    ("Lawyer", 50000.00, 4),
    ("Paralegal", 90000.00, 4);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ("Sadrac", "Tijerina", 3, NULL),
    ("Emmanual", "Romero", 3, 1),
    ("Bryson", "Tiller", 1, 3),
    ("Bruno", "Major", 2, 2),
    ("Ed", "Sheeran", 4, NULL);