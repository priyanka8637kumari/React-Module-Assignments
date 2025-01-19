import React from "react";

function PersonDetails({person}){
    return(
        <div className="personDetails">
            <h1>{person.name}</h1>
            <p>Age: {person.info.age}</p>
            <p>City: {person.info.city}</p>
            <p>Job: {person.info.job}</p>
            <p>Hobbies:</p>
            <ul>
                {person.info.hobbies.map((hobby, index) => (
                    <li key={index}>{hobby}</li>
                ))}
            </ul>

        </div>
    )

}

export default PersonDetails;