import PropTypes from 'prop-types';
import styles from "./Cityitem.module.css"
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { WorldwiseContext } from '../Contexts/WorlwiseContext';



const Cityitem = ({ city }) => {
    const { DeleteCity } = useContext(WorldwiseContext)
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Intl.DateTimeFormat('en-US', options).format(date);
    };
    const { cityName, date, emoji, id, position } = city
    const deletehandledata = (e) => {
        e.preventDefault()
        console.log(id);
        DeleteCity(id)
    }

    return (
        <section className={styles.sec}>
            <Link className={styles.cityitem} to={`${id}?lat=${position.lat}&lng=${position.lng}`}>
                <div className={styles.div}>
                    <h2>{cityName}</h2>
                    <span>{emoji}</span>
                </div>
                <div className={styles.div}>
                    <p>{formatDate(date)}</p>

                </div>
            </Link>
            <button className={styles.btn} onClick={deletehandledata}>&times;</button>
        </section >
    )
}

export default Cityitem


Cityitem.propTypes = {
    city: PropTypes.shape({
        cityName: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        emoji: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        position: PropTypes.shape({
            lat: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            lng: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        }).isRequired,
    }).isRequired,


};
