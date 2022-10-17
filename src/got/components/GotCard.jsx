import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useCheckIsFav } from "../../hooks/useCheckIsFav";
import { like, unlike } from "../../store/auth/favouriteSlice";

export const GotCard = ({ data }) => {
  const dispatch = useDispatch();
  const { uid } = useSelector((store) => store.auth);
  const isFav = useCheckIsFav(data.id);

  return (
    <div className="container-card">
      <div className="got-card">
        <div className="card">
          <div className="image-container">
            <img src={data.imageUrl} alt={""} className="card-img" />
          </div>
          <div className="card-body">
            <h5 className="card-title">{data.fullName}</h5>
            <p className="card-text">{data.family}</p>
            <p className="card-text">{data.title}</p>
            <botton className="button-fav-card">
              {isFav ? (
                <FavoriteIcon
                  style={{
                    cursor: "pointer",
                  }}
                  onClick={() => dispatch(unlike({ uid, data }))}
                />
              ) : (
                <FavoriteBorderIcon
                  style={{
                    cursor: "pointer",
                  }}
                  onClick={() => dispatch(like({ uid, data }))}
                />
              )}
            </botton>
          </div>
        </div>
      </div>
    </div>
  );
};
