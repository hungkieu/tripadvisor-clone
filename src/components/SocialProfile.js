import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box, Button } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import PostAdd from '@material-ui/icons/PostAdd';

import SocialCard from './SocialCard';
import SocialProfileList from './SocialProfileList';

const useStyles = makeStyles((theme) => ({
  root: {},
  img: {
    display: 'block',
    margin: '21px auto 16px',
    width: '135px',
    height: '72px'
  }
}));

const SocialProfile = () => {
  const classes = useStyles();

  return (
    <>
      <SocialCard>
        <img
          className={classes.img}
          alt=""
          src="https://static.tacdn.com/img2/social/Avatar_stock_PNG_v3.png"
        ></img>
        <Typography variant="body1" component="div">
          <Box textAlign="center" fontWeight="bold" mb={2}>
            Khám phá điều tuyệt vời nhất của Tripadvisor
          </Box>
        </Typography>
        <SocialProfileList />
        <Button variant="outlined" color="primary" fullWidth>
          Đăng ký
        </Button>
      </SocialCard>
      <SocialCard>
        <Typography variant="h3" component="div">
          Chia sẻ lời khuyên du lịch của bạn
        </Typography>
        <List component="nav" aria-label="main mailbox folders">
          <ListItem button>
            <ListItemIcon>
              <PhotoCamera />
            </ListItemIcon>
            <ListItemText
              primaryTypographyProps={{ variant: 'subtitle2' }}
              primary="Đăng ảnh"
            />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <PostAdd />
            </ListItemIcon>
            <ListItemText
              primaryTypographyProps={{ variant: 'subtitle2' }}
              primary="Viết đánh giá"
            />
          </ListItem>
        </List>
      </SocialCard>
    </>
  );
};

export default SocialProfile;
