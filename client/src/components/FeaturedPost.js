import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import {formatDate, truncate, stripTags} from '../helper/helper';


function FeaturedPost(props) {
  const { post } = props;

  return (
    <Grid container sx={{ p: 1 }} xs={12} md={6}  >
      <CardActionArea  component="a"  href={post.slug}  >
        <Card sx={{ display: 'flex', height:"100%" }} >
          <CardContent sx={{ display: 'flex', flexDirection: 'column',justifyContent: 'space-between'}} >
            <Typography component="h2" variant="h5">
              {post.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {formatDate(post.published_at, 'MMM Do YYYY, hh:mm a')}
            </Typography>
            <Typography variant="subtitle3" paragraph>
              {truncate ( stripTags(post.content), 90) }
            </Typography>
            <Typography variant="subtitle1" color="primary"  >
              Continue reading...
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
            image={post.image}
            alt={post.title}
          />
        </Card>
      </CardActionArea>
    </Grid>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.shape({
    published_at: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default FeaturedPost;