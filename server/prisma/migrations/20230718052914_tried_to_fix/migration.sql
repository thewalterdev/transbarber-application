/*
  Warnings:

  - You are about to drop the column `waitingId` on the `Services` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "_ServicesToWaiting" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_ServicesToWaiting_A_fkey" FOREIGN KEY ("A") REFERENCES "Services" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_ServicesToWaiting_B_fkey" FOREIGN KEY ("B") REFERENCES "Waiting" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Services" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "description" TEXT NOT NULL
);
INSERT INTO "new_Services" ("description", "id", "name", "price") SELECT "description", "id", "name", "price" FROM "Services";
DROP TABLE "Services";
ALTER TABLE "new_Services" RENAME TO "Services";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "_ServicesToWaiting_AB_unique" ON "_ServicesToWaiting"("A", "B");

-- CreateIndex
CREATE INDEX "_ServicesToWaiting_B_index" ON "_ServicesToWaiting"("B");
