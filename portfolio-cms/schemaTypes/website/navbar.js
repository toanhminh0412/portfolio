import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'navbar',
    title: 'Navbar',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: "Person or business's name",
            description: 'The name of the person or business that owns the website. Appears on the left side of the navbar.',
            type: 'linkType',
        }),
        defineField({
            name: 'items',
            title: 'Navbar items',
            description: 'The links that will appear in the middle of the navbar.',
            type: 'array',
            of: [{type: 'linkType'}],
        }),
        defineField({
            name: 'actionBtn',
            title: "Action button",
            description: 'The button that will appear on the right side of the navbar. Usually used to encourage users to take a certain action.',
            type: 'linkType',
        }),
    ],
    preview: {
        select: {
            title: 'name.text',
            subtitle: 'Navigation bar',
        },
    },
})