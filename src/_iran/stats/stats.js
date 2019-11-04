import { TimelineMax, Power2 } from 'gsap';
import ScrollMagic from 'scrollmagic';

import './stats.scss';

const statOne = document.getElementById('stat-1');
const statOneData = statOne.getAttribute('data-stat');
const statTwo = document.getElementById('stat-2');
const statTwoData = statTwo.getAttribute('data-stat');
const statThree = document.getElementById('stat-3');
const statThreeData = statThree.getAttribute('data-stat');
const counter = { var: 0 };
const counterTwo = { var: 0 };
const counterThree = { var: 0 };

// Get the Div for Targeting
const start = document.querySelector('.hero-content-background');

// Individual Counting Functions
function countUpOne() {
  statOne.innerHTML = Math.ceil(counter.var);
}
function countUpTwo() {
  statTwo.innerHTML = Math.ceil(counterTwo.var);
}
function countUpThree() {
  statThree.innerHTML = Math.ceil(counterThree.var);
}

// Count Up All Stats
function runStats() {
  const tl = new TimelineMax(); // Set Up New Timeline for Tweens

  tl.to(counter, 5, {
    var: statOneData,
    onUpdate: countUpOne,
    ease: Power2.easeOut
  })
    .to(
      counterTwo,
      5,
      {
        var: statTwoData,
        onUpdate: countUpTwo,
        ease: Power2.easeOut
      },
      0 // Start without delay
    )
    .to(
      counterThree,
      5,
      {
        var: statThreeData,
        onUpdate: countUpThree,
        ease: Power2.easeOut
      },
      0 // Start without Delay
    );
}

const controller = new ScrollMagic.Controller();

if (start) {
  new ScrollMagic.Scene({
    triggerElement: start,
    triggerHook: 'onLeave',
    duration: '100%'
  })
    // .setPin(start)
    .setTween(runStats)
    .addTo(controller);
}
