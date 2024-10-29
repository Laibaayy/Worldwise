// import PropTypes from 'prop-types';
import Countryitem from './Countryitem';
import styles from "./Countrylist.module.css"
import { WorldwiseContext } from '../Contexts/WorlwiseContext';
import { useContext } from 'react';
const Countrylist = () => {
    const { cityy, isloading } = useContext(WorldwiseContext)
    if (isloading) return <p>Loading...</p>
    if (!cityy.length) return <p className={styles.p}>🌟 Add your First city by clicking on the city in map</p>
    const contries = cityy.reduce((arr, city) => {
        if (!arr.map(el => el.country).includes(city.country))
            return [...arr, { country: city.country, emoji: city.emoji }];
        else return arr

    }, [])
    // const contries = [];
    return (
        <div className={styles.countrylist}>
            {contries.map((countryy, index) => {
                return <Countryitem countryy={countryy} key={index} />
            })}
        </div>
    )
}

export default Countrylist


// Countrylist.propTypes = {
//     cityy: PropTypes.arrayOf(
//         PropTypes.shape({
//             cityName: PropTypes.string.isRequired,
//             country: PropTypes.string.isRequired,
//             date: PropTypes.string.isRequired,
//             emoji: PropTypes.string.isRequired,
//         })
//     ).isRequired,
//     isloading: PropTypes.bool.isRequired,
// };