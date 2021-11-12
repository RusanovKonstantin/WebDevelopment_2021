import { Button } from '@material-ui/core'
import React from 'react'

export default function Second() {
    const text = "variable"
    const clickHandler = () =>{
        console.log("Hello");
    }
    return (
        <div>
            <h1>Cats{text}</h1>
            <Button variant="contained" onClick={clickHandler}>Contained</Button>
        </div>
    )
}
