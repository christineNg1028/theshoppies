import React from "react";
import {
  Paper,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  Button,
  withStyles,
} from "@material-ui/core";

const styles = () => ({
  paper: {
    textAlign: "left",
    padding: 16,
  },
});

function Nominations(props) {
  const { classes, nominations, handleRemove } = props;

  const nominationList = nominations.map((nomination, key) => (
    <ListItem key={key}>
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
      <ListItemSecondaryAction>
        <Button
          variant="contained"
          size="small"
          onClick={() => handleRemove(nomination)}
        >
          Remove
        </Button>
      </ListItemSecondaryAction>
    </ListItem>
  ));

  return (
    <Paper className={classes.paper}>
      <h4>Nominations</h4>
      <List dense>{nominationList}</List>
    </Paper>
  );
}

export default withStyles(styles)(Nominations);
