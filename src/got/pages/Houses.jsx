import { useState, useContext } from "react"
import { buttonData } from "../helpers/ButtonsData" 
import { GotContext } from "../context/GotCotext"
import { GotCard } from "../components/GotCard"


export const Houses = () => {

    const [data] = useContext(GotContext)
    const [charactersFilter, setCharactersFilter] = useState([]);

    const handleClick = (key) => {
        const pivotArray = []
        data.map((character) => {
            if(character.family === key){
                pivotArray.push(character)
            }
        })
        setCharactersFilter(pivotArray)
    }


  return (
    <>
    <div className="container-houses">
    {
        buttonData.map((button) => {
            return( 
                    <button onClick={() => handleClick(button.value)} className='button-house'> 
                        <div className="houses">
                            <img src={button.src} />
                            <p>
                            {button.value} 
                            </p>
                        </div>
                    </button>
        )})
    }
    </div>
    <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 list container-list'>
    {
        charactersFilter.length > 0 &&
        charactersFilter.map((character) => <GotCard data={character} />)
    }
    </div>
    </>
  )
}
