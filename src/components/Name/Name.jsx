import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';

const styles = {
  card: {
    maxWidth: 200,
  }
}

const Name = ({ classes, studentName }) => (
  <Card className={classes.card}>
    <CardContent>
      <Typography component="p">
        {studentName}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Delete</Button>
    </CardActions>
  </Card>
);

Name.propTypes = {
  studentName: PropTypes.string.isRequired,
};

export default withStyles(styles)(Name);
