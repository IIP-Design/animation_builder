import ScrollMagic from 'scrollmagic';
import './scroll.scss';

// const navPos = document.getElementById('scroll-nav').getBoundingClientRect().top;

const controller = new ScrollMagic.Controller();

const sectionOne = document.getElementById('iran-section').clientHeight;
const sectionTwo = document.getElementById('stats-section').clientHeight;
const sectionThree = document.getElementById('timeline-section').clientHeight;
const sectionFour = '1100%';
const sectionFive = document.getElementById('position-section').clientHeight;
const sectionSix = document.getElementById('resource-section').clientHeight;

console.log(sectionOne);

new ScrollMagic.Scene({
  triggerElement: '#stats-section',
  duration: sectionTwo,
  triggerHook: 'onCenter'
})
  .setClassToggle('#sec2', 'scrolled') // add class toggle
  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: '#timeline-section',
  duration: sectionThree,
  triggerHook: 'onCenter'
})
  .setClassToggle('#sec3', 'scrolled') // add class toggle
  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: '#slide-container',
  duration: sectionFour,
  triggerHook: 'onCenter'
})
  .setClassToggle('#sec4', 'scrolled') // add class toggle
  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: '#position-section',
  duration: sectionFive,
  triggerHook: 'onCenter'
})
  .setClassToggle('#sec5', 'scrolled') // add class toggle
  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: '#resource-section',
  duration: sectionSix,
  triggerHook: 'onCenter'
})
  .setClassToggle('#sec6', 'scrolled') // add class toggle
  .addTo(controller);
