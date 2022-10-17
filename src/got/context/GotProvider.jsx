import { GotContext } from "./GotCotext"
import { useFetch } from '../../hooks/useFetch'

export const GotProvider = ({children}) => {

  const {data, isLoading} = useFetch('https://thronesapi.com/api/v2/Characters')

  return (
    <div>
        <GotContext.Provider value={[data, isLoading]}>
            {children}
        </GotContext.Provider>
    </div>
  )
}
