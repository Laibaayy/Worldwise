import { useNavigate } from "react-router-dom"
import styles from "./Form.module.css"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import Urllocation from "../Hooks/urllocation";
import { useContext, useEffect, useState } from "react";
import { WorldwiseContext } from "../Contexts/WorlwiseContext";
const Form = () => {
    const navigate = useNavigate()
    const [cityName, setcityname] = useState("")
    const [date, setdate] = useState(new Date())
    const [country, setcountry] = useState("")
    const [error, seterror] = useState("")
    const [Loading, setloading] = useState("")
    const [emoji, setemoji] = useState("")
    const [notes, setnotes] = useState("")
    const { Createcity, isloading } = useContext(WorldwiseContext)
    const navigating = useNavigate();
    const navigationhandler = (e) => {
        e.preventDefault()
        navigating(-1)
    }


    const { maplat, maplng } = Urllocation()
    useEffect(() => {
        async function mydata() {
            try {
                seterror("")
                setloading(true)
                const res = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${maplat}&longitude=${maplng}`);
                const resdata = await res.json();
                setcityname(resdata.city || resdata.locality || resdata.countryCode);
                setemoji(resdata.countryCode)
                setcountry(resdata.countryName)
                if (!resdata.countryCode || !resdata.city) throw new Error("It doesn't Seem to be a City! Click Somewhere else")
                console.log(resdata);
            } catch (error) {
                seterror(error.message);
            } finally {
                setloading(false)
            }
        }

        if (maplat && maplng) {
            mydata();
        }
    }, [maplat, maplng]);

    const handlesubmit = (e) => {
        e.preventDefault()
        if (!notes || !date) return;
        const NewCity = {
            cityName,
            country,
            emoji,
            date,
            notes,
            position: {
                lat: maplat,
                lng: maplng,
            }
        }
        Createcity(NewCity)
        console.log(NewCity)
        navigate("/app/cities")
    }
    const handlename = (e) => {
        setcityname(e.target.value);
    }

    if (error) return <p>{error}</p>;
    if (Loading) return <p>Loding....</p>
    if (!maplat && !maplng) return <p>Start By Clicking On the map</p>

    return (
        !isloading ? (
            <div >
                <section className={styles.Form}>

                    <form action="" onSubmit={handlesubmit}>
                        <div>
                            <label htmlFor="">City Name: </label>
                            <input type="text" name="name" id="name" placeholder="Enter City name" value={cityName} onChange={handlename} />
                            <p>{emoji}</p>
                        </div>
                        <div>
                            <label htmlFor="">When did you go to {cityName}: </label>
                            <DatePicker selected={date} onChange={(date) => setdate(date)} dateFormat="dd/MM/YYYY" />
                        </div>
                        <div>
                            <label htmlFor="">Notes About trip to {cityName}: </label>
                            <textarea name="notes" id="notes" rows={7} cols={36} value={notes} onChange={(e) => setnotes(e.target.value)}></textarea>
                        </div>
                        <div className={styles.btn}>
                            <button>Add</button>
                            <button onClick={navigationhandler}>&larr; Back</button>

                        </div>
                    </form>
                </section>
            </div>)
            : (
                <p>loading..</p>
            )
    )
}

export default Form