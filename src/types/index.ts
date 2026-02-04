import { z } from 'zod'

/** Projects */
export const projectsSchema = z.object({
    _id: z.string(),
    projectName: z.string(),
    clientName: z.string(),
    description: z.string()
})

export const dashboardProjectsSchema = z.array(
    projectsSchema.pick({
        _id: true,
        projectName: true,
        clientName: true,
        description: true
    })
)

export type Project = z.infer<typeof projectsSchema>
export type ProjectFormData = Pick<Project, 'projectName' | 'clientName' | 'description'>