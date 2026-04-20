import { createClient } from '@sanity/client'

export const client = createClient({
    projectId: 'b1twq6v4',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2026-04-20'
})