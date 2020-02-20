import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
    margin: 0,
    display: 'block'
  },
  li: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(2)
  },
  circle: {
    position: 'relative',
    top: '50%',
    marginTop: '-4px',
    display: 'inline-block',
    width: '8px',
    height: '8px',
    padding: 0,
    borderRadius: '50%',
    backgroundColor: '#4a4a4a',
    marginRight: '12px',
    flexShrink: 0
  }
}));

const SocialProfileList = () => {
  const classes = useStyles();

  return (
    <Box mb={2}>
      <ul className={classes.root}>
        <li className={classes.li}>
          <span className={classes.circle}></span>
          <Typography variant="subtitle1">
            Lưu ý tưởng du lịch yêu thích và xem trên bản đồ
          </Typography>
        </li>
        <li className={classes.li}>
          <span className={classes.circle}></span>
          <Typography variant="subtitle1">
            Nhận thông báo về giá và giảm giá để bạn có thể đi du lịch theo cách
            của mình
          </Typography>
        </li>
        <li className={classes.li}>
          <span className={classes.circle}></span>
          <Typography variant="subtitle1">
            Đặt câu hỏi và nhận câu trả lời từ những khách du lịch giống như bạn
          </Typography>
        </li>
      </ul>
    </Box>
  );
};

export default SocialProfileList;
