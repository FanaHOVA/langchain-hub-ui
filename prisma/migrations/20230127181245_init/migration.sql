-- CreateTable
CREATE TABLE "LangChainAgent" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "githubPath" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "prompt" TEXT NOT NULL,
    "readme" TEXT NOT NULL,

    CONSTRAINT "LangChainAgent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LangChainChain" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "githubPath" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "prompt" TEXT NOT NULL,
    "readme" TEXT NOT NULL,

    CONSTRAINT "LangChainChain_pkey" PRIMARY KEY ("id")
);
