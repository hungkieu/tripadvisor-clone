import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import SocialShelve from './SocialShelve';

const useStyles = makeStyles((theme) => ({
  root: {}
}));

const SocialShelves = ({ shelves }) => {
  const classes = useStyles();

  const shelveElements = React.Children.toArray(
    shelves.map((shelve) => {
      return <SocialShelve {...shelve} />;
    })
  );

  return <div className={classes.root}>{shelveElements}</div>;
};

export default SocialShelves;
