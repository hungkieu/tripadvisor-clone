import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(2),
    margin: theme.spacing(1.5)
  }
}));

const SocialCard = ({ children, ...props }) => {
  const classes = useStyles();
  return (
    <div className={classes.root} {...props}>
      {children}
    </div>
  );
};

export default SocialCard;
