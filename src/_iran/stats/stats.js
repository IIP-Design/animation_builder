import { TimelineMax, Power2 } from 'gsap';

import './stats.scss';

const statOne = document.getElementById( 'stat-1' );
const statOneData = statOne.getAttribute( 'data-stat' );
const statTwo = document.getElementById( 'stat-2' );
const statTwoData = statTwo.getAttribute( 'data-stat' );
const statThree = document.getElementById( 'stat-3' );
const statThreeData = statThree.getAttribute( 'data-stat' );
const counter = { var: 0 };
const counterTwo = { var: 0 };
const counterThree = { var: 0 };

console.log( statOneData );

// Get the Div for Targeting
const start = document.querySelector( '.iran-stats-array' );
console.log( start );

// Get it's position in the viewport
// const bounding = start.getBoundingClientRect();
// console.log(bounding);

// Create Helper Function
const isInViewport = elem => {
  const bounding = elem.getBoundingClientRect();
  return (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.bottom <= ( window.innerHeight || document.documentElement.clientHeight ) &&
    bounding.right <= ( window.innerWidth || document.documentElement.clientWidth )
  );
};

function countUpOne() {
  statOne.innerHTML = Math.ceil( counter.var );
}
function countUpTwo() {
  statTwo.innerHTML = Math.ceil( counterTwo.var );
}
function countUpThree() {
  statThree.innerHTML = Math.ceil( counterThree.var );
}

function runStats() {
  const tl = new TimelineMax(); // Set Up New Timeline for Tweens

  tl.to( counter, 5, {
    var: statOneData,
    onUpdate: countUpOne,
    ease: Power2.easeOut
  } )
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

window.addEventListener( 'scroll', event => {
  if ( isInViewport( start ) ) {
    runStats();
  }
} );
