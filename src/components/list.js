// code Here
import React from 'react'

export default function List(props) {
    // export default function List({ listName, color, qty }) {
    let { color: listColor, qty } = props
    if (!qty) {
        qty = "not defined"
    }



    return (
        <div>
            <h1>{props.listName}- {color} - {qty}</h1>
        </div>
    )
}
