const TrendingNow = () => {
    const trendingItems = [
        { img: "https://m.media-amazon.com/images/G/01/Zappos/2025-homepage/homepage1.6.25/TRENDING-CATEGORY-1-SNEAKERS-432x540._FMwebp_.jpg", label: "Sneakers" },
        { img: "https://m.media-amazon.com/images/G/01/Zappos/2025-homepage/homepage1.6.25/TRENDING-CATEGORY-2-BOOTS-432x540._FMwebp_.jpg", label: "Winter Clearance" },
        { img: "https://m.media-amazon.com/images/G/01/Zappos/2025-homepage/homepage1.6.25/TRENDING-CATEGORY-3-WINTER-CLEARANCE-432x540._FMwebp_.jpg", label: "Coats" },
        { img: "https://m.media-amazon.com/images/G/01/Zappos/2025-homepage/homepage1.6.25/TRENDING-CATEGORY-2-BOOTS-432x540._FMwebp_.jpg", label: "Heels" },
        { img: "https://m.media-amazon.com/images/G/01/Zappos/2025-homepage/homepage1.6.25/TRENDING-CATEGORY-1-SNEAKERS-432x540._FMwebp_.jpg", label: "Flats" },
        { img: "https://m.media-amazon.com/images/G/01/Zappos/2025-homepage/homepage1.6.25/TRENDING-CATEGORY-3-WINTER-CLEARANCE-432x540._FMwebp_.jpg", label: "Flats" },
    ];

    return (
        <div className="my-8 px-6">
            <h2 className="text-2xl font-bold mb-6">Trending Now</h2>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {trendingItems.map((item, index) => (
                    <div
                        key={index}
                        className="text-center"
                    >
                        <img
                            src={item.img}
                            alt={item.label}
                            className="w-full h-48 mb-5 object-cover rounded-md"
                        />
                        <a href="#" className="underline font-bold">{item.label}</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TrendingNow;
