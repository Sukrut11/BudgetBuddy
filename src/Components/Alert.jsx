import React, {useState} from "react";

export default function Alert(props) {
    const capitalizeAlertType = (alertType) => {
        let word = alertType.toLowerCase()
        return word[0].toUpperCase() + word.slice(1)
    }

    // reset Alert
    // const [] = useState(null)
    const alertClosureStatus = (value) => {
        props.alertClosureStatus(value)
    }

    console.log

    return (
        <>
            <div className="alert-container" style={{ minHeight: "65px" }}>
                {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                    <strong>{capitalizeAlertType(props.alert.type)} !!</strong> {props.alert.message}
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true" onClick={() => {alertClosureStatus("reset alert")}}>&times;</span>
                    </button>
                </div>}
            </div>
        </>
    )
}