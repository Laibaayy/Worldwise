import Cityitem from "./Cityitem"
import styles from "./Citylist.module.css"
import { useContext } from 'react';
import { WorldwiseContext } from '../Contexts/WorlwiseContext';
const Citylist = () => {
    const { cityy, isloading } = useContext(WorldwiseContext)
    if (isloading) return <p>Loading...</p>;
    if (!cityy.length) return <p className={styles.p}>🌟 Add your First city BY clicking on the city in map</p>




    return (
        <div className={styles.city}>
            {cityy.map((city, index) => {
                console.log(city.cityName);
                return <Cityitem city={city} key={index} />
            })}

        </div>
    )
}







export default Citylist;
