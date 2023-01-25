/*
  Warnings:

  - Added the required column `description` to the `LangChainPrompt` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "LangChainPrompt" ADD COLUMN     "description" TEXT NOT NULL;
