import React from "react";

export function DateComponent() {
    let [date, setDate] = React.useState(''); // '' <- initial value of 'date' let. Second value - changes 'date'

    const getDate = () => {
        setDate(new Date().toDateString()); // React Component can't have object. Thus, we transform Date object to String
                                            // or if we want time = toTimeString()
    };

    return (
        <div>
            {date} <br/>
            <button onClick={getDate}>Get the Date</button>
        </div>
    )
}
