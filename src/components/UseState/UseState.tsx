import React, {useState} from 'react'

// функция со сложными вычислениями
function generateData() {
    console.log('generateData')
    return 1
}

const UseState = () => {
    console.log('useState')
    const [counter, setCounter] = useState(generateData);

    const changer = (state: number) => state + 1

    return (
        <div>
            <button onClick={() => setCounter(changer)}>+</button>
            <div>{counter}</div>
        </div>
    );
};

export default UseState;