import type { Prisma, Task } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.TaskCreateArgs>({
  task: {
    one: { data: { audioText: 'String' } },
    two: { data: { audioText: 'String' } },
  },
})

export type StandardScenario = ScenarioData<Task, 'task'>
