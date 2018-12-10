import { prisma } from './generated/prisma-client'

async function whyDontNodeHasTopLevelAwaitYet() {
  const updateUser = await prisma.updateUser({
    where: {
      id: 'grab-your-own-id',
    },
    data: {
      Participant: {
        update: {
          dietaryRestrictions: ['test'],
        },
      },
    },
  })
}

whyDontNodeHasTopLevelAwaitYet()
