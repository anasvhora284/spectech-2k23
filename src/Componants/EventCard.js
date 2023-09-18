import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import "../App.css";

const EventCard = ({ EventName, EventDiscription, EventImg }) => {
  const alts = `${EventName}Image`;

  return (
    <Card className="EventCards">
      <CardActionArea>
        <CardMedia
          className="EventImg"
          component="img"
          image={EventImg}
          alt={alts}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" color="#fff" component="div">
            {EventName}
          </Typography>
          <Typography variant="body2" color="#fff">
            {EventDiscription}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="ParticipateDiv">
        <button
          type="button"
          class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Participate
        </button>
      </CardActions>
    </Card>
  );
};

export default EventCard;
