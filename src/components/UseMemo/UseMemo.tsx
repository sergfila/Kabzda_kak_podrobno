import React, {useMemo, useState} from 'react'

const NewMessagesCounter = (props: {count: number}) => {
    return (
        <div>{props.count}</div>
    )
}

const UsersState = (props: {users: Array<string>}) => {
    console.log('users')
    return (
        <div>
            {props.users.map((el, i) => <div key={i}>{el}</div>)}
        </div>
    )
}
const Users = React.memo(UsersState)

export const UseMemo = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState<Array<string>>(['Sergey', 'Alex', 'Andrew', 'Dima', 'Alina'])
    const addUser = () => {setUsers([...users, 'newUser'])}

    const filterUser = useMemo(() => {
        return users.filter(el => el.toLowerCase().indexOf('a') > -1)
    }, [users])

    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}>+ 1</button>
            <button onClick={addUser}>add user</button>
            <NewMessagesCounter count={counter} />
            <Users users={filterUser} />
            <hr />
            <Users users={users} />
        </div>
    )
}