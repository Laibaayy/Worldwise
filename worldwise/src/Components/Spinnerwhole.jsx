import styles from "./SpinnerWhole.module.css"
import ClipLoader from 'react-spinners/ClipLoader';
// import HashLoader from 'react-spinners/HashLoader';
import PropTypes from 'prop-types';
const Spinnerwhole = ({ color = "black", loading = true }) => {
    const override = {
        // display: "block",
        // margin: "0 auto",
        borderColor: color,
    };

    return (
        <div className={styles.spinner}>

            <ClipLoader
                color={color}
                loading={loading}
                css={override}
                size={55}
                aria-label="Loading Spinner"
                data-testid="loader"
            />

            {/* <HashLoader
                color="#36d7b7"
                cssOverride={override}
                loading={loading}
                size={40}
                speedMultiplier={1}
            /> */}
        </div>
    );
}
Spinnerwhole.propTypes = {
    color: PropTypes.string,
    loading: PropTypes.bool,
};
export default Spinnerwhole;
