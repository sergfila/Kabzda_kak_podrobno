// Accordion
import React from "react";
import {AccordionTitle} from "./Title/AccordionTitle";
import {AccordionBody} from "./Body/AccordionBody";

export type ItemsType = {
    title: string
    value: any
}

export type AccordionPropsType = {
    title: string
    collapsed: boolean
    onCnahge: () => void
    items: ItemsType[]
    onClick: (value: any) => void
}

export function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.title}/>
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>
    )
}


