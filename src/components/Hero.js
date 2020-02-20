import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    height: '250px'
  },
  img: {
    width: '100%',
    height: '250px'
  }
});

const Hero = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img
        className={classes.img}
        src="https://media-cdn.tripadvisor.com/media/photo-b/2560x500/1a/a8/9a/e2/caption.jpg"
        alt="hero"
      />
    </div>
  );
};

export default Hero;
