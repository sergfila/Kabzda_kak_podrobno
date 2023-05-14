import React from 'react';

type OnOffType = {
    on: boolean
    onChange: (on: boolean) => void
}

function OnOff(props: OnOffType) {

    const wrapper = {
        display: 'flex',
        alignItems: 'center',
        gap: '5px',
        marginBottom: '12px'
    }
    const onOffStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        padding: '6px 16px',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
    const onStyle = {
        ...onOffStyle,
        backgroundColor: props.on ? 'green' : 'white',
        color: props.on ? 'white' : 'black',

    }
    const offStyle = {
        ...onOffStyle,
        backgroundColor: props.on ? 'white' : 'red',
        color: props.on ? 'black' : 'white',


    }
    const indicatorStyle = {
        width: '15px',
        height: '15px',
        borderRadius: '50%',
        border: '1px solid black',
        marginLeft: '10px',
        backgroundColor: props.on ? 'green' : 'red'
    }

    return (
        <div style={wrapper}>
            <div style={onStyle} onClick={() => {props.onChange(true)}}>On</div>
            <div style={offStyle} onClick={() => {props.onChange(false)}}>Off</div>
            <div style={indicatorStyle} onClick={() => {props.onChange(!props.on)}}> </div>
        </div>
    )
}

export default OnOff;