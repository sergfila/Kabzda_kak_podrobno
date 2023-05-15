import React, {useState} from 'react'
import s from './Select.module.css'

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value: any
    onCnahge: (value: any) => void
    items: ItemType[]
}

export function Select(props: SelectPropsType) {
    const [collapsed, setCollapsed] = useState(true)
    const [selectValue, setSelectValue] = useState(1)
    const optionsShow = () => {
        setCollapsed(!collapsed)
    }

    const newSelectTitle = (value: any) => {
        setSelectValue(value)
    }

    let selectedItem = props.items.find(el => el.value === selectValue)

    return (
        <div className={s.select} onClick={optionsShow}>
            <div className={s.title}>{selectedItem && selectedItem.title}</div>
            {!collapsed && <ul className={s.items}>{props.items.map(el =>
                <li key={el.value} onClick={() => newSelectTitle(el.value)}>{el.title}</li>)}
            </ul>}
        </div>
    )
}