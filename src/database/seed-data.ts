
interface SeedData {
  entries: SeedEntry[]
}

interface SeedEntry {
  description: string;
    createdAt: number;
    status: string
}

export const seedData: SeedData = {

  entries: [ 
    {
      description: 'Pendiente Anim elit mollit qui enim ipsum eu. Deserunt fugiat nulla proident velit ea et occaecat aliquip nulla et ad minim Lorem et.',
      status: 'pending',
      createdAt: Date.now()
    },
    {
      description: 'Progreso Exercitation nisi in non in.',
      status: 'in-progress',
      createdAt: Date.now() - 1000000
    },
    {
      description: 'Terminada Sint pariatur ea fugiat do officia in consectetur dolor occaecat duis.',
      status: 'finished',
      createdAt: Date.now() - 100000
    }
  ]
}