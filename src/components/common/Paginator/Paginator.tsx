import React, {useState} from 'react';
import styles from '../../Users/Users.module.css';

type PropsType = {
    onPageChanged: (pageNumber: number) => void
    totalUserCount: number
    pageSize: number
    currentPage: number
}

const Paginator = (props: PropsType) => {

    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);

    let pages = []

    for (let i = 1; pagesCount >= i; i++) {
        pages.push(i);
    }

    let portionSize = 10;

    let portionCount = Math.ceil(pagesCount / portionSize);

    let [portionNumber, setPortionNumber] = useState(1);

    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;

    let rightPortionPageNumber = portionNumber * portionSize;

    let previousPageToggle = () => {
        setPortionNumber((prevValue) => {
            return prevValue - 1;
        });
    }

    let nextPageToggle = () => {
        setPortionNumber((prevValue) => {
            return prevValue + 1;
        });
    }

    return (
        <div>
            {portionNumber > 1 && <button onClick={previousPageToggle}>PREV</button>}
            {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber).map(e => {
                return <span onClick={() => {
                    props.onPageChanged(e)
                }}
                             className={`${props.currentPage === e && styles.selectedPage} ${styles.pageNumber}`}>{e}</span>
            })}
            {portionCount > portionNumber && <button onClick={nextPageToggle}>NEXT</button>}
        </div>
    )
}

export default Paginator;