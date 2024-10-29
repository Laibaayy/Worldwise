import { useSearchParams } from 'react-router-dom';

const Urllocation = () => {
    const [searchparam] = useSearchParams();
    const maplat = searchparam.get("lat");
    const maplng = searchparam.get("lng");

    return { maplat, maplng };

};

export default Urllocation;
