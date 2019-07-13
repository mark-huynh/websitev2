import React from 'react';
import posed from 'react-pose';




export const LoadItem = posed.div({
  hidden: {opacity: 0},
  visible: {
  opacity: 1,
  x: -10,
  y: -10,
  transition: { duration: 300 }
}});
