import type { Prisma, Task } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.TaskCreateArgs>({
  task: {
    one: { data: { name: 'String', imageUrl: 'String' } },
    two: { data: { name: 'String', imageUrl: 'String' } },
  },
})

export type StandardScenario = ScenarioData<Task, 'task'>
