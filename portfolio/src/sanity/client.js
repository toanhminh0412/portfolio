import {createClient} from 'next-sanity'

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_IO_PROJECT_ID,
    dataset: "production",
    apiVersion: "2024-01-01",
    // unless you have caching for your front end, `useCdn` should be `true` for most production environments
    useCdn: true, 
})

export default client;
