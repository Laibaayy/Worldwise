import PropTypes from 'prop-types';
import styles from "./Countryitem.module.css"
const Countryitem = ({ countryy }) => {
    const { country, emoji } = countryy;

    return (
        <div className={styles.coutryitem}>
            <p>{emoji} {country}</p>
        </div>
    );
};

Countryitem.propTypes = {
    countryy: PropTypes.shape({
        country: PropTypes.string.isRequired,
        emoji: PropTypes.string.isRequired
    }).isRequired
};

export default Countryitem;
