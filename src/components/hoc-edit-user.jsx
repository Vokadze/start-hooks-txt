import React from "react";
import PropTypes from "prop-types";

export const EditUserPhone = ({ value, onChange, onSuccess }) => {
    return (
        <div className="alert alert-success mt-2">
            <h4>Введите новый телефон</h4>
            <div className="d-flex justify-content-between">
                <input
                    value={value}
                    onChange={onChange}
                    className="w-100 me-2 form-control"
                />{" "}
                <button className="btn btn-primary" onClick={onSuccess}>
                    Сохранить
                </button>
            </div>
        </div>
    );
};

EditUserPhone.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onSuccess: PropTypes.func.isRequired
};

export const UserEditBtn = ({ onClick }) => {
    return (
        <div className="d-flex justify-content-end mt-2">
            <button className="btn btn-primary" onClick={onClick}>
                Редактировать телефон
            </button>
        </div>
    );
};

UserEditBtn.propTypes = {
    onClick: PropTypes.func
};

// export const EditUserPhone = ({ value, onChange, onSuccess }) => {
//    return (
//        <div className="alert alert-success mt-2">
//            <h4>Введите новый телефон</h4>
//            <div className="d-flex justify-content-between">
//                <input
//                    value={value}
//                    onChange={onChange}
//                    className="w-100 me-2 form-control"
//                />
//                <button className="btn btn-primary" onClick={onSuccess}>
//                    Сохранить
//                </button>
//            </div>
//        </div>
//    );
// };

// EditUserPhone.propTypes = {
//    value: PropTypes.string.isRequired,
//    onChange: PropTypes.func.isRequired,
//    onSuccess: PropTypes.func.isRequired
// };

// export const UserEditBtn = ({ onClick }) => {
//    return (
//        <div className="d-flex justify-content-end mt-2">
//            <button className="btn btn-primary" onClick={onClick}>
//                Редактировать телефон
//            </button>
//        </div>
//    );
// };

// UserEditBtn.propTypes = {
//    onClick: PropTypes.func.isRequired
// };
