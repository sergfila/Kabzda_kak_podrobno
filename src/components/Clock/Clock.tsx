import React, {useEffect, useState} from 'react';
import Styles from './Clock.module.css';

type ClockType = 'digital' | 'mechanic'

const Clock = () => {
    const [rotation, setRotation] = useState({
        hours: 0,
        minutes: 0,
        seconds: 0
    });
    const [clock, setClock] = useState<ClockType>('digital')

    useEffect(() => {
        const intervalID = setInterval(() => {
            const date = new Date();
            const rotationObj = {
                hours: (date.getHours() % 12) * 30 + date.getMinutes() / 2,
                minutes: date.getMinutes() * 6,
                seconds: date.getSeconds() * 6
            };
            setRotation(rotationObj);
        }, 1000);

        return () => clearInterval(intervalID);
    }, []);

    return (
        <div>
            <div className={Styles.btnsContainer}>
                {clock === 'digital'
                    ? <button onClick={() => setClock('mechanic')}>mechanic</button>
                    : <button onClick={() => setClock('digital')}>digital</button>}
            </div>
            {clock === 'digital'
                ? <div className={Styles.digital}>
                    {`${new Date().getHours()
                    .toString()
                    .padStart(2, '0')} : ${new Date().getMinutes()
                    .toString()
                    .padStart(2, '0')} : ${new Date().getSeconds()
                    .toString()
                    .padStart(2, '0')}`}
                </div>
                : <div className={Styles.clockContainer}>
                    <div className={`${Styles.hand} ${Styles.hour}`}
                         style={{transform: `rotate(${rotation.hours}deg)`}}> </div>
                    <div className={`${Styles.hand} ${Styles.minute}`}
                         style={{transform: `rotate(${rotation.minutes}deg)`}}> </div>
                    <div className={`${Styles.hand} ${Styles.second}`}
                         style={{transform: `rotate(${rotation.seconds}deg)`}}> </div>
                </div>
            }
        </div>
    );
};

export default Clock;