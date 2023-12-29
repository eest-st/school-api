import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type CreateUserAuthInput = Pick<
  Prisma.UserCreateInput,
  "username" | "password"
>;

export const createUser = (user: CreateUserAuthInput) => {
  return prisma.user.create({
    data: user,
  });
};

export const getUserByUsername = (username: string) => {
  return prisma.user.findUnique({
    where: { username },
  });
};
