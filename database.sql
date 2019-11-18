
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!

-- database name: voila

CREATE TABLE "role" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR (50)
);

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "firstName" VARCHAR (50),
    "lastName" VARCHAR (50),
    "email" VARCHAR (200),
    "dropboxUrl" VARCHAR (1000),
    "agent_id" INT REFERENCES "user"(id),
    "role_id" INT REFERENCES "role" NOT NULL,
    "date_time_created" TIMESTAMP NOT NULL 
    			DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE "vendorType" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR (100)
);

CREATE TABLE "vendor" (
	"id" SERIAL PRIMARY KEY,
	"firstName" VARCHAR (50),
	"lastName" VARCHAR (50),
	"companyName" VARCHAR (150),
	"phoneNumber" VARCHAR (50),
	"email" VARCHAR (200),
	"website" VARCHAR (200),
	"vendor_id" INT REFERENCES "vendorType"
);

CREATE TABLE "journey" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR (100) NOT NULL
);

CREATE TABLE "journeyStep" (
	"id" SERIAL PRIMARY KEY,
	"journey_id" INT REFERENCES "journey",
	"name" VARCHAR (100),
	"description" VARCHAR (1000),
	"order" INT
	
);

CREATE TABLE "userStep" (
	"id" SERIAL PRIMARY KEY,
	"journeyStep_id" INT REFERENCES "journeyStep",
	"completed" BOOLEAN DEFAULT FALSE,
	"user_id" INT REFERENCES "user" ON DELETE CASCADE,
	"date_time_created" TIMESTAMP NOT NULL 
    			DEFAULT CURRENT_TIMESTAMP,
	"date_time_completed" TIMESTAMP NOT NULL 
    			DEFAULT CURRENT_TIMESTAMP	
);


CREATE TABLE "searchCriteria" (
	"id" SERIAL PRIMARY KEY,
	"userStep_id" INT REFERENCES "userStep" ON DELETE CASCADE,
	"numRooms" VARCHAR(50),
	"numBath" VARCHAR (50),
	"numSF" VARCHAR (50),
	"location" VARCHAR (100),
	"notes" VARCHAR (500),
	"date_time_created" TIMESTAMP NOT NULL 
    			DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE "house" (
	"id" SERIAL PRIMARY KEY,
	"userStep_id" INT REFERENCES "userStep" ON DELETE CASCADE,
	"address" VARCHAR(150),
	"MLS_number" VARCHAR (50),
	"date_time_created" TIMESTAMP NOT NULL 
    			DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE "offerMade" (
	"id" SERIAL PRIMARY KEY,
	"userStep_id" INT REFERENCES "userStep" ON DELETE CASCADE,
	"name" VARCHAR (150),
	"address" VARCHAR(150),
	"price" VARCHAR (50),
	"closingDate" DATE,
	"earnestMoney" VARCHAR (50),
	"downPayment" VARCHAR (50),
	"sellerPaidClosingCosts" VARCHAR (100),
	"date_time_created" TIMESTAMP NOT NULL 
    			DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE "offerAccepted" (
	"id" SERIAL PRIMARY KEY,
	"userStep_id" INT REFERENCES "userStep" ON DELETE CASCADE,
	"address" VARCHAR(150),
	"MLS_number" VARCHAR (50),
	"price" VARCHAR (50),
	"ernestMoney" VARCHAR (50),
	"downPayment" VARCHAR (50),
	"date_time_created" TIMESTAMP NOT NULL 
    			DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE "selectedInspector" (
	"id" SERIAL PRIMARY KEY,
	"userStep_id" INT REFERENCES "userStep" ON DELETE CASCADE,
	"name" VARCHAR(150),
	"inspectionDate" DATE,
	"date_time_created" TIMESTAMP NOT NULL 
    			DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE "selectedInsurance" (
	"id" SERIAL PRIMARY KEY,
	"userStep_id" INT REFERENCES "userStep" ON DELETE CASCADE,
	"name" VARCHAR(150),
	"insuranceStartDate" DATE,
	"date_time_created" TIMESTAMP NOT NULL 
    			DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE "appraisal" (
	"id" SERIAL PRIMARY KEY,
	"userStep_id" INT REFERENCES "userStep" ON DELETE CASCADE,
	"requested" BOOLEAN DEFAULT FALSE,
	"scheduled" BOOLEAN DEFAULT FALSE,
	"scheduleDate" DATE,
	"completed" BOOLEAN DEFAULT FALSE,
	"date_time_created" TIMESTAMP NOT NULL 
    			DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE "title" (
	"id" SERIAL PRIMARY KEY,
	"userStep_id" INT REFERENCES "userStep" ON DELETE CASCADE,
	"ordered" BOOLEAN DEFAULT FALSE,
	"date_time_created" TIMESTAMP NOT NULL 
    			DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE "finalWalkThrough" (
	"id" SERIAL PRIMARY KEY,
	"userStep_id" INT REFERENCES "userStep" ON DELETE CASCADE,
	"location" VARCHAR(150),
	"date" DATE,
	"time" VARCHAR (25),
	"date_time_created" TIMESTAMP NOT NULL 
    			DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE "closing" (
	"id" SERIAL PRIMARY KEY,
	"userStep_id" INT REFERENCES "userStep" ON DELETE CASCADE,
	"location" VARCHAR(150),
	"date" DATE,
	"time" VARCHAR (25),
	"toBring" VARCHAR (500),
	"date_time_created" TIMESTAMP NOT NULL 
    			DEFAULT CURRENT_TIMESTAMP
);


-- Data to set up initial tables:

INSERT INTO "role" ("name")
VALUES ('agent'), ('agent team member'), ('client');

INSERT INTO "journey"
("name")
VALUES ('buyer'), ('seller');

INSERT INTO "journeyStep"
	("journey_id", "name", "description", "order")
VALUES 
	(1, 'Voila Buyer', 'Being a Voila buyer means you are in the best of hands! We are here to help you find the home for you!', 1),
	(1, 'Pre-Approval', 'Talk with your lender and get a price range for which you are pre-approved', 2),
	(1, 'On The Hunt', 'Let''s talk about picking out your next home.', 3),
	(1, 'Executed Offer', 'Congrats! You found a home you love and made an offer.', 4),
	(1, 'Earnest Money Submission', 'Your offer has been accepted and it is time to put down some money', 5),
	(1, 'Inspection', 'This is where we have another expert step in and make sure there are no big surprises with the home.', 6),
	(1, 'Insurance', 'Time to get the home insured! This is documentation your lender will need as they finalize your mortgage', 7),
	(1, 'Appraisal & Title', 'As your lender works on your mortgage documents, they need to verify the home is worth the amount you are borrowing. Then they order the title and prepare it for the sale transaction', 8),
	(1, 'Final Walk Through', 'One last time to take a look at the property in person before it belongs to you', 9),
	(1, 'Closing Disclosure', 'Here is what you need to know about the closing', 10),
	(1, 'Closing Day', 'Congrats! It is closing day and this new property is about to belong to you. Today is the day you sign the paperwork', 11);

INSERT INTO "vendorType"
("name")
VALUES ('Insurance Partners'), ('Inspection Partners');

