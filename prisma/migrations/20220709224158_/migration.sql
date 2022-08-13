/*
  Warnings:

  - You are about to drop the column `score` on the `Account` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Account" DROP COLUMN "score",
ADD COLUMN     "scope" VARCHAR(255);
