import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Add multiple users
  await prisma.user.createMany({
    data: [
      { email: "harkirat1@gmail.com", name: "Harkirat" },
      { email: "john.doe@example.com", name: "John Doe" },
      { email: "jane.doe@example.com", name: "Jane Doe" },
      { email: "alice@example.com", name: "Alice" },
      { email: "bob@example.com", name: "Bob" },
    ],
    skipDuplicates: true, // Avoid errors if some emails already exist
  });

  console.log("Users added successfully");
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
