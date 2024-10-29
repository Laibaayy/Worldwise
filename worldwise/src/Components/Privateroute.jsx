import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { Authcontext } from "../Contexts/UserAuthContext"; // Adjust the path according to your file structure

const PrivateRoute = ({ children }) => {
    const { isauthorized } = useContext(Authcontext);
    const navigating = useNavigate()
    useEffect(() => {
        if (!isauthorized) {
            navigating("/");
        }
    }, [isauthorized, navigating]);
    return isauthorized ? children : null
}

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PrivateRoute;
