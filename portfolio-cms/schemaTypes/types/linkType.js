import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'linkType',
    title: 'Link Type',
    type: 'document',
    fields: [
        defineField({
            name: 'text',
            title: 'Text',
            description: 'The text that will be displayed to the user.',
            type: 'string',
        }),
        defineField({
            name: 'url',
            title: 'URL',
            description: 'The URL that the text will link to.',
            type: 'slug',
        }),
    ],
    groups: [
        {
            title: 'Link',
            fields: ['text', 'url'],
        },
    ],
})