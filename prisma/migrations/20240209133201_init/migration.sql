/*
  Warnings:

  - You are about to drop the column `emp_designation` on the `Employee` table. All the data in the column will be lost.
  - You are about to drop the column `emp_last_name` on the `Employee` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Employee" DROP COLUMN "emp_designation",
DROP COLUMN "emp_last_name";
