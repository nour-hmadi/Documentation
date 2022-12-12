//select * from students to get all data 

1. select name from students

2. select * from students where age> 30

3. select name from students where Gender = "F" and  Age = 30

4. select points from students where name = "Alex"

5. insert into students (id, name, Age, Gender, Points) 
   VALUES (7, "Nour", 23, "F", 520);

6. UPDATE students SET Points = "450" WHERE name = "Basma"

7.UPDATE students SET Points = "150" WHERE name = "Alex"

8. 
9. Done


II.  CREATE TABLE graduates (
	ID INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
	Name TEXT NOT NULL UNIQUE,
	Age INTEGER,
	Gender TEXT,
	Points INTEGER,
	Graduation date)

10. INSERT INTO graduates(ID, name, Age, Gender, Points) 
    SELECT ID, name, Age, Gender, Points FROM students 
    WHERE name = "Layal";

11. UPDATE graduates 
    SET Graduation = "2018-09-08"   
    WHERE name = "Layal";

12. DELETE FROM students WHERE name = "Layal";


III.


14. SELECT employees.Name, employees.Company, companies.Date FROM employees JOIN companies ON employees.Company = companies.name;

15. SELECT employees.Name FROM employees JOIN companies ON employees.Company = companies.name WHERE companies.Date < 2000;

16. SELECT companies.Name FROM companies JOIN employees ON companies.name = employees.Company WHERE employees.Role = "Graphic Designer";

IV. 

18. SELECT *, max(Points) FROM students;

19. SELECT avg(Points) FROM students;

20. SELECT count(Points) FROM students WHERE students.Points = "500";

21. SELECT name FROM students WHERE students.name LIKE "%s%";

22. SELECT * FROM students ORDER BY students.Points DESC;


