/* Creating  a database*/
CREATE DATABASE petmanagement;

/*Use Database*/
USE petmanagement;

/*Creating Tables*/
CREATE TABLE CENTER (CID INT PRIMARY KEY, LOCATION VARCHAR(255),CONTACT_INFO VARCHAR(255));
CREATE TABLE ALLOCATION ( A_NAME VARCHAR(255), A_AMOUNT INT,CID INT, FOREIGN KEY (CID) REFERENCES CENTER(CID) ON DELETE CASCADE);/*Delete allocation if center is deleted*/
CREATE TABLE DONATION (DONATION_ID INT, NAME VARCHAR(255),PH_NO VARCHAR(255),PAYMENT_INFO VARCHAR(255),AMOUNT INT, CID INT REFERENCES CENTER(CID) ON DELETE SET NULL);
CREATE TABLE VOLUNTEERS (V_ID INT, NAME VARCHAR(255),AGE INT, PHONE VARCHAR(255),ADDRESS VARCHAR(255),EXPERTISE VARCHAR(255),EMPLOYMENT VARCHAR(255),AVAILABLE_STATUS VARCHAR(255),AVAILABLE_DATE DATE,AVAILABLE_TIME TIME,CID INT,FOREIGN KEY (CID) REFERENCES CENTER(CID) ON DELETE CASCADE);/*Delete volunteer if center is deleted*/
CREATE TABLE PET (PET_ID INT,NAME VARCHAR(255),TYPE VARCHAR(255),AGE INT,VACCINATION VARCHAR(255),GENDER VARCHAR(255),LOCATION VARCHAR(255),SEVERITY VARCHAR(255),DESCRIPTION VARCHAR(255),CID INT REFERENCES CENTER(CID) ON DELETE CASCADE,PCARE VARCHAR(255),V_ID INT REFERENCES VOLUNTEERS(V_ID) ON DELETE SET NULL );/*Delete pet if center is deleted but set V_ID to NULL if volunteer is deleted*/
CREATE TABLE CENTER_ADMIN(CID INT PRIMARY KEY REFERENCES CENTER(CID),EMAIL VARCHAR(30),PASSWORD VARCHAR(30));

/*Insert into center table*/
INSERT INTO CENTER VALUES (1, 'Mangalore Animal Shelter', 'shelter@mangalore.org');
INSERT INTO CENTER VALUES (2, 'Bangalore Animal Shelter', 'shelter@bangalore.org');
INSERT INTO CENTER VALUES (3, 'Pune Animal Shelter', 'shelter@pune.org');
INSERT INTO CENTER VALUES (4, 'Mysore Animal Shelter', 'shelter@mysore.org');
INSERT INTO CENTER VALUES (5, 'Hyderabad Animal Shelter', 'shelter@hyderabad.org');

/* Insert into allocation table*/
INSERT INTO ALLOCATION VALUES ('Food', 50, 1);
INSERT INTO ALLOCATION VALUES ('Toys', 20, 1);
INSERT INTO ALLOCATION VALUES ('Medicines', 100, 2);
INSERT INTO ALLOCATION VALUES ('Food', 120, 2);
INSERT INTO ALLOCATION VALUES ('Toys', 220, 3);
INSERT INTO ALLOCATION VALUES ('Food', 20, 3);
INSERT INTO ALLOCATION VALUES ('Medicines', 2330, 4);
INSERT INTO ALLOCATION VALUES ('Toys', 23, 4);
INSERT INTO ALLOCATION VALUES ('Toys', 260, 5);
INSERT INTO ALLOCATION VALUES ('Medicines', 20, 5);


/*Insert into donation table*/
INSERT INTO DONATION VALUES (1, 'Jane Doe', '1234567890', 'Credit card', 1000,1);
INSERT INTO DONATION VALUES (2, 'James Doe', '343243435', 'card', 100022,1);
INSERT INTO DONATION VALUES (1, 'Agent Doe', '3453453453', 'GPay', 2500,2);
INSERT INTO DONATION VALUES (2, 'Ash Ketchum', '1675675656', 'PhonePe', 2300,2);
INSERT INTO DONATION VALUES (1, 'Adolf Hitler', '5676588988', 'Cash', 2000,3);
INSERT INTO DONATION VALUES (2, 'Shaggy', '1678678678', 'Cheque', 12300,3);
INSERT INTO DONATION VALUES (1, 'Shaggy', '1678678678', 'Cash', 3434434,4);
INSERT INTO DONATION VALUES (2, 'Shaggy', '1678678678', 'upi', 165564,4);
INSERT INTO DONATION VALUES (1, 'Shaggy', '1678678678', 'cheque', 155656,5);
INSERT INTO DONATION VALUES (2, 'Shaggy', '1678678678', 'Cash', 566556,5);


/*Insert into volunteers table*/

