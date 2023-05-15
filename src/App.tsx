import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import Rating, {RatingValueType} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UnControlledAccordion/UnControlledAccordion";
import {UnControlledRating} from "./components/UnControlledRating/UnControlledRating";
import UncontrolledOnOff from "./components/UncontrolledOnOff/UncontrolledOnOff";

export type sizeRatingType = 16 | 24 | 32 | 40

function App() {

    const [ratingValue, setRatingValue] = useState<RatingValueType>(3)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [on, setOn] = useState(true);
    const [sizeRating, setSizeRating] = useState<sizeRatingType>(16)

    return (
        <div className="App">
            {/*<PageTitle title={'Home Page'}/>*/}
            {/*<PageTitle title={'Contacts Page'}/>*/}
            {/*<Rating value={ratingValue} onClick={setRatingValue}/>*/}
            {/*<Rating size={sizeRating} value={ratingValue} onClick={setRatingValue}/>*/}
            {/*<Accordion title={'Menu'}*/}
            {/*           collapsed={accordionCollapsed}*/}
            {/*           onCnahge={() => {setAccordionCollapsed(!accordionCollapsed)}}/>*/}
            {/*<Accordion title={'Users'} collapsed={false}/>*/}
            {/*<OnOff on={false}/>*/}
            {/*<OnOff on={true}/>*/}
            {/*<OnOff />*/}
            {/*<OnOff />*/}
            {/*<UncontrolledAccordion title={'Need to Learn'}/>*/}
            {/*<UncontrolledAccordion title={'Need to Buy'}/>*/}
            {/*<UnControlledRating />*/}
            {/*<UncontrolledOnOff />*/}
            {/*<OnOff on={on} onChange={() => setOn(!on)}/>*/}
        </div>

    );
}

export default App;