import React from "react"

export const JournalEntry = props => {
    return (
        <div>
            <h2>{props.title}</h2>
            <h2>{props.content}</h2>
        </div>
    )
}

