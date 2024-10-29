import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { WorldwiseContext } from "../Contexts/WorlwiseContext";
import styles from "./Citydetail.module.css"
const Citydetail = () => {
    const { Alldetail, currentcity, isloading } = useContext(WorldwiseContext)
    const Navigate = useNavigate();
    const { id } = useParams(); //to get id from Link url
    useEffect(() => {
        Alldetail(id)
    }, [id, Alldetail])
    if (!currentcity) return <p className={styles.loading}>Loading city details...</p>;
    if (isloading) return <p className={styles.loading}>Loading...</p>

    const { cityName, country, emoji, date, notes } = currentcity
    return (
        <div className={styles.detail}>
            <p className={styles.p}>City Name</p>
            <p className={styles.answer}>{cityName}</p>
            <p className={styles.p}>Country Name</p>
            <span className={styles.answer}>{country}</span>
            <span className={styles.answer}>{emoji}</span>
            <p className={styles.p}>You went to {cityName} on </p>
            <p className={styles.answer}>{date}</p>
            {notes && notes.length !== 0 ? (
                <div>
                    <p className={styles.p}>Your Notes</p>
                    <p className={styles.answer}>{notes}</p>
                </div>
            ) : (
                <p>No notes available</p>
            )}
            <button onClick={() => Navigate(-1)} className={styles.back}>&larr; Back</button>

        </div >
    )
}

export default Citydetail