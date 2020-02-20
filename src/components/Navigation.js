import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from '@material-ui/core';

import Button from './Button';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  actionWrapper: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    '&:hover': {
      background: 'inherit',
      color: theme.palette.primary.dark
    }
  },
  actionLinkWrapper: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    lineHeight: '100px',
    height: '100px',
    minWidth: '170px',

    '&:hover': {
      background: 'inherit'
    },

    '&:active': {
      background: '#f9f9f9'
    }
  }
}));

const Navigation = ({ link, children }) => {
  const classes = useStyles();

  const renderActions = React.Children.map(children, (child) => {
    const childWithProps = React.cloneElement(child, { link });

    if (link) {
      return (
        <Button
          component={Link}
          disableRipple
          className={classes.actionLinkWrapper}
        >
          {childWithProps}
        </Button>
      );
    }

    return (
      <Button disableRipple className={classes.actionWrapper}>
        {childWithProps}
      </Button>
    );
  });

  return <div className={classes.root}>{renderActions}</div>;
};

export default Navigation;
