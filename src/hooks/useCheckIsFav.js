import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const useCheckIsFav = (idCard) => {
  const favs = useSelector((store) => store.favourite);
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    if (favs.find((card) => card.id === idCard)) {
      setIsFav(true);
    } else {
      setIsFav(false);
    }
  }, [favs]);

  return isFav;
};
