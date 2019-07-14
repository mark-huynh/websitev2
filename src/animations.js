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

export const ProjectLoad = posed.div({
  open: {
    delayChildren: 200,
    staggerChildren: 300
  },
  closed: {delay: 300 }
});

export const ProjectItem = posed.div({
  open: { y: 0, opacity: 1 },
  closed: { y: 20, opacity: 0 }
})
