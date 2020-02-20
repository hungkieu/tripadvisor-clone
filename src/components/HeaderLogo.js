import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {},
  img: {
    width: '180px',
    height: '60px'
  }
});

const HeaderLogo = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img
        className={classes.img}
        src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg"
        alt="Tripadvisor"
      />
    </div>
  );
};

export default HeaderLogo;
