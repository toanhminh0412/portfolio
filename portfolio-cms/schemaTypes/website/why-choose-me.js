import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'whyChooseMe',
    title: 'Why Choose Me',
    type: 'document',
    fields: [
        defineField({
            name: 'subheading',
            title: 'Sub Heading',
            description: 'Purple, top-most text is displayed on the section',
            type: 'string',
        }),
        defineField({
            name: 'heading',
            title: 'Heading',
            description: 'Second top-most, biggest text is displayed on the section',
            type: 'string',
        }),
        defineField({
            name: 'tagline',
            title: 'Tagline',
            description: 'The tagline that is displayed below the heading',
            type: 'string',
        }),
        defineField({
            name: 'features',
            title: 'Features',
            description: 'The features that are displayed below the description',
            type: 'array',
            of: [{type: 'featureType'}]
        }),
    ],
    preview: {
        select: {
            title: 'Why Choose Me',
            subtitle: 'Why Choose Me',
        },
    }
})