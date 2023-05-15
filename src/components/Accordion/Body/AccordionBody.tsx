import React from "react";
import {ItemsType} from "../Accordion";

export type AccordionBodyPropsType = {
    items: ItemsType[]
    onClick: (value: any) => void
}

export function AccordionBody(props: AccordionBodyPropsType) {

    return (
        <ul>
            {props.items.map((el, index) =>
                <li key={index} onClick={() => {
                    props.onClick(el.value)
                }}>{el.title}</li>)}
        </ul>
    )
}