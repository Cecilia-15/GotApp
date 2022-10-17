import { useContext } from 'react';
import { GotContext } from '../context/GotCotext';
import { GotCard } from './GotCard';
import { Pagination } from './Pagination';
import { useCounter } from '../../hooks/useCounter';

export const GotList = () => {
    const [data, isLoading] = useContext(GotContext)
    const { counter, decrement, increment } = useCounter(1)
    const maxCharacters = 10;
    const lastPage = Math.ceil((data?.length || 0) /maxCharacters)

    return (
        <>
        <Pagination
          page={counter}
          decrement={decrement}
          increment={increment}
          lastPage={lastPage}
        />

        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 list container-list'>
            { isLoading ? 
                <p>Loading... Winter is comming</p>
                :
                data?.slice((counter - 1) * 10, ((counter - 1) * 10) + 10 ).map(character => (
                    <GotCard key={character.id} data={character} />
                ))
            }

        </div>
        </>
    )
    
}