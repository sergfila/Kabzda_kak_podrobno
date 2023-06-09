import React, {useEffect, useState} from 'react'

// функция со сложными вычислениями
function generateData() {
    console.log('generateData')
    return 1
}

const UseEffect = () => {
    console.log('UseEffectComponent')

    const [fake, setFake] = useState(generateData);
    const [counter, setCounter] = useState(generateData);

    // useEffect(() => {
    //     console.log('useEffect вызывается каждый раз при рендере компоненты')
    //     document.title = counter.toString()
    // })
    // useEffect(() => {
    //     console.log('useEffect один раз после первичной отрисовки')
    //     document.title = counter.toString()
    // }, [])
    // useEffect(() => {
    //     console.log('useEffect зависит от изменения стейта "counter"')
    //     document.title = counter.toString()
    //     //api.getUsers().then('')
    //     //setInterval
    //     //indexedDB
    //     //document.getElementId
    //     //document.title = 'User'
    // }, [counter])

    // useEffect(() => {
    //     setTimeout(() => {
    //         document.title = counter.toString()
    //     }, 1000)
    // })

    useEffect(() => {
        setInterval(() => {
            setCounter(counter + 1)
        }, 1000)
    })

    return (
        <div>
            {/*<button onClick={() => setFake((state) => state + 1)}>+ fake</button>*/}
            {/*<button onClick={() => setCounter((state) => state + 1)}>+ counter</button>*/}
            <div>counter: {counter}</div>
            <div>fake: {fake}</div>
        </div>
    );
};

export default UseEffect;