INSERT INTO VOLUNTEERS VALUES (1, 'John Doe', 25, '9876543210', 'Mangalore, India', 'Animal care', 'Unemployed', 'Available', '2024-02-20', '10:00:00', 1);
INSERT INTO VOLUNTEERS VALUES (2, 'James', 30, '8767868778', 'Bangalore, India', 'Animal care', 'Employed', 'Available', '2024-07-30', '09:00:00', 2);
INSERT INTO VOLUNTEERS VALUES (3, 'Bond', 35, '2545678988', 'Srinagar, India', 'Animal care', 'Unemployed', 'Available', '2024-06-20', '08:00:00', 5);
INSERT INTO VOLUNTEERS VALUES (4, 'Master', 40, '112789675', 'Kolkata, India', 'Animal care', 'Employed', 'Available', '2023-02-10', '05:00:00', 3);
INSERT INTO VOLUNTEERS VALUES (5, 'Root', 45, '93849899', 'Chennai, India', 'Animal care', 'Employed', 'Available', '2025-11-22', '09:00:00', 4);
INSERT INTO VOLUNTEERS VALUES (6, 'Jack', 25, '9876543210', 'Mangalore, India', 'Animal care', 'Unemployed', 'Available', '2024-02-20', '10:00:00', 1);
INSERT INTO VOLUNTEERS VALUES (7, 'Rudolf', 30, '8767868778', 'Bangalore, India', 'Animal care', 'Employed', 'Available', '2024-07-30', '09:00:00', 2);
INSERT INTO VOLUNTEERS VALUES (8, 'Kakashi', 35, '2545678988', 'Srinagar, India', 'Animal care', 'Unemployed', 'Available', '2024-06-20', '08:00:00', 5);
INSERT INTO VOLUNTEERS VALUES (9, 'Sasuke', 40, '112789675', 'Kolkata, India', 'Animal care', 'Employed', 'Available', '2023-02-10', '05:00:00', 3);
INSERT INTO VOLUNTEERS VALUES (10, 'Franklin', 45, '93849899', 'Chennai, India', 'Animal care', 'Employed', 'Available', '2025-11-22', '09:00:00', 4);

/*Insert into pet table*/

INSERT INTO PET VALUES (1, 'Fido', 'Dog', 2, 'Up-to-date', 'Male', 'Bangalore', 'Healthy', 'Not So Friendly dog', 1, 'Yes', 2);
INSERT INTO PET VALUES (2, 'Tommy', 'Dog', 3, 'Not-Up-to-date', 'Female', 'Mangalore', 'unhealthy', 'Friendly dog', 2, 'Yes', 1);
INSERT INTO PET VALUES (3, 'Buzz', 'Cat', 1, 'Not-Up-to-date', 'Male', 'Mangalore', 'Healthy', 'Friendly cat', 3, 'Yes', 3);
INSERT INTO PET VALUES (4, 'Lester', 'Dog', 2, 'Not-Up-to-date', 'Female', 'Bangalore', 'Unealthy', 'Friendly dog', 4, 'Yes', 4);
INSERT INTO PET VALUES (5, 'Michael', 'Fish', 90, 'Up-to-date', 'Male', 'Mangalore', 'Healthy', 'Friendly fish', 5, 'Yes', 5);
INSERT INTO PET VALUES (6, 'Jerry', 'Dog', 2, 'Up-to-date', 'Male', 'Bangalore', 'Healthy', 'Not So Friendly dog', 1, 'Yes', 1);
INSERT INTO PET VALUES (7, 'Tom', 'Dog', 3, 'Not-Up-to-date', 'Female', 'Mangalore', 'unhealthy', 'Friendly dog', 2, 'Yes', 2);
INSERT INTO PET VALUES (8, 'Kitler', 'Cat', 1, 'Not-Up-to-date', 'Male', 'Mangalore', 'Healthy', 'Friendly cat', 3, 'Yes', 3);
INSERT INTO PET VALUES (9, 'Orochimaru', 'Snake', 2, 'Not-Up-to-date', 'Female', 'Bangalore', 'Unealthy', 'Friendly dog', 4, 'Yes', 4);
INSERT INTO PET VALUES (10, 'Spark', 'Fish', 90, 'Up-to-date', 'Male', 'Mangalore', 'Healthy', 'Friendly fish', 5, 'Yes', 5);

/*INsert into ADMIN table*/

INSERT INTO CENTER_ADMIN VALUES(1,"abc123@gmail.com","123");
INSERT INTO CENTER_ADMIN VALUES(2,"def123@gmail.com","123");
INSERT INTO CENTER_ADMIN VALUES(3,"ghi123@gmail.com","123");
INSERT INTO CENTER_ADMIN VALUES(4,"jkl123@gmail.com","123");
INSERT INTO CENTER_ADMIN VALUES(5,"mno123@gmail.com","123");


/*Show Tables(For Testing)*/
SELECT * FROM CENTER;
SELECT * FROM ALLOCATION; 
SELECT * FROM DONATION;
SELECT * FROM VOLUNTEERS;
SELECT * FROM PET;
SELECT * FROM CENTER_ADMIN;





