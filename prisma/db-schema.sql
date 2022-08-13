CREATE TABLE "public"."User" (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255),
  email VARCHAR(255) UNIQUE,
  "emailVerified" TIMESTAMP,
  image VARCHAR(255)
);

CREATE TABLE "public"."Account" (
  id SERIAL PRIMARY KEY NOT NULL,
  "userId" INTEGER NOT NULL,
  type VARCHAR(255) NOT NULL,
  provider VARCHAR(255) NOT NULL,
  "providerAccountId" VARCHAR(255) NOT NULL,
  refresh_token TEXT,
  access_token TEXT,
  expires_at INTEGER,
  token_type VARCHAR(255),
  score VARCHAR(255),
  id_token TEXT,
  session_state VARCHAR(255),

  FOREIGN KEY ("userId") REFERENCES "public"."User"(id)
);

CREATE TABLE "public"."Session" (
  id SERIAL PRIMARY KEY NOT NULL,
  "userId" INTEGER NOT NULL,
  "sessionToken" VARCHAR(255) UNIQUE NOT NULL,
  expires TIMESTAMP NOT NULL,

  FOREIGN KEY ("userId") REFERENCES "public"."User"(id)
);

CREATE TABLE "public"."VerificationToken" (
  identifier VARCHAR(255) NOT NULL,
  token VARCHAR(255) UNIQUE NOT NULL,
  expires TIMESTAMP NOT NULL,

  UNIQUE(identifier, token)
);

CREATE TABLE "public"."Semester" (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  "startDate" DATE NOT NULL,
  "endingDate" DATE NOT NULL,
  "userId" INTEGER NOT NULL,

  FOREIGN KEY ("userId") REFERENCES "public"."User"(id)
);

CREATE TABLE "public"."Course" (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  credits INTEGER NOT NULL,
  "userId" INTEGER NOT NULL,
  FOREIGN KEY ("userId") REFERENCES "public"."User"(id)
);

CREATE TABLE "public"."SemesterCourses" (
  id SERIAL UNIQUE NOT NULL,
  "courseId" INTEGER NOT NULL,
  "semesterId" INTEGER NOT NULL,
  passed BOOLEAN NOT NULL DEFAULT false,
  PRIMARY KEY ("courseId", "semesterId"),
  FOREIGN KEY ("courseId") REFERENCES "public"."Course"(id),
  FOREIGN KEY ("semesterId") REFERENCES "public"."Semester"(id)
);

CREATE TABLE "public"."EvaluationType"(
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE "public"."Evaluation" (
  id SERIAL PRIMARY KEY NOT NULL,
  number INTEGER NOT NULL,
  weight DECIMAL NOT NULL,
  grade DECIMAL,
  "evaluationTypeId" INTEGER NOT NULL,
  "semesterCourseId" INTEGER NOT NULL,
  FOREIGN KEY ("evaluationTypeId") REFERENCES "public"."EvaluationType"(id),
  FOREIGN KEY ("semesterCourseId") REFERENCES "public"."SemesterCourses"(id)
);
