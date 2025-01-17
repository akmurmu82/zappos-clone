import PropTypes from 'prop-types';
import TrendingNow from '../components/ui/Trending';
import Navbar from '../components/ui/Navbar';

function LandingPage() {
    return (
        <div>
            <Navbar />
            <TrendingNow />
        </div>
    );
}

LandingPage.propTypes = {
    props: PropTypes.any
};

export default LandingPage;