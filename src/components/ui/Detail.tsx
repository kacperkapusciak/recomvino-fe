import React from 'react';
import { Typography } from '@material-ui/core';

interface DetailProps {
  label: string;
  body: string;
}

export const Detail = ({ label, body }: DetailProps) => (
  <div style={{ marginRight: 32 }}>
    <Typography variant="overline" display="block">
      {label}
    </Typography>
    <Typography variant="body1" component="p" gutterBottom>
      {body}
    </Typography>
  </div>
);
