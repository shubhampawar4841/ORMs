import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.post.createMany({
    data: [
      {
        title: "First Post",
        content: "Content of the first post",
        authorId: 1, // Directly use the foreign key
      },
      {
        title: "Second Post",
        content: "Content of the second post",
        authorId: 1,
      },
      {
        title: "Third Post",
        content: "Content of the third post",
        authorId: 2, // Assign to another author
      },
      {
        title: "Fourth Post",
        content: "Content of the fourth post",
        authorId: 3, // Assign to a different author
      },
    ],
  });

  console.log("Posts added successfully");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
