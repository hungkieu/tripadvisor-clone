import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AddCircleOutline from '@material-ui/icons/AddCircleOutline';
import ChatBubbleOutline from '@material-ui/icons/ChatBubbleOutline';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import PersonOutline from '@material-ui/icons/PersonOutline';
import Search from '@material-ui/icons/Search';

import Navigation from './Navigation';
import NavigationAction from './NavigationAction';
import Button from './Button';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    height: '60px'
  },
  search: {
    backgroundColor: '#f9f0ec',
    color: theme.palette.primary.dark,
    fontWeight: 500,
    marginLeft: theme.spacing(1),

    '&:hover': {
      backgroundColor: '#f9f0ec',
      color: theme.palette.primary.main
    }
  }
}));

const HeaderNavbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Navigation>
        <NavigationAction label="Đăng" icon={<AddCircleOutline />} />
        <NavigationAction label="Chuyến đi" icon={<FavoriteBorder />} />
        <NavigationAction label="Hộp thư đến" icon={<ChatBubbleOutline />} />
        <NavigationAction label="Hồ sơ" icon={<PersonOutline />} />
      </Navigation>
      <Button variant="contained" color="primary">
        Đăng nhập
      </Button>
      <Button
        variant="contained"
        className={classes.search}
        startIcon={<Search />}
      >
        Tìm kiếm
      </Button>
    </div>
  );
};

export default HeaderNavbar;
