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
