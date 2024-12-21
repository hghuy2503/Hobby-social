import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getUser(username: string) {
  return await prisma.user.findUnique({
    where: { username },
    select: {
      username: true,
      isAdmin: true, // Lấy giá trị isAdmin
      avatarUrl: true,
    },
  });
}
