import React, {useEffect, useState} from 'react'

// функция со сложными вычислениями

const Clock = () => {

    const [hours, setHours] = useState<any>('');
    const [minutes, setMinutes] = useState<any>('');
    const [seconds, setSeconds] = useState<any>('');

    useEffect(() => {
        setInterval(() => {
            let date = new Date()
            setHours(date.getHours().toString().padStart(2, '0'));
            setMinutes(date.getMinutes().toString().padStart(2, '0'));
            setSeconds(date.getSeconds().toString().padStart(2, '0'));
        }, 1000)
    })

    return (
        <div>
            <div>clock: {hours === '' ? '' : `${hours}:${minutes}:${seconds}`}</div>
        </div>
    );
};

export default Clock;