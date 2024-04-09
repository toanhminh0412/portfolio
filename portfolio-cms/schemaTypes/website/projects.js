import {defineField, defineType} from 'sanity'

// Create a projects section that contains a heading, a tagline and a list of projects
export default defineType({
    name: 'projects',
    title: 'Projects',
    type: 'document',
    fields: [
        defineField({
            name: 'heading',
            title: 'Heading',
            description: 'The heading of the projects section.',
            type: 'string',
        }),
        defineField({
            name: 'tagline',
            title: 'Tagline',
            description: 'The tagline of the projects section.',
            type: 'string',
        }),
        defineField({
            name: 'projects',
            title: 'Projects',
            description: 'The projects that are displayed below the description',
            type: 'array',
            of: [{type: 'projectType'}]
        }),
    ],
    groups: [
        {
            title: "Projects",
            fields: ['heading', 'tagline', 'projects']
        }
    ],
    preview: {
        select: {
            title: 'heading',
            subtitle: 'Projects'
        }
    }
})