import { PrismaClient, Priority, Role } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // ----- USERS -----
  const alice = await prisma.user.create({
    data: {
      name: "Alice Yılmaz",
      email: "alice@example.com",
      passwordHash: "$2a$10$dummyhashplaceholder", // bcrypt hash
    },
  });

  const bob = await prisma.user.create({
    data: {
      name: "Bob Demir",
      email: "bob@example.com",
      passwordHash: "$2a$10$dummyhashplaceholder",
    },
  });

  // ----- PROJECT -----
  const project = await prisma.project.create({
    data: {
      name: "Tello MVP",
      description: "Proaktif görev yönetim aracı MVP geliştirmesi",
      ownerId: alice.id,
    },
  });

  // ----- PROJECT MEMBERS -----
  await prisma.projectMember.createMany({
    data: [
      { projectId: project.id, userId: alice.id, role: Role.ADMIN },
      { projectId: project.id, userId: bob.id, role: Role.MEMBER },
    ],
  });

  // ----- COLUMNS -----
  const backlog = await prisma.column.create({
    data: { projectId: project.id, name: "Backlog", position: 1.0, wipLimit: null },
  });
  const todo = await prisma.column.create({
    data: { projectId: project.id, name: "To Do", position: 2.0, wipLimit: 5 },
  });
  const inProgress = await prisma.column.create({
    data: { projectId: project.id, name: "In Progress", position: 3.0, wipLimit: 3 },
  });
  const review = await prisma.column.create({
    data: { projectId: project.id, name: "Review", position: 4.0, wipLimit: 4 },
  });
  const done = await prisma.column.create({
    data: { projectId: project.id, name: "Done", position: 5.0, wipLimit: null, isDone: true },
  });

  // ----- LABELS -----
  const bug = await prisma.label.create({
    data: { projectId: project.id, name: "Bug", color: "#EF4444" },
  });
  const feature = await prisma.label.create({
    data: { projectId: project.id, name: "Feature", color: "#3B82F6" },
  });
  const improvement = await prisma.label.create({
    data: { projectId: project.id, name: "Improvement", color: "#10B981" },
  });

  // ----- CARDS -----
  const card1 = await prisma.card.create({
    data: {
      columnId: todo.id,
      title: "Kullanıcı giriş sayfası",
      description: "Email + şifre ile giriş formu, JWT dönen endpoint'e bağlanacak",
      creatorId: alice.id,
      assigneeId: bob.id,
      priority: Priority.HIGH,
      position: 1.0,
    },
  });

  const card2 = await prisma.card.create({
    data: {
      columnId: todo.id,
      title: "Proje listesi API'i",
      description: "Kullanıcının üye olduğu projeleri dönen GET /api/projects endpoint'i",
      creatorId: alice.id,
      assigneeId: alice.id,
      priority: Priority.MEDIUM,
      position: 2.0,
    },
  });

  const card3 = await prisma.card.create({
    data: {
      columnId: inProgress.id,
      title: "Veritabanı şemasını kur",
      description: "Prisma migrate ile PostgreSQL'e tabloları yansıt",
      creatorId: alice.id,
      assigneeId: bob.id,
      priority: Priority.URGENT,
      position: 1.0,
    },
  });

  // ----- CARD LABELS -----
  await prisma.cardLabel.createMany({
    data: [
      { cardId: card1.id, labelId: feature.id },
      { cardId: card2.id, labelId: feature.id },
      { cardId: card3.id, labelId: bug.id },
    ],
  });

  // ----- CARD DEPENDENCY -----
  await prisma.cardDependency.create({
    data: { blockerId: card3.id, blockedId: card1.id },
  });

  // ----- COMMENTS -----
  await prisma.comment.create({
    data: {
      cardId: card1.id,
      authorId: bob.id,
      text: "Tailwind ile responsive yapalım mı?",
    },
  });

  // ----- ACTIVITIES -----
  await prisma.activity.createMany({
    data: [
      {
        projectId: project.id,
        cardId: card3.id,
        userId: alice.id,
        type: "CARD_CREATED",
        data: { title: "Veritabanı şemasını kur" },
      },
      {
        projectId: project.id,
        cardId: card1.id,
        userId: alice.id,
        type: "CARD_ASSIGNED",
        data: { assignee: "Bob Demir" },
      },
    ],
  });

  console.log("✅ Seed completed!");
}

main()
  .catch((e) => {
    console.error("❌ Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
