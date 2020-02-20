import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';

import context from '../context';
import SocialCard from './SocialCard';
import SocialShelves from './SocialShelves';

const useStyles = makeStyles((theme) => ({
  root: {}
}));

const SocialHome = () => {
  const classes = useStyles();
  const { shelves } = useContext(context);

  return (
    <SocialCard>
      <div className={classes.root}>
        <Box my={2}>
          <Typography variant="h2">Được đề xuất cho bạn</Typography>
        </Box>
        <SocialShelves shelves={shelves} />
      </div>
    </SocialCard>
  );
};

export default SocialHome;

function getData(div) {
  const shelve = { items: [] };
  shelve.title = div.querySelector('.h2.ui_header').innerText;
  const hasShowAll = div.querySelector(
    '.social-shelves-Shelf__see_all_for_geo--2mxjs'
  );
  shelve.hasShowAll = hasShowAll ? true : false;
  const nodes = div.querySelectorAll(
    '.ui_column.is-4.social-shelves-Shelf__shelf_item--1WY9_'
  );

  for (let item of nodes) {
    let text = item.querySelector('.item.poi_name.ui_link').innerText;
    let reviewCount = item.querySelector('span.reviewCount').innerText;
    let url = item.querySelector(
      '.social-shelf-items-ShelfLocationSection__shelfForPhoto--18KsW'
    ).children[0].style.backgroundImage;
    let imageUrl = url.match(/url\("(.*)"\)/)
      ? url.match(/url\("(.*)"\)/)[1]
      : 'null';
    shelve.items.push({ text, reviewCount, imageUrl });
  }

  console.log(JSON.stringify(shelve));
}
