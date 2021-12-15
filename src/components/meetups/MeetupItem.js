import { useContext } from "react";

import FavoritesContext from "../../store/favorites-context";
import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";

const MeetupItem = (props) => {
  const meetup = props.meetup;
  const favCtx = useContext(FavoritesContext);
  const isFavorite = favCtx.isFavorite(meetup.id);

  const toggleFavoritesStatusHandler = () => {
    if (isFavorite) {
      favCtx.removeFavorite(meetup.id);
    } else {
      favCtx.addFavorite(meetup);
    }
  };

  return (
    <li className={classes.item}>
      <Card>
        <div>
          <img
            className={classes.image}
            src={meetup.image}
            alt={meetup.title}
          ></img>
        </div>
        <div className={classes.content}>
          <h3>{meetup.title}</h3>
          <address>{meetup.address}</address>
          <p>{meetup.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoritesStatusHandler}>
            {isFavorite ? "Remove from Favorites" : "To Favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
