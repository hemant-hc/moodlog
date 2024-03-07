/*
  Warnings:

  - Added the required column `subject` to the `EntryAnalysis` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "EntryAnalysis" ADD COLUMN     "subject" TEXT NOT NULL;
