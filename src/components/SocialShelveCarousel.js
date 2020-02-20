import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    width: '100%'
  },
  leftButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.palette.primary.main,
    width: '24px',
    height: '32px',
    position: 'absolute',
    top: '69px',
    left: '0',
    backgroundColor: 'white',
    marginTop: '-16px',
    marginLeft: '-20px',
    boxShadow: '0 2px 4px 0 rgba(0,0,0,.3)',
    transition: 'opacity 0.5s ease',

    '&:hover': {
      opacity: '0.8'
    }
  },
  rightButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.palette.primary.main,
    width: '24px',
    height: '32px',
    position: 'absolute',
    top: '69px',
    right: '0',
    backgroundColor: 'white',
    marginTop: '-16px',
    marginRight: '-20px',
    boxShadow: '0 2px 4px 0 rgba(0,0,0,.3)',
    transition: 'opacity 0.5s ease',

    '&:hover': {
      opacity: '0.8'
    }
  },
  sections: {
    overflowX: 'auto',
    display: 'flex',
    '&::-webkit-scrollbar': {
      display: 'none'
    }
  },
  item: {
    width: '33.3333%',
    flexShrink: 0
  },
  cardImage: {
    borderRadius: '2px',
    height: '130px',
    width: '100%'
  },
  cardText: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  }
}));

const SocialShelveCarousel = ({ items }) => {
  const classes = useStyles();
  const [scrollLeft, setScrollLeft] = React.useState(0);
  const [leftButtonVisible, setLeftButtonVisible] = React.useState(false);
  const [rightButtonVisible, setRightButtonVisible] = React.useState(false);

  const sectionsRef = React.createRef();

  React.useEffect(() => {
    if (sectionsRef.current) {
      const { offsetWidth, scrollWidth, children } = sectionsRef.current;

      if (scrollLeft <= 0) {
        setLeftButtonVisible(false);
      }

      if (scrollLeft > 0) {
        setLeftButtonVisible(true);
      }

      if (scrollLeft + offsetWidth >= scrollWidth) {
        setRightButtonVisible(false);
      } else if (children.length > 3) {
        setRightButtonVisible(true);
      }
    }
  }, [scrollLeft, sectionsRef]);

  const handleClickLeftButton = () => {
    if (sectionsRef.current) {
      const { scrollLeft, offsetWidth } = sectionsRef.current;

      const distance = Math.ceil(offsetWidth / 3);
      const left = scrollLeft - distance;
      setScrollLeft(left);
      sectionsRef.current.scrollTo({
        left,
        behavior: 'smooth'
      });

      window.ref = sectionsRef.current;
    }
  };

  const handleClickRightButton = () => {
    if (sectionsRef.current) {
      const { scrollLeft, offsetWidth } = sectionsRef.current;

      const distance = Math.ceil(offsetWidth / 3);
      const left = scrollLeft + distance;
      setScrollLeft(left);
      sectionsRef.current.scrollTo({
        left,
        behavior: 'smooth'
      });
    }
  };

  const cards = React.Children.toArray(
    items.map((item) => {
      const { text, imageUrl, reviewCount } = item;

      return (
        <Box p={1} className={classes.item}>
          <img className={classes.cardImage} src={imageUrl} alt="" />
          <Typography variant="subtitle2" className={classes.cardText}>
            {text}
          </Typography>
          <Typography variant="caption">
            <Box color="secondary.main">{reviewCount}</Box>
          </Typography>
        </Box>
      );
    })
  );

  return (
    <div className={classes.root}>
      {leftButtonVisible && (
        <div className={classes.leftButton} onClick={handleClickLeftButton}>
          <KeyboardArrowLeft />
        </div>
      )}
      {rightButtonVisible && (
        <div className={classes.rightButton} onClick={handleClickRightButton}>
          <KeyboardArrowRight />
        </div>
      )}
      <div className={classes.sections} ref={sectionsRef}>
        {cards}
      </div>
    </div>
  );
};

export default SocialShelveCarousel;
