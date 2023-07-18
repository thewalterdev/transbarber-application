-- CreateTable
CREATE TABLE "Waiting" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "servicesId" TEXT,
    CONSTRAINT "Waiting_servicesId_fkey" FOREIGN KEY ("servicesId") REFERENCES "Services" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Caixa" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "closed_date" DATETIME NOT NULL,
    "total_value" INTEGER NOT NULL
);
