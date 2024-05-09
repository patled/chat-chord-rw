/*
  Warnings:

  - You are about to drop the `Tasks` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Tasks";

-- CreateTable
CREATE TABLE "Task" (
    "id" SERIAL NOT NULL,
    "audioText" TEXT NOT NULL,
    "icon" TEXT,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);
