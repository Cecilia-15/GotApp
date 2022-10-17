import React from 'react'
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';

export const Pagination = ({ page, increment, decrement, lastPage }) => {

    const prevPage = () => {
        if(page>1) {
            decrement()
        }
    }

    const nextPage = () => {
        if(page<lastPage) {
            increment()
        }
    }

    return (
        <>
        <div>
            <div className='container-pagination'>
                <button onClick={prevPage} className='button-pagination'>{<SkipPreviousIcon/>}</button>
                <p className='page'>{page}</p>
                <button onClick={nextPage} className='button-pagination'>{<SkipNextIcon/>}</button>
            </div>
        </div>
        </>
    )
}
