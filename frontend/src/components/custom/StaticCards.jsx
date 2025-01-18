import PropTypes from 'prop-types';

const StaticCard = ({ title, products }) => {
    return (
        <section className="py-10 px-2">
            <div className="max-w-7xl mx-auto">
                {/* Title */}
                <h5 className="text-xl font-bold text-gray-800 mb-8">{title}</h5>

                {/* Dynamic Grid Layout */}
                <div
                    className={`grid grid-cols-1 ${products.length > 1 ? 'sm:grid-cols-2' : ''
                        } ${products.length > 2 ? 'lg:grid-cols-3' : ''} gap-6`}
                >
                    {products.map((product) => (
                        <div key={product.id} className="overflow-hidden">
                            <img
                                src={product.imgSrc}
                                alt={product.name}
                                className="w-full h-auto object-cover shadow-md"
                            />
                            <span className="block mt-2 text-sm font-semibold underline">
                                {product.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Prop Type Validation
StaticCard.propTypes = {
    title: PropTypes.string.isRequired,
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            imgSrc: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default StaticCard;
