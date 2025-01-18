import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../ui/carousel";
import ProductCard from "./ProductCard";

export function CarouselSize({ header, products }) {
    return (
        <div className="relative flex flex-col justify-center w-full">
            {/* Header */}
            <h2 className="text-xl font-bold text-center sm:text-left mb-4">{header}</h2>

            {/* Carousel */}
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full max-w-6xl"
            >
                <CarouselContent className="flex">
                    {products.map((product, index) => (
                        <CarouselItem
                            key={index}
                            className="flex-shrink-0 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/4"
                        >
                            <ProductCard id={product._id} product={product} />
                        </CarouselItem>
                    ))}
                </CarouselContent>

                {/* Navigation Buttons */}
                <CarouselPrevious className="absolute top-1/2 left-2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100" />
                <CarouselNext className="absolute top-1/2 right-2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100" />
            </Carousel>
        </div>
    );
}
