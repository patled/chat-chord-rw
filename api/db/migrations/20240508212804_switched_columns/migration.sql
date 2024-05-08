/*
  Warnings:

  - You are about to drop the column `imageUrl` on the `Task` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Task` table. All the data in the column will be lost.
  - Added the required column `audioText` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Task" DROP COLUMN "imageUrl",
DROP COLUMN "name",
ADD COLUMN     "audioText" TEXT NOT NULL,
ADD COLUMN     "icon" TEXT;
