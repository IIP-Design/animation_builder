import ScrollMagic from 'scrollmagic';
import { Linear, TimelineLite } from 'gsap';

// eslint-disable-next-line import/no-unresolved
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';

import './slides.scss';

// Get elements that will be acted upon
const trigger = document.getElementById('slide-container');
const slideTwo = document.getElementById('slide-two');
const slideThree = document.getElementById('slide-three');
const slideFour = document.getElementById('slide-four');
const slideFive = document.getElementById('slide-five');
const slideSix = document.getElementById('slide-six');
const slideSeven = document.getElementById('slide-seven');
const slideEight = document.getElementById('slide-eight');
const slideNine = document.getElementById('slide-nine');

const dots = [...document.getElementsByClassName('slide-dot')];

const dotOne = document.getElementById('slide-dot-one');
const dotTwo = document.getElementById('slide-dot-two');
const dotThree = document.getElementById('slide-dot-three');
const dotFour = document.getElementById('slide-dot-four');
const dotFive = document.getElementById('slide-dot-five');
const dotSix = document.getElementById('slide-dot-six');
const dotSeven = document.getElementById('slide-dot-seven');
const dotEight = document.getElementById('slide-dot-eight');
const dotNine = document.getElementById('slide-dot-nine');

const controller = new ScrollMagic.Controller();

let position = 1;

const setPosition = pos => {
  position = pos;
};

const wipe = new TimelineLite()
  .set(dotOne, { background: '#fff' }, '0')
  .call(setPosition, [1])

  .fromTo(slideTwo, 2, { xPercent: 100 }, { xPercent: 0, ease: Linear.easeNone }, '+=1')
  .set(dotOne, { background: 'none' }, '-=0.5')
  .set(dotTwo, { background: '#fff' }, '-=0.5')
  .call(setPosition, [2])

  .fromTo(slideThree, 2, { xPercent: 100 }, { xPercent: 0, ease: Linear.easeNone }, '+=1')
  .set(dotTwo, { background: 'none' }, '-=0.5')
  .set(dotThree, { background: '#fff' }, '-=0.5')
  .call(setPosition, [3])

  .fromTo(slideFour, 2, { xPercent: 100 }, { xPercent: 0, ease: Linear.easeNone }, '+=1')
  .set(dotThree, { background: 'none' }, '-=0.5')
  .set(dotFour, { background: '#fff' }, '-=0.5')
  .call(setPosition, [4])

  .fromTo(slideFive, 2, { xPercent: 100 }, { xPercent: 0, ease: Linear.easeNone }, '+=1')
  .set(dotFour, { background: 'none' }, '-=0.5')
  .set(dotFive, { background: '#fff' }, '-=0.5')
  .call(setPosition, [5])

  .fromTo(slideSix, 2, { xPercent: 100 }, { xPercent: 0, ease: Linear.easeNone }, '+=1')
  .set(dotFive, { background: 'none' }, '-=0.5')
  .set(dotSix, { background: '#fff' }, '-=0.5')
  .call(setPosition, [6])

  .fromTo(slideSeven, 2, { xPercent: 100 }, { xPercent: 0, ease: Linear.easeNone }, '+=1')
  .set(dotSix, { background: 'none' }, '-=0.5')
  .set(dotSeven, { background: '#fff' }, '-=0.5')
  .call(setPosition, [7])

  .fromTo(slideEight, 2, { xPercent: 100 }, { xPercent: 0, ease: Linear.easeNone }, '+=1')
  .set(dotSeven, { background: 'none' }, '-=0.5')
  .set(dotEight, { background: '#fff' }, '-=0.5')
  .call(setPosition, [8])

  .fromTo(slideNine, 2, { xPercent: 100 }, { xPercent: 0, ease: Linear.easeNone }, '+=1')
  .set(dotEight, { background: 'none' }, '-=0.5')
  .set(dotNine, { background: '#fff' }, '-=0.5')
  .call(setPosition, [9]);

if (
  trigger &&
  slideTwo &&
  slideThree &&
  slideFour &&
  slideFive &&
  slideSix &&
  slideSeven &&
  slideEight &&
  slideNine
) {
  new ScrollMagic.Scene({
    triggerElement: trigger,
    triggerHook: 'onLeave',
    duration: '1000%'
  })
    .setPin(trigger)
    .setTween(wipe)
    .addTo(controller);
}

const updateProgress = e => {
  const clickedOn = e?.target?.dataset?.number ? Number(e.target.dataset.number) : '';
  const currentPosition = controller.info().scrollPos;
  const fullSlideScroll = controller.info().size;
  const newOffset = clickedOn - position;
  const pixels = newOffset * fullSlideScroll;
  const scrollAmount = currentPosition + 1.3 * pixels;

  if (clickedOn !== position) {
    controller.scrollTo(scrollAmount);
  }

  setPosition(clickedOn);
};

if (dots) {
  dots.forEach(dot => {
    dot.addEventListener('click', e => updateProgress(e));
  });
}
