import React, {useMemo, useState} from 'react'

const NewMessagesCounter = (props: {count: number}) => {
    console.log('Counter')
    return (
        <div>{props.count}</div>
    )
}

const UsersState = (props: {users: Array<string>}) => {
    console.log('UsersState')
    return (
        <div>
            {/*{props.users.map((el, i) => <div key={i}>{el}</div>)}*/}
            {props.users[0]}
        </div>
    )
}
const Users = React.memo(UsersState)

export const UseMemo = () => {

    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState<Array<string>>(['Sergey', 'Alex', 'Andrew', 'Dima', 'Alina'])
    const addUser = () => {setUsers([...users, 'newUser'])}

    // const filterUser = useMemo(() => {
    //     console.log('filterUser')
    //     return users.filter(el => el.toLowerCase().indexOf('a') > -1)
    // }, [users])

    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}>+ 1</button>
            <button onClick={addUser}>add user</button>
            <NewMessagesCounter count={counter} />
            {/*<Users users={filterUser} />*/}
            <hr />
            <Users users={users} />
        </div>
    )
}