import Link from "next/link";

const contactHref = '#';

const products = [
    {
        id: 1,
        name: 'Zip Tote Basket',
        description: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg',
        previewHref: '#',
    },
    {
        id: 2,
        name: 'Zip Tote Basket',
        description: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg',
        previewHref: '#',
    },
    {
        id: 3,
        name: 'Zip Tote Basket',
        description: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg',
        previewHref: '#',
    },
]
  
export default function Projects() {
    return (
        <section id="projects" className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold text-gray-900">My portfolio</h2>
                <p className="font-light">Look at these beautiful websites. It could be yours!</p>

                <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-10">
                {products.map((product) => (
                    <div key={product.id}>
                        <div className="relative">
                            <div className="relative h-72 w-full overflow-hidden rounded-lg">
                            <img
                                src={product.imageSrc}
                                alt={product.description}
                                className="h-full w-full object-cover object-center"
                            />
                            </div>
                            <div className="relative mt-4">
                            <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
                            <p className="mt-1 text-sm text-gray-500">{product.description}</p>
                            </div>
                            <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                            <div
                                aria-hidden="true"
                                className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                            />
                            <p className="relative text-lg font-semibold text-white">{product.price}</p>
                            </div>
                        </div>
                        <div className="mt-6">
                            <Link
                                href={product.previewHref}
                                className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
                            >
                                Preview site<span className="sr-only">, {product.name}</span>
                            </Link>
                        </div>
                        <div className="mt-2">
                            <Link
                                href={contactHref}
                                className="relative flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-2 text-sm font-medium text-white hover:bg-indigo-500"
                            >
                                Get a quote<span className="sr-only">, {product.name}</span>
                            </Link>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </section>
    )
}
  