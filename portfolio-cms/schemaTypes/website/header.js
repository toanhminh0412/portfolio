import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'header',
    title: 'Header',
    type: 'document',
    fields: [
        defineField({
            name: 'heading',
            title: 'Heading',
            description: 'Big, top-most text is displayed on the header',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            description: 'Smaller text displayed below the heading',
            type: 'array', 
            of: [{type: 'block'}]
        }),
        defineField({
            name: 'primaryBtn',
            title: 'Primary Button',
            description: 'The main colored button that appears below the description, on the left',
            type: 'linkType',
        }),
        defineField({
            name: 'secondaryBtn',
            title: 'Secondary Button',
            description: 'The secondary button that appears below the description, on the right',
            type: 'linkType',
        }),
        defineField({
            name: 'image',
            title: 'Image',
            description: 'The big image that is displayed on the right side of the header',
            type: 'image',
        })
    ],
    groups: [
        {
            title: 'Header',
            fields: ['heading', 'description', 'primaryBtn', 'secondaryBtn', 'image'],
        },
    ],
    preview: {
        select: {
            title: 'heading',
            subtitle: 'Header'
        }
    }
})