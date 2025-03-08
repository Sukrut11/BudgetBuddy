import React from "react";

export default function Alert(props) {
    const capitalizeAlertType = (alertType) => {
        let word = alertType.toLowerCase()
        return word[0].toUpperCase() + word.slice(1)
    }

    return (
        <>
                {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                    <strong>{capitalizeAlertType(props.alert.type)} !!</strong> {props.alert.message}
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>}
        </>
    )
}