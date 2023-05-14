import React, {useState} from "react";

export function UnControlledRating() {

    type selectedType = {
        selected: boolean
        setValue: (value: 1 | 2 | 3 | 4 | 5) => void
        value: 1 | 2 | 3 | 4 | 5
    }

    let [value, setValue] = useState(0)

    function Star (props: selectedType) {

        const starStyle = {
            fontSize: '24px',
            cursor: 'pointer'
        }

        return (
            <span style={starStyle} onClick={() => props.setValue(props.value)}>
                {props.selected ? <>&#9733;</> : <>&#9734;</>}
            </span>
        )
    }

    return (
        <div>
            <Star selected={value > 0} setValue={setValue} value={1}/>
            <Star selected={value > 1} setValue={setValue} value={2}/>
            <Star selected={value > 2} setValue={setValue} value={3}/>
            <Star selected={value > 3} setValue={setValue} value={4}/>
            <Star selected={value > 4} setValue={setValue} value={5}/>
        </div>
    )
}



