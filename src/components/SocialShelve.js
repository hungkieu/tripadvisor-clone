import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Link, Box } from '@material-ui/core';

import SocialShelveCarousel from './SocialShelveCarousel';

const useStyles = makeStyles((theme) => ({
  root: {},
  header: {
    display: 'flex'
  },
  title: {
    width: '100%'
  },
  hasShowAll: {
    flexShrink: 0
  }
}));

const SocialShelve = ({ hasShowAll, title, items }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <div className={classes.title}>
          <Link>
            <Typography variant="h3">{title}</Typography>
          </Link>
        </div>
        {hasShowAll && (
          <div className={classes.hasShowAll}>
            <Link>
              <Typography variant="h3">
                <Box color="secondary.main">Xem tất cả</Box>
              </Typography>
            </Link>
          </div>
        )}
      </div>
      <div className={classes.carousel}>
        <SocialShelveCarousel items={items} />
      </div>
    </div>
  );
};

export default SocialShelve;
