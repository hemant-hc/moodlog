/*
  Warnings:

  - You are about to drop the `Analysis` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[userId,id]` on the table `JournalEntry` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "JournalEntry_userId_idx";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "name" TEXT;

-- DropTable
DROP TABLE "Analysis";

-- CreateTable
CREATE TABLE "EntryAnalysis" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "entryId" TEXT NOT NULL,
    "mood" TEXT NOT NULL,
    "negative" BOOLEAN NOT NULL,
    "summary" TEXT NOT NULL,
    "color" TEXT NOT NULL DEFAULT '#0101fe',

    CONSTRAINT "EntryAnalysis_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "EntryAnalysis_entryId_key" ON "EntryAnalysis"("entryId");

-- CreateIndex
CREATE UNIQUE INDEX "JournalEntry_userId_id_key" ON "JournalEntry"("userId", "id");
