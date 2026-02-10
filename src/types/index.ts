import { z } from 'zod'
import { de } from 'zod/v4/locales'

/** Tasks */
export const taskStatusSchema = z.enum(["pending", "onHold", "inProgress", "underReview", "completed"])

export const taskschema = z.object({
    _id: z.string(),
    name: z.string(),
    description: z.string(),
    project: z.string(),
    status: taskStatusSchema
})

export type Task = z.infer<typeof taskschema>
export type TaskFormData = Pick<Task, 'name' | 'description'>

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