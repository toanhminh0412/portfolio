import {defineField, defineType} from 'sanity'

// Create a projectType with 4 fields: name, description, an image, and a previewHref, show/hide
export default defineType({
    name: 'projectType',
    title: 'Project',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            description: 'The name of the project.',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            description: 'The description of the project.',
            type: 'array',
            of: [{type: 'block'}]
        }),
        defineField({
            name: 'image',
            title: 'Image',
            description: 'The image of the project.',
            type: 'image',
        }),
        defineField({
            name: 'previewHref',
            title: 'Preview Href',
            description: 'The href of the preview of the project.',
            type: 'url',
            validation: (rule) => rule.uri({
                scheme: ['http', 'https'],
            }),
        }),
        defineField({
            name: 'show',
            title: 'Show',
            description: 'Show or hide this project',
            type: 'boolean',
        }),
    ],
    groups: [
        {
            title: 'Project',
            fields: ['name', 'description', 'image', 'previewHref', 'show'],
        },
    ],
})