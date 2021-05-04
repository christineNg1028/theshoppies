import React from "react";
import {
  Paper,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Tooltip,
  IconButton,
  withStyles,
} from "@material-ui/core";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";

const styles = () => ({
  paper: {
    textAlign: "left",
    padding: 16,
  },
  button: {
    color: "black",
    "&:hover": {
      color: "#f03a17",
    },
    transition: "all linear 200ms",
    marginRight: 16,
  },
});

function Nominations(props) {
  const { classes, nominations, handleRemove } = props;

  const nominationList = nominations.map((nomination, key) => (
    <ListItem key={key}>
      <Tooltip title="Remove nominee">
        <IconButton
          disableRipple
          style={{ background: "transparent" }}
          className={classes.button}
          size="small"
          onClick={() => handleRemove(nomination)}
        >
          <RemoveCircleOutlineIcon />
        </IconButton>
      </Tooltip>
      <ListItemAvatar>
        <Avatar
          variant="square"
          src={nomination.Poster}
          alt={nomination.Title}
        />
      </ListItemAvatar>
      <Grid xs={7}>
        <ListItemText primary={nomination.Title} secondary={nomination.Year} />
      </Grid>
    </ListItem>
  ));

  return (
    <Paper className={classes.paper} elevation={24}>
      <h4>Nominations</h4>
      <List dense>{nominationList}</List>
    </Paper>
  );
}

export default withStyles(styles)(Nominations);
