import ScrollMagic from 'scrollmagic';

import './scroll.scss';

const controller = new ScrollMagic.Controller();

// Get the scroll height of a specified section
const getSectionDuration = section => document.getElementById( section ).clientHeight;

new ScrollMagic.Scene( {
  triggerElement: '#stats-section',
  duration: getSectionDuration( 'stats-section' ),
  triggerHook: 'onCenter'
} )
  .setClassToggle( '#sec2', 'scrolled' ) // add class toggle
  .addTo( controller );

new ScrollMagic.Scene( {
  triggerElement: '#timeline-section',
  duration: getSectionDuration( 'timeline-section' ),
  triggerHook: 'onCenter'
} )
  .setClassToggle( '#sec3', 'scrolled' ) // add class toggle
  .addTo( controller );

new ScrollMagic.Scene( {
  triggerElement: '#slide-container',
  duration: '1100%', // duration of the multiple slide scroll
  triggerHook: 'onCenter'
} )
  .setClassToggle( '#sec4', 'scrolled' ) // add class toggle
  .addTo( controller );

new ScrollMagic.Scene( {
  triggerElement: '#position-section',
  duration: getSectionDuration( 'position-section' ),
  triggerHook: 'onCenter'
} )
  .setClassToggle( '#sec5', 'scrolled' ) // add class toggle
  .addTo( controller );

new ScrollMagic.Scene( {
  triggerElement: '#resource-section',
  duration: getSectionDuration( 'resource-section' ),
  triggerHook: 'onCenter'
} )
  .setClassToggle( '#sec6', 'scrolled' ) // add class toggle
  .addTo( controller );
