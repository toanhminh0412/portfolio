import {defineField, defineType} from 'sanity'

// Create a featureType with 3 fields: an icon chosen from Heroicons, a name, and a description
export default defineType({
    name: 'featureType',
    title: 'Feature',
    type: 'document',
    fields: [
        defineField({
            name: 'icon',
            title: 'Icon',
            description: 'The icon that will be displayed to the user. Choose from Font Awesome.',
            type: 'string',
        }),
        defineField({
            name: 'name',
            title: 'Name',
            description: 'The name of the feature.',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            description: 'The description of the feature.',
            type: 'array',
            of: [{type: 'block'}]
        }),
    ],
    groups: [
        {
            title: 'Feature',
            fields: ['icon', 'name', 'description'],
        },
    ],
})
