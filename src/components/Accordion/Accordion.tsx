// Accordion
import React from "react";

export type AccordionPropsType = {
    /**
     * accordion title
     */
    title: string

    /**
     * Hiden/show element accordion body
     */
    collapsed: boolean
    onCnahge: () => void
}

export function Accordion(props: AccordionPropsType) {

        return (
            <>
                <AccordionTitle title={props.title}
                                onCnahge={props.onCnahge}
                />
                {!props.collapsed && <AccordionBody />}
            </>
        )
}

type AccordionTitlePropsType = {
    title: string;
    onCnahge: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {

    return (
        <h3 onClick={props.onCnahge}>{props.title}</h3>
    )
}

function AccordionBody() {

    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}