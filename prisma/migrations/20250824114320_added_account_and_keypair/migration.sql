-- CreateTable
CREATE TABLE "public"."Account" (
    "id" TEXT NOT NULL,
    "account" TEXT NOT NULL,
    "userid" TEXT NOT NULL,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Keypair" (
    "publickey" TEXT NOT NULL,
    "privatekey" TEXT NOT NULL,
    "accountid" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_account_key" ON "public"."Account"("account");

-- CreateIndex
CREATE UNIQUE INDEX "Account_userid_key" ON "public"."Account"("userid");

-- CreateIndex
CREATE UNIQUE INDEX "Keypair_accountid_key" ON "public"."Keypair"("accountid");

-- AddForeignKey
ALTER TABLE "public"."Account" ADD CONSTRAINT "Account_userid_fkey" FOREIGN KEY ("userid") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Keypair" ADD CONSTRAINT "Keypair_accountid_fkey" FOREIGN KEY ("accountid") REFERENCES "public"."Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
