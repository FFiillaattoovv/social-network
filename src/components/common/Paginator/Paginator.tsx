import React, {useState} from 'react';
import styles from '../../Users/Users.module.css';
import cn from 'classnames';

type PropsType = {
    onPageChanged: (pageNumber: number) => void
    totalItemsCount: number
    pageSize: number
    currentPage: number
}

const Paginator = ({totalItemsCount, currentPage, pageSize, onPageChanged}: PropsType) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = []

    for (let i = 1; pagesCount >= i; i++) {
        pages.push(i);
    }

    let portionSize = 10;

    let portionCount = Math.ceil(pagesCount / portionSize);

    let [portionNumber, setPortionNumber] = useState(1);

    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;

    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div>
            {portionNumber > 1 && <button onClick={() => {setPortionNumber(portionNumber - 1)}}>PREV</button>}
            {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {return <span onClick={() => {onPageChanged(p)}} key={p}
                className={cn({[styles.selectedPage]: currentPage === p}, styles.pageNumber)}>{p}</span>})}
            {portionCount > portionNumber && <button onClick={() => {setPortionNumber(portionNumber + 1)}}>NEXT</button>}
        </div>
    )
}

export default Paginator;
