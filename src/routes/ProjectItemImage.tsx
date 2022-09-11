import React from 'react';
import CardMedia from '@material-ui/core/CardMedia';

export default function ProjectItemImage({ imageUri, title, alt }) {

  return (
    <>
      <CardMedia 
        component="img"
        alt={alt}
        height="140"
        image={imageUri}
        title={title}
      />
    </>
  );
}
