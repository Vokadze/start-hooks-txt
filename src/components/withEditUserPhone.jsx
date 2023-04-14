import React, { useEffect, useState } from "react";
import { EditUserPhone, UserEditBtn } from "../components/hoc-edit-user";
import PropTypes from "prop-types";

export const withEditUserPhone = (Component) => {
    return (props) => {
        const [isEdit, setIsEdit] = useState(false);
        const [phone, setPhone] = useState(props.phone);
        const [fieldValue, setFieldValue] = useState(props.phone);

        useEffect(() => {
            setPhone(props.phone);
            setFieldValue(props.phone);
        }, [props.phone]);

        const handleToggleEdit = () => {
            setIsEdit((prevEdit) => !prevEdit);
        };

        const handleSuccess = () => {
            handleToggleEdit();
            setPhone(fieldValue);
        };

        const handleInputChange = (event) => {
            const { value } = event.target;
            setFieldValue(value);
        };

        return (
            <>
                <Component {...props} phone={phone} />
                {isEdit ? (
                    <EditUserPhone
                        value={fieldValue}
                        onChange={handleInputChange}
                        onSuccess={handleSuccess}
                    />
                ) : (
                    <UserEditBtn onClick={handleToggleEdit} />
                )}
            </>
        );
    };
};

withEditUserPhone.propTypes = {
    phone: PropTypes.string
};
