/*
  Warnings:

  - You are about to drop the column `prompt` on the `LangChainAgent` table. All the data in the column will be lost.
  - Added the required column `agentType` to the `LangChainAgent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `requiredToolNames` to the `LangChainAgent` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "LangChainAgent" DROP COLUMN "prompt",
ADD COLUMN     "agentType" TEXT NOT NULL,
ADD COLUMN     "requiredToolNames" TEXT NOT NULL;
