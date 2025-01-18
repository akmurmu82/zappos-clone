import ProductCard from "./ProductCard";

const ProductDisplaySection = ({ header, products }) => {
    return (
        <section className="px-4 py-6">
            {/* Section Header */}
            <div className="mb-8 text-center sm:text-left">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                    {header}
                </h2>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
};

export default ProductDisplaySection;
