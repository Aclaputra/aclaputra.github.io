import React from 'react';
import Button from '@material-ui/core/Button';

export default function ProjectItemButton({ linkWeb, linkGithub }) {
  return (
    <>
      <Button size="small" color="primary" href={linkWeb}>Demo</Button>
      <Button size="small" color="primary" href={linkGithub}>Github</Button>
    </>
  );
}
