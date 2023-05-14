import React, {useState} from 'react';

function UncontrolledOnOff() {
    let [on, setOn] = useState(true);

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
        backgroundColor: on ? 'green' : 'white',
        color: on ? 'white' : 'black',

    }
    const offStyle = {
        ...onOffStyle,
        backgroundColor: on ? 'white' : 'red',
        color: on ? 'black' : 'white',


    }
    const indicatorStyle = {
        width: '15px',
        height: '15px',
        borderRadius: '50%',
        border: '1px solid black',
        marginLeft: '10px',
        backgroundColor: on ? 'green' : 'red'
    }

    const onStateChangeHandler = () => {
        setOn(!on)
    }

    return (

        <div style={wrapper}>
            <div style={onStyle}
                 onClick={onStateChangeHandler}>On</div>
            <div style={offStyle}
                 onClick={onStateChangeHandler}>Off</div>
            <div style={indicatorStyle}
                 onClick={() => {setOn(!on)}}> </div>
        </div>
    )
}

export default UncontrolledOnOff;