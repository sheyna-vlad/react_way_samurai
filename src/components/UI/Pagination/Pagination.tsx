import React, {useState} from 'react'
import Button from '../Button/Button'
import classes from './Pagination.module.css'

type PaginationPropsType = {
    page: number
    count: number
    totalCount: number
    SetPageHandler: (page: number) => void
}

const Pagination = (props: PaginationPropsType) => {
    const pagesCount = Math.ceil(props.totalCount / props.count)

    const arr = []

    for (let i = 1; i <= pagesCount; i++) {
        arr.push(i)
    }

    const portionSize = 10
    let portionCount = Math.ceil(pagesCount / 10)
    let [portionNumber, setPortionNumber] = useState<number>(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    const SetPageHandler = (page: number) => {
        props.SetPageHandler(page)
    }

    return (
        <div className={classes.Pagination}>
            {portionNumber > 1 &&
            <Button onClick={() => setPortionNumber(portionNumber - 1)} text="Left"/>
            }
            {arr.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                    return (
                        <span
                            key={p}
                            className={props.page === p ? classes.selectPage : classes.Page}
                            onClick={() => SetPageHandler(p)}
                        >
                        {p}
                    </span>
                    )
                })}
            {portionCount > portionNumber &&
            <Button onClick={() => setPortionNumber(portionNumber + 1)} text="Right"/>
            }
        </div>
    )
}

export default Pagination
