import Link from "next/link";
import Image from "next/image";
import client from "@/sanity/client";
import urlFor from "@/sanity/imageBuilder";
import { PortableText } from "next-sanity";

const contactHref = '#contact';

const PROJECTS_QUERY = `*[_type == "projects"]{
    heading,
    tagline,
    projects
}[0]`
  
export default async function Projects() {
    const projectsContent = await client.fetch(PROJECTS_QUERY);
    const heading = projectsContent.heading;
    const tagline = projectsContent.tagline;
    const projects = projectsContent.projects.map((project) => ({
        _key: project._key,
        name: project.name,
        description: project.description,
        imageSrc: urlFor(project.image).url(),
        imageAlt: project.description.map((item) => item.children.map((child) => child.text).join('')).join(''),
        previewHref: project.previewHref,
        price: project.price,
        show: project.show,
    }));

    return (
        <section id="projects" className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold text-gray-900">{heading}</h2>
                <p className="font-light">{tagline}</p>

                <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-10">
                {projects.map((project) => project.show ? (
                    <div key={project._key} className="flex flex-col justify-between">
                        <div className="relative">
                            <Link href={project.previewHref} target="_blank">
                                <div className="relative w-full aspect-[3/2] overflow-hidden rounded-lg cursor-pointer hover:opacity-75 duration-75 border border-gray-200 shadow-md">
                                    <Image
                                        fill
                                        src={project.imageSrc}
                                        alt={project.imageAlt}
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                            </Link>
                            <div className="relative mt-4">
                                <h3 className="text-sm font-medium text-gray-900">{project.name}</h3>
                                <div className="mt-1 text-sm text-gray-500"><PortableText value={project.description}/></div>
                            </div>
                        </div>
                        <div>
                            <div className="mt-6">
                                <Link
                                    href={project.previewHref}
                                    target="_blank"
                                    className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
                                >
                                    Preview site<span className="sr-only">, {project.name}</span>
                                </Link>
                            </div>
                            <div className="mt-2">
                                <Link
                                    href={contactHref}
                                    className="relative flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-2 text-sm font-medium text-white hover:bg-indigo-500"
                                >
                                    Get a quote<span className="sr-only">, {project.name}</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                ) : null)}
                </div>
            </div>
        </section>
    )
}
  