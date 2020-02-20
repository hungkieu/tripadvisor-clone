import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

import SocialHome from './SocialHome';
import SocialProfile from './SocialProfile';

const useStyles = makeStyles({
  root: {
    width: '100%',
    display: 'flex'
  },
  socialProfile: {
    width: '25%'
  },
  SocialHome: {
    width: '50%'
  },
  SocialDestination: {
    width: '25%'
  }
});

const Social = () => {
  const classes = useStyles();

  return (
    <Container>
      <div className={classes.root}>
        <div className={classes.socialProfile}>
          <SocialProfile />
        </div>
        <div className={classes.SocialHome}>
          <SocialHome />
        </div>
        <div className={classes.SocialDestination}>
          <SocialProfile />
        </div>
      </div>
    </Container>
  );
};

export default Social;
