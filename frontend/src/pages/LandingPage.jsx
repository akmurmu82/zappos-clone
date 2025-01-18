import axios from "axios";
import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import TrendingNow from '../components/custom/Trending';
import Navbar from '../components/custom/Navbar';
import { CarouselSize } from '../components/custom/ProdCarousel';
import StaticCard from '@/components/custom/StaticCards';
import Footer from '@/components/custom/Footer';
import { useParams } from "react-router-dom";
const backendUrl = import.meta.env.VITE_BACKEND_URL;

function LandingPage() {
    const { productId } = useParams();
    const [product, setProduct] = useState([{}]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch product details
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`${backendUrl}/api/products`); // Replace with your API endpoint
                setProduct(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching product:", error);
                setLoading(false);
            }
        };

        fetchProduct();
    }, []);

    useEffect(() => {
        // console.log("product:", product)
    }, [product])

    const products = [
        { id: 1, name: "The North Face Metropolis Parka", category: "Women's", price: "$300.00", imgSrc: "https://m.media-amazon.com/images/I/71Y-TwkSmuL._AC_SR920,736_.jpg" },
        { id: 2, name: "Nike Air Max 97", category: "Men's", price: "$150.00", imgSrc: "https://m.media-amazon.com/images/I/717lS5IAi4L._AC_SR920,736_.jpg" },
        { id: 3, name: "New Balance Classic", category: "Unisex", price: "$180.00", imgSrc: "https://m.media-amazon.com/images/I/61H1pcY1q2L._AC_SR920,736_.jpg" },
        { id: 4, name: "Polo RalphLoaren Kids", category: "Unisex", price: "$180.00", imgSrc: "https://m.media-amazon.com/images/I/81UfIkZdpcL._AC_SR736,920_.jpg" },
        { id: 5, name: "UGG", category: "Men's", price: "$109.95", imgSrc: "https://m.media-amazon.com/images/I/71YaRXs33jL._AC_SR920,736_.jpg" },
        { id: 6, name: "The North Face Metropolis Parka", category: "Women's", price: "$300.00", imgSrc: "https://m.media-amazon.com/images/I/71Y-TwkSmuL._AC_SR920,736_.jpg" },
    ];

    const kidsProducts = [
        { id: 1, name: "Shop Kid's Boot", imgSrc: "https://m.media-amazon.com/images/G/01/Zappos/2025-homepage/homepage1.6.25/KIDS-SHOP-HERO-1-BOOTS-1440x960._FMwebp_.jpg" },
        { id: 2, name: "Shop All Kids'", imgSrc: "https://m.media-amazon.com/images/G/01/Zappos/2025-homepage/homepage1.6.25/KIDS-SHOP-HERO-2-ALL-KIDS-1440x960-NEW-NEW._FMwebp_.jpg" },
        { id: 3, name: "Shop All Kids'", imgSrc: "https://m.media-amazon.com/images/G/01/Zappos/2025-homepage/homepage1.6.25/KIDS-SHOP-HERO-2-ALL-KIDS-1440x960-NEW-NEW._FMwebp_.jpg" },
    ];
    const freshPicks = [
        { id: 1, name: "Shop the Coats & Boots Guide", imgSrc: "https://m.media-amazon.com/images/G/01/Zappos/2025-homepage/homepage1.6.25/HERO-1-JANUARY-LOOKBOOK-1440x700._FMwebp_.jpg" },
        { id: 2, name: "Shop Birkenstock", imgSrc: "https://m.media-amazon.com/images/G/01/Zappos/2025-homepage/homepage1.6.25/HERO-2-B-BIRKENSTOCK-1440x700._FMwebp_.jpg" },
    ];
    const ofTheSeason = [
        { id: 1, name: "Shop UGG", imgSrc: "https://m.media-amazon.com/images/G/01/Zappos/2025-homepage/homepage1.6.25/TRIPTYCH-1-UGG-896x1100._FMwebp_.jpg" },
        { id: 2, name: "Shop Sweters", imgSrc: "https://m.media-amazon.com/images/G/01/Zappos/2025-homepage/homepage1.6.25/TRIPTYCH-2-SWEATERS-896x1100._FMwebp_.jpg" },
        { id: 3, name: "Shop SOREL", imgSrc: "https://m.media-amazon.com/images/G/01/Zappos/2025-homepage/homepage1.6.25/TRIPTYCH-3-SOREL-896x1100._FMwebp_.jpg" },
    ];
    const newArrival = [
        { id: 1, name: "", category: "", price: "", imgSrc: "https://m.media-amazon.com/images/G/01/Zappos/homepage12.9/NEW-ARRIVALS-FEED-658x916._FMwebp_.jpg" },
        { id: 2, name: "The North Face", category: "Women's", price: "$300.00", imgSrc: "https://m.media-amazon.com/images/I/61IjOHKKmKL._AC_SR768,1024__FMwebp_.jpg" },
        { id: 3, name: "Crocs Kids", category: "", price: "$49.95", imgSrc: "https://m.media-amazon.com/images/I/61cetjJZIBL._AC_SR768,1024__FMwebp_.jpg" },
        { id: 4, name: "Hey Dude", category: "Women's", price: "$64.99", imgSrc: "https://m.media-amazon.com/images/I/71j0B7rH9jL._AC_SR768,1024__FMwebp_.jpg" },
        { id: 3, name: "Crocs Kids", category: "", price: "$49.95", imgSrc: "https://m.media-amazon.com/images/I/61cetjJZIBL._AC_SR768,1024__FMwebp_.jpg" },
    ];
    const theRunningShop = [
        { id: 1, name: "Shop Winter Must-Haves", imgSrc: "https://m.media-amazon.com/images/G/01/Zappos/2025-homepage/homepage1.6.25/RUNNING-SHOP-HERO-1-RUNNING-MUST-HAVES-1440x960._FMwebp_.jpg" },
        { id: 2, name: "Discover The Running Shop", imgSrc: "https://m.media-amazon.com/images/G/01/Zappos/2025-homepage/homepage1.6.25/RUNNING-SHOP-HERO-2-SHOP-ALL1440x960._FMwebp_.jpg" },
    ];
    const wayToShop = [
        { id: 1, name:"", imgSrc: "https://m.media-amazon.com/images/G/01/Zappos/HPVIP/HP-TILES-2-VIP-896x300._FMwebp_.png" },
        { id: 2, name:"", imgSrc: "https://m.media-amazon.com/images/G/01/Zappos/HPVIP/HP-TILES-1-PRIME-896x300._FMwebp_.png" },
        { id: 3, name:"", imgSrc: "https://m.media-amazon.com/images/G/01/Zappos/HPVIP/HP-TILES-3-APP-896x300._FMwebp_.png" },
    ];
    return (
        <div>
            <Navbar />
            <div className="px-6 flex flex-col">
                <TrendingNow />
                <StaticCard products={freshPicks} title="Fresh Picks for the Year" />
                <StaticCard products={ofTheSeason} title="Of-the-Season Brands & Styles" />
                <CarouselSize header={'Discover Our Bestsellers'} products={products} />
            </div>
            <StaticCard products={theRunningShop} title="The Running Shop" />
            <CarouselSize header={'Discover Our Bestsellers 2'} products={product} />
            <StaticCard products={kidsProducts} title="The Kids' Shop" />
            <StaticCard products={wayToShop} title="Way To Shop" />
            <Footer />
        </div>

    );
}

LandingPage.propTypes = {
    props: PropTypes.any
};

export default LandingPage;