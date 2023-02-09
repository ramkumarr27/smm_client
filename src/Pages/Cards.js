import React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import "../App.css";
import "../Card.css";

const Cards = () => {
  return (
    <div className="login">
      <br></br>
      <div
        style={{
          marginLeft: "30px",
          display: "flex",
          gap: "30px",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <Box width="300px">
          <Card>
            <CardMedia
              component="img"
              height="140"
              image="https://icon-library.com/images/linkedin-icon-for-business-card/linkedin-icon-for-business-card-8.jpg"
              alt="linkedin"
            ></CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Linked in
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="medium"
                href="https://www.linkedin.com/home"
                target="_blank"
              >
                Visit
              </Button>
            </CardActions>
          </Card>
        </Box>
        <Box width="300px">
          <Card>
            <CardMedia
              component="img"
              height="140"
              image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/800px-Instagram_icon.png"
              alt="instagram"
            ></CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Instagram{" "}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                href="https://www.instagram.com/"
                target="_blank"
              >
                Visit
              </Button>
            </CardActions>
          </Card>
        </Box>
        <Box width="300px">
          <Card>
            <CardMedia
              component="img"
              height="140"
              image="https://e7.pngegg.com/pngimages/804/985/png-clipart-social-media-logo-computer-icons-information-twitter-logo-media.png"
              alt="twitter"
            ></CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Twitter{" "}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" href="https://twitter.com" target="_blank">
                Visit
              </Button>
            </CardActions>
          </Card>
        </Box>
        <Box width="300px">
          <Card>
            <CardMedia
              component="img"
              height="140"
              image="data:image/png;base64,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"
              alt="facebook"
            ></CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Facebook{" "}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" href="https://facebook.com" target="_blank">
                Visit
              </Button>
            </CardActions>
          </Card>
        </Box>
        <Box width="300px">
          <Card>
            <CardMedia
              component="img"
              height="140"
              image="https://cdn-icons-png.flaticon.com/512/124/124034.png?w=360"
              alt="whatsapp"
            ></CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Whatsapp{" "}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                href="https://www.whatsapp.com/"
                target="_blank"
              >
                Visit
              </Button>
            </CardActions>
          </Card>
        </Box>
        <Box width="300px">
          <Card>
            <CardMedia
              component="img"
              height="140"
              image="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/800px-YouTube_full-color_icon_%282017%29.svg.png"
              alt="youtube"
            ></CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Youtube{" "}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                href="https://www.youtube.com/"
                target="_blank"
              >
                Visit
              </Button>
            </CardActions>
          </Card>
        </Box>
        <Box width="300px">
          <Card>
            <CardMedia
              component="img"
              height="140"
              image="https://seeklogo.com/images/P/pinterest-logo-CA98998DCB-seeklogo.com.png"
              alt="pininterest"
            ></CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Pin Interest{" "}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                href="https://in.pinterest.com/"
                target="_blank"
              >
                Visit
              </Button>
            </CardActions>
          </Card>
        </Box>
        <Box width="300px">
          <Card>
            <CardMedia
              component="img"
              height="140"
              image="data:image/png;base64,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"
              alt="snapchat"
            ></CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Snap chat{" "}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                href="https://snapchat.com/"
                target="_blank"
              >
                Visit
              </Button>
            </CardActions>
          </Card>
        </Box>
      </div>
    </div>
  );
};

export default Cards;
