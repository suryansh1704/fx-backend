-- CreateEnum
CREATE TYPE "Size" AS ENUM ('XS', 'S', 'M', 'L', 'XL', 'XXL');

-- CreateEnum
CREATE TYPE "PreferenceType" AS ENUM ('Casual', 'Formal', 'Funky', 'Sporty', 'Traditional', 'Streetwear');

-- CreateEnum
CREATE TYPE "Color" AS ENUM ('Red', 'Blue', 'Green', 'Yellow', 'Orange', 'Purple', 'Pink', 'Brown', 'Black', 'White', 'Grey');

-- CreateTable
CREATE TABLE "UserAuth" (
    "id" STRING NOT NULL,
    "email" STRING NOT NULL,
    "password" STRING NOT NULL,

    CONSTRAINT "UserAuth_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" STRING NOT NULL,
    "email" STRING NOT NULL,
    "AuthId" STRING NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserAttributes" (
    "id" STRING NOT NULL,
    "UserId" STRING NOT NULL,
    "height" FLOAT8 NOT NULL,
    "weight" FLOAT8 NOT NULL,
    "age" INT4 NOT NULL,
    "SizeTop" "Size" NOT NULL,

    CONSTRAINT "UserAttributes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserPreference" (
    "id" STRING NOT NULL,
    "UserId" STRING NOT NULL,
    "type" "PreferenceType" NOT NULL DEFAULT 'Casual',
    "preferedColor" "Color"[] DEFAULT ARRAY[]::"Color"[],

    CONSTRAINT "UserPreference_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserAuth_email_key" ON "UserAuth"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_AuthId_key" ON "User"("AuthId");

-- CreateIndex
CREATE UNIQUE INDEX "UserAttributes_UserId_key" ON "UserAttributes"("UserId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_AuthId_fkey" FOREIGN KEY ("AuthId") REFERENCES "UserAuth"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserAttributes" ADD CONSTRAINT "UserAttributes_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserPreference" ADD CONSTRAINT "UserPreference_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
