import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Hotel from '@material-ui/icons/Hotel';
import LocalPlay from '@material-ui/icons/LocalPlay';
import Restaurant from '@material-ui/icons/Restaurant';
import FlightTakeoff from '@material-ui/icons/FlightTakeoff';
import DirectionsBoat from '@material-ui/icons/DirectionsBoat';
import MoreHoriz from '@material-ui/icons/MoreHoriz';

import Navigation from './Navigation';
import NavigationAction from './NavigationAction';
import { Container } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    margin: 'auto',
    width: 'fit-content',
    backgroundColor: 'white',
    position: 'relative',
    top: '-24px'
  }
});

const QuickLinks = () => {
  const classes = useStyles();

  return (
    <Container>
      <div className={classes.root}>
        <Navigation link>
          <NavigationAction
            label="Khách sạn"
            icon={<Hotel fontSize="large" />}
          />
          <NavigationAction
            label="Hoạt động giải trí"
            icon={<LocalPlay fontSize="large" />}
          />
          <NavigationAction
            label="Nhà hàng"
            icon={<Restaurant fontSize="large" />}
          />
          <NavigationAction
            label="Chuyến bay"
            icon={<FlightTakeoff fontSize="large" />}
          />
          <NavigationAction
            label="Chuyến đi chơi biển"
            icon={<DirectionsBoat fontSize="large" />}
          />
          <NavigationAction
            label="Thêm"
            icon={<MoreHoriz fontSize="large" />}
          />
        </Navigation>
      </div>
    </Container>
  );
};

export default QuickLinks;
