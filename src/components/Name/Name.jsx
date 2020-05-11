import React from 'react'
import PropTypes from 'prop-types'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  card: {
    maxWidth: 200,
  },
}

const Name = ({ classes, studentName, studentIndex, onClick }) => {
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography component="p">{studentName}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => onClick(studentIndex)}>
          Delete
        </Button>
      </CardActions>
    </Card>
  )
}

Name.propTypes = {
  studentName: PropTypes.string.isRequired,
  studentIndex: PropTypes.number.isRequired,
  onClick: PropTypes.func,
}

export default withStyles(styles)(Name)
