import React from "react";
import PropTypes from "prop-types";

// Просто компонент
const UserMeta = (props) => {
    const { name, phone, email } = props;
    return (
        <div className="card">
            <div className="card-body">
                <h3 className="card-title">{name}</h3>
                <div className="card-text">
                    Tel.: {phone}, email: {email}
                </div>
            </div>
        </div>
    );
};

// Его propTypes
UserMeta.propTypes = {
    name: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string
};

export default UserMeta;
