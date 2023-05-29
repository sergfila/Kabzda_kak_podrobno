import React, {useCallback, useMemo, useState} from 'react'

type BooksPropsType = {
    books: string[]
    addBook: () => void
}

type MessagesCountPropsType = {
    count: number
}

const NewMessagesCounter = ({count}: MessagesCountPropsType) => {
    console.log('Counter')
    return (
        <div>{count}</div>
    )
}

const BooksState = ({books, addBook}: BooksPropsType) => {
    console.log('BookState')
    return (
        <div>
            <button onClick={addBook}>add book</button>
            {books.map((el, i) => <div key={i}>{el}</div>)}
        </div>
    )
}
const Book = React.memo(BooksState)


export const UseCallback = () => {
    console.log('UseCallback')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState<Array<string>>(['React', 'Html', 'Css', 'JS'])

    const momoisedAddBook = useMemo(() => {
        return () => {
            setBooks([...books, 'Angular'])
        }
    }, [books])

    const momoisedAddBook2 = useCallback(() => {
            setBooks([...books, 'Angular'])
    }, [books])

    const filterBook = useMemo(() => {
        return books.filter(el => el.toLowerCase().indexOf('a') > -1)
    }, [books])

    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}>+ 1</button>
            <NewMessagesCounter count={counter} />
            <hr />
            <Book books={filterBook} addBook={momoisedAddBook2} />
        </div>
    )
}