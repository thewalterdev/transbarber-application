/*
  Warnings:

  - You are about to drop the column `servicesId` on the `Waiting` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Services" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "waitingId" TEXT,
    CONSTRAINT "Services_waitingId_fkey" FOREIGN KEY ("waitingId") REFERENCES "Waiting" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Services" ("description", "id", "name", "price") SELECT "description", "id", "name", "price" FROM "Services";
DROP TABLE "Services";
ALTER TABLE "new_Services" RENAME TO "Services";
CREATE TABLE "new_Waiting" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);
INSERT INTO "new_Waiting" ("id", "name") SELECT "id", "name" FROM "Waiting";
DROP TABLE "Waiting";
ALTER TABLE "new_Waiting" RENAME TO "Waiting";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
