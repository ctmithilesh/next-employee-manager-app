-- CreateTable
CREATE TABLE "Employee" (
    "id" SERIAL NOT NULL,
    "emp_first_name" TEXT NOT NULL,
    "emp_last_name" TEXT NOT NULL,
    "emp_designation" TEXT NOT NULL,
    "emp_address" TEXT NOT NULL,

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Employee_id_key" ON "Employee"("id");
