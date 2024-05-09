/*
  Warnings:

  - You are about to drop the `Task` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Task";

-- CreateTable
CREATE TABLE "Tasks" (
    "id" SERIAL NOT NULL,
    "audioText" TEXT NOT NULL,
    "icon" TEXT,

    CONSTRAINT "Tasks_pkey" PRIMARY KEY ("id")
);
